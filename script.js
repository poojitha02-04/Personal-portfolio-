document.getElementById("alertButton").addEventListener("click", function() {
  alert("Hello");
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 
    const targetId = link.getAttribute('href'); 
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth' 
    });
  });
});
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out!');
  contactForm.reset();
});
