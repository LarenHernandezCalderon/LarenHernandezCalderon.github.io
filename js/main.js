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