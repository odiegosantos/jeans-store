function toggleMenu() {
  const navigation = document.querySelector('nav');
  navigation.classList.toggle('active');
}

const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);
