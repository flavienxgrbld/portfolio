(function() {
    'use strict';
    
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    const THEME_KEY = 'theme';
    const LIGHT_THEME = 'light';
    const DARK_THEME = 'dark';

    function setTheme(theme) {
        const isLight = theme === LIGHT_THEME;
        body.classList.toggle('light-theme', isLight);
        icon.classList.toggle('fa-sun', isLight);
        icon.classList.toggle('fa-moon', !isLight);
        localStorage.setItem(THEME_KEY, theme);
    }

    const currentTheme = localStorage.getItem(THEME_KEY) || DARK_THEME;
    if (currentTheme === LIGHT_THEME) {
        setTheme(LIGHT_THEME);
    }

    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('light-theme') ? DARK_THEME : LIGHT_THEME;
        setTheme(newTheme);
    }, { passive: true });
})();
