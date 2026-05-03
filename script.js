document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

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
        });
    });

    // 2. Active Navigation Highlighting
    const sections = document.querySelectorAll('section, header, footer');

    const highlightNavigation = () => {
        const scrollPosition = window.scrollY + 100; // Offset for navbar

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
    highlightNavigation(); // Initial call

    // 3. Scroll Reveal Animations
    // Using Intersection Observer for performance
    const revealElements = document.querySelectorAll('section h2, .skills-list li, .project-container, .wip li');

    // Set initial state for styling
    revealElements.forEach(el => {
        el.classList.add('reveal-item');
    });

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Typing Animation for Hero Subtitle
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) {
        const originalText = heroSubtitle.innerHTML;
        heroSubtitle.innerHTML = '';

        let i = 0;
        const typingSpeed = 50; // ms per character

        // Strip HTML if any, or just type text Content
        const textToType = originalText.replace(/<[^>]*>?/gm, ''); // simple strip if needed, though the HTML structure here has `|` chars

        function typeWriter() {
            if (i < originalText.length) {
                // If we encounter HTML tags, we should probably just use textContent and type character by character
                // Since the original text is "Développeur C++ | ...", we can just type it.
                heroSubtitle.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Optional: add a blinking cursor effect at the end
                heroSubtitle.innerHTML += '<span class="cursor">_</span>';
            }
        }

        // Start typing effect after a small delay
        setTimeout(typeWriter, 500);
    }
});
