(function() {
    'use strict';
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    function initAnimations() {
        const selectors = [
            '.project-card', '.contact-info-card', '.about-text', 
            '.skills', '.social-links', '.form-group', '.about-content', 
            '.contact-form', '.tcs-content', '.projects-grid p'
        ];
        
        const autoFadeElements = document.querySelectorAll(selectors.join(', '));
        
        autoFadeElements.forEach(element => {
            if (!element.classList.contains('fade-up')) {
                element.classList.add('fade-up');
            }
        });
        
        const fadeElements = document.querySelectorAll('.fade-up');
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }
})();
