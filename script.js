// ========== THEME TOGGLE ==========
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ========== MOBILE NAV ==========
const menuBtn = document.getElementById('menuBtn');
const topnav = document.querySelector('.topnav');
if (menuBtn && topnav) {
  menuBtn.addEventListener('click', () => topnav.classList.toggle('open'));
  topnav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => topnav.classList.remove('open'))
  );
}

// ========== FOOTER YEAR ==========
document.getElementById('year').textContent = new Date().getFullYear();

// ========== SCROLL REVEAL ==========
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.job, .stack__group, .proj, .about, .letter, .section__head, .hero__card')
  .forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    io.observe(el);
  });

// ========== CONTACT FORM (mailto fallback) ==========
function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:vroy218@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
