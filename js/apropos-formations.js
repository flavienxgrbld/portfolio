// Apropos page — Formation cards loader
(function() {
    'use strict';

    function creerCarteFormation(formation) {
        var container = document.createElement('div');
        container.className = 'clearfix';

        var box = document.createElement('div');
        box.className = 'formationBox';

        var titre = document.createElement('div');
        titre.className = 'font36 colorWhite bold';
        titre.textContent = formation.titre || 'Formation';

        var periode = document.createElement('div');
        periode.className = 'font22 colorC';
        periode.style.margin = '1rem 0';
        periode.textContent = formation.periode || '';

        var description = document.createElement('div');
        description.className = 'font18 colorC';
        description.textContent = formation.description || '';

        box.appendChild(titre);
        box.appendChild(periode);
        box.appendChild(description);
        container.appendChild(box);

        return container;
    }

    async function chargerFormations() {
        var message = document.getElementById('formations-message');
        var list = document.getElementById('formations-list');

        try {
            var response = await fetch('../json/formations.json');
            if (!response.ok) {
                throw new Error('Erreur HTTP ' + response.status);
            }

            var formations = await response.json();
            var items = Array.isArray(formations) ? formations : [];

            list.innerHTML = '';

            if (items.length === 0) {
                message.textContent = 'Aucune formation disponible pour le moment.';
                return;
            }

            items.forEach(function(formation) {
                list.appendChild(creerCarteFormation(formation));
            });

            message.style.display = 'none';
        } catch (error) {
            console.error(error);
            message.textContent = 'Impossible de charger les formations (json/formations.json).';
        }
    }

    chargerFormations();
})();
