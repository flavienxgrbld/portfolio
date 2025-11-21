<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>À Propos - Flavien GARIBALDI</title>
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

    <!-- About Section -->
    <section id="apropos" style="margin-top: 100px;">
        <h2>À Propos de Moi</h2>
        <div class="about-content">
            <div class="about-text">
                <p>Je suis un étudiant en BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux), passionné par l'informatique et les nouvelles technologies.</p>
                <p>Mon parcours me permet d'acquérir des compétences en administration systèmes et réseaux, en cybersécurité, et en gestion d'infrastructures informatiques.</p>
                <p>Je suis constamment en veille technologique pour rester à jour sur les dernières innovations du domaine de l'IT et de la sécurité informatique.</p>
                
                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Mes Compétences</h3>
                <div class="skills">
                    <!-- <span class="skill-tag">HTML/CSS</span>
                    <span class="skill-tag">JavaScript</span> 
                    <span class="skill-tag">PHP</span>  -->
                    <span class="skill-tag">MySQL</span>
                    <span class="skill-tag">Linux</span>
                    <span class="skill-tag">Windows Server</span>
                    <span class="skill-tag">Réseaux</span>
                    <span class="skill-tag">Cybersécurité</span>
                    <span class="skill-tag">Virtualisation</span>
                    <span class="skill-tag">Git</span>
                </div>

                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Formation</h3>
                <div class="project-card" style="margin-top: 1rem;">
                    <div class="project-info">
                        <h3>BTS SIO SISR</h3>
                        <p style="color: var(--primary-color); margin: 0.5rem 0;">2024 - 2026</p>
                        <p>Formation en Solutions d'Infrastructure, Systèmes et Réseaux, axée sur l'administration des systèmes, la gestion des réseaux et la cybersécurité.</p>
                    </div>
                </div>
            </div>
            <div class="about-image">
                <i class="fas fa-user-graduate" style="font-size: 15rem; color: var(--primary-color); opacity: 0.2;"></i>
            </div>
        </div>

        <!-- Contact rapide -->
        <div class="contact-content" style="margin-top: 4rem;">
            <h3 style="margin-bottom: 2rem;">Me Contacter</h3>
            <a href="mailto:flavien.garibaldi@gmail.com" class="btn">
                <i class="fas fa-envelope"></i> flavien.garibaldi@gmail.com
            </a>
            <div class="social-links">
                <a href="https://github.com/flavienxgrbld" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/flavien-garibaldi-b81b87350/" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; <?php echo date('Y'); ?> Flavien GARIBALDI. Tous droits réservés.</p>
    </footer>
</body>

</html>
