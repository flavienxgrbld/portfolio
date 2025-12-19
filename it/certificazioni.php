<?php
    $pageTitle = 'Certificazioni - Flavien GARIBALDI';
    $currentPage = 'certificazioni.php';
    include '../includes/header.php';
?>

    <section id="certifications" style="margin-top: 100px;">
        <h2 class="fade-up">Le Mie Certificazioni</h2>
        <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            Trova qui tutte le mie certificazioni professionali e formazioni completate.<br>
            Queste certificazioni attestano le mie competenze e il mio impegno per il miglioramento continuo.
        </p>

        <h3 style="color: var(--text-light); margin-bottom: 2rem; font-size: 1.8rem;">
            <i class="fas fa-certificate" style="color: var(--primary-color);"></i> Certificazioni Ottenute
        </h3>
        
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div class="project-info">
                    <h3>MOOC Cybersicurezza - ANSSI</h3>
                    <p style="color: var(--primary-color); margin: 0.5rem 0; font-weight: 600;">SecNumacadémie</p>
                    <p>Formazione di sensibilizzazione alla cybersicurezza offerta dall'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi.</p>
                    <div class="skills" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <span class="skill-tag">Cybersicurezza</span>
                        <span class="skill-tag">ANSSI</span>
                        <span class="skill-tag">Sicurezza SI</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray);">
                        <i class="fas fa-calendar-alt"></i> Ottenuta nel: 2024
                    </p>
                </div>
            </div>
        </div>

        <h3 style="color: var(--text-light); margin-top: 4rem; margin-bottom: 2rem; font-size: 1.8rem;">
            <i class="fas fa-book-reader" style="color: var(--secondary-color);"></i> In Preparazione
        </h3>
        
        <div class="projects-grid">
            <div class="project-card" style="border: 2px solid var(--secondary-color);">
                <div class="project-image" style="background: linear-gradient(135deg, var(--secondary-color), #a78bfa);">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="project-info">
                    <h3>Cisco Certified Network Associate</h3>
                    <p style="color: var(--secondary-color); margin: 0.5rem 0; font-weight: 600;">CCNA</p>
                    <p>Certificazione di rete Cisco che copre i fondamenti delle reti, routing, switching e sicurezza.</p>
                    <div class="skills" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <span class="skill-tag">Cisco</span>
                        <span class="skill-tag">Reti</span>
                        <span class="skill-tag">Routing/Switching</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray);">
                        <i class="fas fa-hourglass-half"></i> In preparazione
                    </p>
                </div>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
