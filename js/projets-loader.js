// Projets page — Project cards loader
(function() {
    'use strict';

    function creerCarteProjet(projet) {
        var li = document.createElement('li');
        li.style.listStyle = 'none';

        var couleur = projet.couleur || '#6366f1';
        var rgbaColor = couleur.replace('#', '').match(/.{2}/g).map(function(hex) {
            return parseInt(hex, 16);
        }).join(', ');

        var passthrough = document.createElement('div');
        passthrough.className = 'passthrough';

        // Icon
        var iconDiv = document.createElement('div');
        iconDiv.className = 'icon';
        var img = document.createElement('img');
        img.src = projet.icone || '../images/aboutA1.svg';
        img.alt = 'Ic\u00f4ne du projet ' + (projet.titre || 'Projet');
        iconDiv.appendChild(img);

        // Title
        var titleDiv = document.createElement('div');
        titleDiv.className = 'text font30 colorWhite bold';
        var titre = (projet.titre || 'Projet');
        if (titre.includes(' & ')) {
            var parts = titre.split(' & ');
            titleDiv.textContent = parts[0] + ' &';
            titleDiv.appendChild(document.createElement('br'));
            titleDiv.appendChild(document.createTextNode(parts[1]));
        } else {
            titleDiv.textContent = titre;
        }

        // Content container
        var textA = document.createElement('div');
        textA.className = 'text-a';

        // Description
        var desc = document.createElement('div');
        desc.className = 'a font16 colorWhite';
        desc.textContent = projet.description || '';
        textA.appendChild(desc);

        // Tags
        var tagsContainer = document.createElement('div');
        tagsContainer.style.marginTop = '1rem';
        (projet.tags || []).forEach(function(tag) {
            var tagSpan = document.createElement('span');
            tagSpan.style.display = 'inline-block';
            tagSpan.style.padding = '0.3rem 0.8rem';
            tagSpan.style.margin = '0.3rem';
            tagSpan.style.background = 'rgba(' + rgbaColor + ', 0.2)';
            tagSpan.style.borderRadius = '20px';
            tagSpan.style.fontSize = '14px';
            tagSpan.style.color = couleur;
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
        textA.appendChild(tagsContainer);

        // Optional external link
        if (projet.lien) {
            var lienDiv = document.createElement('div');
            lienDiv.style.marginTop = '1.2rem';

            var lienA = document.createElement('a');
            lienA.href = projet.lien;
            lienA.target = '_blank';
            lienA.rel = 'noopener noreferrer';
            lienA.textContent = '\uD83D\uDD17 Voir le projet';
            lienA.style.display = 'inline-block';
            lienA.style.padding = '0.5rem 1.2rem';
            lienA.style.background = 'rgba(' + rgbaColor + ', 0.2)';
            lienA.style.color = couleur;
            lienA.style.borderRadius = '8px';
            lienA.style.textDecoration = 'none';
            lienA.style.fontSize = '15px';
            lienA.style.fontWeight = '600';
            lienA.style.border = '1px solid ' + couleur;
            lienA.style.transition = 'all 0.3s ease';

            lienDiv.appendChild(lienA);
            textA.appendChild(lienDiv);
        }

        passthrough.appendChild(iconDiv);
        passthrough.appendChild(titleDiv);
        passthrough.appendChild(textA);
        li.appendChild(passthrough);

        return li;
    }

    async function chargerProjets() {
        var message = document.getElementById('projets-message');
        var liste = document.getElementById('liste-projets');

        try {
            var response = await fetch('../json/projets.json');
            if (!response.ok) {
                throw new Error('Erreur HTTP ' + response.status);
            }

            var projets = await response.json();
            var items = Array.isArray(projets) ? projets : [];

            liste.innerHTML = '';

            if (items.length === 0) {
                message.textContent = 'Aucun projet disponible pour le moment.';
                return;
            }

            items.forEach(function(projet) {
                liste.appendChild(creerCarteProjet(projet));
            });

            message.style.display = 'none';
        } catch (error) {
            console.error(error);
            message.textContent = 'Impossible de charger les projets (json/projets.json).';
            message.className = 'font18 colorWhite load-error';
        }
    }

    chargerProjets();
})();
