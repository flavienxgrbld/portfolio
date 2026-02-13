// Veille technologique page — Domain cards loader
(function() {
    'use strict';

    function creerCarteDomaine(domaine) {
        var li = document.createElement('li');
        li.style.listStyle = 'none';

        var passthrough = document.createElement('div');
        passthrough.className = 'passthrough';

        // Icon
        var iconDiv = document.createElement('div');
        iconDiv.className = 'icon';
        var img = document.createElement('img');
        img.src = domaine.icone;
        img.alt = 'Ic\u00f4ne domaine ' + domaine.titre;
        iconDiv.appendChild(img);

        // Title
        var titleDiv = document.createElement('div');
        titleDiv.className = 'text font30 colorWhite bold';
        if (domaine.titre.includes('&')) {
            var parts = domaine.titre.split('&');
            titleDiv.textContent = parts[0] + '&';
            titleDiv.appendChild(document.createElement('br'));
            titleDiv.appendChild(document.createTextNode(parts[1]));
        } else {
            titleDiv.textContent = domaine.titre;
        }

        // Content container
        var textA = document.createElement('div');
        textA.className = 'text-a';

        // Description
        var desc = document.createElement('div');
        desc.className = 'a font16 colorWhite';
        desc.textContent = domaine.description;
        textA.appendChild(desc);

        // Tags
        var tagsContainer = document.createElement('div');
        tagsContainer.style.marginTop = '1rem';
        domaine.tags.forEach(function(tag) {
            var tagSpan = document.createElement('span');
            tagSpan.style.display = 'inline-block';
            tagSpan.style.padding = '0.3rem 0.8rem';
            tagSpan.style.margin = '0.3rem';
            tagSpan.style.background = 'rgba(99, 102, 241, 0.2)';
            tagSpan.style.borderRadius = '20px';
            tagSpan.style.fontSize = '14px';
            tagSpan.style.color = '#6366f1';
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
        textA.appendChild(tagsContainer);

        // Sources
        var sourcesContainer = document.createElement('div');
        sourcesContainer.style.marginTop = '1.5rem';

        var sourcesTitle = document.createElement('div');
        sourcesTitle.style.fontSize = '16px';
        sourcesTitle.style.fontWeight = '600';
        sourcesTitle.style.color = '#9ca3af';
        sourcesTitle.style.marginBottom = '0.5rem';
        sourcesTitle.textContent = 'Sources :';
        sourcesContainer.appendChild(sourcesTitle);

        var sourcesList = document.createElement('div');
        sourcesList.style.fontSize = '14px';
        sourcesList.style.color = '#9ca3af';
        domaine.sources.forEach(function(source, index) {
            if (index > 0) sourcesList.appendChild(document.createElement('br'));
            sourcesList.appendChild(document.createTextNode('\u2022 ' + source));
        });
        sourcesContainer.appendChild(sourcesList);

        textA.appendChild(sourcesContainer);

        passthrough.appendChild(iconDiv);
        passthrough.appendChild(titleDiv);
        passthrough.appendChild(textA);
        li.appendChild(passthrough);

        return li;
    }

    fetch('../json/veille.json')
        .then(function(response) { return response.json(); })
        .then(function(data) {
            var conteneur = document.getElementById('veille-domaines');
            data.domaines.forEach(function(domaine) {
                conteneur.appendChild(creerCarteDomaine(domaine));
            });
        })
        .catch(function(error) {
            console.error('Erreur chargement veille technologique:', error);
            var conteneur = document.getElementById('veille-domaines');
            conteneur.innerHTML = '<li class="load-error font18">Impossible de charger les donn\u00e9es de veille technologique.</li>';
        });
})();
