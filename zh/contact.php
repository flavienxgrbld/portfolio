<?php
$message_sent = false;
$error_message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST['nom'] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(trim($_POST['email'] ?? ''), ENT_QUOTES, 'UTF-8');
    $sujet = htmlspecialchars(trim($_POST['sujet'] ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');
    
    if (empty($nom) || empty($email) || empty($sujet) || empty($message)) {
        $error_message = "所有字段都是必填的。";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "电子邮件地址无效。";
    } else {
        $to = "flavien.garibaldi@gmail.com";
        $email_subject = "Portfolio Contact: " . $sujet;
        $email_body = "您从作品集收到一条新消息。\n\n";
        $email_body .= "姓名：$nom\n";
        $email_body .= "电子邮件：$email\n";
        $email_body .= "主题：$sujet\n\n";
        $email_body .= "消息：\n$message\n";
        
        $headers = "From: noreply@portfolio.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        $message_sent = true;
    }
}

$pageTitle = '联系方式 - Flavien GARIBALDI';
$currentPage = 'contact.php';
include '../includes/header.php';
?>

    <section id="contact" style="margin-top: 100px;">
        <h2 class="fade-up">联系我</h2>
        <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            有问题、项目或只是想聊天？<br>
            请随时通过下面的表单与我联系。
        </p>

        <div class="contact-info-grid">
            <div class="contact-info-card">
                <i class="fas fa-envelope"></i>
                <h3>电子邮件</h3>
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
                    <strong>消息发送成功！</strong><br>
                    我会尽快回复您。
                </div>
            <?php endif; ?>

            <?php if (!empty($error_message)): ?>
                <div class="alert alert-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <strong>错误：</strong> <?php echo $error_message; ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="contact.php">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nom"><i class="fas fa-user"></i> 全名 *</label>
                        <input type="text" id="nom" name="nom" required placeholder="您的姓名" value="<?php echo isset($nom) ? $nom : ''; ?>">
                    </div>

                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> 电子邮件 *</label>
                        <input type="email" id="email" name="email" required placeholder="your.email@example.com" value="<?php echo isset($email) ? $email : ''; ?>">
                    </div>
                </div>

                <div class="form-group">
                    <label for="sujet"><i class="fas fa-tag"></i> 主题 *</label>
                    <input type="text" id="sujet" name="sujet" required placeholder="消息主题" value="<?php echo isset($sujet) ? $sujet : ''; ?>">
                </div>

                <div class="form-group">
                    <label for="message"><i class="fas fa-comment"></i> 消息 *</label>
                    <textarea id="message" name="message" required placeholder="您的消息..."><?php echo isset($message) && !$message_sent ? $message : ''; ?></textarea>
                </div>

                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> 发送消息
                </button>
            </form>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h3 style="margin-bottom: 1.5rem; color: var(--text-light);">也可以在这些平台找到我</h3>
            <div class="social-links">
                <a href="https://github.com/flavienxgrbld" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/flavien-garibaldi-b81b87350/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
