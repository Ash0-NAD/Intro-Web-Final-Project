// About Page Specific JavaScript

// Animate elements on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to cards
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.why-card, .environment-image, .mission-box, .vision-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });

    // Stagger animation for why cards
    const whyCards = document.querySelectorAll('.why-card');
    whyCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.about-hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }

    // Smooth reveal for mission and vision
    const missionBox = document.querySelector('.mission-box');
    const visionBox = document.querySelector('.vision-box');
    
    if (missionBox) missionBox.style.transitionDelay = '0.2s';
    if (visionBox) visionBox.style.transitionDelay = '0.4s';
});

// Image hover effect
const environmentImages = document.querySelectorAll('.environment-image img');
environmentImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.5s ease';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Schedule button click handler
const scheduleBtn = document.querySelector('.schedule-btn');
if (scheduleBtn) {
    scheduleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! Please contact us at +82-2-1111-2111 to schedule your test.');
    });
}