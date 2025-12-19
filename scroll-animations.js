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
        // Animer tous les titres (h1, h2, h3, h4, h5, h6)
        const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        titles.forEach((title, index) => {
            if (!title.closest('nav') && !title.closest('footer')) {
                title.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(title);
            }
        });
        
        // Animer tous les paragraphes
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            if (!p.closest('nav') && !p.closest('footer') && !p.classList.contains('visible')) {
                p.classList.add('fade-in');
                p.style.transitionDelay = `${(index % 5) * 0.1}s`;
                observer.observe(p);
            }
        });
        
        // Animer toutes les listes
        const lists = document.querySelectorAll('ul:not(#nav-menu):not(#footer-nav), ol');
        lists.forEach((list, index) => {
            list.classList.add('fade-up');
            list.style.transitionDelay = `${index * 0.15}s`;
            observer.observe(list);
        });
        
        // Animer les éléments de liste individuellement
        const listItems = document.querySelectorAll('ul:not(#nav-menu):not(#footer-nav) li, ol li');
        listItems.forEach((item, index) => {
            item.classList.add('fade-left');
            item.style.transitionDelay = `${index * 0.05}s`;
            observer.observe(item);
        });
        
        // Animer toutes les cartes et conteneurs
        const cards = document.querySelectorAll('.project-card, .contact-info-card, .card, .box');
        cards.forEach((card, index) => {
            card.classList.add('fade-up', 'scale-in');
            card.style.transitionDelay = `${(index % 3) * 0.15}s`;
            observer.observe(card);
        });
        
        // Animer les images
        const images = document.querySelectorAll('img');
        images.forEach((img, index) => {
            img.classList.add('scale-in');
            img.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(img);
        });
        
        // Animer toutes les icônes
        const icons = document.querySelectorAll('.project-image, i:not(nav i):not(footer i):not(.theme-toggle i)');
        icons.forEach((icon, index) => {
            icon.classList.add('scale-in');
            icon.style.transitionDelay = `${index * 0.05}s`;
            observer.observe(icon);
        });
        
        // Animer tous les boutons
        const buttons = document.querySelectorAll('.btn, button:not(.theme-toggle), a.button');
        buttons.forEach((btn, index) => {
            btn.classList.add('scale-in');
            btn.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(btn);
        });
        
        // Animer les compétences
        const skills = document.querySelectorAll('.skill-tag, .skills');
        skills.forEach((skill, index) => {
            skill.classList.add('scale-in');
            skill.style.transitionDelay = `${index * 0.05}s`;
            observer.observe(skill);
        });
        
        // Animer le formulaire de contact
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            group.classList.add('fade-left');
            group.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(group);
        });
        
        const formInputs = document.querySelectorAll('input, textarea, select:not(.lang-selector)');
        formInputs.forEach((input, index) => {
            if (!input.closest('nav')) {
                input.classList.add('fade-in');
                input.style.transitionDelay = `${index * 0.05}s`;
                observer.observe(input);
            }
        });
        
        // Animer les liens sociaux
        const socialLinks = document.querySelectorAll('.social-links a');
        socialLinks.forEach((link, index) => {
            link.classList.add('scale-in');
            link.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(link);
        });
        
        // Animer les sections entières
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.classList.add('fade-in');
            observer.observe(section);
        });
        
        // Animer tous les conteneurs de contenu
        const contentContainers = document.querySelectorAll('.about-content, .projects-grid, .contact-content, .tcs-content, .hero-content, .contact-info-grid, .footer-content');
        contentContainers.forEach((container, index) => {
            container.classList.add('fade-up');
            container.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(container);
        });
        
        // Animer les divs avec classes spécifiques
        const specialDivs = document.querySelectorAll('div[class*="content"], div[class*="container"]:not(.nav-container), div[class*="grid"], div[class*="section"]');
        specialDivs.forEach((div, index) => {
            if (!div.closest('nav') && !div.closest('footer') && !div.classList.contains('visible')) {
                div.classList.add('fade-in');
                div.style.transitionDelay = `${(index % 5) * 0.08}s`;
                observer.observe(div);
            }
        });
        
        // Animer les tableaux
        const tables = document.querySelectorAll('table, tr, td, th');
        tables.forEach((table, index) => {
            table.classList.add('fade-up');
            table.style.transitionDelay = `${index * 0.05}s`;
            observer.observe(table);
        });
        
        // Animer les alertes et messages
        const alerts = document.querySelectorAll('.alert, .message, .notification');
        alerts.forEach((alert, index) => {
            alert.classList.add('scale-in');
            alert.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(alert);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }
})();
