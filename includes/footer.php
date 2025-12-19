    <button class="theme-toggle" id="themeToggle" aria-label="Changer de thème">
        <i class="fas fa-moon"></i>
    </button>

    <!-- Sélecteur de langue en bas à gauche -->
    <div class="language-selector">
        <button class="lang-current" id="langButton" aria-label="Changer de langue">
            <?php echo strtoupper($currentLang); ?>
        </button>
        <div class="lang-dropdown" id="langDropdown">
            <?php foreach ($languages as $code => $lang): ?>
                <a href="<?php echo getUrlInLang($code, $currentPage ?? 'index.php'); ?>" 
                   class="lang-option <?php echo $code === $currentLang ? 'active' : ''; ?>">
                    <?php echo strtoupper($code); ?>
                </a>
            <?php endforeach; ?>
        </div>
    </div>

    <footer>
        <p>&copy; <?php echo date('Y'); ?> Flavien GARIBALDI. 
        <?php
        $footerText = [
            'fr' => 'Tous droits réservés',
            'en' => 'All rights reserved',
            'it' => 'Tutti i diritti riservati',
            'es' => 'Todos los derechos reservados',
            'de' => 'Alle Rechte vorbehalten'
        ];
        echo $footerText[$currentLang] ?? $footerText['fr'];
        ?>
        </p>
    </footer>

    <script src="../scroll-animations.js"></script>
    <script src="../theme-toggle.js"></script>
    <script>
        // Toggle du sélecteur de langue
        document.getElementById('langButton').addEventListener('click', function(e) {
            e.stopPropagation();
            document.getElementById('langDropdown').classList.toggle('show');
        });
        
        // Fermer le dropdown quand on clique ailleurs
        document.addEventListener('click', function() {
            document.getElementById('langDropdown').classList.remove('show');
        });
    </script>
</body>
</html>
