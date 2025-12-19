<?php
$message_sent = false;
$error_message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST['nom'] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(trim($_POST['email'] ?? ''), ENT_QUOTES, 'UTF-8');
    $sujet = htmlspecialchars(trim($_POST['sujet'] ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');
    
    if (empty($nom) || empty($email) || empty($sujet) || empty($message)) {
        $error_message = "Wszystkie pola są wymagane.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "Adres email jest nieprawidłowy.";
    } else {
        $to = "flavien.garibaldi@gmail.com";
        $email_subject = "Portfolio Contact: " . $sujet;
        $email_body = "Otrzymałeś nową wiadomość ze swojego portfolio.\n\n";
        $email_body .= "Imię i nazwisko: $nom\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Temat: $sujet\n\n";
        $email_body .= "Wiadomość:\n$message\n";
        
        $headers = "From: noreply@portfolio.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        $message_sent = true;
    }
}

$pageTitle = 'Kontakt - Flavien GARIBALDI';
$currentPage = 'kontakt.php';
include '../includes/header.php';
?>

    <section id="contact" style="margin-top: 100px;">
        <h2 class="fade-up">Skontaktuj się ze mną</h2>
        <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            Masz pytanie, projekt lub po prostu chcesz porozmawiać?<br>
            Nie wahaj się skontaktować ze mną za pomocą poniższego formularza.
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
                    <strong>Wiadomość została wysłana pomyślnie!</strong><br>
                    Odpowiem jak najszybciej.
                </div>
            <?php endif; ?>

            <?php if (!empty($error_message)): ?>
                <div class="alert alert-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <strong>Błąd:</strong> <?php echo $error_message; ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="kontakt.php">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nom"><i class="fas fa-user"></i> Imię i nazwisko *</label>
                        <input type="text" id="nom" name="nom" required placeholder="Twoje imię i nazwisko" value="<?php echo isset($nom) ? $nom : ''; ?>">
                    </div>

                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> Email *</label>
                        <input type="email" id="email" name="email" required placeholder="twoj.email@przyklad.pl" value="<?php echo isset($email) ? $email : ''; ?>">
                    </div>
                </div>

                <div class="form-group">
                    <label for="sujet"><i class="fas fa-tag"></i> Temat *</label>
                    <input type="text" id="sujet" name="sujet" required placeholder="Temat wiadomości" value="<?php echo isset($sujet) ? $sujet : ''; ?>">
                </div>

                <div class="form-group">
                    <label for="message"><i class="fas fa-comment"></i> Wiadomość *</label>
                    <textarea id="message" name="message" required placeholder="Twoja wiadomość..."><?php echo isset($message) && !$message_sent ? $message : ''; ?></textarea>
                </div>

                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> Wyślij wiadomość
                </button>
            </form>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h3 style="margin-bottom: 1.5rem; color: var(--text-light);">Znajdź mnie również na</h3>
            <div class="social-links">
                <a href="https://github.com/flavienxgrbld" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/flavien-garibaldi-b81b87350/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
