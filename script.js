// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}


