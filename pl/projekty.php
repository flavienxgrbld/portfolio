<?php
    $pageTitle = 'Moje Projekty - Flavien GARIBALDI';
    $currentPage = 'projekty.php';
    include '../includes/header.php';
?>

    <section id="projets" style="margin-top: 100px;">
        <h2 class="fade-up">Moje Projekty</h2>
        <p class="fade-up" style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            Odkryj różne projekty, które zrealizowałem w ramach mojej nauki i osobistych doświadczeń.
        </p>
        
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="project-info">
                    <h3>Infrastruktura Sieciowa Przedsiębiorstwa</h3>
                    <p>Wdrożenie kompletnej infrastruktury sieciowej z VLAN, routingiem między VLAN i serwerem DHCP dla fikcyjnej firmy.</p>
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
                    <h3>Serwer Web Linux</h3>
                    <p>Instalacja i konfiguracja bezpiecznego serwera web na Linux z Apache, PHP i MySQL.</p>
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
                    <h3>Zabezpieczenie Infrastruktury</h3>
                    <p>Audyt bezpieczeństwa i wdrożenie środków ochrony (firewall, VPN, uwierzytelnianie).</p>
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
                    <h3>Backup i Przywracanie</h3>
                    <p>Zautomatyzowany system tworzenia kopii zapasowych ze strategią przywracania w celu zapewnienia ciągłości usług.</p>
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
                    <h3>Wirtualizacja i Chmura</h3>
                    <p>Wdrożenie środowiska zwirtualizowanego z zarządzaniem maszynami wirtualnymi i alokacją zasobów.</p>
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
                    <h3>Portfolio Osobiste</h3>
                    <p>Stworzenie tego portfolio w celu prezentacji moich umiejętności, projektów i monitoringu technologicznego.</p>
                    <div class="skills">
                        <span class="skill-tag">HTML/CSS</span>
                        <span class="skill-tag">PHP</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
