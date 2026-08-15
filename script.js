const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const form = document.getElementById('assessmentForm');

// Replace temporary monogram with the official Red Carpet PNG asset.
document.querySelectorAll('.brand-mark').forEach(function (mark) {
  mark.innerHTML = '';
  const logo = document.createElement('img');
  logo.src = 'assets/red-carpet-logo.png';
  logo.alt = 'Red Carpet';
  logo.className = 'official-brand-logo';
  mark.appendChild(logo);
});

const brandStyle = document.createElement('style');
brandStyle.textContent = `
.brand-mark{width:58px!important;height:58px!important;border-radius:12px!important;background:#fff!important;box-shadow:0 10px 30px rgba(0,0,0,.22)!important;overflow:hidden!important;padding:2px!important}
.official-brand-logo{display:block;width:100%;height:100%;object-fit:contain;border-radius:10px}
footer .brand-mark{width:64px!important;height:64px!important}
@media(max-width:680px){.brand-mark{width:50px!important;height:50px!important}.brand-text strong{font-size:12px!important}.nav-wrap{height:72px!important}}
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