<?php
// Configuration des langues disponibles
$languages = [
    'fr' => [
        'code' => 'fr',
        'name' => 'Français',
        'flag' => '🇫🇷',
        'pages' => [
            'home' => 'index.php',
            'about' => 'apropos.php',
            'projects' => 'projets.php',
            'certifications' => 'certifications.php',
            'tcs' => 'tcs.php',
            'veilles' => 'veilles.php',
            'contact' => 'contact.php'
        ]
    ],
    'en' => [
        'code' => 'en',
        'name' => 'English',
        'flag' => '🇬🇧',
        'pages' => [
            'home' => 'index.php',
            'about' => 'about.php',
            'projects' => 'projects.php',
            'certifications' => 'certifications.php',
            'tcs' => 'tcs.php',
            'veilles' => 'tech-watch.php',
            'contact' => 'contact.php'
        ]
    ],
    'it' => [
        'code' => 'it',
        'name' => 'Italiano',
        'flag' => '🇮🇹',
        'pages' => [
            'home' => 'index.php',
            'about' => 'chi-sono.php',
            'projects' => 'progetti.php',
            'certifications' => 'certificazioni.php',
            'tcs' => 'tcs.php',
            'veilles' => 'vigilanza-tech.php',
            'contact' => 'contatto.php'
        ]
    ],
    'es' => [
        'code' => 'es',
        'name' => 'Español',
        'flag' => '🇪🇸',
        'pages' => [
            'home' => 'index.php',
            'about' => 'acerca-de.php',
            'projects' => 'proyectos.php',
            'certifications' => 'certificaciones.php',
            'tcs' => 'tcs.php',
            'veilles' => 'vigilancia-tech.php',
            'contact' => 'contacto.php'
        ]
    ],
    'de' => [
        'code' => 'de',
        'name' => 'Deutsch',
        'flag' => '🇩🇪',
        'pages' => [
            'home' => 'index.php',
            'about' => 'uber-mich.php',
            'projects' => 'projekte.php',
            'certifications' => 'zertifizierungen.php',
            'tcs' => 'tcs.php',
            'veilles' => 'tech-uberwachung.php',
            'contact' => 'kontakt.php'
        ]
    ]
];

// Détecter la langue actuelle depuis l'URL
function getCurrentLang() {
    $uri = $_SERVER['REQUEST_URI'];
    global $languages;
    
    foreach ($languages as $code => $lang) {
        if (strpos($uri, "/$code/") !== false) {
            return $code;
        }
    }
    
    return 'fr'; // Langue par défaut
}

// Obtenir l'URL équivalente dans une autre langue
function getUrlInLang($targetLang, $currentPage) {
    global $languages;
    $currentLang = getCurrentLang();
    
    // Trouver le type de page actuel
    $pageType = null;
    foreach ($languages[$currentLang]['pages'] as $type => $page) {
        if ($page === $currentPage) {
            $pageType = $type;
            break;
        }
    }
    
    // Retourner l'URL dans la langue cible
    if ($pageType && isset($languages[$targetLang]['pages'][$pageType])) {
        return "../$targetLang/" . $languages[$targetLang]['pages'][$pageType];
    }
    
    return "../$targetLang/index.php";
}

$currentLang = getCurrentLang();
?>
