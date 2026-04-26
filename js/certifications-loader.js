// Certifications page — Certification cards loader
(function() {
    'use strict';

    console.log('Script certifications-loader.js chargé');

    function chargerCertifications() {
        console.log('Fonction chargerCertifications() appelée');

    function creerCarteCertification(cert, type) {
        var li = document.createElement('li');
        li.style.listStyle = 'none';
        li.setAttribute('data-category', cert.categorie || 'Autre');
        li.setAttribute('data-organism', cert.sousTitre || 'Autre');
        li.className = 'certification-item certification-visible';

        var rgbaColor = cert.couleur.replace('#', '').match(/.{2}/g).map(function(hex) {
            return parseInt(hex, 16);
        }).join(', ');

        var passthrough = document.createElement('div');
        passthrough.className = 'passthrough';
        passthrough.style.border = '2px solid ' + cert.couleur;

        // Icon
        var iconDiv = document.createElement('div');
        iconDiv.className = 'icon';
        var img = document.createElement('img');
        img.src = cert.icone;
        img.alt = 'Ic\u00f4ne certification ' + cert.titre;
        iconDiv.appendChild(img);

        // Title
        var titleDiv = document.createElement('div');
        titleDiv.className = 'text font30 colorWhite bold';
        titleDiv.textContent = cert.titre;
        titleDiv.appendChild(document.createElement('br'));
        titleDiv.appendChild(document.createTextNode(cert.sousTitre));

        // Full name
        var nomComplet = document.createElement('div');
        nomComplet.style.fontSize = '20px';
        nomComplet.style.color = cert.couleur;
        nomComplet.style.margin = '0.5rem 0';
        nomComplet.style.fontWeight = '600';
        nomComplet.textContent = cert.nomComplet;

        // Content container
        var textA = document.createElement('div');
        textA.className = 'text-a';

        // Description
        var desc = document.createElement('div');
        desc.className = 'a font16 colorWhite';
        desc.textContent = cert.description;
        textA.appendChild(desc);

        // Tags
        var tagsContainer = document.createElement('div');
        tagsContainer.style.marginTop = '1rem';
        cert.tags.forEach(function(tag) {
            var tagSpan = document.createElement('span');
            tagSpan.style.display = 'inline-block';
            tagSpan.style.padding = '0.3rem 0.8rem';
            tagSpan.style.margin = '0.3rem';
            tagSpan.style.background = 'rgba(' + rgbaColor + ', 0.2)';
            tagSpan.style.borderRadius = '20px';
            tagSpan.style.fontSize = '14px';
            tagSpan.style.color = cert.couleur;
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
        textA.appendChild(tagsContainer);

        // Date info
        var dateInfo = document.createElement('div');
        dateInfo.style.marginTop = '1rem';
        dateInfo.style.fontSize = '16px';
        dateInfo.style.color = '#9ca3af';
        if (type === 'obtenue') {
            dateInfo.textContent = '\uD83D\uDCC5 Obtenue en : ' + cert.annee;
        } else {
            dateInfo.textContent = '\u23F3 ' + cert.statut;
        }
        textA.appendChild(dateInfo);

        // Attestation buttons (view + download)
        if (cert.attestation) {
            var attestDiv = document.createElement('div');
            attestDiv.style.marginTop = '1.2rem';
            attestDiv.style.display = 'flex';
            attestDiv.style.gap = '0.8rem';
            attestDiv.style.flexWrap = 'wrap';

            var viewLink = document.createElement('a');
            viewLink.href = cert.attestation;
            viewLink.target = '_blank';
            viewLink.rel = 'noopener noreferrer';
            viewLink.textContent = '\uD83D\uDD0D Voir l\u2019attestation';
            viewLink.style.display = 'inline-block';
            viewLink.style.padding = '0.5rem 1.2rem';
            viewLink.style.background = 'rgba(' + rgbaColor + ', 0.2)';
            viewLink.style.color = cert.couleur;
            viewLink.style.borderRadius = '8px';
            viewLink.style.textDecoration = 'none';
            viewLink.style.fontSize = '15px';
            viewLink.style.fontWeight = '600';
            viewLink.style.transition = 'all 0.3s ease';
            viewLink.style.border = '1px solid ' + cert.couleur;

            var dlLink = document.createElement('a');
            dlLink.href = cert.attestation;
            dlLink.setAttribute('download', '');
            dlLink.textContent = '\u2B07 T\u00e9l\u00e9charger';
            dlLink.style.display = 'inline-block';
            dlLink.style.padding = '0.5rem 1.2rem';
            dlLink.style.background = cert.couleur;
            dlLink.style.color = '#1a1a2e';
            dlLink.style.borderRadius = '8px';
            dlLink.style.textDecoration = 'none';
            dlLink.style.fontSize = '15px';
            dlLink.style.fontWeight = '600';
            dlLink.style.transition = 'all 0.3s ease';

            attestDiv.appendChild(viewLink);
            attestDiv.appendChild(dlLink);
            textA.appendChild(attestDiv);
        }

        passthrough.appendChild(iconDiv);
        passthrough.appendChild(titleDiv);
        passthrough.appendChild(nomComplet);
        passthrough.appendChild(textA);
        li.appendChild(passthrough);

        return li;
    }

    console.log('Chargement des certifications depuis:', '../json/certifications.json');
    fetch('../json/certifications.json')
        .then(function(response) {
            console.log('Réponse reçue:', response.status, response.statusText);
            if (!response.ok) {
                throw new Error('HTTP ' + response.status + ': ' + response.statusText);
            }
            return response.json();
        })
        .then(function(data) {
            console.log('Données chargées:', data);
            var conteneurObtenues = document.getElementById('certifications-obtenues');
            var conteneurPreparation = document.getElementById('certifications-preparation');

            if (!conteneurObtenues || !conteneurPreparation) {
                console.error('Conteneurs non trouvés!');
                return;
            }

            data.obtenues.forEach(function(cert) {
                conteneurObtenues.appendChild(creerCarteCertification(cert, 'obtenue'));
            });

            data.enPreparation.forEach(function(cert) {
                conteneurPreparation.appendChild(creerCarteCertification(cert, 'preparation'));
            });
            console.log('Certifications affichées avec succès');

            // Générer les catégories dynamiquement
            genererCategories(data);
            
            // Initialiser les filtres
            initialiserFiltres();
        })
        .catch(function(error) {
            console.error('Erreur lors du chargement des certifications:', error);
            var conteneur = document.getElementById('certifications-obtenues');
            if (conteneur) {
                conteneur.innerHTML = '<li class="load-error font18">Impossible de charger les certifications. Erreur: ' + error.message + '</li>';
            }
            var conteneurPrep = document.getElementById('certifications-preparation');
            if (conteneurPrep) {
                conteneurPrep.innerHTML = '';
            }
        });
    }

    // Fonction pour générer dynamiquement les catégories et organismes
    function genererCategories(data) {
        console.log('Génération des catégories et organismes dynamiques');
        
        var dropdownCategory = document.getElementById('category-filter');
        var dropdownOrganism = document.getElementById('organism-filter');
        
        if (!dropdownCategory || !dropdownOrganism) {
            console.error('Dropdowns non trouvés!');
            return;
        }
        
        // Extraire toutes les catégories uniques
        var categories = new Set();
        data.obtenues.forEach(function(cert) {
            if (cert.categorie) {
                categories.add(cert.categorie);
            }
        });
        data.enPreparation.forEach(function(cert) {
            if (cert.categorie) {
                categories.add(cert.categorie);
            }
        });
        var categoriesArray = Array.from(categories).sort();
        // Liste blanche des organismes
        var organismesArray = ["Cisco", "ANSSI", "ONU"];
        // === Catégories ===
        dropdownCategory.innerHTML = '';
        var optionToutes = document.createElement('option');
        optionToutes.value = 'toutes';
        optionToutes.textContent = 'Toutes les catégories';
        dropdownCategory.appendChild(optionToutes);
        categoriesArray.forEach(function(categorie) {
            var option = document.createElement('option');
            option.value = categorie;
            option.textContent = categorie;
            dropdownCategory.appendChild(option);
        });
        // === Organismes ===
        dropdownOrganism.innerHTML = '';
        var optionTous = document.createElement('option');
        optionTous.value = 'tous';
        optionTous.textContent = 'Tous les organismes';
        dropdownOrganism.appendChild(optionTous);
        organismesArray.forEach(function(organisme) {
            var option = document.createElement('option');
            option.value = organisme;
            option.textContent = organisme;
            dropdownOrganism.appendChild(option);
        });
        console.log('Options générées - Catégories:', dropdownCategory.options.length, 'Organismes:', dropdownOrganism.options.length);
    }

    // Fonction pour initialiser les filtres
    function initialiserFiltres() {
        var dropdownCategory = document.getElementById('category-filter');
        var dropdownOrganism = document.getElementById('organism-filter');
        
        if (dropdownCategory) {
            dropdownCategory.addEventListener('change', function() {
                console.log('Catégorie sélectionnée:', this.value);
                filtrerCertifications();
            });
        }
        
        if (dropdownOrganism) {
            dropdownOrganism.addEventListener('change', function() {
                console.log('Organisme sélectionné:', this.value);
                filtrerCertifications();
            });
        }
    }

    // Fonction pour filtrer les certifications
    function filtrerCertifications() {
        var categorie = document.getElementById('category-filter').value;
        var organisme = document.getElementById('organism-filter').value;
        var toutesLesCertifications = document.querySelectorAll('.certification-item');
        toutesLesCertifications.forEach(function(item) {
            var itemCategorie = item.getAttribute('data-category');
            var itemOrganisme = item.getAttribute('data-organism');
            // On ne filtre que sur Cisco, ANSSI, ONU
            var matchCategorie = (categorie === 'toutes' || itemCategorie === categorie);
            var matchOrganisme = (organisme === 'tous');
            if (["Cisco", "ANSSI", "ONU"].includes(organisme)) {
                matchOrganisme = (itemOrganisme && itemOrganisme.toLowerCase().includes(organisme.toLowerCase()));
            }
            if (matchCategorie && matchOrganisme) {
                item.classList.remove('certification-hidden');
                item.classList.add('certification-visible');
                item.style.display = '';
            } else {
                item.classList.remove('certification-visible');
                item.classList.add('certification-hidden');
                item.style.display = 'none';
            }
        });
    }

    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', chargerCertifications);
    } else {
        // Le DOM est déjà chargé
        chargerCertifications();
    }
})();
