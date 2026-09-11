var WHATSAPP_NUMBER = '5521984137342';
document.querySelectorAll('[data-wa-msg]').forEach(function (el) {
    var msg = el.getAttribute('data-wa-msg');
    el.href = 'https://wa.me/' + WHATSAPP_NUMBER + (msg ? '?text=' + encodeURIComponent(msg) : '');
});

// Mobile menu
(function () {
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');
    var closeBtn = document.getElementById('mobile-menu-close');

    function openMenu() {
        mobileMenu.removeAttribute('hidden');
        hamburger.setAttribute('aria-expanded', 'true');
        closeBtn.focus();
    }
    function closeMenu() {
        mobileMenu.setAttribute('hidden', '');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
    }

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !mobileMenu.hasAttribute('hidden')) closeMenu();
    });
})();

// Scroll reveal
(function () {
    var selectors = '.service-card, .case-card, .roi-card, .testimonial-card, .pricing-card, .about-pillar, .faq-item, .section-header, .hero-card';
    document.querySelectorAll(selectors).forEach(function (el) {
        el.classList.add('reveal');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
    });
})();

// FAQ aria-expanded
document.querySelectorAll('.faq-item').forEach(function (details) {
    var summary = details.querySelector('summary');
    summary.setAttribute('aria-expanded', details.open ? 'true' : 'false');
    details.addEventListener('toggle', function () {
        summary.setAttribute('aria-expanded', details.open ? 'true' : 'false');
    });
});
