const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});
