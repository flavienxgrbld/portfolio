<?php
    $pageTitle = '关于我 - Flavien GARIBALDI';
    $currentPage = 'about.php';
    include '../includes/header.php';
?>

    <section id="apropos" style="margin-top: 100px;">
        <h2 class="fade-up">关于我</h2>
        <div class="about-content">
            <div class="about-text">
                <p>我是BTS SIO SISR（基础设施、系统和网络解决方案）专业的学生，对信息技术和新技术充满热情。</p>
                <p>我的学习历程让我掌握了系统和网络管理、网络安全以及IT基础设施管理等方面的技能。</p>
                <p>我不断关注技术发展，以了解IT和网络安全领域的最新创新。</p>
                
                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">我的技能</h3>
                <div class="skills">
                    <span class="skill-tag">MySQL</span>
                    <span class="skill-tag">Linux</span>
                    <span class="skill-tag">Windows Server</span>
                    <span class="skill-tag">Réseaux</span>
                    <span class="skill-tag">Cybersécurité</span>
                    <span class="skill-tag">Virtualisation</span>
                    <span class="skill-tag">Git</span>
                </div>

                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">教育背景</h3>
                <div class="project-card" style="margin-top: 1rem;">
                    <div class="project-info">
                        <h3>BTS SIO SISR</h3>
                        <p style="color: var(--primary-color); margin: 0.5rem 0;">2024年 - 2026年</p>
                        <p>基础设施、系统和网络解决方案培训，侧重于系统管理、网络管理和网络安全。</p>
                    </div>
                </div>
            </div>
            <div class="about-image">
                <i class="fas fa-user-graduate" style="font-size: 15rem; color: var(--primary-color); opacity: 0.2;"></i>
            </div>
        </div>

        <div class="contact-content" style="margin-top: 4rem;">
            <h3 style="margin-bottom: 2rem;">联系我</h3>
            <a href="mailto:flavien.garibaldi@gmail.com" class="btn">
                <i class="fas fa-envelope"></i> flavien.garibaldi@gmail.com
            </a>
            <div class="social-links">
                <a href="https://github.com/flavienxgrbld" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/flavien-garibaldi-b81b87350/" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
