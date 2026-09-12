const projectTranslations = {
    'projet-1-1-ImperativeProg.html': {
        title: 'Console Minesweeper (C++)', hero: 'A console Minesweeper game with keyboard controls and dynamic mine generation.',
        intro: 'A C++ console project with a text interface designed to be played with the keyboard.',
        content: ['Grid system with mine generation', 'Cursor movement in the console', 'Revealing and flagging cells', 'Keyboard input handling'],
        skills: ['C++ programming', 'Memory management and simple data structures', 'Algorithmic logic', 'Console user interaction'],
        details: ['A console Minesweeper game written in C++.', 'Three difficulty levels: 9x9, 16x16 and 30x16.', 'Random mine generation and adjacent-mine counting.', 'Coordinate movement, cell revealing and flag placement.', 'Win, loss and replay handling.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Individual project.'
    },
    'projet-1-2-Poo.html': {
        title: 'Console RPG', hero: 'A C++ console RPG built around a grid, characters and turn-based combat.',
        intro: 'A console RPG designed to practise object-oriented programming in C++ through a map, characters and combat.',
        content: ['32x32 game grid', 'Fighter, Mage and Assassin character classes', 'Character movement and nearby enemy detection', 'Combat, skills, statistics and level progression'],
        skills: ['Object-oriented C++ programming', 'Inheritance and polymorphism', 'Character and enemy class design', 'Game loop and combat system management'],
        details: ['Turn-based RPG displayed on a 32x32 grid.', 'Character creation with three classes.', 'Golem, Spectre and Reaper enemies.', 'Movement, combat, skills and level progression.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Individual project.'
    },
    'projet-1-3-AdvancedProg.html': {
        title: 'Image Encryption', hero: 'A Windows application for hiding and retrieving a character inside an image.',
        intro: 'A Windows application dedicated to hiding and recovering a character in an image.',
        content: ['Loading an image with GDI+', 'Writing a character into the blue channel least significant bits', 'Reading the first 8 pixels to rebuild the character', 'Saving the modified image as PNG'],
        skills: ['C++ on Windows', 'GDI+ and image manipulation', 'Bitwise operations', 'Codec and PNG file handling'],
        details: ['Windows application using C++ and GDI+.', 'Character encryption in the blue channel least significant bits.', 'The first 8 pixels store the character.', 'PNG export and pixel-based decryption.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Individual project.'
    },
    'projet-1-4-Shoot\'emUp.html': {
        title: 'Shoot-em-up', hero: 'A top-down action prototype focused on movement, shooting and enemies.',
        intro: 'A simple shoot-em-up used to explore enemies, shooting and gameplay interactions.',
        content: ['Player movement', 'Projectile management', 'Enemy and attack logic', 'First complete gameplay loop'],
        skills: ['Game logic', 'User input handling', 'Simple gameplay architecture', 'C++ programming'],
        details: ['Top-down C++ shoot-em-up prototype.', 'Player movement and user input handling.', 'Projectile creation and movement.', 'Enemy and collision management.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Pair project.'
    },
    'projet-1-5-Encapsulation.html': {
        title: 'Encapsulation', hero: 'A small graphics library and Pong game built around rendering and interaction objects.',
        intro: 'A small graphics library and Pong game used to apply encapsulation to rendering and interaction objects.',
        content: ['Abstract windows, textures, sprites and text', 'Keyboard and mouse input handling', 'Ball and paddle movement', 'Collisions, score, pause and game over'],
        skills: ['Object-oriented C++ programming', 'Raylib', 'Abstract interface design', 'Collision handling', 'Simple game engine organisation'],
        details: ['BML library with abstract interfaces.', 'Window, texture, sprite, text and input management.', 'Raylib backend for display and interaction.', 'Pong example with score, pause and collisions.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Pair project.'
    },
    'projet-1-6-Template.html': {
        title: 'Break Brick', hero: 'A C++ Break Brick game organised around components and specialised behaviours.',
        intro: 'A Break Brick game structured around components and specialised behaviours.',
        content: ['Components for the scene and game objects', 'Player, ball and brick behaviours', 'Collision and projectile management', 'Score and lives management'],
        skills: ['C++ programming', 'Component-based architecture', 'Game behaviour design', 'Collision and gameplay management'],
        details: ['Break Brick game project based on a component architecture.', 'Separate behaviours for the player, ball and bricks.', 'Collision and projectile management.', 'Score and lives management.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Pair project.'
    },
    'projet-1-7-StateMachine.html': {
        title: 'State Machine', hero: 'A game project using a LightEngine architecture to organise actions and behaviours.',
        intro: 'A game project using a LightEngine architecture to organise actions and behaviours through different states.',
        content: ['Actions for movement, attack and escape', 'Enemy and boss behaviours', 'Engine resource and scene management', 'Behaviour transitions based on the situation'],
        skills: ['Object-oriented C++ programming', 'Action and behaviour design', 'Game engine organisation', 'SFML'],
        details: ['LightEngine architecture based on actions and behaviour states.', 'Dedicated actions for enemies, the boss and movement.', 'SFML for window, resources and rendering.', 'Transitions controlling game behaviours.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Pair project.'
    },
    'projet-1-8-2DPlateformer.html': {
        title: '2D Platformer', hero: 'A 2D platform game built with LightEngine, focused on movement, collisions and enemies.',
        intro: 'A 2D platform game developed with LightEngine, focused on movement, collisions and enemy behaviours.',
        content: ['Character movement and jumping', 'Collision and resource management', 'Enemy and boss actions', 'Organisation of a playable 2D level'],
        skills: ['C++ programming', '2D physics and collisions', 'SFML', 'Game behaviour design'],
        details: ['LightEngine used to build a 2D platform game.', 'Character, enemy and boss action management.', 'Resource, level and collision organisation.', 'C++ project built with SFML.'], duration: '3 weeks - 1 week of theory and 2 weeks of practice.', team: 'Nine-person project.'
    },
    'projet-2-1-Geometry.html': {
        title: 'Geometry', hero: 'A simple rendering library for exploring geometry, transformations and lighting in 2D and 3D scenes.',
        intro: 'A simple rendering library for exploring geometry, transformations and lighting in 2D and 3D scenes.',
        content: ['2D and 3D geometric shape rendering', 'Transformation, camera and lighting management', 'Shadow calculation with a Shadow Map', 'Window and user input management'],
        skills: ['C++ programming', 'Geometry and 3D transformations', 'Graphics rendering', 'Camera and lighting management'],
        details: ['Simple 2D and 3D rendering library.', 'Geometry, transformations, camera and lighting.', 'Shadow Map rendering.', 'Renderer, window and input system organisation.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Individual project.'
    },
    'projet-2-2-Runner.html': {
        title: 'Runner', hero: 'A rendering and gameplay project built on the GC-simple-render library.',
        intro: 'A rendering and gameplay project built on GC-simple-render, with a foundation for a runner game.',
        content: ['Game scene and resource management', 'Camera, geometry, textures and lighting', 'Separation between renderer and sandbox', 'Gameplay foundation focused on movement and dodging'],
        skills: ['C++ programming', '2D/3D rendering engine use', 'Camera and resource management', 'Game mechanic design'],
        details: ['Project using the GC-simple-render library.', 'Camera, geometry, lighting and texture management.', 'Code organised between renderer and game sandbox.', 'AssetManager for resources.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Pair project.'
    },
    'projet-2-3-PathFinding.html': {
        title: 'Pathfinding', hero: 'A C++ grid pathfinding project integrated with a rendering base to visualise the result.',
        intro: 'A C++ grid pathfinding project integrated with a rendering base to visualise the result.',
        content: ['Navigable grid representation', 'Path calculation between a start and destination', 'Obstacle handling', 'Path display and documented controls'],
        skills: ['Pathfinding algorithms', 'Grid modelling', 'C++ programming', 'Rendering engine integration'],
        details: ['C++ project built on GC-simple-render.', 'Grid display and calculated path visualisation.', 'Obstacles considered during pathfinding.', 'Keyboard controls documented in READCONTROLS.txt.'], duration: '2 weeks - 1 week of theory and 1 week of practice.', team: 'Pair project.'
    },
    'projet-2-4-ArenaShooter.html': {
        title: 'Arena Shooter', hero: 'An arena action game with dynamic combat and enemy management.',
        intro: 'A C++ arena action game with several enemy types, weapons and interactive elements.',
        content: ['Arena, door and elevator management', 'Regular enemies, bots and boss', 'Movement, shooting, projectiles and flamethrower', 'Interactive objects such as crates and consumables'],
        skills: ['C++ programming', 'Action gameplay design', 'Enemy and simple AI management', 'Game architecture organisation'],
        details: ['C++ arena action game.', 'Arena, door, elevator and crate management.', 'Several enemy types, including bots and a boss.', 'Projectile, flamethrower and interactive object management.'], duration: '4 weeks - 1 week of theory and 3 weeks of practice.', team: 'Five-person project.', media: 'Media'
    },
    'projet-2-6-Moteur.html': {
        title: 'Game Engine', hero: 'An OpenGL game engine in C++ organised around an ECS architecture.',
        intro: 'A project focused on building a reusable OpenGL game engine with an Entity Component System architecture.',
        content: ['ECS architecture for entities and components', 'OpenGL rendering and graphics resource management', 'Scene, transform and camera management', 'Reusable technical foundation for games'],
        skills: ['C++ programming', 'OpenGL', 'Entity Component System architecture', '2D and 3D rendering', 'Game engine organisation'],
        details: ['C++ game engine based on an ECS architecture.', 'Entity, component and system management.', 'OpenGL rendering and graphics resource integration.', 'Technical foundation for future prototypes.'], duration: '1 month.', team: 'Four-person project.'
    },
    'projet-2-5-Reseau.html': {
        title: 'Game Communication', hero: 'A C++ project focused on communication between a client and game entities through network messages.',
        intro: 'A project exploring game client organisation and message flow between different systems.',
        content: ['Local and network game entities', 'Connection, movement, shooting and damage messages', 'Player, model, coin and status management', 'Communication protocol documentation and diagrams'],
        skills: ['C++ programming', 'Message protocol design', 'Client and entity architecture', 'Network communication'],
        details: ['Client project with several network entities.', 'Messages for connection, movement, shooting, damage and objects.', 'Player, network entity, model and coin management.', 'Protocol design files and diagrams.'], duration: '1 month.', team: 'Pair project.'
    },
    'projet-2-7-Game.html': {
        title: '3D Horror Game', hero: 'A C++ game project exploring a 3D prototype and future gameplay mechanics.',
        intro: 'A C++ game project designed to experiment with a 3D prototype and future gameplay mechanics.',
        content: ['Code base organised into resources, configuration and source folders', 'Gameplay mechanics prototype', 'Structure prepared for future gameplay systems', 'Ongoing 3D game development'],
        skills: ['Gameplay design', 'C++ programming', 'HLSL shader basics', 'Game project organisation'],
        details: ['C++ game project with bin, config, res and src folders.', 'Prototype for gameplay experimentation.', 'Ongoing project prepared for future systems.'], duration: '1 month.', team: 'Three-person development project.'
    },
    'projet-ttf-parser.html': {
        title: 'TTF Parser', hero: 'Binary TrueType file reading and glyph transformation into usable geometry.',
        intro: 'This project analyses the internal structure of a TrueType font and handles low-level binary data.',
        content: ['TrueType file reading', 'Glyph outline extraction', 'Conversion into triangulated geometry', 'Binary parsing in C++'],
        skills: ['Binary file parsing', 'Applied mathematics', 'Low-level data structures', 'C++ and CMake'],
        details: ['TrueType font file analysis.', 'Glyph outline and associated data extraction.', 'Conversion of font data into triangulated geometry.', 'Binary data processing in C++ with CMake.'], duration: 'Not specified.', team: 'Individual project.'
    }
};

function setText(element, value) {
    if (element && value !== undefined) element.textContent = value;
}

function translateList(element, values) {
    if (!element || !values) return;
    Array.from(element.children).forEach((item, index) => {
        const label = item.querySelector('.skill-label');
        setText(label || item, values[index] || '');
    });
}

function translateProject(lang) {
    const key = window.location.pathname.split('/').pop();
    const data = projectTranslations[key];
    document.documentElement.lang = lang;
    const back = document.querySelector('.bouton-cv');
    if (back) {
        back.textContent = lang === 'en' ? 'Back to Portfolio' : 'Retour au Portfolio';
        back.setAttribute('aria-label', lang === 'en' ? 'Back to Portfolio' : 'Retour au Portfolio');
        const backUrl = new URL(back.href, window.location.href);
        if (lang === 'fr') backUrl.searchParams.set('lang', 'fr');
        else backUrl.searchParams.delete('lang');
        back.href = backUrl.href;
    }
    if (!data) return;

    if (lang === 'en') document.title = `${data.title} - Bastien Allemand`;
    const headings = Array.from(document.querySelectorAll('.project-details > h2'));
    const hasMedia = Boolean(data.media || document.querySelector('.project-gallery, .project-video'));
    const sections = hasMedia
        ? ['intro', 'content', 'skills', 'details', 'media', 'duration', 'team']
        : ['intro', 'content', 'skills', 'details', 'duration', 'team'];
    setText(document.querySelector('.hero h1'), lang === 'en' ? data.title : document.querySelector('.hero h1')?.textContent);
    setText(document.querySelector('.hero p'), lang === 'en' ? data.hero : document.querySelector('.hero p')?.textContent);

    if (lang === 'en') {
        const button = document.querySelector('.btn-download');
        if (button) setText(button, 'View on GitHub');
        headings.forEach((heading, index) => {
            const section = sections[index];
            const next = heading.nextElementSibling;
            const value = data[section];
            if (section === 'media') setText(heading, data.media || 'Media');
            else if (section === 'duration') { setText(heading, 'Duration'); setText(next, data.duration); }
            else if (section === 'team') { setText(heading, 'Team'); setText(next, data.team); }
            else if (section === 'intro') { setText(heading, 'Introduction'); setText(next, data.intro); }
            else if (section === 'content') { setText(heading, 'Content'); translateList(next, data.content); }
            else if (section === 'skills') { setText(heading, 'Skills'); translateList(next, data.skills); }
            else if (section === 'details') { setText(heading, 'Details'); translateList(next, data.details); }
        });

        const videoFallback = document.querySelector('.project-video');
        if (videoFallback && videoFallback.lastChild) videoFallback.lastChild.textContent = 'Your browser does not support video playback.';
    }
}

function translateIndex(lang) {
    if (!document.querySelector('#projets')) return;
    document.documentElement.lang = lang;
    const english = lang === 'en';
    setText(document.querySelector('.hero h1'), english ? 'Bastien Allemand--Leung Pin' : 'Bastien Allemand--Leung Pin');
    setText(document.querySelector('.hero p'), english ? 'C++ Developer | Programming student | Artificial intelligence enthusiast' : 'Développeur C++ | Étudiant en programmation | Passionné par l\'intelligence artificielle');
    const sidebar = document.querySelectorAll('.sidebar-nav a');
    ['About me', 'Skills', 'Projects'].forEach((text, index) => { if (english) setText(sidebar[index], text); });
    if (!english) ['À propos de moi', 'Compétences', 'Projets'].forEach((text, index) => setText(sidebar[index], text));
    setText(document.querySelector('#a-propos h2'), english ? 'About me' : 'À propos de moi');
    setText(document.querySelector('#a-propos p'), english ? 'I specialise in video game development with a strong interest in technical architecture. My training has given me solid foundations in low-level programming (C++, DirectX12) and network development. I value constructive feedback and invest fully in every project to improve my working methods. I am now looking for new technical challenges and ways to turn complex problems into efficient gameplay solutions.' : document.querySelector('#a-propos p')?.textContent);
    setText(document.querySelector('#cv h2'), english ? 'Skills' : 'Compétences');
    if (english) translateList(document.querySelector('.skills-list'), ['C', 'C++ (STL / OOP)', 'C#', 'DirectX12', 'Unity', 'Git / GitHub', 'Game development (ECS architecture, physics, shaders)', '3D mathematics']);
    setText(document.querySelector('#timeline-title'), english ? 'My journey' : 'Mon parcours');
    const timelineItems = [
        ['2023 - 2024', 'Baccalaureate at La Providence, Fécamp', 'Baccalauréat à La Providence, Fécamp'],
        ['2024 - 2025', 'First year of programming at Gaming Campus', '1re année de programmation à Gaming Campus'],
        ['2025 - 2026', 'Second year of programming at Gaming Campus', '2e année de programmation à Gaming Campus'],
        ['2026 - 2027', 'Computer science degree, maths-info option, at the University of Bordeaux', 'Licence informatique, option math-info, à l’Université de Bordeaux']
    ];
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        const timeline = timelineItems[index];
        if (!timeline) return;
        setText(item.querySelector('.timeline-date'), timeline[0]);
        setText(item.querySelector('.timeline-school'), english ? timeline[1] : timeline[2]);
    });
    const cards = document.querySelectorAll('#projets details');
    const cardTitles = english ? ['Personal project', 'School projects'] : ['Projet perso', 'Projet scolaire'];
    const cardDescriptions = english ? ['Personal project focused on TrueType file analysis.', 'Projects completed at higher education school.'] : ['Projet personnel des projets realiser seul ou en petite équipe durant des game jams ou des projet personnels.', 'Projets réalisés à l’école supérieure.'];
    cards.forEach((card, index) => {
        const title = card.querySelector('h3');
        if (title && english && title.firstChild) title.firstChild.textContent = `${cardTitles[index]} `;
        else if (title && !english && title.firstChild) title.firstChild.textContent = `${cardTitles[index]} `;
        setText(card.querySelector('.project-card-description'), cardDescriptions[index]);
    });
    const projectLinksPanel = document.querySelector('#project-links');
    if (projectLinksPanel) {
        setText(projectLinksPanel.querySelector('strong'), english ? 'Find my projects:' : 'Retrouvez mes projets :');
    }
    if (english) {
        const projectCardLinks = document.querySelectorAll('#projets details a');
        const titles = ['TTF Parser', 'Scary Clown Game', 'RNG Tower Defense', '3D Horror Game', 'Game Engine', 'Game Communication', 'Arena Shooter', 'Pathfinding', 'Runner', 'Geometry', '2D Platformer', 'State Machine', 'Break Brick', 'Encapsulation', 'Shoot-em-up', 'Image Encryption', 'Console RPG', 'Console Minesweeper (C++)'];
        const descriptions = ['Binary TrueType file parsing and glyph extraction.', 'Game published on Itch.io.', 'Tower defense game published on Itch.io.', 'Game project currently in development.', 'OpenGL game engine with ECS architecture.', 'Communication between a game client and entities.', 'Arena action game with enemy management.', 'Grid-based pathfinding project.', 'Reflex-based dodging and progression game.', 'Mathematical foundations for games and graphics.', '2D prototype focused on collisions and jumping.', 'State logic for system behaviour.', 'Generic programming and code reuse.', 'Data management and protection of internal states.', 'Top-down action prototype.', 'Advanced C++ concepts and generic programming.', 'Work on encapsulation and classes.', 'Console Minesweeper implementation.'];
        const metadata = [
            ['Not specified', 'Individual project', '2024-25'],
            ['Not specified', 'Individual project', 'Not specified'],
            ['Not specified', 'Individual project', 'Not specified'],
            ['1 month', 'Three-person development project', '2025-26'],
            ['1 month', 'Project team', '2025-26'],
            ['1 month', 'Project team', '2025-26'],
            ['4 weeks', 'Five-person project', '2025-26'],
            ['2 weeks - 1 week of theory and 1 week of practice', 'Pair project', '2025-26'],
            ['2 weeks - 1 week of theory and 1 week of practice', 'Pair project', '2025-26'],
            ['2 weeks - 1 week of theory and 1 week of practice', 'Individual project', '2025-26'],
            ['3 weeks - 1 week of theory and 2 weeks of practice', 'Nine-person project', '2024-25'],
            ['2 weeks', 'Pair project', '2024-25'],
            ['2 weeks', 'Pair project', '2024-25'],
            ['2 weeks', 'Pair project', '2024-25'],
            ['2 weeks', 'Pair project', '2024-25'],
            ['2 weeks', 'Individual project', '2024-25'],
            ['2 weeks', 'Individual project', '2024-25'],
            ['2 weeks', 'Individual project', '2024-25']
        ];
        projectCardLinks.forEach((link, index) => {
            setText(link.querySelector('.project-title'), titles[index]);
            setText(link.querySelector('.project-short'), descriptions[index]);
            const fields = link.querySelectorAll('.project-field');
            const labels = ['Description:', 'Duration:', 'Group:', 'Year:'];
            setText(fields[0]?.querySelector('.project-label'), labels[0]);
            setText(fields[1], `${labels[1]} ${metadata[index][0]}`);
            setText(fields[2], `${labels[2]} ${metadata[index][1]}`);
            setText(fields[3], `${labels[3]} ${metadata[index][2]}`);
        });
        setText(document.querySelector('#contact h2'), 'Contact');
    }
}

function applyLanguage(lang) {
    const isIndex = Boolean(document.querySelector('#projets'));
    if (isIndex) translateIndex(lang); else translateProject(lang);
    const button = document.querySelector('.language-toggle');
    if (button) {
        button.textContent = lang === 'en' ? 'English' : 'Français';
        button.setAttribute('aria-label', lang === 'en' ? 'Switch to English' : 'Switch to French');
    }
}

function getLanguage() {
    const languageFromUrl = new URLSearchParams(window.location.search).get('lang');
    if (languageFromUrl === 'fr' || languageFromUrl === 'en') return languageFromUrl;
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage === 'fr' || savedLanguage === 'en' ? savedLanguage : 'en';
}

function preserveLanguageInLinks(lang) {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        const url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (lang === 'fr') url.searchParams.set('lang', 'fr');
        else url.searchParams.delete('lang');
        link.href = url.href;
    });
}

function initLanguage() {
    const button = document.createElement('button');
    button.className = 'language-toggle';
    button.type = 'button';
    document.body.appendChild(button);
    const savedLanguage = getLanguage();
    localStorage.setItem('portfolio-language', savedLanguage);
    button.addEventListener('click', () => {
        const language = getLanguage() === 'en' ? 'fr' : 'en';
        localStorage.setItem('portfolio-language', language);
        sessionStorage.setItem('portfolio-scroll-position', String(window.scrollY));
        const url = new URL(window.location.href);
        if (language === 'fr') url.searchParams.set('lang', 'fr');
        else url.searchParams.delete('lang');
        window.location.href = url.href;
    });
    applyLanguage(savedLanguage);
    preserveLanguageInLinks(savedLanguage);
    const scrollPosition = sessionStorage.getItem('portfolio-scroll-position');
    if (scrollPosition !== null) {
        sessionStorage.removeItem('portfolio-scroll-position');
        requestAnimationFrame(() => window.scrollTo(0, Number(scrollPosition)));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
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
