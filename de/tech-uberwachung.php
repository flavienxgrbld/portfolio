<?php
    $pageTitle = 'Tech-Überwachung - Flavien GARIBALDI';
    $currentPage = 'tech-uberwachung.php';
    include '../includes/header.php';
?>

    <section id="veilles" style="margin-top: 100px;">
        <h2 class="fade-up">Meine Technologieüberwachung</h2>
        <div class="veilles-content">
            <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
                Im Rahmen meiner Ausbildung und meines Interesses an neuen Technologien<br>
                führe ich eine regelmäßige Technologieüberwachung in mehreren Schlüsselbereichen der Informatik durch.
            </p>
            
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="project-info">
                        <h3>Cybersicherheit</h3>
                        <p>Überwachung neuer Bedrohungen, Schwachstellen (CVE), Ransomware und Best Practices in der Computersicherheit.</p>
                        <div class="skills">
                            <span class="skill-tag">Schwachstellen</span>
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
                        <h3>Cloud Computing & Infrastruktur</h3>
                        <p>Überwachung von Entwicklungen in Cloud-Technologien (AWS, Azure, GCP) und Containerisierung.</p>
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
