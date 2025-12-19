<?php
    $pageTitle = 'Vigilancia Tecnológica - Flavien GARIBALDI';
    $currentPage = 'vigilancia-tech.php';
    include '../includes/header.php';
?>

    <section id="veilles" style="margin-top: 100px;">
        <h2 class="fade-up">Mi Vigilancia Tecnológica</h2>
        <div class="veilles-content">
            <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
                En el marco de mi formación y mi interés por las nuevas tecnologías,<br>
                realizo una vigilancia tecnológica regular sobre varios campos clave de la informática.
            </p>
            
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="project-info">
                        <h3>Ciberseguridad</h3>
                        <p>Vigilancia sobre nuevas amenazas, vulnerabilidades (CVE), ransomware y buenas prácticas en seguridad informática.</p>
                        <div class="skills">
                            <span class="skill-tag">Vulnerabilidades</span>
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
                        <h3>Cloud Computing & Infraestructura</h3>
                        <p>Monitoreo de desarrollos en tecnologías cloud (AWS, Azure, GCP) y contenedorización.</p>
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
