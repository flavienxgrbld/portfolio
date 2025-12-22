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
# ou simplement ouvrir index.html dans un navigateur
```

### Déploiement GitHub Pages
1. Push vers un repository GitHub
2. Settings → Pages → Deploy from branch `main`
3. Le site sera accessible à : `https://username.github.io/portfolio`

### Déploiement Netlify
1. Créer un compte sur [netlify.com](https://www.netlify.com/)
2. Glisser-déposer le dossier du projet
3. Site en ligne instantanément

### Déploiement Vercel
1. Créer un compte sur [vercel.com](https://vercel.com/)
2. Connecter votre repository GitHub
3. Déploiement automatique à chaque commit

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
5. Testez l'envoi de formulaire sur chaque page de contact
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

## � Système de navigation

### Chargement dynamique des includes
Le fichier `js/includes.js` charge automatiquement :
1. **Header** (`includes/header.html`) : Navigation + Sélecteur de langue + Toggle thème
2. **Footer** (`includes/footer.html`) : Informations de copyright et liens

### Détection automatique de la langue
Le fichier `index.html` racine détecte la langue du navigateur :
```javascript
const userLang = navigator.language || navigator.userLanguage;
// Redirige vers /fr/ ou /en/ ou autre
```

### Navigation entre pages
Le système maintient la langue actuelle lors de la navigation :
- Tous les liens sont relatifs au dossier de langue
- Le sélecteur de langue mappe les pages équivalentes entre langues

## 🎨 Animations

Les animations au scroll sont **désactivées par défaut** pour un affichage immédiat.

Pour les **réactiver** :
1. Décommenter le code dans `scroll-animations.js`
2. Ajouter les classes CSS appropriées dans `style.css`
3. Inclure le script dans les pages HTML

## 🐛 Débogage

### Problèmes courants

**Le header/footer ne se charge pas :**
- Vérifier que `js/includes.js` est bien inclus
- Ouvrir la console navigateur pour voir les erreurs
- Vérifier que les chemins vers `includes/` sont corrects

**Le formulaire de contact ne fonctionne pas :**
- Vérifier les clés EmailJS dans `js/contact.js`
- Vérifier que le script EmailJS CDN est chargé
- Ouvrir la console pour voir les erreurs d'envoi
- Limite : 200 emails/mois sur le plan gratuit

**Le thème ne persiste pas :**
- Vérifier que localStorage est activé dans le navigateur
- Tester dans une fenêtre de navigation privée
- Vérifier le code dans `js/includes.js`

**Le sélecteur de langue ne fonctionne pas :**
- Vérifier que les mappings de pages sont corrects dans `getNavLinks()`
- Vérifier que les fichiers HTML existent dans chaque dossier de langue

## 📊 Métriques

- **Poids total** : ~1.5 MB (incluant toutes les langues)
- **Temps de chargement** : < 1 seconde
- **Lighthouse Score** : 90+/100
- **Compatibilité** : Tous navigateurs modernes (Chrome, Firefox, Safari, Edge)
- **Mobile-friendly** : 100% responsive

## 🔐 Sécurité

- ✅ Pas de backend : aucune faille serveur possible
- ✅ EmailJS : validation côté client + limite de taux
- ✅ Pas de données sensibles : aucune information stockée
- ✅ HTTPS recommandé : Actif par défaut sur GitHub Pages/Netlify/Vercel

## 📞 Contact & Support

**Email** : flavien.garibaldi@gmail.com

Pour signaler un bug ou proposer une amélioration, créez une issue sur le repository GitHub.

---

## �📄 License

© 2024-2025 Flavien GARIBALDI. Tous droits réservés.
