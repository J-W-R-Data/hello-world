// Smooth scroll to section when 'Get Started' is clicked
const btn = document.getElementById('get-started');
const featuresSection = document.getElementById('features');

btn.addEventListener('click', () => {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
});

// Basic contact form submission handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out!');
    form.reset();
});
