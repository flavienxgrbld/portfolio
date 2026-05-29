(function() {
    'use strict';

    var GITHUB_OWNER = 'flavienxgrbld';
    var GITHUB_REPO = 'procedures';

    function getQueryParam(name) {
        var params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    function escapeHtml(value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function parseInlineMarkdown(text) {
        return escapeHtml(text)
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/__([^_]+)__/g, '<strong>$1</strong>')
            .replace(/\*([^\*]+)\*/g, '<em>$1</em>')
            .replace(/_([^_]+)_/g, '<em>$1</em>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    }

    function renderMarkdown(raw) {
        var lines = raw.replace(/\r/g, '').split('\n');
        var html = '';
        var inCodeBlock = false;
        var codeBuffer = [];
        var listType = null;

        function closeCodeBlock() {
            if (!inCodeBlock) return;
            html += '<pre>' + escapeHtml(codeBuffer.join('\n')) + '</pre>';
            codeBuffer = [];
            inCodeBlock = false;
        }

        function closeList() {
            if (!listType) return;
            html += listType === 'ul' ? '</ul>' : '</ol>';
            listType = null;
        }

        function flushParagraph(paragraph) {
            if (!paragraph.length) return;
            html += '<p>' + paragraph.join(' ') + '</p>';
        }

        var paragraph = [];

        lines.forEach(function(line) {
            var trimmed = line.trim();

            if (/^```/.test(trimmed)) {
                closeParagraph();
                closeList();
                if (inCodeBlock) {
                    closeCodeBlock();
                } else {
                    inCodeBlock = true;
                }
                return;
            }

            if (inCodeBlock) {
                codeBuffer.push(line);
                return;
            }

            var headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
            if (headingMatch) {
                closeParagraph();
                closeList();
                closeCodeBlock();
                var level = headingMatch[1].length;
                html += '<h' + level + '>' + parseInlineMarkdown(headingMatch[2]) + '</h' + level + '>';
                return;
            }

            if (/^>\s*(.*)/.test(trimmed)) {
                closeParagraph();
                closeList();
                var quote = trimmed.replace(/^>\s*/, '');
                html += '<blockquote>' + parseInlineMarkdown(quote) + '</blockquote>';
                return;
            }

            var ulMatch = trimmed.match(/^[-*+]\s+(.*)$/);
            var olMatch = trimmed.match(/^([0-9]+)\.\s+(.*)$/);

            if (ulMatch || olMatch) {
                closeParagraph();
                if (ulMatch) {
                    if (listType !== 'ul') {
                        closeList();
                        html += '<ul>';
                        listType = 'ul';
                    }
                    html += '<li>' + parseInlineMarkdown(ulMatch[1]) + '</li>';
                    return;
                }
                if (olMatch) {
                    if (listType !== 'ol') {
                        closeList();
                        html += '<ol>';
                        listType = 'ol';
                    }
                    html += '<li>' + parseInlineMarkdown(olMatch[2]) + '</li>';
                    return;
                }
            }

            if (trimmed === '') {
                closeParagraph();
                closeList();
                return;
            }

            paragraph.push(parseInlineMarkdown(trimmed));
        });

        function closeParagraph() {
            if (paragraph.length) {
                html += '<p>' + paragraph.join(' ') + '</p>';
                paragraph = [];
            }
        }

        closeParagraph();
        closeList();
        closeCodeBlock();

        return html || '<p>Aucun contenu disponible.</p>';
    }

    function renderPlainText(raw) {
        return '<pre>' + escapeHtml(raw.trim() || 'Aucun contenu disponible.') + '</pre>';
    }

    function getRawUrl(path, type) {
        var encodedPath = path.split('/').map(encodeURIComponent).join('/');
        if (type === 'dir') {
            return 'https://raw.githubusercontent.com/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/main/' + encodedPath + '/README.md';
        }
        return 'https://raw.githubusercontent.com/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/main/' + encodedPath;
    }

    function setToolbar(path, type) {
        var toolbar = document.getElementById('viewer-toolbar');
        var githubPath = path.split('/').map(encodeURIComponent).join('/');
        var prefix = type === 'dir' ? 'tree' : 'blob';
        var label = type === 'dir' ? 'Dossier' : 'Fichier';
        var link = document.createElement('a');
        link.href = 'https://github.com/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/' + prefix + '/main/' + githubPath;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = type === 'dir' ? 'Ouvrir le dossier sur GitHub' : 'Ouvrir le fichier sur GitHub';
        link.style.textDecoration = 'underline';
        toolbar.innerHTML = '<strong>' + label + ' :</strong> ' + escapeHtml(path) + ' &nbsp;•&nbsp; ';
        toolbar.appendChild(link);
        toolbar.style.display = 'flex';
    }

    function setupBackButton() {
        var backButton = document.getElementById('viewer-back');
        if (!backButton) return;
        backButton.style.display = 'inline-flex';
        backButton.addEventListener('click', function() {
            window.location.href = 'procedures.html';
        });
    }

    async function loadProcedure() {
        var message = document.getElementById('viewer-message');
        var viewer = document.getElementById('viewer-content');

        var path = getQueryParam('path');
        var type = getQueryParam('type') || 'file';

        if (!path) {
            message.textContent = 'Aucune procédure spécifiée.';
            return;
        }

        setToolbar(path, type);

        var rawUrl = getRawUrl(path, type);
        try {
            var response = await fetch(rawUrl);
            if (!response.ok) {
                throw new Error('Fichier introuvable');
            }

            var text = await response.text();
            if (/\.md$/i.test(path) || type === 'dir' || /\.(md)$/i.test(path)) {
                viewer.innerHTML = renderMarkdown(text);
            } else {
                viewer.innerHTML = renderPlainText(text);
            }
            message.style.display = 'none';
        } catch (error) {
            message.textContent = 'Impossible de charger le fichier Markdown. Vérifiez que le fichier existe ou utilisez le lien GitHub.';
            viewer.innerHTML = '';
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        setupBackButton();
        loadProcedure();
    });
})();
