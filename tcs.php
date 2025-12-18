<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TCS - Flavien GARIBALDI</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <nav>
        <ul>
            <li><a href="index.php" data-i18n="nav_home">Accueil</a></li>
            <li><a href="apropos.php" data-i18n="nav_about">À propos</a></li>
            <li><a href="projets.php" data-i18n="nav_projects">Mes Projets</a></li>
            <li><a href="certifications.php" data-i18n="nav_certifications">Certifications</a></li>
            <li><a href="tcs.php" data-i18n="nav_tcs">TCS</a></li>
            <li><a href="veilles.php" data-i18n="nav_veilles">Veilles</a></li>
            <li><a href="contact.php" data-i18n="nav_contact">Contact</a></li>
        </ul>
    </nav>

    <section id="tcs" style="margin-top: 100px;">
        <h2 class="fade-up" data-i18n="title_tcs">Tableaux de Compétences et Synthèse (TCS)</h2>
        <div class="tcs-content">
            <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
                Retrouvez ici mes tableaux de compétences et synthèses réalisés dans le cadre du BTS SIO option SISR.<br>
                Ces documents présentent mes acquis professionnels et mes réalisations.
            </p>

            <div class="project-card" style="margin-top: 3rem; background: rgba(99, 102, 241, 0.1);">
                <div class="project-info">
                    <h3><i class="fas fa-info-circle"></i> Information</h3>
                    <p>Les documents TCS seront mis à jour régulièrement au fur et à mesure de l'acquisition de nouvelles compétences durant ma formation.</p>
                </div>
            </div>
        </div>
    </section>

    <?php include 'lang-selector.php'; ?>

    <button class="theme-toggle" id="themeToggle" aria-label="Changer de thème">
        <i class="fas fa-moon"></i>
    </button>

    <footer>
        <p>&copy; <?php echo date('Y'); ?> Flavien GARIBALDI. Tous droits réservés.</p>
    </footer>

    <script src="scroll-animations.js"></script>
    <script src="theme-toggle.js"></script>
</body>

</html>
