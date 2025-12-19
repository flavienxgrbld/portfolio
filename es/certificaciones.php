<?php
    $pageTitle = 'Certificaciones - Flavien GARIBALDI';
    $currentPage = 'certificaciones.php';
    include '../includes/header.php';
?>

    <section id="certifications" style="margin-top: 100px;">
        <h2 class="fade-up">Mis Certificaciones</h2>
        <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            Encuentre aquí todas mis certificaciones profesionales y formaciones completadas.<br>
            Estas certificaciones atestiguan mis competencias y mi compromiso con la mejora continua.
        </p>

        <h3 style="color: var(--text-light); margin-bottom: 2rem; font-size: 1.8rem;">
            <i class="fas fa-certificate" style="color: var(--primary-color);"></i> Certificaciones Obtenidas
        </h3>
        
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div class="project-info">
                    <h3>MOOC Ciberseguridad - ANSSI</h3>
                    <p style="color: var(--primary-color); margin: 0.5rem 0; font-weight: 600;">SecNumacadémie</p>
                    <p>Formación de sensibilización a la ciberseguridad ofrecida por la Agencia Nacional de Seguridad de Sistemas de Información.</p>
                    <div class="skills" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <span class="skill-tag">Ciberseguridad</span>
                        <span class="skill-tag">ANSSI</span>
                        <span class="skill-tag">Seguridad SI</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray);">
                        <i class="fas fa-calendar-alt"></i> Obtenida en: 2024
                    </p>
                </div>
            </div>
        </div>

        <h3 style="color: var(--text-light); margin-top: 4rem; margin-bottom: 2rem; font-size: 1.8rem;">
            <i class="fas fa-book-reader" style="color: var(--secondary-color);"></i> En Preparación
        </h3>
        
        <div class="projects-grid">
            <div class="project-card" style="border: 2px solid var(--secondary-color);">
                <div class="project-image" style="background: linear-gradient(135deg, var(--secondary-color), #a78bfa);">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="project-info">
                    <h3>Cisco Certified Network Associate</h3>
                    <p style="color: var(--secondary-color); margin: 0.5rem 0; font-weight: 600;">CCNA</p>
                    <p>Certificación de red Cisco que cubre los fundamentos de redes, enrutamiento, conmutación y seguridad.</p>
                    <div class="skills" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <span class="skill-tag">Cisco</span>
                        <span class="skill-tag">Redes</span>
                        <span class="skill-tag">Enrutamiento/Conmutación</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray);">
                        <i class="fas fa-hourglass-half"></i> En preparación
                    </p>
                </div>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
