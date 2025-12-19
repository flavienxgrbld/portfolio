<?php
$message_sent = false;
$error_message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST['nom'] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(trim($_POST['email'] ?? ''), ENT_QUOTES, 'UTF-8');
    $sujet = htmlspecialchars(trim($_POST['sujet'] ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');
    
    if (empty($nom) || empty($email) || empty($sujet) || empty($message)) {
        $error_message = "Todos os campos são obrigatórios.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "O endereço de e-mail não é válido.";
    } else {
        $to = "flavien.garibaldi@gmail.com";
        $email_subject = "Portfolio Contact: " . $sujet;
        $email_body = "Você recebeu uma nova mensagem do seu portfólio.\n\n";
        $email_body .= "Nome: $nom\n";
        $email_body .= "E-mail: $email\n";
        $email_body .= "Assunto: $sujet\n\n";
        $email_body .= "Mensagem:\n$message\n";
        
        $headers = "From: noreply@portfolio.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        $message_sent = true;
    }
}

$pageTitle = 'Contato - Flavien GARIBALDI';
$currentPage = 'contato.php';
include '../includes/header.php';
?>

    <section id="contact" style="margin-top: 100px;">
        <h2 class="fade-up">Entre em Contato</h2>
        <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            Tem uma dúvida, um projeto ou simplesmente quer conversar?<br>
            Não hesite em entrar em contato através do formulário abaixo.
        </p>

        <div class="contact-info-grid">
            <div class="contact-info-card">
                <i class="fas fa-envelope"></i>
                <h3>E-mail</h3>
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
                    <strong>Mensagem enviada com sucesso!</strong><br>
                    Responderei o mais breve possível.
                </div>
            <?php endif; ?>

            <?php if (!empty($error_message)): ?>
                <div class="alert alert-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <strong>Erro:</strong> <?php echo $error_message; ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="contato.php">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nom"><i class="fas fa-user"></i> Nome completo *</label>
                        <input type="text" id="nom" name="nom" required placeholder="Seu nome" value="<?php echo isset($nom) ? $nom : ''; ?>">
                    </div>

                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> E-mail *</label>
                        <input type="email" id="email" name="email" required placeholder="seu.email@exemplo.com.br" value="<?php echo isset($email) ? $email : ''; ?>">
                    </div>
                </div>

                <div class="form-group">
                    <label for="sujet"><i class="fas fa-tag"></i> Assunto *</label>
                    <input type="text" id="sujet" name="sujet" required placeholder="O assunto da sua mensagem" value="<?php echo isset($sujet) ? $sujet : ''; ?>">
                </div>

                <div class="form-group">
                    <label for="message"><i class="fas fa-comment"></i> Mensagem *</label>
                    <textarea id="message" name="message" required placeholder="Sua mensagem..."><?php echo isset($message) && !$message_sent ? $message : ''; ?></textarea>
                </div>

                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> Enviar mensagem
                </button>
            </form>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h3 style="margin-bottom: 1.5rem; color: var(--text-light);">Me encontre também em</h3>
            <div class="social-links">
                <a href="https://github.com/flavienxgrbld" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/flavien-garibaldi-b81b87350/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
