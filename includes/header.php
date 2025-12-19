<!DOCTYPE html>
<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/lang-config.php';

// Définir la langue actuelle
$currentLang = getCurrentLang();

// Configuration des liens de navigation par langue
$navConfig = [
    'fr' => [
        ['href' => 'index.php', 'text' => 'Accueil'],
        ['href' => 'apropos.php', 'text' => 'À propos'],
        ['href' => 'projets.php', 'text' => 'Mes Projets'],
        ['href' => 'certifications.php', 'text' => 'Certifications'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'veilles.php', 'text' => 'Veilles'],
        ['href' => 'contact.php', 'text' => 'Contact']
    ],
    'en' => [
        ['href' => 'index.php', 'text' => 'Home'],
        ['href' => 'about.php', 'text' => 'About'],
        ['href' => 'projects.php', 'text' => 'My Projects'],
        ['href' => 'certifications.php', 'text' => 'Certifications'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'tech-watch.php', 'text' => 'Tech Watch'],
        ['href' => 'contact.php', 'text' => 'Contact']
    ],
    'it' => [
        ['href' => 'index.php', 'text' => 'Home'],
        ['href' => 'chi-sono.php', 'text' => 'Chi sono'],
        ['href' => 'progetti.php', 'text' => 'I miei Progetti'],
        ['href' => 'certificazioni.php', 'text' => 'Certificazioni'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'vigilanza-tech.php', 'text' => 'Vigilanza Tech'],
        ['href' => 'contatto.php', 'text' => 'Contatto']
    ],
    'es' => [
        ['href' => 'index.php', 'text' => 'Inicio'],
        ['href' => 'acerca-de.php', 'text' => 'Acerca de'],
        ['href' => 'proyectos.php', 'text' => 'Mis Proyectos'],
        ['href' => 'certificaciones.php', 'text' => 'Certificaciones'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'vigilancia-tech.php', 'text' => 'Vigilancia Tech'],
        ['href' => 'contacto.php', 'text' => 'Contacto']
    ],
    'de' => [
        ['href' => 'index.php', 'text' => 'Startseite'],
        ['href' => 'uber-mich.php', 'text' => 'Über mich'],
        ['href' => 'projekte.php', 'text' => 'Meine Projekte'],
        ['href' => 'zertifizierungen.php', 'text' => 'Zertifizierungen'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'tech-uberwachung.php', 'text' => 'Tech-Überwachung'],
        ['href' => 'kontakt.php', 'text' => 'Kontakt']
    ],
    'nl' => [
        ['href' => 'index.php', 'text' => 'Home'],
        ['href' => 'over-mij.php', 'text' => 'Over mij'],
        ['href' => 'projecten.php', 'text' => 'Mijn Projecten'],
        ['href' => 'certificeringen.php', 'text' => 'Certificeringen'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'tech-updates.php', 'text' => 'Tech Updates'],
        ['href' => 'contact.php', 'text' => 'Contact']
    ],
    'pl' => [
        ['href' => 'index.php', 'text' => 'Strona główna'],
        ['href' => 'o-mnie.php', 'text' => 'O mnie'],
        ['href' => 'projekty.php', 'text' => 'Moje Projekty'],
        ['href' => 'certyfikaty.php', 'text' => 'Certyfikaty'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'nadzor-tech.php', 'text' => 'Nadzór Tech'],
        ['href' => 'kontakt.php', 'text' => 'Kontakt']
    ],
    'pt' => [
        ['href' => 'index.php', 'text' => 'Início'],
        ['href' => 'sobre-mim.php', 'text' => 'Sobre mim'],
        ['href' => 'projetos.php', 'text' => 'Os meus Projetos'],
        ['href' => 'certificacoes.php', 'text' => 'Certificações'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'vigilancia-tech.php', 'text' => 'Vigilância Tech'],
        ['href' => 'contato.php', 'text' => 'Contacto']
    ],
    'pt-BR' => [
        ['href' => 'index.php', 'text' => 'Início'],
        ['href' => 'sobre-mim.php', 'text' => 'Sobre mim'],
        ['href' => 'projetos.php', 'text' => 'Meus Projetos'],
        ['href' => 'certificacoes.php', 'text' => 'Certificações'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'vigilancia-tech.php', 'text' => 'Vigilância Tech'],
        ['href' => 'contato.php', 'text' => 'Contato']
    ],
    'ja' => [
        ['href' => 'index.php', 'text' => 'ホーム'],
        ['href' => 'about.php', 'text' => '私について'],
        ['href' => 'projects.php', 'text' => 'プロジェクト'],
        ['href' => 'certifications.php', 'text' => '資格'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'tech-watch.php', 'text' => '技術動向'],
        ['href' => 'contact.php', 'text' => 'お問い合わせ']
    ],
    'zh' => [
        ['href' => 'index.php', 'text' => '首页'],
        ['href' => 'about.php', 'text' => '关于我'],
        ['href' => 'projects.php', 'text' => '我的项目'],
        ['href' => 'certifications.php', 'text' => '认证'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'tech-watch.php', 'text' => '技术观察'],
        ['href' => 'contact.php', 'text' => '联系']
    ],
    'ar' => [
        ['href' => 'index.php', 'text' => 'الرئيسية'],
        ['href' => 'about.php', 'text' => 'عني'],
        ['href' => 'projects.php', 'text' => 'مشاريعي'],
        ['href' => 'certifications.php', 'text' => 'الشهادات'],
        ['href' => 'tcs.php', 'text' => 'TCS'],
        ['href' => 'tech-watch.php', 'text' => 'المراقبة التقنية'],
        ['href' => 'contact.php', 'text' => 'اتصل']
    ]
];

$navLinks = $navConfig[$currentLang] ?? $navConfig['fr'];
?>
<html lang="<?php echo $currentLang; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio de Flavien GARIBALDI, étudiant en BTS SIO SISR. Compétences en réseaux, systèmes, cybersécurité et virtualisation.">
    <meta name="keywords" content="Portfolio, BTS SIO, SISR, Réseaux, Systèmes, Cybersécurité, Flavien GARIBALDI">
    <meta name="author" content="Flavien GARIBALDI">
    <meta property="og:title" content="<?php echo $pageTitle ?? 'Portfolio - Flavien GARIBALDI'; ?>">
    <meta property="og:description" content="Portfolio professionnel de Flavien GARIBALDI, étudiant en BTS SIO SISR">
    <meta property="og:type" content="website">
    <title><?php echo $pageTitle ?? 'Portfolio - Flavien GARIBALDI'; ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <nav>
        <ul>
            <?php foreach ($navLinks as $link): ?>
                <li><a href="<?php echo $link['href']; ?>"><?php echo $link['text']; ?></a></li>
            <?php endforeach; ?>
        </ul>
    </nav>
