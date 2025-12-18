<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio de Flavien GARIBALDI, étudiant en BTS SIO SISR. Compétences en réseaux, systèmes, cybersécurité et virtualisation.">
    <meta name="keywords" content="Portfolio, BTS SIO, SISR, Réseaux, Systèmes, Cybersécurité, Flavien GARIBALDI">
    <meta name="author" content="Flavien GARIBALDI">
    <meta property="og:title" content="<?php echo $pageTitle ?? 'Portfolio - Flavien GARIBALDI'; ?>">
    <meta property="og:description" content="Portfolio professionnel de Flavien GARIBALDI, étudiant en BTS SIO SISR">
    <meta property="og:type" content="website">
    <title><?php echo $pageTitle ?? 'Portfolio - Flavien GARIBALDI'; ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    require_once 'includes/config.php';
    ?>
    <nav>
        <ul>
            <?php foreach ($navLinks as $link): ?>
                <li><a href="<?php echo $link['href']; ?>" data-i18n="<?php echo $link['i18n']; ?>"><?php echo $link['text']; ?></a></li>
            <?php endforeach; ?>
        </ul>
    </nav>
