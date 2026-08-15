const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const form = document.getElementById('assessmentForm');

// Official Red Carpet emblem uploaded to the repository.
document.querySelectorAll('.brand-mark').forEach(function (mark) {
  mark.innerHTML = '';
  const logo = document.createElement('img');
  logo.src = 'assets/54088169-EF1E-4D89-AE16-D4F6D1EBDDCC.png?v=1';
  logo.alt = 'Red Carpet';
  logo.className = 'official-brand-logo';
  mark.appendChild(logo);
});

const brandStyle = document.createElement('style');
brandStyle.textContent = `
.brand-mark{width:62px!important;height:62px!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;overflow:visible!important;padding:0!important}
.official-brand-logo{display:block;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,.22))}
footer .brand-mark{width:70px!important;height:70px!important}
@media(max-width:680px){.brand-mark{width:52px!important;height:52px!important}.brand-text strong{font-size:12px!important}.nav-wrap{height:72px!important}}
`;
document.head.appendChild(brandStyle);

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