<?php
    $pageTitle = '认证 - Flavien GARIBALDI';
    $currentPage = 'certifications.php';
    include '../includes/header.php';
?>

    <section id="certifications" style="margin-top: 100px;">
        <h2 class="fade-up">我的认证</h2>
        <p style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            在这里找到我所有的专业认证和完成的培训。<br>
            这些认证证明了我的能力和对持续改进的承诺。
        </p>

        <h3 style="color: var(--text-light); margin-bottom: 2rem; font-size: 1.8rem;">
            <i class="fas fa-certificate" style="color: var(--primary-color);"></i> 已获得的认证
        </h3>
        
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div class="project-info">
                    <h3>MOOC网络安全 - ANSSI</h3>
                    <p style="color: var(--primary-color); margin: 0.5rem 0; font-weight: 600;">SecNumacadémie</p>
                    <p>由国家信息系统安全局提供的网络安全意识培训。</p>
                    <div class="skills" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <span class="skill-tag">Cybersécurité</span>
                        <span class="skill-tag">ANSSI</span>
                        <span class="skill-tag">Sécurité SI</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray);">
                        <i class="fas fa-calendar-alt"></i> 获得时间：2024年
                    </p>
                </div>
            </div>
        </div>

        <h3 style="color: var(--text-light); margin-top: 4rem; margin-bottom: 2rem; font-size: 1.8rem;">
            <i class="fas fa-book-reader" style="color: var(--secondary-color);"></i> 准备中
        </h3>
        
        <div class="projects-grid">
            <div class="project-card" style="border: 2px solid var(--secondary-color);">
                <div class="project-image" style="background: linear-gradient(135deg, var(--secondary-color), #a78bfa);">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="project-info">
                    <h3>Cisco Certified Network Associate</h3>
                    <p style="color: var(--secondary-color); margin: 0.5rem 0; font-weight: 600;">CCNA</p>
                    <p>思科网络认证，涵盖网络基础、路由、交换和安全。</p>
                    <div class="skills" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <span class="skill-tag">Cisco</span>
                        <span class="skill-tag">Réseaux</span>
                        <span class="skill-tag">Routage/Commutation</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray);">
                        <i class="fas fa-hourglass-half"></i> 准备中
                    </p>
                </div>
            </div>

            <div class="project-card" style="border: 2px solid var(--secondary-color);">
                <div class="project-image" style="background: linear-gradient(135deg, var(--secondary-color), #a78bfa);">
                    <i class="fab fa-cisco"></i>
                </div>
                <div class="project-info">
                    <h3>Cisco Certified Support Technician - Networking</h3>
                    <p style="color: var(--secondary-color); margin: 0.5rem 0; font-weight: 600;">CCST Networking</p>
                    <p>思科基础认证，验证网络支持和故障排除能力。</p>
                    <div class="skills" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <span class="skill-tag">Cisco</span>
                        <span class="skill-tag">Support Réseau</span>
                        <span class="skill-tag">Dépannage</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray);">
                        <i class="fas fa-hourglass-half"></i> 准备中
                    </p>
                </div>
            </div>

            <div class="project-card" style="border: 2px solid var(--secondary-color);">
                <div class="project-image" style="background: linear-gradient(135deg, var(--secondary-color), #a78bfa);">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div class="project-info">
                    <h3>Cisco Certified Support Technician - Cybersecurity</h3>
                    <p style="color: var(--secondary-color); margin: 0.5rem 0; font-weight: 600;">CCST Cybersecurity</p>
                    <p>思科网络安全基础认证，涵盖基本安全概念。</p>
                    <div class="skills" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <span class="skill-tag">Cybersécurité</span>
                        <span class="skill-tag">Cisco</span>
                        <span class="skill-tag">Sécurité Réseau</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray);">
                        <i class="fas fa-hourglass-half"></i> 准备中
                    </p>
                </div>
            </div>

            <div class="project-card" style="border: 2px solid var(--secondary-color);">
                <div class="project-image" style="background: linear-gradient(135deg, var(--secondary-color), #a78bfa);">
                    <i class="fas fa-server"></i>
                </div>
                <div class="project-info">
                    <h3>Cisco Certified Support Technician - Endpoint Security</h3>
                    <p style="color: var(--secondary-color); margin: 0.5rem 0; font-weight: 600;">CCST Endpoint Security</p>
                    <p>思科关于终端安全和工作站保护的认证。</p>
                    <div class="skills" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <span class="skill-tag">Endpoint Security</span>
                        <span class="skill-tag">Cisco</span>
                        <span class="skill-tag">Sécurité Poste</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray);">
                        <i class="fas fa-hourglass-half"></i> 准备中
                    </p>
                </div>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
