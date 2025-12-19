<?php
    $pageTitle = '私について - Flavien GARIBALDI';
    $currentPage = 'about.php';
    include '../includes/header.php';
?>

    <section id="apropos" style="margin-top: 100px;">
        <h2 class="fade-up">私について</h2>
        <div class="about-content">
            <div class="about-text">
                <p>私はBTS SIO SISR（インフラ、システム、ネットワークソリューション）専攻の学生で、情報技術と新しいテクノロジーに情熱を持っています。</p>
                <p>私の学習過程では、システムとネットワークの管理、サイバーセキュリティ、ITインフラストラクチャの管理などのスキルを習得しています。</p>
                <p>ITとサイバーセキュリティ分野における最新のイノベーションを把握するため、常に技術動向を監視しております。</p>
                
                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">スキル</h3>
                <div class="skills">
                    <span class="skill-tag">MySQL</span>
                    <span class="skill-tag">Linux</span>
                    <span class="skill-tag">Windows Server</span>
                    <span class="skill-tag">Réseaux</span>
                    <span class="skill-tag">Cybersécurité</span>
                    <span class="skill-tag">Virtualisation</span>
                    <span class="skill-tag">Git</span>
                </div>

                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">学歴</h3>
                <div class="project-card" style="margin-top: 1rem;">
                    <div class="project-info">
                        <h3>BTS SIO SISR</h3>
                        <p style="color: var(--primary-color); margin: 0.5rem 0;">2024年 - 2026年</p>
                        <p>インフラ、システム、ネットワークソリューションの教育。システム管理、ネットワーク管理、サイバーセキュリティに重点を置いています。</p>
                    </div>
                </div>
            </div>
            <div class="about-image">
                <i class="fas fa-user-graduate" style="font-size: 15rem; color: var(--primary-color); opacity: 0.2;"></i>
            </div>
        </div>

        <div class="contact-content" style="margin-top: 4rem;">
            <h3 style="margin-bottom: 2rem;">お問い合わせ</h3>
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
