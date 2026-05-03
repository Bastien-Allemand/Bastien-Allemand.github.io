document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.navbar a[href^="#"], .sidebar-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            const sidebarToggleCheckbox = document.getElementById('sidebarToggleCheckbox');
            if (sidebarToggleCheckbox) {
                sidebarToggleCheckbox.checked = false;
            }
        });
    });

    // 2. Active Navigation Highlighting
    const sections = document.querySelectorAll('section, header, footer');

    const highlightNavigation = () => {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation();

    // 3. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('section h2, .skills-list li, .project-container, .wip li');

    revealElements.forEach(el => {
        el.classList.add('reveal-item');
    });

    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Typing Animation for Hero Subtitle
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) {
        const textToType = heroSubtitle.textContent.trim();
        heroSubtitle.textContent = '';

        let i = 0;
        const typingSpeed = 50;

        function typeWriter() {
            if (i < textToType.length) {
                heroSubtitle.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }

        setTimeout(typeWriter, 500);
    }
});
