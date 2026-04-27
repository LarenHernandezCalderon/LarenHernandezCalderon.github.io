// Scroll reveal animation
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
    }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Hamburger Menu Toggle
const nav = document.querySelector('nav');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelectorAll('.nav-links a');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav && !nav.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// Scroll Spy for active section highlighting
const sections = document.querySelectorAll('section, div[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinkEls.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});