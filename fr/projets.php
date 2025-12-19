<?php
    $pageTitle = 'Mes Projets - Flavien GARIBALDI';
    $currentPage = 'projets.php';
    include '../includes/header.php';
?>

    <section id="projets" style="margin-top: 100px;">
        <h2 class="fade-up">Mes Projets</h2>
        <p class="fade-up" style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            Découvrez les différents projets que j'ai réalisés dans le cadre de ma formation et de mes expériences personnelles.
        </p>
        
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="project-info">
                    <h3>Infrastructure Réseau d'Entreprise</h3>
                    <p>Mise en place d'une infrastructure réseau complète avec VLAN, routage inter-VLAN et serveur DHCP pour une entreprise fictive.</p>
                    <div class="skills">
                        <span class="skill-tag">Cisco</span>
                        <span class="skill-tag">VLAN</span>
                        <span class="skill-tag">Routage</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-server"></i>
                </div>
                <div class="project-info">
                    <h3>Serveur Web Linux</h3>
                    <p>Installation et configuration d'un serveur web sécurisé sous Linux avec Apache, PHP et MySQL.</p>
                    <div class="skills">
                        <span class="skill-tag">Linux</span>
                        <span class="skill-tag">Apache</span>
                        <span class="skill-tag">MySQL</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div class="project-info">
                    <h3>Sécurisation d'Infrastructure</h3>
                    <p>Audit de sécurité et mise en place de mesures de protection (pare-feu, VPN, authentification).</p>
                    <div class="skills">
                        <span class="skill-tag">Sécurité</span>
                        <span class="skill-tag">Firewall</span>
                        <span class="skill-tag">VPN</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-database"></i>
                </div>
                <div class="project-info">
                    <h3>Sauvegarde & Restauration</h3>
                    <p>Système de sauvegarde automatisé avec stratégie de restauration pour assurer la continuité de service.</p>
                    <div class="skills">
                        <span class="skill-tag">Backup</span>
                        <span class="skill-tag">Scripts</span>
                        <span class="skill-tag">Windows Server</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-cloud"></i>
                </div>
                <div class="project-info">
                    <h3>Virtualisation & Cloud</h3>
                    <p>Déploiement d'un environnement virtualisé avec gestion des machines virtuelles et allocation des ressources.</p>
                    <div class="skills">
                        <span class="skill-tag">cloud</span>
                        <span class="skill-tag">Hyper-V</span>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-code"></i>
                </div>
                <div class="project-info">
                    <h3>Portfolio Personnel</h3>
                    <p>Création de ce portfolio pour présenter mes compétences, projets et veilles technologiques.</p>
                    <div class="skills">
                        <span class="skill-tag">HTML/CSS</span>
                        <span class="skill-tag">PHP</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
