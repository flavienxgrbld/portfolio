const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_projects: "Mes Projets",
        nav_certifications: "Certifications",
        nav_tcs: "TCS",
        nav_veilles: "Veilles",
        nav_contact: "Contact",
        
        hero_subtitle: "étudiant en BTS SIO SISR",
        btn_contact: "Me Contacter",
        btn_about: "À propos de moi",
        btn_projects: "parcourir mes projets",
        
        title_about: "À Propos de Moi",
        title_projects: "Mes Projets",
        title_certifications: "Mes Certifications",
        title_tcs: "Tableaux de Compétences et Synthèse (TCS)",
        title_veilles: "Mes Veilles Technologiques",
        title_contact: "Me Contacter",
        
        about_intro: "Étudiant passionné en BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux), je développe mes compétences en administration systèmes et réseaux.",
        about_skills: "Mes Compétences",
        
        contact_name: "Nom",
        contact_email: "Email",
        contact_subject: "Sujet",
        contact_message: "Message",
        contact_send: "Envoyer",
        contact_info: "Informations de Contact",
        
        footer_rights: "Tous droits réservés",
    },
    
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "My Projects",
        nav_certifications: "Certifications",
        nav_tcs: "TCS",
        nav_veilles: "Tech Watch",
        nav_contact: "Contact",
        
        hero_subtitle: "student in BTS SIO SISR",
        btn_contact: "Contact Me",
        btn_about: "About me",
        btn_projects: "browse my projects",
        
        title_about: "About Me",
        title_projects: "My Projects",
        title_certifications: "My Certifications",
        title_tcs: "Skills and Summary Tables (TCS)",
        title_veilles: "My Technological Watch",
        title_contact: "Contact Me",
        
        about_intro: "Passionate student in BTS SIO option SISR (Infrastructure Solutions, Systems and Networks), I am developing my skills in systems and network administration.",
        about_skills: "My Skills",
        
        contact_name: "Name",
        contact_email: "Email",
        contact_subject: "Subject",
        contact_message: "Message",
        contact_send: "Send",
        contact_info: "Contact Information",
        
        footer_rights: "All rights reserved",
    },
    
    it: {
        nav_home: "Home",
        nav_about: "Chi sono",
        nav_projects: "I miei Progetti",
        nav_certifications: "Certificazioni",
        nav_tcs: "TCS",
        nav_veilles: "Vigilanza Tech",
        nav_contact: "Contatto",
        
        hero_subtitle: "studente in BTS SIO SISR",
        btn_contact: "Contattami",
        btn_about: "Chi sono",
        btn_projects: "sfoglia i miei progetti",
        
        title_about: "Chi Sono",
        title_projects: "I Miei Progetti",
        title_certifications: "Le Mie Certificazioni",
        title_tcs: "Tabelle di Competenze e Sintesi (TCS)",
        title_veilles: "La Mia Vigilanza Tecnologica",
        title_contact: "Contattami",
        
        about_intro: "Studente appassionato in BTS SIO opzione SISR (Soluzioni di Infrastruttura, Sistemi e Reti), sto sviluppando le mie competenze in amministrazione di sistemi e reti.",
        about_skills: "Le Mie Competenze",
        
        contact_name: "Nome",
        contact_email: "Email",
        contact_subject: "Oggetto",
        contact_message: "Messaggio",
        contact_send: "Invia",
        contact_info: "Informazioni di Contatto",
        
        footer_rights: "Tutti i diritti riservati",
    },
    
    es: {
        nav_home: "Inicio",
        nav_about: "Acerca de",
        nav_projects: "Mis Proyectos",
        nav_certifications: "Certificaciones",
        nav_tcs: "TCS",
        nav_veilles: "Vigilancia Tech",
        nav_contact: "Contacto",
        
        hero_subtitle: "estudiante en BTS SIO SISR",
        btn_contact: "Contáctame",
        btn_about: "Acerca de mí",
        btn_projects: "explorar mis proyectos",
        
        title_about: "Acerca de Mí",
        title_projects: "Mis Proyectos",
        title_certifications: "Mis Certificaciones",
        title_tcs: "Tablas de Competencias y Síntesis (TCS)",
        title_veilles: "Mi Vigilancia Tecnológica",
        title_contact: "Contáctame",
        
        about_intro: "Estudiante apasionado en BTS SIO opción SISR (Soluciones de Infraestructura, Sistemas y Redes), estoy desarrollando mis habilidades en administración de sistemas y redes.",
        about_skills: "Mis Habilidades",
        
        contact_name: "Nombre",
        contact_email: "Correo",
        contact_subject: "Asunto",
        contact_message: "Mensaje",
        contact_send: "Enviar",
        contact_info: "Información de Contacto",
        
        footer_rights: "Todos los derechos reservados",
    },
    
    de: {
        nav_home: "Startseite",
        nav_about: "Über mich",
        nav_projects: "Meine Projekte",
        nav_certifications: "Zertifizierungen",
        nav_tcs: "TCS",
        nav_veilles: "Tech-Überwachung",
        nav_contact: "Kontakt",
        
        hero_subtitle: "Student im BTS SIO SISR",
        btn_contact: "Kontaktiere mich",
        btn_about: "Über mich",
        btn_projects: "Meine Projekte durchsuchen",
        
        title_about: "Über Mich",
        title_projects: "Meine Projekte",
        title_certifications: "Meine Zertifizierungen",
        title_tcs: "Kompetenz- und Synthesetabellen (TCS)",
        title_veilles: "Meine Technologieüberwachung",
        title_contact: "Kontaktiere Mich",
        
        about_intro: "Leidenschaftlicher Student im BTS SIO Option SISR (Infrastrukturlösungen, Systeme und Netzwerke), entwickle ich meine Fähigkeiten in der System- und Netzwerkverwaltung.",
        about_skills: "Meine Fähigkeiten",
        
        contact_name: "Name",
        contact_email: "E-Mail",
        contact_subject: "Betreff",
        contact_message: "Nachricht",
        contact_send: "Senden",
        contact_info: "Kontaktinformationen",
        
        footer_rights: "Alle Rechte vorbehalten",
    }
};

(function() {
    'use strict';
    
    const LANG_KEY = 'language';
    const DEFAULT_LANG = 'fr';
    
    window.currentLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;

    window.setLanguage = function(lang) {
        if (!translations[lang]) return;
        
        window.currentLang = lang;
        localStorage.setItem(LANG_KEY, lang);
        updatePageLanguage();
        updateTypewriterText();
    };

    function updatePageLanguage() {
        const lang = window.currentLang;
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[lang]?.[key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        document.documentElement.lang = lang;
    }

    function updateTypewriterText() {
        const lang = window.currentLang;
        const pageTitle = document.getElementById('page-title');
        const typewriterSubtitle = document.getElementById('typewriter-subtitle');
        
        if (pageTitle) {
            const key = pageTitle.getAttribute('data-i18n-key');
            if (key && translations[lang]?.[key]) {
                window.titleText = translations[lang][key];
            }
        }
        
        if (typewriterSubtitle && translations[lang]?.hero_subtitle) {
            window.subtitleText = translations[lang].hero_subtitle;
        }
    }

    function initTranslations() {
        updatePageLanguage();
        
        document.querySelectorAll('.lang-option').forEach(option => {
            const optionLang = option.getAttribute('data-lang');
            if (optionLang === window.currentLang) {
                option.classList.add('active');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTranslations);
    } else {
        initTranslations();
    }
})();
