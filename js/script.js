function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);
