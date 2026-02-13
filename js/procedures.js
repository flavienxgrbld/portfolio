// Procedures page — GitHub API integration
(function() {
    'use strict';

    var GITHUB_OWNER = 'flavienxgrbld';
    var GITHUB_REPO = 'procedures';
    var GITHUB_PATH = '';

    function formatProcedureName(name) {
        return name
            .replace(/\.[^/.]+$/, '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, function(char) { return char.toUpperCase(); });
    }

    function createProcedureCard(item) {
        var card = document.createElement('div');
        card.className = 'procedure-card';

        var title = document.createElement('div');
        title.className = 'font30 colorWhite';
        title.textContent = formatProcedureName(item.name);

        var info = document.createElement('div');
        info.className = 'font16 colorWhite';
        info.style.opacity = '0.85';
        info.textContent = item.type === 'dir' ? 'Dossier de procédures' : 'Fichier de procédure';

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
        var normalizedPath = (GITHUB_PATH || '').trim().replace(/^\/+|\/+$/g, '');
        var encodedPath = normalizedPath
            ? '/' + normalizedPath.split('/').map(function(part) { return encodeURIComponent(part); }).join('/')
            : '';
        var apiUrl = 'https://api.github.com/repos/' + encodeURIComponent(GITHUB_OWNER) + '/' + encodeURIComponent(GITHUB_REPO) + '/contents' + encodedPath;

        if (GITHUB_OWNER === 'TON_USERNAME_GITHUB' || GITHUB_REPO === 'TON_REPO') {
            message.textContent = 'Configure GITHUB_OWNER et GITHUB_REPO pour afficher tes procédures.';
            return;
        }

        try {
            var response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Erreur GitHub API: ' + response.status);
            }

            var items = await response.json();
            var visibleItems = items.filter(function(item) {
                if (item.type === 'dir') return true;
                return /\.(md|pdf|doc|docx|txt)$/i.test(item.name);
            });

            list.innerHTML = '';

            if (visibleItems.length === 0) {
                message.textContent = 'Aucune procédure trouvée dans ce dossier GitHub.';
                return;
            }

            visibleItems.forEach(function(item) {
                list.appendChild(createProcedureCard(item));
            });

            message.textContent = visibleItems.length + ' procédure(s) trouvée(s) sur GitHub.';
        } catch (error) {
            console.error(error);
            message.textContent = 'Impossible de charger les procédures depuis GitHub. Vérifie le repo, le dossier et sa visibilité publique.';
            list.innerHTML = '<div class="load-error font16">Erreur de chargement. Réessayez plus tard.</div>';
        }
    }

    loadProceduresFromGitHub();
})();
