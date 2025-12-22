# Portfolio Multilingue - Flavien GARIBALDI

Portfolio professionnel statique en HTML/CSS/JavaScript présentant mes compétences en BTS SIO SISR (Solutions d'Infrastructure, Systèmes et Réseaux).

## 🌍 Langues supportées (12)

- 🇫🇷 Français (fr)
- 🇬🇧 English (en)
- 🇮🇹 Italiano (it)
- 🇪🇸 Español (es)
- 🇩🇪 Deutsch (de)
- 🇳🇱 Nederlands (nl)
- 🇵🇱 Polski (pl)
- 🇵🇹 Português PT (pt)
- 🇧🇷 Português BR (pt-BR)
- 🇯🇵 日本語 (ja)
- 🇨🇳 中文 (zh)
- 🇸🇦 العربية (ar)

## 🚀 Technologies utilisées

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Design**: Responsive, Dark theme par défaut avec basculement Light
- **Formulaire**: EmailJS pour l'envoi de messages (200 emails/mois gratuits)
- **Internationalisation**: 12 langues avec système de navigation dynamique
- **Hébergement**: Compatible GitHub Pages / Netlify / Vercel (gratuit)

## 📦 Architecture du projet

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
├── it/, es/, de/, nl/, pl/      # Autres langues européennes
├── pt/, pt-BR/                  # Portugais (PT et BR)
├── ja/, zh/, ar/                # Langues asiatiques et arabes
├── includes/
│   ├── header.html              # En-tête avec navigation et sélecteur de langue
│   └── footer.html              # Pied de page
├── js/
│   ├── includes.js              # Chargement header/footer + navigation + thème
│   ├── contact.js               # Gestion formulaire EmailJS
│   └── scroll-animations.js     # Animations (désactivées)
├── style.css                    # Styles CSS (thème sombre/clair)
├── theme-toggle.js              # Toggle thème (legacy)
└── scroll-animations.js         # Script animations
```

### Pages disponibles dans chaque langue

| Français | Anglais | Italien | Espagnol | Allemand |
|----------|---------|---------|----------|----------|
| index.html | index.html | index.html | index.html | index.html |
| apropos.html | about.html | chi-sono.html | acerca-de.html | uber-mich.html |
| projets.html | projects.html | progetti.html | proyectos.html | projekte.html |
| contact.html | contact.html | contatto.html | contacto.html | kontakt.html |
| certifications.html | certifications.html | certificazioni.html | certificaciones.html | zertifizierungen.html |
| veilles.html | tech-watch.html | vigilanza-tech.html | vigilancia-tech.html | tech-uberwachung.html |
| tcs.html | tcs.html | tcs.html | tcs.html | tcs.html |

## ⚡ Fonctionnalités

### Interface Utilisateur
- ✅ **Thème sombre par défaut** avec basculement clair/sombre persistant
- ✅ **Design sobre** : uniquement noir et blanc
- ✅ **Navigation dynamique** : chargement des includes via JavaScript
- ✅ **Sélecteur de langue** : 12 langues avec URLs traduites
- ✅ **Responsive design** : mobile, tablette, desktop
- ✅ **Affichage immédiat** : animations désactivées

### Formulaire de Contact
- ✅ **EmailJS intégré** : envoi direct vers flavien.garibaldi@gmail.com
- ✅ **Validation côté client** : email, champs obligatoires
- ✅ **Messages multilingues** : feedback traduit pour chaque langue
- ✅ **États visuels** : loading, succès, erreur
- ✅ **Limite gratuite** : 200 emails/mois

### Système de Navigation
- ✅ **Détection automatique** : Redirige vers la langue du navigateur
- ✅ **Chargement dynamique** : Header/footer chargés via fetch()
- ✅ **URLs propres** : Une URL unique par langue pour le SEO
- ✅ **Pas de flash** : Contenu déjà dans la bonne langue au chargement

### Code
- ✅ **Site 100% statique** : pas de backend PHP requis
- ✅ **JavaScript modulaire** : IIFE et mode strict
- ✅ **Cache busting** : style.css?v=2
- ✅ **Pas de dépendances** : vanilla JavaScript uniquement

### Performance
- ✅ **Léger** : ~1.5 MB pour le site complet (12 langues)
- ✅ **Rapide** : < 1 seconde de chargement
- ✅ **Compatible GitHub Pages** : chemins relatifs
- ✅ **Thème persistant** : localStorage
- ✅ **Lighthouse Score** : 90+/100

## ✅ Avantages de l'architecture

1. **Meilleur SEO** : Une URL unique par langue (ex: `/fr/apropos.html`, `/en/about.html`)
2. **Pas de flash** : Le contenu est déjà dans la bonne langue au chargement
3. **Performance** : Site 100% statique, léger et rapide
4. **Maintenance** : Plus facile à maintenir et modifier
5. **URLs propres** : Chaque langue a ses propres URLs descriptives
6. **Hébergement simple** : Compatible GitHub Pages, Netlify, Vercel (gratuit)
7. **Pas de serveur requis** : Fichiers HTML statiques uniquement

## 🛠️ Installation et déploiement

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

Accès : `http://localhost:8000`

### Option 1 : GitHub Pages (Gratuit)

1. Créer un dépôt GitHub
2. Pousser le code
3. Settings → Pages → Deploy from branch `main`
4. Site accessible à : `https://username.github.io/portfolio`

### Option 2 : Netlify (Gratuit)

1. Créer un compte sur [netlify.com](https://www.netlify.com/)
2. Glisser-déposer le dossier du portfolio
3. Site en ligne instantanément avec un domaine gratuit

### Option 3 : Vercel (Gratuit)

1. Créer un compte sur [vercel.com](https://vercel.com/)
2. Connecter votre repository GitHub
3. Déploiement automatique à chaque commit

## 📧 Configuration EmailJS

Le formulaire de contact utilise EmailJS pour l'envoi d'emails sans backend.

### Étapes de configuration :

1. **Créer un compte sur [EmailJS](https://www.emailjs.com/)**

2. **Créer un service email** :
   - Allez dans "Email Services"
   - Ajoutez Gmail, Outlook, ou un autre service
   - Notez votre `SERVICE_ID`

3. **Créer un template** :
   - Allez dans "Email Templates"
   - Créez un nouveau template
   - Utilisez ces variables :
     ```
     Nom: {{from_name}}
     Email: {{from_email}}
     Sujet: {{subject}}
     Message: {{message}}
     ```
   - Notez votre `TEMPLATE_ID`

4. **Obtenir votre clé publique** :
   - Allez dans "Account" > "General"
   - Copiez votre `PUBLIC_KEY`

5. **Configurer dans le code** :
   Modifiez `js/contact.js` :
   ```javascript
   const EMAILJS_CONFIG = {
       serviceId: 'votre_service_id',
       templateId: 'votre_template_id',
       publicKey: 'votre_public_key'
   };
   ```

6. **Ajouter le script EmailJS** :
   Dans tous vos fichiers `contact.html`, ajoutez avant la fermeture de `</body>` :
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script src="../js/contact.js"></script>
   ```

7. **Tester l'envoi** :
   - Remplissez le formulaire de contact
   - Vérifiez la console pour les erreurs
   - Vérifiez votre boîte email
   - Limite : 200 emails/mois sur le plan gratuit

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
**Police** : Google Fonts Poppins (300, 400, 600, 700)

## 📱 Responsive Design

Breakpoints :
- 📱 **Mobile** : < 480px
- 📱 **Tablette** : 480px - 768px
- 💻 **Desktop** : > 768px

Le portfolio s'adapte automatiquement à tous les écrans.

## 🔄 Système de navigation

### Détection automatique de la langue
Le fichier `index.html` racine détecte la langue du navigateur :
```javascript
const userLang = navigator.language || navigator.userLanguage;
// Redirige vers /fr/ ou /en/ ou autre selon la langue
```

### Chargement dynamique des includes
Le fichier `js/includes.js` charge automatiquement :
1. **Header** (`includes/header.html`) : Navigation + Sélecteur de langue + Toggle thème
2. **Footer** (`includes/footer.html`) : Informations de copyright et liens

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

## 🔧 Maintenance

### Ajouter une nouvelle page

1. Créer la page HTML dans chaque dossier de langue
2. Ajouter les liens de navigation dans `includes/header.html`
3. Mettre à jour la fonction `getNavLinks()` dans `js/includes.js`
4. Traduire le contenu pour chaque langue

### Ajouter une nouvelle langue

1. Créer un nouveau dossier (ex: `ru/` pour le russe)
2. Copier les fichiers HTML d'une autre langue
3. Traduire le contenu de chaque page
4. Ajouter la langue dans `js/includes.js` :
   - Dans `getLanguages()` : définition de la langue
   - Dans `getNavLinks()` : traduction des liens de navigation
5. Ajouter les messages traduits dans `js/contact.js`
6. Tester la navigation et le formulaire

### Modifier le design

- **Couleurs** : Variables CSS dans `:root` et `.light-theme`
- **Thèmes** : Modifier les valeurs dans `style.css`
- **Police** : Changer la police Google Fonts dans `style.css`
- **Responsive** : Ajuster les breakpoints dans `style.css`

### Mettre à jour le contenu

1. Modifier les fichiers HTML dans le dossier de langue approprié
2. Tester localement
3. Commit et push vers GitHub (déploiement automatique si configuré)

## 📦 Fichiers clés

### JavaScript
- `js/includes.js` : Chargement header/footer, navigation, gestion langue et thème (principal)
- `js/contact.js` : Gestion formulaire de contact avec EmailJS
- `theme-toggle.js` : Legacy, fonctionnalité intégrée dans includes.js
- `scroll-animations.js` : Animations au scroll (désactivées par défaut)

### CSS
- `style.css` : Tous les styles du site (~800 lignes)
  - Variables CSS pour les thèmes
  - Responsive design
  - Composants (navigation, formulaires, cartes, etc.)

### HTML
- `index.html` : Point d'entrée avec redirection automatique
- `includes/header.html` : En-tête réutilisable avec navigation
- `includes/footer.html` : Pied de page réutilisable
- `[langue]/[page].html` : 7 pages × 12 langues = 84 fichiers

## 🐛 Dépannage

### Le header/footer ne s'affiche pas

- Vérifier que `js/includes.js` est bien chargé
- Vérifier les chemins relatifs vers `includes/`
- Ouvrir la console navigateur pour voir les erreurs CORS
- Utiliser un serveur local (pas juste double-clic sur le fichier)

### Le formulaire de contact ne fonctionne pas

- Vérifier les clés EmailJS dans `js/contact.js`
- Vérifier que le script EmailJS CDN est chargé
- Ouvrir la console pour les erreurs d'envoi
- Vérifier la limite de 200 emails/mois
- Tester avec un email valide

### Le thème ne persiste pas

- Vérifier que localStorage est activé dans le navigateur
- Tester en navigation normale (pas privée)
- Vérifier le code dans `js/includes.js`
- Vérifier la console pour les erreurs JavaScript

### Le sélecteur de langue ne fonctionne pas

- Vérifier que les mappings de pages sont corrects dans `getNavLinks()`
- Vérifier que les fichiers HTML existent dans chaque dossier de langue
- Vérifier la correspondance des noms de fichiers
- Tester manuellement les URLs

### Erreurs CORS en local

Si vous ouvrez le fichier directement (file://), les includes ne fonctionneront pas.  
**Solution** : Utilisez un serveur local :
```bash
python -m http.server 8000
# ou
php -S localhost:8000
```

## 📊 Statistiques du projet

- **Langues** : 12 langues complètes
- **Pages** : 7 pages par langue = 84 fichiers HTML
- **Poids total** : ~1.5 MB (toutes langues incluses)
- **Temps de chargement** : < 1 seconde
- **Lighthouse Score** : 90+/100
- **Compatibilité** : Tous navigateurs modernes (Chrome, Firefox, Safari, Edge)
- **Mobile-friendly** : 100% responsive
- **Emails gratuits** : 200/mois via EmailJS

## 🔐 Sécurité

- ✅ Site 100% statique : aucune faille backend possible
- ✅ Pas de backend : pas de base de données à sécuriser
- ✅ EmailJS : validation côté client + limite de taux
- ✅ Pas de données sensibles stockées
- ✅ HTTPS par défaut sur GitHub Pages/Netlify/Vercel
- ✅ Pas de cookies ou tracking

## 🚀 Améliorations futures possibles

- [ ] Ajouter un système de blog multilingue
- [ ] Intégrer Google Analytics (optionnel)
- [ ] Ajouter un sitemap.xml pour le SEO
- [ ] Optimiser les images avec format WebP
- [ ] Ajouter PWA (Progressive Web App) capabilities
- [ ] Ajouter des tests automatisés
- [ ] Ajouter un mode haute contraste pour l'accessibilité
- [ ] Implémenter un système de recherche

## 📱 URLs et Structure

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

### Avantages SEO
- URLs propres et descriptives
- Contenu dans la langue native (pas de JavaScript de traduction)
- Meta tags adaptés à chaque langue
- Pas de duplication de contenu
- Performance optimale

## 📞 Contact et Support

**Auteur** : Flavien GARIBALDI  
**Email** : flavien.garibaldi@gmail.com  
**Projet** : Portfolio BTS SIO SISR

Pour toute question, suggestion d'amélioration ou rapport de bug, n'hésitez pas à me contacter par email.

## 📄 Licence

© 2024-2025 Flavien GARIBALDI. Tous droits réservés.

Ce portfolio est un projet personnel. Vous pouvez vous en inspirer mais merci de ne pas le copier directement.

---

**Dernière mise à jour** : 22 décembre 2024  
**Version** : 2.0 - Architecture statique HTML multilingue  
**Type** : Site statique HTML/CSS/JavaScript  
**Hébergement** : Compatible GitHub Pages, Netlify, Vercel

---

**Créé avec ❤️ par Flavien GARIBALDI**
