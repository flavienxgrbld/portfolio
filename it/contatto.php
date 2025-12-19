<?php
$message_sent = false;
$error_message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST['nom'] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(trim($_POST['email'] ?? ''), ENT_QUOTES, 'UTF-8');
    $sujet = htmlspecialchars(trim($_POST['sujet'] ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');
    
    if (empty($nom) || empty($email) || empty($sujet) || empty($message)) {
        $error_message = "Tutti i campi sono obbligatori.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "L'indirizzo email non è valido.";
    } else {
        $message_sent = true;
    }
}

$pageTitle = 'Contatto - Flavien GARIBALDI';
$currentPage = 'contatto.php';
include '../includes/header.php';
?>

    <section id="contact" style="margin-top: 100px;">
        <h2 class="fade-up">Contattami</h2>
        <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            Hai una domanda, un progetto o vuoi semplicemente chiacchierare?<br>
            Non esitare a contattarmi tramite il modulo qui sotto.
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
                    <strong>Messaggio inviato con successo!</strong><br>
                    Ti risponderò al più presto.
                </div>
            <?php endif; ?>

            <?php if (!empty($error_message)): ?>
                <div class="alert alert-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <strong>Errore:</strong> <?php echo $error_message; ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="contatto.php">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nom"><i class="fas fa-user"></i> Nome completo *</label>
                        <input type="text" id="nom" name="nom" required placeholder="Il tuo nome" value="<?php echo isset($nom) ? $nom : ''; ?>">
                    </div>

                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> Email *</label>
                        <input type="email" id="email" name="email" required placeholder="tua.email@esempio.com" value="<?php echo isset($email) ? $email : ''; ?>">
                    </div>
                </div>

                <div class="form-group">
                    <label for="sujet"><i class="fas fa-tag"></i> Oggetto *</label>
                    <input type="text" id="sujet" name="sujet" required placeholder="L'oggetto del tuo messaggio" value="<?php echo isset($sujet) ? $sujet : ''; ?>">
                </div>

                <div class="form-group">
                    <label for="message"><i class="fas fa-comment"></i> Messaggio *</label>
                    <textarea id="message" name="message" required placeholder="Il tuo messaggio..."><?php echo isset($message) && !$message_sent ? $message : ''; ?></textarea>
                </div>

                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> Invia messaggio
                </button>
            </form>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
