<?php
/**
 * Redirection automatique vers la version localisée du site
 * Détecte la langue du navigateur et redirige vers le dossier approprié
 */

// Si on accède à ?q=info, afficher phpinfo
if (!empty($_GET['q']) && $_GET['q'] === 'info') {
    phpinfo();
    exit;
}

// Fonction pour détecter la langue préférée du navigateur
function getBrowserLanguage() {
    $langs = [];
    
    if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
        // Parser l'en-tête Accept-Language
        preg_match_all('/([a-z]{1,8}(-[a-z]{1,8})?)\s*(;\s*q\s*=\s*(1|0\.[0-9]+))?/i', 
                       $_SERVER['HTTP_ACCEPT_LANGUAGE'], $lang_parse);
        
        if (count($lang_parse[1])) {
            $langs = array_combine($lang_parse[1], $lang_parse[4]);
            
            foreach ($langs as $lang => $val) {
                if ($val === '') $langs[$lang] = 1;
            }
            
            arsort($langs, SORT_NUMERIC);
        }
    }
    
    // Langues supportées
    $supported = ['fr', 'en', 'it', 'es', 'de'];
    
    // Chercher une correspondance
    foreach ($langs as $lang => $val) {
        $lang = strtolower(substr($lang, 0, 2));
        if (in_array($lang, $supported)) {
            return $lang;
        }
    }
    
    // Par défaut, français
    return 'fr';
}

// Détecter la langue et rediriger
$lang = getBrowserLanguage();
header("Location: /$lang/index.php");
exit;
?>