const botaoMenu = document.querySelector('.menu-btn');
const links = document.querySelector('.links');

botaoMenu.addEventListener('click', () => {
  links.classList.toggle('ativo');
});

document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('ativo'));
});