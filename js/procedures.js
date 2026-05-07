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

    function extractDescription(markdownText) {
        var lines = markdownText.split('\n');
        var inDescriptionSection = false;

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();

            if (/^##\s+description/i.test(line)) {
                inDescriptionSection = true;
                continue;
            }

            if (inDescriptionSection) {
                if (line.startsWith('#')) break;
                if (!line) continue;
                if (/description\s+(non\s+)?trouv/i.test(line)) continue;
                return line.replace(/\*\*|__|\*|_|`/g, '').substring(0, 160);
            }
        }
        return null;
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
        var card = document.createElement('div');
        card.className = 'procedure-card';

        var title = document.createElement('div');
        title.className = 'font30 colorWhite';
        title.textContent = formatProcedureName(item.name);

        var info = document.createElement('div');
        info.className = 'font16 colorWhite';
        info.style.opacity = '0.85';
        info.style.marginTop = '8px';

        if (item.type === 'dir') {
            info.textContent = 'Chargement…';
            fetchReadmeDescription(item).then(function(desc) {
                info.textContent = desc || 'Dossier de procédures';
            });
        } else {
            info.textContent = 'Fichier de procédure';
        }

        var link = document.createElement('a');
        link.href = item.html_url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'font16 colorWhite';
        link.textContent = 'Voir sur GitHub \u2192';
        link.style.textDecoration = 'underline';
        link.style.display = 'inline-block';
        link.style.marginTop = '16px';

        card.appendChild(title);
        card.appendChild(info);
        card.appendChild(link);
        return card;
    }

    async function loadProceduresFromGitHub() {
        var message = document.getElementById('procedures-message');
        var list = document.getElementById('procedures-list');

        var apiUrl = 'https://flavienxgrbld.github.io/portfolio/js/procedures-cache.json';

        try {
            var response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Erreur cache: ' + response.status);
            }

            var items = await response.json();
            var visibleItems = items.filter(function(item) {
                if (item.type === 'dir') return true;
                return /\.(md|pdf|doc|docx|txt)$/i.test(item.name);
            });

            list.innerHTML = '';

            if (visibleItems.length === 0) {
                message.textContent = 'Aucune procédure trouvée.';
                return;
            }

            var cardPromises = visibleItems.map(function(item) {
                return createProcedureCard(item);
            });

            var cards = await Promise.all(cardPromises);
            cards.forEach(function(card) { list.appendChild(card); });

            message.textContent = visibleItems.length + ' procédure(s) trouvée(s).';
        } catch (error) {
            console.error(error);
            message.textContent = 'Impossible de charger les procédures.';
            list.innerHTML = '<div class="load-error font16">Erreur de chargement. Réessayez plus tard.</div>';
        }
    }

    loadProceduresFromGitHub();
})();