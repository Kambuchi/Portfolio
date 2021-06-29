const mainMenu = document.querySelector('.nav-list');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

function show() {
  mainMenu.classList.add('visible');
  openMenu.style.display = 'none';
}

function close() {
  mainMenu.classList.remove('visible');
  openMenu.style.display = 'flex';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);