(() => {
  const refs = {
    openMenuBtn: document.querySelector('.prod1-open-btn'),
    closeMenuBtn: document.querySelector('.prod1-close-btn'),
    menu: document.querySelector('.prod1-descr'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
  }
})();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.prod2-open-btn'),
    closeMenuBtn: document.querySelector('.prod2-close-btn'),
    menu: document.querySelector('.prod2-descr'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
  }
})();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.prod3-open-btn'),
    closeMenuBtn: document.querySelector('.prod3-close-btn'),
    menu: document.querySelector('.prod3-descr'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
  }
})();