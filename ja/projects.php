<?php
    $pageTitle = 'プロジェクト - Flavien GARIBALDI';
    $currentPage = 'projects.php';
    include '../includes/header.php';
?>

    <section id="projets" style="margin-top: 100px;">
        <h2 class="fade-up">プロジェクト</h2>
        <p class="fade-up" style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 3rem; text-align: center;">
            私が教育課程と個人的な経験の中で実現した様々なプロジェクトをご覧ください。
        </p>
        
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="project-info">
                    <h3>企業ネットワークインフラストラクチャ</h3>
                    <p>架空の企業向けに、VLAN、VLAN間ルーティング、DHCPサーバーを含む完全なネットワークインフラストラクチャの構築。</p>
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
                    <h3>Linuxウェブサーバー</h3>
                    <p>Apache、PHP、MySQLを使用した安全なLinuxウェブサーバーのインストールと設定。</p>
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
                    <h3>インフラストラクチャのセキュリティ</h3>
                    <p>セキュリティ監査と保護措置（ファイアウォール、VPN、認証）の実装。</p>
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
                    <h3>バックアップと復元</h3>
                    <p>サービス継続性を確保するための復元戦略を含む自動バックアップシステム。</p>
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
                    <h3>仮想化とクラウド</h3>
                    <p>仮想マシンの管理とリソース割り当てを含む仮想化環境の展開。</p>
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
                    <h3>個人ポートフォリオ</h3>
                    <p>スキル、プロジェクト、技術調査を紹介するためのこのポートフォリオの作成。</p>
                    <div class="skills">
                        <span class="skill-tag">HTML/CSS</span>
                        <span class="skill-tag">PHP</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php include '../includes/footer.php'; ?>
