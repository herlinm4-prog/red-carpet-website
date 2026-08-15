const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const form = document.getElementById('assessmentForm');

year.textContent = new Date().getFullYear();

window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

menuButton.addEventListener('click', function () {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});

nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function (element) {
  revealObserver.observe(element);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const success = form.querySelector('.form-success');
  success.hidden = false;
});