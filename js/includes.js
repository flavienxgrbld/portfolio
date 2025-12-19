// Système de gestion des includes pour le portfolio
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});

function loadHeader() {
    fetch('../includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initNavigation();
        })
        .catch(error => console.error('Erreur chargement header:', error));
}

function loadFooter() {
    fetch('../includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Erreur chargement footer:', error));
}

function initNavigation() {
    const currentLang = getCurrentLang();
    const navLinks = getNavLinks(currentLang);
    const currentPage = getCurrentPage();
    
    // Construire la navigation
    const nav = document.querySelector('nav ul');
    if (nav) {
        nav.innerHTML = '';
        navLinks.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            if (currentPage === link.href) {
                a.classList.add('active');
            }
            li.appendChild(a);
            nav.appendChild(li);
        });
    }
    
    // Construire le sélecteur de langue
    buildLanguageSelector(currentLang);
}

function getCurrentLang() {
    const path = window.location.pathname;
    const langs = ['fr', 'en', 'it', 'es', 'de', 'nl', 'pl', 'pt', 'pt-BR', 'ja', 'zh', 'ar'];
    
    for (let lang of langs) {
        if (path.includes(`/${lang}/`)) {
            return lang;
        }
    }
    return 'fr';
}

function getCurrentPage() {
    const path = window.location.pathname;
    const parts = path.split('/');
    return parts[parts.length - 1] || 'index.html';
}

