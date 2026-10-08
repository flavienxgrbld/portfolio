// Veille juridique page - Domain cards loader
(function() {
    'use strict';

    function creerCarteDomaine(domaine) {
        var li = document.createElement('li');
        li.style.listStyle = 'none';

        var passthrough = document.createElement('div');
        passthrough.className = 'passthrough';

        var iconDiv = document.createElement('div');
        iconDiv.className = 'icon';
        var img = document.createElement('img');
        img.src = domaine.icone;
        img.alt = 'Icône domaine ' + domaine.titre;
        img.loading = 'lazy';
        iconDiv.appendChild(img);

        var title = document.createElement('div');
        title.className = 'text font30 colorWhite bold';
        title.textContent = domaine.titre;

        var textA = document.createElement('div');
        textA.className = 'text-a';

        var description = document.createElement('div');
        description.className = 'a font16 colorWhite';
        description.textContent = domaine.description;
        textA.appendChild(description);

        var sources = document.createElement('div');
        sources.className = 'a font16 colorWhite';
        sources.style.marginTop = '1rem';
        sources.textContent = 'Sources : ' + domaine.sources.join(', ');
        textA.appendChild(sources);

        passthrough.appendChild(iconDiv);
        passthrough.appendChild(title);
        passthrough.appendChild(textA);
        li.appendChild(passthrough);
        return li;
    }

    fetch('../json/veille-juridique.json')
        .then(function(response) {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.json();
        })
        .then(function(data) {
            var conteneur = document.getElementById('veille-juridique-domaines');
            data.domaines.forEach(function(domaine) {
                conteneur.appendChild(creerCarteDomaine(domaine));
            });
        })
        .catch(function(error) {
            console.error('Erreur chargement veille juridique:', error);
            var conteneur = document.getElementById('veille-juridique-domaines');
            conteneur.innerHTML = '<li class="load-error font18">Impossible de charger les données de veille juridique.</li>';
        });
})();
