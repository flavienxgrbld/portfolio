# Nouveau Système de Traduction - Portfolio

## 🎯 Architecture

Le portfolio utilise maintenant une architecture basée sur des dossiers par langue au lieu de JavaScript pour les traductions.

```
portfolio/
├── index.php                    # Redirection automatique vers la langue du navigateur
├── fr/                          # Version française
│   ├── index.php
│   ├── apropos.php
│   ├── projets.php
│   ├── certifications.php
│   ├── tcs.php
│   ├── veilles.php
│   └── contact.php
├── en/                          # Version anglaise
│   ├── index.php
│   ├── about.php
│   ├── projects.php
│   ├── certifications.php
│   ├── tcs.php
│   ├── tech-watch.php
│   └── contact.php
├── it/                          # Version italienne (à compléter)
├── es/                          # Version espagnole (à compléter)
├── de/                          # Version allemande (à compléter)
├── includes/
│   ├── config.php               # Configuration générale
│   ├── lang-config.php          # Configuration des langues
│   ├── header.php               # Header avec sélecteur de langue
│   └── footer.php               # Footer
├── style.css                    # Styles communs
└── _old/                        # Anciens fichiers (backup)
```

## ✅ Avantages

1. **Meilleur SEO** : Une URL unique par langue (ex: `/fr/apropos.php`, `/en/about.php`)
2. **Pas de flash** : Le contenu est déjà dans la bonne langue au chargement
3. **Performance** : Pas de JavaScript requis pour les traductions
4. **Maintenance** : Plus facile à maintenir et modifier
5. **URLs propres** : Chaque langue a ses propres URLs descriptives

## 🚀 Fonctionnement

### Détection automatique de langue
Le fichier `index.php` à la racine détecte la langue du navigateur et redirige automatiquement vers le bon dossier.

### Sélecteur de langue
Un sélecteur de langue dans le header permet de basculer entre les versions :
- Conserve la même page (apropos → about → chi-sono)
- URLs traduites pour chaque langue

### Configuration
Le fichier `includes/lang-config.php` contient :
- Liste des langues disponibles
- Mapping des pages entre langues
- Fonctions utilitaires pour la gestion des langues

## 📝 Pour ajouter une nouvelle page

1. Créer la page dans chaque dossier de langue
2. Ajouter le mapping dans `includes/lang-config.php`
3. Ajouter le lien dans la navigation du `header.php`

## 🌍 Langues disponibles

### ✅ Complètes
- 🇫🇷 Français (fr) - Complet
- 🇬🇧 Anglais (en) - Complet

### 🚧 À compléter
- 🇮🇹 Italien (it) - Structure créée
- 🇪🇸 Espagnol (es) - Structure créée
- 🇩🇪 Allemand (de) - Structure créée

## 🔧 Migration depuis l'ancien système

Les anciens fichiers ont été déplacés dans le dossier `_old/` :
- ❌ `translations.js` (plus nécessaire)
- ❌ `lang-selector.php` (remplacé)
- ❌ Anciens fichiers PHP à la racine (déplacés dans les dossiers de langue)

## 📱 URLs

### Avant
```
portfolio/index.php
portfolio/apropos.php
portfolio/contact.php
```

### Maintenant
```
portfolio/               → Redirige vers /fr/ ou /en/ selon navigateur
portfolio/fr/index.php
portfolio/fr/apropos.php
portfolio/fr/contact.php
portfolio/en/index.php
portfolio/en/about.php
portfolio/en/contact.php
```

## 🎨 Personnalisation

Le sélecteur de langue peut être personnalisé dans `style.css` :
```css
.language-selector { ... }
.lang-current { ... }
.lang-dropdown { ... }
```

---

**Date de migration** : 19 décembre 2025
**Ancien système** : JavaScript client-side (translations.js)
**Nouveau système** : PHP server-side avec dossiers par langue
