<?php
// Initialiser les variables
$message_sent = false;
$error_message = '';

// Traitement du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer et nettoyer les données
    $nom = htmlspecialchars(trim($_POST['nom'] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(trim($_POST['email'] ?? ''), ENT_QUOTES, 'UTF-8');
    $sujet = htmlspecialchars(trim($_POST['sujet'] ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');
    
    // Validation basique
    if (empty($nom) || empty($email) || empty($sujet) || empty($message)) {
        $error_message = "Tous les champs sont obligatoires.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "L'adresse email n'est pas valide.";
    } else {
        // Configuration de l'email
        $to = "flavien.garibaldi@gmail.com";
        $email_subject = "Portfolio Contact: " . $sujet;
        $email_body = "Vous avez reçu un nouveau message depuis votre portfolio.\n\n";
        $email_body .= "Nom: $nom\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Sujet: $sujet\n\n";
        $email_body .= "Message:\n$message\n";
        
        $headers = "From: noreply@portfolio.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        // Envoi de l'email (décommenté quand le serveur mail est configuré)
        // if (mail($to, $email_subject, $email_body, $headers)) {
        //     $message_sent = true;
        // } else {
        //     $error_message = "Une erreur est survenue lors de l'envoi du message.";
        // }
        
        // Pour le développement, on simule l'envoi
        $message_sent = true;
    }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Flavien GARIBALDI</title>
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

    <!-- Contact Section -->
    <section id="contact" style="margin-top: 100px;">
        <h2>Me Contacter</h2>
        <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            Vous avez une question, un projet ou simplement envie d'échanger ?<br>
            N'hésitez pas à me contacter via le formulaire ci-dessous.
        </p>

        <!-- Informations de contact -->
        <div class="contact-info-grid">
            <div class="contact-info-card">
                <i class="fas fa-envelope"></i>
                <h3>Email</h3>
                <p><a href="mailto:flavien.garibaldi@gmail.com">flavien.garibaldi@gmail.com</a></p>
            </div>

            <div class="contact-info-card">
                <i class="fab fa-github"></i>
                <h3>GitHub</h3>
                <p><a href="https://github.com/flavienxgrbld" target="_blank">@flavienxgrbld</a></p>
            </div>

            <div class="contact-info-card">
                <i class="fab fa-linkedin"></i>
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/flavien-garibaldi-b81b87350/" target="_blank">Flavien Garibaldi</a></p>
            </div>
        </div>

        <!-- Formulaire de contact -->
        <div class="contact-form">
            <?php if ($message_sent): ?>
                <div class="alert alert-success">
                    <i class="fas fa-check-circle"></i>
                    <strong>Message envoyé avec succès !</strong><br>
                    Je vous répondrai dans les plus brefs délais.
                </div>
            <?php endif; ?>

            <?php if (!empty($error_message)): ?>
                <div class="alert alert-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <strong>Erreur :</strong> <?php echo $error_message; ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="contact.php">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nom"><i class="fas fa-user"></i> Nom complet *</label>
                        <input type="text" id="nom" name="nom" required placeholder="Votre nom" value="<?php echo isset($nom) ? $nom : ''; ?>">
                    </div>

                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> Email *</label>
                        <input type="email" id="email" name="email" required placeholder="votre.email@example.com" value="<?php echo isset($email) ? $email : ''; ?>">
                    </div>
                </div>

                <div class="form-group">
                    <label for="sujet"><i class="fas fa-tag"></i> Sujet *</label>
                    <input type="text" id="sujet" name="sujet" required placeholder="L'objet de votre message" value="<?php echo isset($sujet) ? $sujet : ''; ?>">
                </div>

                <div class="form-group">
                    <label for="message"><i class="fas fa-comment"></i> Message *</label>
                    <textarea id="message" name="message" required placeholder="Votre message..."><?php echo isset($message) && !$message_sent ? $message : ''; ?></textarea>
                </div>

                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> Envoyer le message
                </button>
            </form>
        </div>

        <!-- Section réseaux sociaux -->
        <div style="margin-top: 4rem; text-align: center;">
            <h3 style="margin-bottom: 1.5rem; color: var(--text-light);">Retrouvez-moi également sur</h3>
            <div class="social-links">
                <a href="https://github.com/flavienxgrbld" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/flavien-garibaldi-b81b87350/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; <?php echo date('Y'); ?> Flavien GARIBALDI. Tous droits réservés.</p>
    </footer>
</body>

</html>
