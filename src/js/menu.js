(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob-menu-open-btn'),
    closeMenuBtn: document.querySelector('.mob-menu__close-btn'),
    menu: document.querySelector('.mob-menu'),
    menua: document.querySelector('.header-menu'),
     body: document.querySelector('[data-js-body]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
    refs.menua.classList.toggle('menu-active');
    refs.body.classList.toggle('no-scroll');
  }
 
})();