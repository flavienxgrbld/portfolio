# Portfolio — Flavien GARIBALDI

Portfolio d'étudiant en **BTS SIO option SISR** (administration systèmes, réseaux et cybersécurité).

🌐 **En ligne :** https://flavienxgrbld.github.io/portfolio/

## Contenu

| Page | Description |
| --- | --- |
| Accueil | Présentation générale |
| À propos | Parcours et formations |
| BTS SIO | Présentation du diplôme et de l'option SISR |
| Projets | Projets réalisés, schémas d'infrastructure pro et perso |
| Certifications | Certifications obtenues, filtrables par catégorie |
| TCS | Tableau de compétences |
| Veilles | Veille technologique et veille juridique |
| Contact | Formulaire de contact (EmailJS) |

## Structure

```
index.html      redirection vers src/index.html
404.html        page d'erreur GitHub Pages
src/            pages du site
css/            feuilles de style (main.css = styles principaux)
js/             scripts (main.js = comportements communs, *-loader.js = rendu des données JSON)
json/           données affichées : projets, certifications, formations, veilles, schémas
images/         images (WebP) et PDF des certifications
fonts/          police Bai Jamjuree (woff2)
```

Le contenu des pages Projets, Certifications, Veilles et À propos est chargé depuis `json/` : pour ajouter une entrée, il suffit de modifier le fichier JSON correspondant.

## Lancer en local

Les données JSON sont chargées avec `fetch`, il faut donc passer par un serveur HTTP plutôt qu'ouvrir les fichiers directement :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

## Déploiement

Le site est publié automatiquement par GitHub Pages depuis la branche `main`.