function buildLanguageSelector(currentLang) {
    const langSelector = document.getElementById('lang-selector');
    if (!langSelector) return;
    
    const languages = getLanguages();
    langSelector.innerHTML = '';
    
    Object.keys(languages).forEach(code => {
        const lang = languages[code];
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${lang.flag} ${lang.name}`;
        if (code === currentLang) {
            option.selected = true;
        }
        langSelector.appendChild(option);
    });
    
    langSelector.addEventListener('change', function() {
        changeLanguage(this.value);
    });
}

function changeLanguage(targetLang) {
    const currentLang = getCurrentLang();
    const currentPage = getCurrentPage();
    const languages = getLanguages();
    
    // Trouver le type de page actuel
    let pageType = 'home';
    const currentPages = languages[currentLang].pages;
    for (let [type, page] of Object.entries(currentPages)) {
        if (page === currentPage) {
            pageType = type;
            break;
        }
    }
    
    // Obtenir la page équivalente dans la langue cible
    const targetPage = languages[targetLang].pages[pageType];
    const newUrl = `../${targetLang}/${targetPage}`;
    window.location.href = newUrl;
}

function getNavLinks(lang) {
    const navConfig = {
        'fr': [
            { href: 'index.html', text: 'Accueil' },
            { href: 'apropos.html', text: 'À propos' },
            { href: 'projets.html', text: 'Mes Projets' },
            { href: 'certifications.html', text: 'Certifications' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'veilles.html', text: 'Veilles' },
            { href: 'contact.html', text: 'Contact' }
        ],
        'en': [
            { href: 'index.html', text: 'Home' },
            { href: 'about.html', text: 'About' },
            { href: 'projects.html', text: 'My Projects' },
            { href: 'certifications.html', text: 'Certifications' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'tech-watch.html', text: 'Tech Watch' },
            { href: 'contact.html', text: 'Contact' }
        ],
        'it': [
            { href: 'index.html', text: 'Home' },
            { href: 'chi-sono.html', text: 'Chi sono' },
            { href: 'progetti.html', text: 'I miei Progetti' },
            { href: 'certificazioni.html', text: 'Certificazioni' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'vigilanza-tech.html', text: 'Vigilanza Tech' },
            { href: 'contatto.html', text: 'Contatto' }
        ],
        'es': [
            { href: 'index.html', text: 'Inicio' },
            { href: 'acerca-de.html', text: 'Acerca de' },
            { href: 'proyectos.html', text: 'Mis Proyectos' },
            { href: 'certificaciones.html', text: 'Certificaciones' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'vigilancia-tech.html', text: 'Vigilancia Tech' },
            { href: 'contacto.html', text: 'Contacto' }
        ],
        'de': [
            { href: 'index.html', text: 'Startseite' },
            { href: 'uber-mich.html', text: 'Über mich' },
            { href: 'projekte.html', text: 'Meine Projekte' },
            { href: 'zertifizierungen.html', text: 'Zertifizierungen' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'tech-uberwachung.html', text: 'Tech-Überwachung' },
            { href: 'kontakt.html', text: 'Kontakt' }
        ],
        'nl': [
            { href: 'index.html', text: 'Home' },
            { href: 'over-mij.html', text: 'Over mij' },
            { href: 'projecten.html', text: 'Mijn Projecten' },
            { href: 'certificeringen.html', text: 'Certificeringen' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'tech-updates.html', text: 'Tech Updates' },
            { href: 'contact.html', text: 'Contact' }
        ],
        'pl': [
            { href: 'index.html', text: 'Strona główna' },
            { href: 'o-mnie.html', text: 'O mnie' },
            { href: 'projekty.html', text: 'Moje Projekty' },
            { href: 'certyfikaty.html', text: 'Certyfikaty' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'nadzor-tech.html', text: 'Nadzór Tech' },
            { href: 'kontakt.html', text: 'Kontakt' }
        ],
        'pt': [
            { href: 'index.html', text: 'Início' },
            { href: 'sobre-mim.html', text: 'Sobre mim' },
            { href: 'projetos.html', text: 'Os meus Projetos' },
            { href: 'certificacoes.html', text: 'Certificações' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'vigilancia-tech.html', text: 'Vigilância Tech' },
            { href: 'contato.html', text: 'Contacto' }
        ],
        'pt-BR': [
            { href: 'index.html', text: 'Início' },
            { href: 'sobre-mim.html', text: 'Sobre mim' },
            { href: 'projetos.html', text: 'Meus Projetos' },
            { href: 'certificacoes.html', text: 'Certificações' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'vigilancia-tech.html', text: 'Vigilância Tech' },
            { href: 'contato.html', text: 'Contato' }
        ],
        'ja': [
            { href: 'index.html', text: 'ホーム' },
            { href: 'about.html', text: '私について' },
            { href: 'projects.html', text: 'プロジェクト' },
            { href: 'certifications.html', text: '資格' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'tech-watch.html', text: '技術動向' },
            { href: 'contact.html', text: 'お問い合わせ' }
        ],
        'zh': [
            { href: 'index.html', text: '首页' },
            { href: 'about.html', text: '关于我' },
            { href: 'projects.html', text: '我的项目' },
            { href: 'certifications.html', text: '认证' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'tech-watch.html', text: '技术观察' },
            { href: 'contact.html', text: '联系' }
        ],
        'ar': [
            { href: 'index.html', text: 'الرئيسية' },
            { href: 'about.html', text: 'عني' },
            { href: 'projects.html', text: 'مشاريعي' },
            { href: 'certifications.html', text: 'الشهادات' },
            { href: 'tcs.html', text: 'TCS' },
            { href: 'tech-watch.html', text: 'المراقبة التقنية' },
            { href: 'contact.html', text: 'اتصل' }
        ]
    };
    
    return navConfig[lang] || navConfig['fr'];
}

function getLanguages() {
    return {
        'fr': {
            code: 'fr',
            name: 'Français',
            flag: '🇫🇷',
            pages: {
                home: 'index.html',
                about: 'apropos.html',
                projects: 'projets.html',
                certifications: 'certifications.html',
                tcs: 'tcs.html',
                veilles: 'veilles.html',
                contact: 'contact.html'
            }
        },
        'en': {
            code: 'en',
            name: 'English',
            flag: '🇬🇧',
            pages: {
                home: 'index.html',
                about: 'about.html',
                projects: 'projects.html',
                certifications: 'certifications.html',
                tcs: 'tcs.html',
                veilles: 'tech-watch.html',
                contact: 'contact.html'
            }
        },
        'it': {
            code: 'it',
            name: 'Italiano',
            flag: '🇮🇹',
            pages: {
                home: 'index.html',
                about: 'chi-sono.html',
                projects: 'progetti.html',
                certifications: 'certificazioni.html',
                tcs: 'tcs.html',
                veilles: 'vigilanza-tech.html',
                contact: 'contatto.html'
            }
        },
        'es': {
            code: 'es',
            name: 'Español',
            flag: '🇪🇸',
            pages: {
                home: 'index.html',
                about: 'acerca-de.html',
                projects: 'proyectos.html',
                certifications: 'certificaciones.html',
                tcs: 'tcs.html',
                veilles: 'vigilancia-tech.html',
                contact: 'contacto.html'
            }
        },
        'de': {
            code: 'de',
            name: 'Deutsch',
            flag: '🇩🇪',
            pages: {
                home: 'index.html',
                about: 'uber-mich.html',
                projects: 'projekte.html',
                certifications: 'zertifizierungen.html',
                tcs: 'tcs.html',
                veilles: 'tech-uberwachung.html',
                contact: 'kontakt.html'
            }
        },
        'nl': {
            code: 'nl',
            name: 'Nederlands',
            flag: '🇳🇱',
            pages: {
                home: 'index.html',
                about: 'over-mij.html',
                projects: 'projecten.html',
                certifications: 'certificeringen.html',
                tcs: 'tcs.html',
                veilles: 'tech-updates.html',
                contact: 'contact.html'
            }
        },
        'pl': {
            code: 'pl',
            name: 'Polski',
            flag: '🇵🇱',
            pages: {
                home: 'index.html',
                about: 'o-mnie.html',
                projects: 'projekty.html',
                certifications: 'certyfikaty.html',
                tcs: 'tcs.html',
                veilles: 'nadzor-tech.html',
                contact: 'kontakt.html'
            }
        },
        'pt': {
            code: 'pt',
            name: 'Português',
            flag: '🇵🇹',
            pages: {
                home: 'index.html',
                about: 'sobre-mim.html',
                projects: 'projetos.html',
                certifications: 'certificacoes.html',
                tcs: 'tcs.html',
                veilles: 'vigilancia-tech.html',
                contact: 'contato.html'
            }
        },
        'pt-BR': {
            code: 'pt-BR',
            name: 'Português (BR)',
            flag: '🇧🇷',
            pages: {
                home: 'index.html',
                about: 'sobre-mim.html',
                projects: 'projetos.html',
                certifications: 'certificacoes.html',
                tcs: 'tcs.html',
                veilles: 'vigilancia-tech.html',
                contact: 'contato.html'
            }
        },
        'ja': {
            code: 'ja',
            name: '日本語',
            flag: '🇯🇵',
            pages: {
                home: 'index.html',
                about: 'about.html',
                projects: 'projects.html',
                certifications: 'certifications.html',
                tcs: 'tcs.html',
                veilles: 'tech-watch.html',
                contact: 'contact.html'
            }
        },
        'zh': {
            code: 'zh',
            name: '中文',
            flag: '🇨🇳',
            pages: {
                home: 'index.html',
                about: 'about.html',
                projects: 'projects.html',
                certifications: 'certifications.html',
                tcs: 'tcs.html',
                veilles: 'tech-watch.html',
                contact: 'contact.html'
            }
        },
        'ar': {
            code: 'ar',
            name: 'العربية',
            flag: '🇸🇦',
            pages: {
                home: 'index.html',
                about: 'about.html',
                projects: 'projects.html',
                certifications: 'certifications.html',
                tcs: 'tcs.html',
                veilles: 'tech-watch.html',
                contact: 'contact.html'
            }
        }
    };
}
