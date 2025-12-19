# Portfolio - Flavien GARIBALDI

Portfolio professionnel statique présentant mes compétences en BTS SIO SISR (Solutions d'Infrastructure, Systèmes et Réseaux).

## 🚀 Technologies utilisées

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Design**: Responsive, Dark theme par défaut avec basculement Light
- **Formulaire**: EmailJS pour l'envoi de messages
- **Internationalisation**: Support multilingue (12 langues)
- **Hébergement**: Compatible GitHub Pages / Serveurs statiques

## 📦 Structure du projet

```
portfolio/
├── fr/, en/, it/, es/, de/     # Langues européennes
├── nl/, pl/, pt/, pt-BR/        # Langues européennes (suite)
├── ja/, zh/, ar/                # Langues asiatiques et arabes
│   ├── index.html               # Page d'accueil
│   ├── about.html               # À propos
│   ├── projects.html            # Projets
│   ├── certifications.html      # Certifications
│   ├── contact.html             # Contact (EmailJS)
│   ├── tcs.html                 # Tableaux de compétences
│   └── tech-watch.html          # Veille technologique
├── includes/                    # Templates HTML
│   ├── header.html              # En-tête (navigation + thème)
│   └── footer.html              # Pied de page
├── js/                          # Scripts JavaScript
│   ├── includes.js              # Système de navigation + thème
│   ├── contact.js               # Gestion formulaire EmailJS
│   └── scroll-animations.js     # Animations (désactivées)
├── style.css                    # Styles CSS noir et blanc
├── theme-toggle.js              # Toggle thème (legacy)
├── index.html                   # Redirection langue automatique
└── DOCS.md                      # Cette documentation
```

## ⚡ Fonctionnalités

### Interface Utilisateur
- ✅ **Thème sombre par défaut** avec basculement clair/sombre
- ✅ **Design sobre** : uniquement noir et blanc
- ✅ **Navigation dynamique** : chargement via JavaScript
- ✅ **Sélecteur de langue** : 12 langues disponibles
- ✅ **Responsive design** : mobile, tablette, desktop
- ✅ **Affichage immédiat** : animations désactivées

### Formulaire de Contact
- ✅ **EmailJS intégré** : envoi direct vers flavien.garibaldi@gmail.com
- ✅ **Validation côté client** : email, champs obligatoires
- ✅ **Messages multilingues** : feedback traduit
- ✅ **États visuels** : loading, succès, erreur
- ✅ **Limite gratuite** : 200 emails/mois

### Code
- ✅ **Site 100% statique** : pas de backend PHP
- ✅ **JavaScript modulaire** : IIFE et mode strict
- ✅ **Includes dynamiques** : header/footer chargés via fetch()
- ✅ **Cache busting** : style.css?v=2
- ✅ **Pas de dépendances** : vanilla JavaScript uniquement

### Performance
- ✅ **Léger** : ~800 lignes CSS, JavaScript optimisé
- ✅ **Compatible GitHub Pages** : chemins relatifs
- ✅ **Thème persistant** : localStorage
- ✅ **Préconnexion** : Google Fonts

## 🛠️ Installation

### Développement local
```bash
# Cloner le repository
git clone [votre-repo]
cd portfolio

# Serveur local (choisir une option)
python -m http.server 8000
# ou
php -S localhost:8000
# ou via Laragon/XAMPP
```

### Déploiement GitHub Pages
1. Push vers un repository GitHub
2. Settings → Pages → Deploy from branch `main`
3. Le site sera accessible à : `https://username.github.io/portfolio`

### Configuration EmailJS
1. Créer un compte sur [emailjs.com](https://www.emailjs.com/)
2. Créer un service email (Gmail, Outlook, etc.)
3. Créer un template avec les variables :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{subject}}` - Sujet du message
   - `{{message}}` - Contenu du message
4. Copier les clés dans `js/contact.js` :
   ```javascript
   const EMAILJS_CONFIG = {
       serviceId: 'votre_service_id',
       templateId: 'votre_template_id',
       publicKey: 'votre_public_key'
   };
   ```

## 📱 Responsive Design

Breakpoints :
- 📱 **Mobile** : < 480px
- 📱 **Tablette** : 480px - 768px
- 💻 **Desktop** : > 768px

## 🌐 Langues supportées

Total : **12 langues**

| Langue | Code | Drapeau |
|--------|------|---------|
| Français | fr | 🇫🇷 |
| Anglais | en | 🇬🇧 |
| Italien | it | 🇮🇹 |
| Espagnol | es | 🇪🇸 |
| Allemand | de | 🇩🇪 |
| Néerlandais | nl | 🇳🇱 |
| Polonais | pl | 🇵🇱 |
| Portugais PT | pt | 🇵🇹 |
| Portugais BR | pt-BR | 🇧🇷 |
| Japonais | ja | 🇯🇵 |
| Chinois | zh | 🇨🇳 |
| Arabe | ar | 🇸🇦 |

## 🎨 Système de thèmes

**Thème sombre** (par défaut) :
- Fond : `#0a0a0a`
- Texte : `#ffffff`
- Bordures : `#2a2a2a`

**Thème clair** :
- Fond : `#ffffff`
- Texte : `#000000`
- Bordures : `#e0e0e0`

Persistance : `localStorage.setItem('theme', 'dark|light')`

## 🔧 Maintenance

### Ajouter une nouvelle langue
1. Créer le dossier `langue/`
2. Copier les 7 fichiers HTML d'une langue existante
3. Traduire le contenu
4. Ajouter la langue dans `js/includes.js` :
   - `getLanguages()` : définition de la langue
   - `getNavLinks()` : traduction des liens
5. Ajouter dans `js/contact.js` : messages traduits

### Modifier le design
- Couleurs : uniquement noir/blanc dans `style.css`
- Thèmes : variables CSS `:root` et `.light-theme`
- Police : Google Fonts Poppins (300, 400, 600, 700)

### Activer les animations (optionnel)
Modifier `scroll-animations.js` et `style.css` pour réactiver les animations au scroll.

## 📄 License

© 2024-2025 Flavien GARIBALDI. Tous droits réservés.
