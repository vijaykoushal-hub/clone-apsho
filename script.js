document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navToggle');
    const content = document.getElementById('navContent');
    const nav = document.querySelector('.premium-nav');

    // Mobile Menu Toggle
    if (toggle && content) {
        toggle.addEventListener('click', () => {
            content.classList.toggle('active');
            // Toggle 'open' class for hamburger animation if needed
            toggle.classList.toggle('open');
        });
    }

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            content.classList.remove('active');
            toggle.classList.remove('open');
        });
    });

    // Navbar Scroll Effect (Hide on Scroll Down, Show on Scroll Up)
    let prevScrollpos = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollPos = window.scrollY;
        
        if (prevScrollpos > currentScrollPos || currentScrollPos < 50) {
            nav.style.top = "0";
            nav.style.boxShadow = currentScrollPos > 50 ? "0 10px 30px rgba(0,0,0,0.1)" : "none";
        } else {
            nav.style.top = "-100px"; // Hide the navbar
        }
        prevScrollpos = currentScrollPos;
    });
});