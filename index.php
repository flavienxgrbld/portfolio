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
    <title>Mon Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- Navigation -->
    <nav>
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="apropos.php">À propos</a></li>
            <li><a href="projets.php">Mes Projets</a></li>
            <li><a href="certifications.php">Certifications</a></li>
            <li><a href="tcs.php">TCS</a></li>
            <li><a href="veilles.php">Veilles</a></li>
            <li><a href="contact.php">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="hero">
        <div class="hero-content">
            <h1>Bonjour, je suis Flavien GARIBALDI</h1>
            <p>étudiant en BTS SIO SISR</p>
            <a href="contact.php" class="btn">Me Contacter</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; <?php echo date('Y'); ?> Flavien GARIBALDI. Tous droits réservés.</p>
    </footer>

    <script>
        // Smooth scroll for navigation links
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