// Initialize ParticlesJS
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js config loaded');
});

// Show Back to Top Button and Update Progress Bar
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    const progressBar = document.getElementById('progressBar');
    const scrollTotal = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY / scrollTotal) * 100;
    progressBar.style.width = `${scrollProgress}%`;

    if (window.scrollY > 500) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

// Back to Top Functionality
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Projects Toggle Functionality
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.querySelector('.project-header').addEventListener('click', function() {
        card.classList.toggle('active');
    });
});

// Testimonials Slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("testimonial");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}
