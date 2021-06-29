const mainMenu = document.querySelector('.nav-list');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const h = document.querySelector('.h');
const p = document.querySelector('.p');
const a = document.querySelector('.a');
const c = document.querySelector('.c');

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
h.addEventListener('click', close);
p.addEventListener('click', close);
a.addEventListener('click', close);
c.addEventListener('click', close);