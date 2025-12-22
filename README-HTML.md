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
   <script src="../js/contact.js"></script>
   ```

7. **Tester l'envoi** :
   - Remplissez le formulaire de contact
   - Vérifiez la console pour les erreurs
   - Vérifiez votre boîte email
   - Limite : 200 emails/mois sur le plan gratuit
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
3. Traduire le contenu de chaque page
4. Ajouter la langue dans `js/includes.js` :
   - Dans `getLanguages()` : définition de la langue
   - Dans `getNavLinks()` : traduction des liens de navigation
5. Ajouter les messages traduits dans `js/contact.js`
6. Tester la navigation et le formulaire

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
- CSS organisé et optimisé
- Scripts différés (defer)
- Préconnexion aux ressources externes (Google Fonts, EmailJS CDN)
- Cache busting pour les fichiers CSS (`style.css?v=2`)
- Lighthouse Score : 90+/100

## 🔧 Maintenance et évolution

### Mettre à jour le contenu
1. Modifier les fichiers HTML dans le dossier de langue approprié
2. Tester localement
3. Commit et push vers GitHub (déploiement automatique si configuré)

### Ajouter une nouvelle page
1. Créer la page dans tous les dossiers de langue
2. Ajouter le lien dans `includes/header.html`
3. Mettre à jour `getNavLinks()` dans `js/includes.js`
4. Traduire le contenu pour chaque langue

### Modifier le design
- Thèmes : Variables CSS dans `:root` et `.light-theme`
- Couleurs : Noir et blanc uniquement par défaut
- Police : Poppins via Google Fonts (modifiable dans `style.css`)
- Responsive : Breakpoints dans `style.css` (480px, 768px, 1024px)

## 🐛 Dépannage

### Le header/footer ne s'affiche pas
- Vérifier que `js/includes.js` est bien chargé
- Vérifier les chemins relatifs vers `includes/`
- Ouvrir la console navigateur pour voir les erreurs

### Le formulaire de contact ne fonctionne pas
- Vérifier les clés EmailJS dans `js/contact.js`
- Vérifier la limite de 200 emails/mois
- Vérifier que le script EmailJS CDN est chargé
- Ouvrir la console pour les erreurs

### Le sélecteur de langue ne fonctionne pas
- Vérifier les mappings dans `getNavLinks()` dans `js/includes.js`
- Vérifier que les fichiers HTML existent dans chaque dossier
- Vérifier la correspondance des noms de fichiers

### Le thème ne persiste pas
- Vérifier que localStorage est activé
- Tester en navigation privée
- Vérifier le code de gestion du thème dans `js/includes.js`

## 📊 Statistiques

- **12 langues** supportées
- **7 pages** par langue (84 fichiers HTML au total)
- **~1.5 MB** poids total du site
- **< 1 seconde** temps de chargement
- **100% responsive** mobile, tablette, desktop
- **200 emails/mois** via EmailJS (plan gratuit)

## 🔐 Sécurité

- ✅ Site 100% statique : pas de failles backend
- ✅ Pas de données sensibles stockées
- ✅ EmailJS : validation et limite de taux
- ✅ HTTPS par défaut sur GitHub Pages/Netlify/Vercel
- ✅ Pas de cookies ou tracking

## 🚀 Améliorations futures possibles

- [ ] Ajouter un système de blog multilingue
- [ ] Intégrer Google Analytics (optionnel)
- [ ] Ajouter un sitemap.xml pour le SEO
- [ ] Optimiser les images avec format WebP
- [ ] Ajouter PWA (Progressive Web App) capabilities
- [ ] Ajouter des tests automatisés

## 📞 Support et Contact

**Auteur** : Flavien GARIBALDI  
**Email** : flavien.garibaldi@gmail.com  
**Portfolio** : [Votre URL]

Pour toute question, suggestion ou problème, n'hésitez pas à me contacter.

---

## 📄 Licence

© 2024-2025 Flavien GARIBALDI. Tous droits réservés.

Ce portfolio est un projet personnel. Vous pouvez vous en inspirer mais merci de ne pas le copier directement.
