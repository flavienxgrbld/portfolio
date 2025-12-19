<?php
$message_sent = false;
$error_message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST['nom'] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(trim($_POST['email'] ?? ''), ENT_QUOTES, 'UTF-8');
    $sujet = htmlspecialchars(trim($_POST['sujet'] ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');
    
    if (empty($nom) || empty($email) || empty($sujet) || empty($message)) {
        $error_message = "Todos los campos son obligatorios.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "La dirección de correo no es válida.";
    } else {
        $message_sent = true;
    }
}

$pageTitle = 'Contacto - Flavien GARIBALDI';
$currentPage = 'contacto.php';
include '../includes/header.php';
?>

    <section id="contact" style="margin-top: 100px;">
        <h2 class="fade-up">Contáctame</h2>
        <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            ¿Tienes una pregunta, un proyecto o simplemente quieres charlar?<br>
            No dudes en contactarme usando el formulario a continuación.
        </p>

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

        <div class="contact-form">
            <?php if ($message_sent): ?>
                <div class="alert alert-success">
                    <i class="fas fa-check-circle"></i>
                    <strong>¡Mensaje enviado con éxito!</strong><br>
                    Te responderé lo antes posible.
                </div>
            <?php endif; ?>

            <?php if (!empty($error_message)): ?>
                <div class="alert alert-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <strong>Error:</strong> <?php echo $error_message; ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="contacto.php">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nom"><i class="fas fa-user"></i> Nombre completo *</label>
                        <input type="text" id="nom" name="nom" required placeholder="Tu nombre" value="<?php echo isset($nom) ? $nom : ''; ?>">
                    </div>

                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> Email *</label>
                        <input type="email" id="email" name="email" required placeholder="tu.email@ejemplo.com" value="<?php echo isset($email) ? $email : ''; ?>">
                    </div>
                </div>

                <div class="form-group">
                    <label for="sujet"><i class="fas fa-tag"></i> Asunto *</label>
                    <input type="text" id="sujet" name="sujet" required placeholder="El asunto de tu mensaje" value="<?php echo isset($sujet) ? $sujet : ''; ?>">
                </div>

                <div class="form-group">
                    <label for="message"><i class="fas fa-comment"></i> Mensaje *</label>
                    <textarea id="message" name="message" required placeholder="Tu mensaje..."><?php echo isset($message) && !$message_sent ? $message : ''; ?></textarea>
                </div>

                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> Enviar mensaje
                </button>
            </form>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
