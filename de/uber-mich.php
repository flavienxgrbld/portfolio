<?php
    $pageTitle = 'Über mich - Flavien GARIBALDI';
    $currentPage = 'uber-mich.php';
    include '../includes/header.php';
?>

    <section id="apropos" style="margin-top: 100px;">
        <h2 class="fade-up">Über Mich</h2>
        <div class="about-content">
            <div class="about-text">
                <p>Ich bin ein Student im BTS SIO Option SISR (Infrastrukturlösungen, Systeme und Netzwerke), leidenschaftlich für Informatik und neue Technologien.</p>
                <p>Mein Ausbildungsweg ermöglicht es mir, Fähigkeiten in der System- und Netzwerkverwaltung, Cybersicherheit und IT-Infrastrukturverwaltung zu erwerben.</p>
                <p>Ich beobachte ständig Technologie, um über die neuesten Innovationen im Bereich IT und Computersicherheit auf dem Laufenden zu bleiben.</p>
                
                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Meine Fähigkeiten</h3>
                <div class="skills">
                    <span class="skill-tag">MySQL</span>
                    <span class="skill-tag">Linux</span>
                    <span class="skill-tag">Windows Server</span>
                    <span class="skill-tag">Netzwerke</span>
                    <span class="skill-tag">Cybersicherheit</span>
                    <span class="skill-tag">Virtualisierung</span>
                    <span class="skill-tag">Git</span>
                </div>

                <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Ausbildung</h3>
                <div class="project-card" style="margin-top: 1rem;">
                    <div class="project-info">
                        <h3>BTS SIO SISR</h3>
                        <p style="color: var(--primary-color); margin: 0.5rem 0;">2024 - 2026</p>
                        <p>Ausbildung in Infrastrukturlösungen, Systemen und Netzwerken, fokussiert auf Systemverwaltung, Netzwerkmanagement und Cybersicherheit.</p>
                    </div>
                </div>
            </div>
            <div class="about-image">
                <i class="fas fa-user-graduate" style="font-size: 15rem; color: var(--primary-color); opacity: 0.2;"></i>
            </div>
        </div>

        <div class="contact-content" style="margin-top: 4rem;">
            <h3 style="margin-bottom: 2rem;">Kontaktiere Mich</h3>
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
