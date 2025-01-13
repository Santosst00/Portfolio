// Seleção de elementos
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const progressBar = document.querySelector('.progress-bar');
const backToTop = document.querySelector('.back-to-top');
const techLevels = document.querySelectorAll('.level-bar');

// Tema
function toggleTheme() {
    document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    const icon = themeToggle.querySelector('i');
    icon.className = document.body.dataset.theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', document.body.dataset.theme);
}

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.dataset.theme = savedTheme;
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Idioma
const translations = {
    'pt-BR': {
        'nav.home': 'Início',
        'nav.stack': 'Stack',
        'nav.blog': 'Blog',
        'nav.contact': 'Contato',
        'hero.title': 'Olá, eu sou',
        'hero.description': 'Desenvolvedor Full Stack e Especialista em No-Code. Transformando ideias em soluções digitais inovadoras.',
        'hero.cta': 'Entre em Contato',
        'stack.title': 'Stack Tecnológico',
        'blog.title': 'Meu Blog',
        'blog.post1.title': 'O Futuro do Desenvolvimento No-Code',
        'blog.post1.excerpt': 'Como o No-Code está revolucionando o desenvolvimento de software e democratizando a criação digital.',
        'blog.post2.title': 'Desenvolvimento Mobile com FlutterFlow',
        'blog.post2.excerpt': 'Um guia prático sobre como criar aplicativos móveis profissionais usando FlutterFlow.',
        'blog.post3.title': 'Inteligência Artificial na Prática',
        'blog.post3.excerpt': 'Casos reais de como a IA está transformando o desenvolvimento de software e negócios.',
        'blog.readMore': 'Ler mais',
        'contact.title': 'Entre em Contato',
        'contact.email': 'Email',
        'contact.phone': 'Telefone',
        'contact.location': 'Localização',
        'contact.form.name': 'Nome',
        'contact.form.email': 'Email',
        'contact.form.message': 'Mensagem',
        'contact.form.submit': 'Enviar Mensagem',
        'footer.description': 'Transformando ideias em realidade digital',
        'footer.cta': 'Vamos Conversar',
        'footer.copyright': ' 2023 Luan Felipe. Todos os direitos reservados.'
    },
    'en': {
        'nav.home': 'Home',
        'nav.stack': 'Stack',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',
        'hero.title': 'Hi, I am',
        'hero.description': 'Full Stack Developer and No-Code Specialist. Transforming ideas into innovative digital solutions.',
        'hero.cta': 'Get in Touch',
        'stack.title': 'Tech Stack',
        'blog.title': 'My Blog',
        'blog.post1.title': 'The Future of No-Code Development',
        'blog.post1.excerpt': 'How No-Code is revolutionizing software development and democratizing digital creation.',
        'blog.post2.title': 'Mobile Development with FlutterFlow',
        'blog.post2.excerpt': 'A practical guide on creating professional mobile applications using FlutterFlow.',
        'blog.post3.title': 'Artificial Intelligence in Practice',
        'blog.post3.excerpt': 'Real cases of how AI is transforming software development and business.',
        'blog.readMore': 'Read more',
        'contact.title': 'Get in Touch',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        'footer.description': 'Transforming ideas into digital reality',
        'footer.cta': 'Let\'s Talk',
        'footer.copyright': ' 2023 Luan Felipe. All rights reserved.'
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'pt-BR' ? 'en' : 'pt-BR';
    document.documentElement.lang = newLang;
    const icon = langToggle.querySelector('i');
    icon.className = newLang === 'en' ? 'fas fa-globe-americas' : 'fas fa-globe-europe';
    updateContent(newLang);
    localStorage.setItem('language', newLang);
}

// Carregar idioma salvo
const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
    document.documentElement.lang = savedLanguage;
    const icon = langToggle.querySelector('i');
    icon.className = savedLanguage === 'en' ? 'fas fa-globe-americas' : 'fas fa-globe-europe';
    updateContent(savedLanguage);
}

// Progress Bar
function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / fullHeight) * 100;
    progressBar.style.width = `${progress}%`;
}

// Back to Top
function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Tech Level Animation
function animateTechLevels() {
    techLevels.forEach(level => {
        const targetLevel = level.dataset.level;
        level.style.width = `${targetLevel}%`;
    });
}

// Formulário de Contato
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Aqui você pode adicionar a lógica para enviar o formulário
        console.log('Dados do formulário:', data);
        contactForm.reset();
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
    }
});

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
langToggle.addEventListener('click', toggleLanguage);
window.addEventListener('scroll', () => {
    updateProgressBar();
    toggleBackToTop();
});
window.addEventListener('load', animateTechLevels);
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
