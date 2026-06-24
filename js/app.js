const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => revealObserver.observe(element));

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const numeroWhatsapp = '5490000000000';
  const nombre = document.getElementById('nombre').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  const texto = `Hola, quiero consultar por Punto de Equilibrio Consultores.%0A%0A` +
    `Nombre: ${encodeURIComponent(nombre)}%0A` +
    `Empresa: ${encodeURIComponent(empresa)}%0A` +
    `Email: ${encodeURIComponent(email)}%0A` +
    `Teléfono: ${encodeURIComponent(telefono)}%0A` +
    `Consulta: ${encodeURIComponent(mensaje)}`;

  window.open(`https://wa.me/${numeroWhatsapp}?text=${texto}`, '_blank');
});


