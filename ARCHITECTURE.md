# Architecture du Portfolio - Site Statique Multilingue

## 🎯 Architecture

Le portfolio est un site statique HTML/CSS/JavaScript avec une architecture basée sur des dossiers par langue.

```
portfolio/
├── index.html                   # Redirection automatique vers la langue du navigateur
├── fr/                          # Version française
│   ├── index.html
│   ├── apropos.html
│   ├── projets.html
│   ├── certifications.html
│   ├── tcs.html
│   ├── veilles.html
│   └── contact.html
├── en/                          # Version anglaise
│   ├── index.html
│   ├── about.html
│   ├── projects.html
│   ├── certifications.html
│   ├── tcs.html
│   ├── tech-watch.html
│   └── contact.html
├── it/                          # Version italienne
├── es/                          # Version espagnole
├── de/                          # Version allemande
├── nl/                          # Version néerlandaise
├── pl/                          # Version polonaise
├── pt/                          # Version portugaise (PT)
├── pt-BR/                       # Version portugaise (BR)
├── ja/                          # Version japonaise
├── zh/                          # Version chinoise
├── ar/                          # Version arabe
├── includes/
│   ├── header.html              # En-tête avec navigation et sélecteur de langue
│   └── footer.html              # Pied de page
├── js/
│   ├── includes.js              # Chargement dynamique header/footer + navigation
│   ├── contact.js               # Gestion du formulaire de contact (EmailJS)
│   └── scroll-animations.js     # Animations (désactivées)
├── style.css                    # Styles CSS (thème sombre/clair)
├── theme-toggle.js              # Basculement thème (legacy)
└── scroll-animations.js         # Script animations
```

## ✅ Avantages

1. **Meilleur SEO** : Une URL unique par langue (ex: `/fr/apropos.html`, `/en/about.html`)
2. **Pas de flash** : Le contenu est déjà dans la bonne langue au chargement
3. **Performance** : Site 100% statique, léger et rapide
4. **Maintenance** : Plus facile à maintenir et modifier
5. **URLs propres** : Chaque langue a ses propres URLs descriptives
6. **Hébergement simple** : Compatible GitHub Pages, Netlify, Vercel (gratuit)
7. **Pas de serveur requis** : Fichiers HTML statiques uniquement

## 🚀 Fonctionnement

### Détection automatique de langue
Le fichier `index.html` à la racine utilise JavaScript pour détecter la langue du navigateur et redirige automatiquement vers le bon dossier.

### Sélecteur de langue
Un sélecteur de langue dans le header permet de basculer entre les versions :
- Conserve la même page (apropos → about → chi-sono)
- URLs traduites pour chaque langue
- Géré dynamiquement via JavaScript (`js/includes.js`)

### Navigation dynamique
Le système `js/includes.js` charge dynamiquement :
- Le header avec navigation et sélecteur de langue
- Le footer
- Gère le thème sombre/clair (persistant via localStorage)

## 📝 Pour ajouter une nouvelle page

1. Créer la page HTML dans chaque dossier de langue
2. Ajouter les liens de navigation dans `includes/header.html`
3. Mettre à jour la fonction `getNavLinks()` dans `js/includes.js`
4. Traduire le contenu pour chaque langue

## 🌍 Langues disponibles

### ✅ Complètes (12 langues)
- 🇫🇷 Français (fr)
- 🇬🇧 Anglais (en)
- 🇮🇹 Italien (it)
- 🇪🇸 Espagnol (es)
- 🇩🇪 Allemand (de)
- 🇳🇱 Néerlandais (nl)
- 🇵🇱 Polonais (pl)
- 🇵🇹 Portugais PT (pt)
- 🇧🇷 Portugais BR (pt-BR)
- 🇯🇵 Japonais (ja)
- 🇨🇳 Chinois (zh)
- 🇸🇦 Arabe (ar)

### Pages disponibles dans chaque langue
- `index.html` - Page d'accueil
- `about.html` / `apropos.html` / `chi-sono.html` - À propos
- `projects.html` / `projets.html` / `progetti.html` - Projets
- `certifications.html` / `certificazioni.html` - Certifications
- `contact.html` / `contato.html` - Contact (avec EmailJS)
- `tcs.html` - Tableaux de compétences
- `tech-watch.html` / `veilles.html` / `vigilanza-tech.html` - Veille technologique

## 🔧 Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Thème sombre/clair avec variables CSS
- **JavaScript (Vanilla)** : Navigation dynamique, includes, gestion du thème

### Fonctionnalités
- **Système d'includes** : Header/footer chargés dynamiquement via `fetch()`
- **Thème persistant** : Stocké dans `localStorage`
- **EmailJS** : Envoi de formulaires sans backend (200 emails/mois gratuits)
- **Responsive design** : Compatible mobile, tablette, desktop

### Hébergement
- **GitHub Pages** : Hébergement gratuit et simple
- **Netlify / Vercel** : Alternatives avec déploiement automatique
- **Serveur statique** : Tout serveur HTTP basique fonctionne

## 📱 URLs et Navigation

### Structure des URLs
```
portfolio/                        → Redirige automatiquement selon langue navigateur
portfolio/fr/                     → Page d'accueil française
portfolio/fr/apropos.html         → Page à propos en français
portfolio/fr/contact.html         → Page contact en français
portfolio/en/                     → Page d'accueil anglaise
portfolio/en/about.html           → Page à propos en anglais
portfolio/en/contact.html         → Page contact en anglais
```

### Correspondance des pages entre langues
| Français | Anglais | Italien | Espagnol | Allemand |
|----------|---------|---------|----------|----------|
| apropos.html | about.html | chi-sono.html | acerca-de.html | uber-mich.html |
| projets.html | projects.html | progetti.html | proyectos.html | projekte.html |
| contact.html | contact.html | contatto.html | contacto.html | kontakt.html |
| veilles.html | tech-watch.html | vigilanza-tech.html | vigilancia-tech.html | tech-uberwachung.html |

## 🎨 Système de thèmes

### Thème sombre (par défaut)
```css
--bg-dark: #0a0a0a
--text-light: #ffffff
--border-color: #2a2a2a
```

### Thème clair
```css
--bg-light: #ffffff
--text-dark: #000000
--border-color: #e0e0e0
```

**Basculement** : Bouton dans le header qui toggle entre les deux thèmes
**Persistance** : Préférence sauvegardée dans `localStorage`

## 📦 Fichiers clés

### JavaScript
- `js/includes.js` : Chargement header/footer, navigation, gestion langue et thème
- `js/contact.js` : Gestion formulaire de contact avec EmailJS
- `theme-toggle.js` : Legacy, fonctionnalité intégrée dans includes.js
- `scroll-animations.js` : Animations au scroll (désactivées par défaut)

### CSS
- `style.css` : Tous les styles du site (thème, responsive, composants)

### HTML
- `index.html` : Point d'entrée avec redirection automatique
- `includes/header.html` : En-tête réutilisable avec navigation
- `includes/footer.html` : Pied de page réutilisable

---

**Dernière mise à jour** : 22 décembre 2024
**Type** : Site statique HTML/CSS/JavaScript multilingue
**Hébergement** : Compatible GitHub Pages, Netlify, Vercel
