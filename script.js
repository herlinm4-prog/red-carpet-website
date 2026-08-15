const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const form = document.getElementById('assessmentForm');

// Preserve V2 and layer the photography/depth system on top.
const depthStyles = document.createElement('link');
depthStyles.rel = 'stylesheet';
depthStyles.href = 'depth.css?v=3';
document.head.appendChild(depthStyles);

const brandLogoStyle = document.createElement('style');
brandLogoStyle.textContent = `
.brand-mark{width:58px!important;height:58px!important;border:0!important;border-radius:0!important;background:transparent url('assets/54088169-EF1E-4D89-AE16-D4F6D1EBDDCC.png?v=2') center/contain no-repeat!important;color:transparent!important;box-shadow:none!important;overflow:visible!important}
.brand-mark::before,.brand-mark::after{display:none!important}footer .brand-mark{width:66px!important;height:66px!important}@media(max-width:680px){.brand-mark{width:48px!important;height:48px!important}}
`;
document.head.appendChild(brandLogoStyle);

// Add a human/project story between portfolio and team without disturbing the V2 sections.
const peopleSection = document.querySelector('.people');
if (peopleSection) {
  const story = document.createElement('section');
  story.className = 'photo-story';
  story.innerHTML = `<div class="container"><div class="section-head reveal"><div><span class="section-kicker">PEOPLE + EXECUTION</span><h2>Real work happens<br><span>on the property.</span></h2></div><p>From recurring facility care to active commercial improvements, the standard is carried by the people doing the work.</p></div><div class="photo-story-grid"><article class="photo-story-card reveal"><img src="https://storage.googleapis.com/content-assistant-images-persistent/janitorial-service-team-cleaning-an-office-space-with-modern-equipment-cf153981-df0e-4bbe-aed7-ce7f72df4de3.webp" alt="Professional commercial cleaning team working in a modern office" loading="lazy"><div class="photo-story-copy"><small>DAILY PROPERTY CARE</small><h3>Visible standards. Consistent execution.</h3><p>Coordinated crews, professional equipment and service routines designed around active commercial environments.</p></div></article><article class="photo-story-card secondary reveal"><img src="https://handymannysky.com/images/hero-commercial.webp" alt="Commercial renovation crew working inside a property" loading="lazy"><div class="photo-story-copy"><small>COMMERCIAL IMPROVEMENTS</small><h3>One team from upkeep to upgrade.</h3><p>Maintenance, remodeling and construction capabilities extend the relationship beyond cleaning.</p></div></article></div></div>`;
  peopleSection.parentNode.insertBefore(story, peopleSection);

  const strip = document.createElement('section');
  strip.className = 'reality-strip';
  strip.innerHTML = `<div class="container"><div><div><strong>COMMERCIAL OFFICES</strong><span>Recurring presentation & care</span></div></div><div><div><strong>COMMON AREAS</strong><span>High-traffic property standards</span></div></div><div><div><strong>POST-CONSTRUCTION</strong><span>Detail cleaning & turnover</span></div></div><div><div><strong>IMPROVEMENTS</strong><span>Maintenance · Remodel · Build</span></div></div></div>`;
  peopleSection.parentNode.insertBefore(strip, peopleSection);
}

year.textContent = new Date().getFullYear();
window.addEventListener('scroll', function () { header.classList.toggle('scrolled', window.scrollY > 30); });
menuButton.addEventListener('click', function () { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', open ? 'true' : 'false'); });
nav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }); });

const revealObserver = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function (element) { revealObserver.observe(element); });

form.addEventListener('submit', function (event) { event.preventDefault(); const success = form.querySelector('.form-success'); success.hidden = false; });