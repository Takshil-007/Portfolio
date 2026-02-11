// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll reveal effect for sections
const sections = document.querySelectorAll('.hero, .skills, .projects, .cta-banner, .contact');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Hero image float effect (additional subtle animation)
const heroImage = document.querySelector('.hero-image img');
let floatDirection = 1;
let floatAmount = 0;

setInterval(() => {
    floatAmount += 0.5 * floatDirection;
    if (floatAmount > 12 || floatAmount < -12) floatDirection *= -1;
    heroImage.style.transform = `translateY(${-floatAmount}px)`;
}, 60);

// Optional: Button click ripple effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        btn.appendChild(ripple);
        const rect = btn.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
