<?php
    $pageTitle = 'Vigilanza Tecnologica - Flavien GARIBALDI';
    $currentPage = 'vigilanza-tech.php';
    include '../includes/header.php';
?>

    <section id="veilles" style="margin-top: 100px;">
        <h2 class="fade-up">La Mia Vigilanza Tecnologica</h2>
        <div class="veilles-content">
            <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
                Nell'ambito della mia formazione e del mio interesse per le nuove tecnologie,<br>
                effettuo un monitoraggio tecnologico regolare su diverse aree chiave dell'informatica.
            </p>
            
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="project-info">
                        <h3>Cybersicurezza</h3>
                        <p>Monitoraggio di nuove minacce, vulnerabilità (CVE), ransomware e best practice nella sicurezza informatica.</p>
                        <div class="skills">
                            <span class="skill-tag">Vulnerabilità</span>
                            <span class="skill-tag">Ransomware</span>
                            <span class="skill-tag">Zero-Day</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-cloud"></i>
                    </div>
                    <div class="project-info">
                        <h3>Cloud Computing & Infrastruttura</h3>
                        <p>Monitoraggio degli sviluppi nelle tecnologie cloud (AWS, Azure, GCP) e containerizzazione.</p>
                        <div class="skills">
                            <span class="skill-tag">AWS</span>
                            <span class="skill-tag">Azure</span>
                            <span class="skill-tag">Kubernetes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
