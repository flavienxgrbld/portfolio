<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TCS - Flavien GARIBALDI</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- Navigation -->
    <nav>
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="apropos.php">À propos</a></li>
            <li><a href="projets.php">Mes Projets</a></li>
            <li><a href="certifications.php">Certifications</a></li>
            <li><a href="tcs.php">TCS</a></li>
            <li><a href="veilles.php">Veilles</a></li>
            <li><a href="contact.php">Contact</a></li>
        </ul>
    </nav>

    <!-- TCS Section -->
    <section id="tcs" style="margin-top: 100px;">
        <h2>Tableaux de Compétences et Synthèse (TCS)</h2>
        <div class="tcs-content">
            <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
                Retrouvez ici mes tableaux de compétences et synthèses réalisés dans le cadre du BTS SIO option SISR.<br>
                Ces documents présentent mes acquis professionnels et mes réalisations.
            </p>
            
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-server"></i>
                    </div>
                    <div class="project-info">
                        <h3>TCS - Administration Système</h3>
                        <p>Compétences acquises en administration des systèmes Windows et Linux, gestion des utilisateurs, des droits et des services.</p>
                        <div class="skills" style="margin-bottom: 1rem;">
                            <span class="skill-tag">Windows Server</span>
                            <span class="skill-tag">Linux</span>
                            <span class="skill-tag">Active Directory</span>
                        </div>
                        <a href="documents/tcs_admin_systeme.pdf" class="btn" style="margin-top: 1rem; font-size: 0.9rem; padding: 0.5rem 1rem;">
                            <i class="fas fa-file-pdf"></i> Voir le document
                        </a>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="project-info">
                        <h3>TCS - Cybersécurité</h3>
                        <p>Mise en œuvre de solutions de sécurité informatique : pare-feu, VPN, chiffrement et politique de sécurité.</p>
                        <div class="skills" style="margin-bottom: 1rem;">
                            <span class="skill-tag">Firewall</span>
                            <span class="skill-tag">VPN</span>
                            <span class="skill-tag">Audit Sécurité</span>
                        </div>
                        <a href="documents/tcs_cybersecurite.pdf" class="btn" style="margin-top: 1rem; font-size: 0.9rem; padding: 0.5rem 1rem;">
                            <i class="fas fa-file-pdf"></i> Voir le document
                        </a>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-network-wired"></i>
                    </div>
                    <div class="project-info">
                        <h3>TCS - Infrastructure Réseau</h3>
                        <p>Conception et maintenance d'infrastructures réseaux : VLAN, routage, commutation et protocoles réseau.</p>
                        <div class="skills" style="margin-bottom: 1rem;">
                            <span class="skill-tag">Cisco</span>
                            <span class="skill-tag">VLAN</span>
                            <span class="skill-tag">TCP/IP</span>
                        </div>
                        <a href="documents/tcs_infrastructure_reseau.pdf" class="btn" style="margin-top: 1rem; font-size: 0.9rem; padding: 0.5rem 1rem;">
                            <i class="fas fa-file-pdf"></i> Voir le document
                        </a>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-cloud"></i>
                    </div>
                    <div class="project-info">
                        <h3>TCS - Virtualisation</h3>
                        <p>Déploiement et gestion d'environnements virtualisés, optimisation des ressources et haute disponibilité.</p>
                        <div class="skills" style="margin-bottom: 1rem;">
                            <span class="skill-tag">VMware</span>
                            <span class="skill-tag">Hyper-V</span>
                            <span class="skill-tag">Docker</span>
                        </div>
                        <a href="documents/tcs_virtualisation.pdf" class="btn" style="margin-top: 1rem; font-size: 0.9rem; padding: 0.5rem 1rem;">
                            <i class="fas fa-file-pdf"></i> Voir le document
                        </a>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-database"></i>
                    </div>
                    <div class="project-info">
                        <h3>TCS - Gestion des Données</h3>
                        <p>Stratégies de sauvegarde, restauration, plan de reprise d'activité et gestion des bases de données.</p>
                        <div class="skills" style="margin-bottom: 1rem;">
                            <span class="skill-tag">Backup</span>
                            <span class="skill-tag">MySQL</span>
                            <span class="skill-tag">PRA/PCA</span>
                        </div>
                        <a href="documents/tcs_gestion_donnees.pdf" class="btn" style="margin-top: 1rem; font-size: 0.9rem; padding: 0.5rem 1rem;">
                            <i class="fas fa-file-pdf"></i> Voir le document
                        </a>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div class="project-info">
                        <h3>TCS - Support & Maintenance</h3>
                        <p>Support technique, résolution d'incidents, documentation et assistance aux utilisateurs.</p>
                        <div class="skills" style="margin-bottom: 1rem;">
                            <span class="skill-tag">Support IT</span>
                            <span class="skill-tag">Ticketing</span>
                            <span class="skill-tag">Documentation</span>
                        </div>
                        <a href="documents/tcs_support_maintenance.pdf" class="btn" style="margin-top: 1rem; font-size: 0.9rem; padding: 0.5rem 1rem;">
                            <i class="fas fa-file-pdf"></i> Voir le document
                        </a>
                    </div>
                </div>
            </div>

            <!-- Note d'information -->
            <div class="project-card" style="margin-top: 3rem; background: rgba(99, 102, 241, 0.1);">
                <div class="project-info">
                    <h3><i class="fas fa-info-circle"></i> Information</h3>
                    <p>Les documents TCS seront mis à jour régulièrement au fur et à mesure de l'acquisition de nouvelles compétences durant ma formation.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; <?php echo date('Y'); ?> Flavien GARIBALDI. Tous droits réservés.</p>
    </footer>
</body>

</html>
