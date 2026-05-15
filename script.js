// Language switcher
const langBtns = {
    ka: document.getElementById('lang-ka'),
    en: document.getElementById('lang-en'),
};
function setLang(lang) {
    const key = 'text' + lang.charAt(0).toUpperCase() + lang.slice(1);
    document.querySelectorAll('[data-text-ka]').forEach(el => {
        const text = el.dataset[key];
        if (text) el.textContent = text;
    });
    document.documentElement.lang = lang === 'ka' ? 'ka' : 'en';
    Object.keys(langBtns).forEach(k => langBtns[k].classList.toggle('active', k === lang));
    document.body.classList.toggle('en', lang === 'en');
    localStorage.setItem('geopoint-lang', lang);
}
langBtns.ka.addEventListener('click', () => setLang('ka'));
langBtns.en.addEventListener('click', () => setLang('en'));
// On load, set language from localStorage or default to KA
setLang(localStorage.getItem('geopoint-lang') || 'ka');

// Smooth scroll for nav links
Array.from(document.querySelectorAll('a[href^="#"]')).forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Contact form (demo only)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('მადლობა!\nThank you!');
    this.reset();
});
