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

// Auto-playing image slider
const slider = document.querySelector('[data-slider]');
if (slider) {
    const slides = Array.from(slider.querySelectorAll('.slider-image'));
    const dots = Array.from(slider.querySelectorAll('[data-slider-dot]'));
    const prevBtn = slider.querySelector('[data-slider-prev]');
    const nextBtn = slider.querySelector('[data-slider-next]');
    let currentSlide = 0;
    let sliderTimer;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
    }

    function startSlider() {
        clearInterval(sliderTimer);
        sliderTimer = setInterval(() => showSlide(currentSlide + 1), 4000);
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        startSlider();
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        startSlider();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(Number(dot.dataset.sliderDot));
            startSlider();
        });
    });

    startSlider();
}

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
