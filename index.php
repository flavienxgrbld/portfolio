<?php
    if (! empty($_GET['q'])) {
        $query = htmlspecialchars($_GET['q'], ENT_QUOTES, 'UTF-8');

        switch ($query) {
            case 'info':
                phpinfo();
                exit;
            default:
                header("HTTP/1.0 404 Not Found");
                echo "Invalid query parameter.";
                exit;
        }
    }
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio -- Flavien GARIBALDI</title>
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

    <section id="accueil" class="hero">
        <div class="hero-content">
            <h1 class="fade-up">Flavien GARIBALDI</h1>
            <p class="fade-up" data-i18n="hero_subtitle">étudiant en BTS SIO SISR</p>
            <a href="contact.php" class="btn fade-up" data-i18n="btn_contact">Me Contacter</a>
            <a href="apropos.php" class="btn fade-up" data-i18n="btn_about">À propos de moi</a>
            <a href="projets.php" class="btn fade-up" data-i18n="btn_projects">parcourir mes projets</a>
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
    <script>

        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const icon = themeToggle.querySelector('i');

        const currentTheme = localStorage.getItem('theme') || 'dark';
        if (currentTheme === 'light') {
            body.classList.add('light-theme');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            
            if (body.classList.contains('light-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>

</html>