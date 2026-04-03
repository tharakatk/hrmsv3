/**
 * lifeHRMS Website — Main JavaScript
 * Handles: scroll reveals, navbar, mobile menu, FAQ accordion,
 *          smooth scrolling, contact form.
 */

(function () {
    'use strict';

    // ──────────────────────────────────────────────
    // 1. Scroll Reveal (IntersectionObserver)
    // ──────────────────────────────────────────────
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    // ──────────────────────────────────────────────
    // 2. Navbar — Glass effect on scroll
    // ──────────────────────────────────────────────
    const navbar = document.getElementById('navbar');

    window.addEventListener(
        'scroll',
        () => {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        },
        { passive: true }
    );

    // ──────────────────────────────────────────────
    // 3. Mobile Menu
    // ──────────────────────────────────────────────
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');

    if (mobileToggle && mobileMenu && mobileClose) {
        mobileToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
        mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));

        document.querySelectorAll('.mobile-link').forEach((link) => {
            link.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
    }

    // ──────────────────────────────────────────────
    // 4. FAQ Accordion
    // ──────────────────────────────────────────────
    window.toggleFaq = function (item) {
        const answer = item.querySelector('.faq-answer');
        const isOpen = answer.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item').forEach((el) => {
            el.classList.remove('active');
            el.querySelector('.faq-answer').classList.remove('open');
        });

        // Open clicked (if it was closed)
        if (!isOpen) {
            item.classList.add('active');
            answer.classList.add('open');
        }
    };

    // ──────────────────────────────────────────────
    // 5. Smooth Scroll for Anchor Links
    // ──────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80; // navbar height
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ──────────────────────────────────────────────
    // 6. Contact Form Handler (demo)
    // ──────────────────────────────────────────────
    window.handleFormSubmit = function (e) {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = '<span class="inline-block animate-pulse">Sending...</span>';
        btn.disabled = true;

        // Simulate network request
        setTimeout(() => {
            btn.innerHTML = '✓ Message Sent!';
            btn.style.background = '#00e66a';
            btn.style.color = '#003619';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
                e.target.reset();
            }, 3000);
        }, 1500);

        return false;
    };
})();
