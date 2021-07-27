(() => {
  const refs = {
    openMenuBtn: document.querySelector('.about-btn'),
    closeMenuBtn: document.querySelector('.about-close-btn'),
    menu: document.querySelector('.about-modal'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();