# Portfolio Multilingue - Flavien GARIBALDI

Portfolio professionnel en HTML/CSS/JavaScript avec support de 12 langues.

## 🌍 Langues supportées

- 🇫🇷 Français
- 🇬🇧 English
- 🇮🇹 Italiano
- 🇪🇸 Español
- 🇩🇪 Deutsch
- 🇳🇱 Nederlands
- 🇵🇱 Polski
- 🇵🇹 Português (PT)
- 🇧🇷 Português (BR)
- 🇯🇵 日本語
- 🇨🇳 中文
- 🇸🇦 العربية

## 📁 Structure du projet

```
portfolio/
├── fr/              # Version française
├── en/              # Version anglaise
├── it/              # Version italienne
├── es/              # Version espagnole
├── de/              # Version allemande
├── nl/              # Version néerlandaise
├── pl/              # Version polonaise
├── pt/              # Version portugaise (PT)
├── pt-BR/           # Version portugaise (BR)
├── ja/              # Version japonaise
├── zh/              # Version chinoise
├── ar/              # Version arabe
├── includes/
│   ├── header.html  # En-tête réutilisable
│   └── footer.html  # Pied de page réutilisable
├── js/
│   ├── includes.js  # Gestion des includes et navigation
│   └── contact.js   # Gestion du formulaire de contact
├── style.css        # Styles CSS
├── theme-toggle.js  # Gestion du thème sombre/clair
└── scroll-animations.js  # Animations au scroll
```

## 🚀 Déploiement

### Option 1 : GitHub Pages (Gratuit)

1. Créer un dépôt GitHub
2. Pousser le code
3. Activer GitHub Pages dans les paramètres
4. Votre site sera accessible à `username.github.io/repository`

### Option 2 : Netlify (Gratuit)

1. Créer un compte sur [Netlify](https://www.netlify.com/)
2. Glisser-déposer le dossier du portfolio
3. Site en ligne instantanément avec un domaine gratuit

### Option 3 : Vercel (Gratuit)

1. Créer un compte sur [Vercel](https://vercel.com/)
2. Connecter votre dépôt GitHub
3. Déploiement automatique à chaque commit

## 📧 Configuration du formulaire de contact

Le formulaire de contact utilise **EmailJS** (gratuit jusqu'à 200 emails/mois).

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
   <script src="/js/contact.js"></script>
   ```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `style.css` et changez les variables CSS :

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --bg-dark: #0f172a;
    --text-light: #f8fafc;
}
```

### Ajouter une nouvelle langue

1. Créer un nouveau dossier (ex: `ru/` pour le russe)
2. Copier les fichiers HTML d'une autre langue
3. Traduire le contenu
4. Ajouter la langue dans `js/includes.js` :
   - Dans `getLanguages()`
   - Dans `getNavLinks()`

## 🔧 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS
- **JavaScript** : Navigation dynamique, includes, formulaires
- **EmailJS** : Envoi d'emails depuis le frontend
- **Font Awesome** : Icônes
- **Google Fonts** : Police Poppins

## 📱 Responsive

Le portfolio est entièrement responsive et s'adapte à tous les écrans :
- 📱 Mobile (< 768px)
- 📱 Tablette (768px - 1024px)
- 💻 Desktop (> 1024px)

## ⚡ Performance

- Chargement rapide (HTML statique)
- Images optimisées
- CSS minifié
- Scripts différés
- Hébergement CDN pour les librairies

## 📄 Licence

Tous droits réservés © Flavien GARIBALDI

## 🤝 Support

Pour toute question : flavien.garibaldi@gmail.com

---

**Créé avec ❤️ par Flavien GARIBALDI**
