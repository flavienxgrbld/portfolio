<div class="language-selector">
    <div class="lang-dropdown" id="langDropdown">
        <div class="lang-current" id="langCurrent">FR</div>
        <div class="lang-options">
            <div class="lang-option active" data-lang="fr" onclick="setLanguage('fr')">FR</div>
            <div class="lang-option" data-lang="en" onclick="setLanguage('en')">EN</div>
            <div class="lang-option" data-lang="it" onclick="setLanguage('it')">IT</div>
            <div class="lang-option" data-lang="es" onclick="setLanguage('es')">ES</div>
            <div class="lang-option" data-lang="de" onclick="setLanguage('de')">DE</div>
        </div>
    </div>
</div>

<script src="translations.js"></script>
<script>
    document.getElementById('langCurrent').addEventListener('click', () => {
        document.getElementById('langDropdown').classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-dropdown')) {
            document.getElementById('langDropdown').classList.remove('active');
        }
    });
    
    const langCurrent = document.getElementById('langCurrent');
    langCurrent.textContent = currentLang.toUpperCase();
    
    const originalSetLanguage = setLanguage;
    setLanguage = function(lang) {
        originalSetLanguage(lang);
        langCurrent.textContent = lang.toUpperCase();
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });
    };
</script>
