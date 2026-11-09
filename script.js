const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const track = document.querySelector('.carousel-track');
const cards = [...document.querySelectorAll('.work-card')];
const dots = [...document.querySelectorAll('.carousel-dots button')];
let active = 0;
function visibleCount() {
  if (window.innerWidth <= 520) return 1;
  if (window.innerWidth <= 800) return 2;
  return 3;
}
function moveTo(index) {
  const max = Math.max(0, cards.length - visibleCount());
  active = Math.max(0, Math.min(index, max));
  const gap = 18;
  const width = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${active * (width + gap)}px)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === active));
}
document.querySelector('.carousel-arrow.next').addEventListener('click', () => moveTo(active + 1));
document.querySelector('.carousel-arrow.prev').addEventListener('click', () => moveTo(active - 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => moveTo(i)));
window.addEventListener('resize', () => moveTo(active));
moveTo(0);
