// Procedures page — GitHub API integration
(function() {
    'use strict';

    var GITHUB_OWNER = 'flavienxgrbld';
    var GITHUB_REPO = 'procedures';

    function formatProcedureName(name) {
        return name
            .replace(/\.[^/.]+$/, '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, function(char) { return char.toUpperCase(); });
    }

    function sortProcedureItems(a, b) {
        return a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' });
    }

    function getProcedureTypeLabel(item) {
        return item.type === 'dir' ? 'Dossier' : 'Fichier';
    }

    function extractDescription(markdownText) {
        var lines = markdownText.split(/\r?\n/);
        var inDescriptionSection = false;
        var descriptionLines = [];

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();

            if (/^##\s+description/i.test(line)) {
                inDescriptionSection = true;
                continue;
            }

            if (!inDescriptionSection) {
                continue;
            }

            if (line.startsWith('#')) {
                break;
            }

            if (!line) {
                if (descriptionLines.length > 0) {
                    break;
                }
                continue;
            }

            if (/description\s+(non\s+)?trouv/i.test(line)) {
                continue;
            }

            descriptionLines.push(line.replace(/\*\*|__|\*|_|`/g, ''));
        }

        if (descriptionLines.length === 0) {
            return null;
        }

        var text = descriptionLines.join(' ').replace(/\s+/g, ' ').trim();
        if (text.length > 260) {
            text = text.substring(0, 257).trim() + '…';
        }
        return text;
    }

    async function fetchReadmeDescription(item) {
        if (item.type !== 'dir') return null;
        try {
            var rawUrl = 'https://raw.githubusercontent.com/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/main/' + item.name + '/README.md';
            var res = await fetch(rawUrl);
            if (!res.ok) return null;
            var text = await res.text();
            return extractDescription(text);
        } catch (e) {
            return null;
        }
    }

    async function createProcedureCard(item) {
        var card = document.createElement('article');
        card.className = 'procedure-card';

        var badge = document.createElement('span');
        badge.className = 'procedure-card-badge';
        badge.textContent = getProcedureTypeLabel(item);

        var title = document.createElement('h3');
        title.className = 'procedure-card-title colorWhite';
        title.textContent = formatProcedureName(item.name);

        var meta = document.createElement('p');
        meta.className = 'procedure-card-meta';
        meta.textContent = item.type === 'dir' ? 'Documentation complète' : 'Document technique';

        var description = document.createElement('p');
        description.className = 'procedure-card-description';

        if (item.type === 'dir') {
            description.textContent = 'Chargement du résumé...';
            fetchReadmeDescription(item).then(function(desc) {
                description.textContent = desc || 'Dossier de procédures techniques';
            });
        } else {
            description.textContent = 'Procédure disponible en consultation directe.';
        }

        var actions = document.createElement('div');
        actions.className = 'procedure-actions';

        var viewButton = document.createElement('button');
        viewButton.type = 'button';
        viewButton.className = 'procedure-button font16';
        viewButton.textContent = 'Afficher ici';

        viewButton.addEventListener('click', function() {
            var viewerUrl = 'procedure-viewer.html?path=' + encodeURIComponent(item.name) + '&type=' + encodeURIComponent(item.type);
            window.location.href = viewerUrl;
        });

        var link = document.createElement('a');
        link.href = item.html_url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'procedure-link';
        link.textContent = 'Voir sur GitHub →';

        actions.appendChild(viewButton);
        actions.appendChild(link);

        card.appendChild(badge);
        card.appendChild(title);
        card.appendChild(meta);
        card.appendChild(description);
        card.appendChild(actions);
        return card;
    }

    function renderProcedureList(items, query) {
        var list = document.getElementById('procedures-list');
        var message = document.getElementById('procedures-message');
        var stats = document.getElementById('procedures-stat');

        list.innerHTML = '';

        var normalizedQuery = query.trim().toLowerCase();
        var filteredItems = items.filter(function(item) {
            if (!normalizedQuery) return true;
            var searchable = [item.name, formatProcedureName(item.name)].join(' ').toLowerCase();
            return searchable.indexOf(normalizedQuery) !== -1;
        });

        if (filteredItems.length === 0) {
            message.textContent = normalizedQuery ? 'Aucun résultat pour la recherche "' + query + '".' : 'Aucune procédure trouvée.';
            if (stats) {
                stats.textContent = '0 procédure(s)';
            }
            list.innerHTML = '<div class="load-error font16">Aucun résultat ne correspond à votre recherche.</div>';
            return;
        }

        if (stats) {
            stats.textContent = filteredItems.length + ' / ' + items.length + ' procédure(s)';
        }

        if (normalizedQuery) {
            message.textContent = filteredItems.length + ' résultat(s) pour "' + query + '".';
        } else {
            message.textContent = filteredItems.length + ' procédure(s) trouvée(s).';
        }

        Promise.all(filteredItems.map(createProcedureCard)).then(function(cards) {
            cards.forEach(function(card) {
                list.appendChild(card);
            });
        });
    }

    async function loadProceduresFromGitHub() {
        var message = document.getElementById('procedures-message');
        var list = document.getElementById('procedures-list');
        var searchInput = document.getElementById('procedure-search-input');

        var apiUrl = 'https://flavienxgrbld.github.io/portfolio/js/procedures-cache.json';

        try {
            var response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Erreur cache: ' + response.status);
            }

            var items = await response.json();
            var visibleItems = items
                .filter(function(item) {
                    if (item.type === 'dir') return true;
                    return /\.(md|pdf|doc|docx|txt)$/i.test(item.name);
                })
                .sort(sortProcedureItems);

            if (searchInput) {
                searchInput.addEventListener('input', function() {
                    renderProcedureList(visibleItems, searchInput.value);
                });
            }

            list.innerHTML = '';

            if (visibleItems.length === 0) {
                message.textContent = 'Aucune procédure trouvée.';
                return;
            }

            renderProcedureList(visibleItems, searchInput ? searchInput.value : '');
        } catch (error) {
            console.error(error);
            message.textContent = 'Impossible de charger les procédures.';
            list.innerHTML = '<div class="load-error font16">Erreur de chargement. Réessayez plus tard.</div>';
        }
    }

    loadProceduresFromGitHub();
})();