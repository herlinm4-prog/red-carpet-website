const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const form = document.getElementById('assessmentForm');

// Keep the stable V2 markup intact and skin its existing brand mark with the uploaded PNG.
const brandLogoStyle = document.createElement('style');
brandLogoStyle.textContent = `
.brand-mark{
  width:58px!important;
  height:58px!important;
  border:0!important;
  border-radius:0!important;
  background:transparent url('assets/54088169-EF1E-4D89-AE16-D4F6D1EBDDCC.png?v=2') center/contain no-repeat!important;
  color:transparent!important;
  box-shadow:none!important;
  overflow:visible!important;
}
.brand-mark::before,.brand-mark::after{display:none!important}
footer .brand-mark{width:66px!important;height:66px!important}
@media(max-width:680px){.brand-mark{width:48px!important;height:48px!important}}
`;
document.head.appendChild(brandLogoStyle);

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