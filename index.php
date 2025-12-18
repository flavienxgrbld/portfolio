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
    $pageTitle = 'Portfolio - Flavien GARIBALDI';
    include 'includes/header.php';
?>

    <section id="accueil" class="hero">
        <div class="hero-content">
            <h1 class="fade-up">Flavien GARIBALDI</h1>
            <p class="fade-up" data-i18n="hero_subtitle">étudiant en BTS SIO SISR</p>
            <a href="contact.php" class="btn fade-up" data-i18n="btn_contact">Me Contacter</a>
            <a href="apropos.php" class="btn fade-up" data-i18n="btn_about">À propos de moi</a>
            <a href="projets.php" class="btn fade-up" data-i18n="btn_projects">parcourir mes projets</a>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>