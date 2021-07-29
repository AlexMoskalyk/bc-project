(() => {
  const refs = {
    hamburger:document.querySelector(".hamburger"),
    openMenuBtn: document.querySelector('.mob-menu-open-btn'),
    closeMenuBtn: document.querySelector('.mob-menu__close-btn'),
    menu: document.querySelector('.mob-menu'),
    menua: document.querySelector('.header-menu'),
    body: document.querySelector('[data-js-body]'),
    closeMenu: document.querySelector('.mob-menu__close'),
    closeMenua: document.querySelector('.mob-menu__close2'),
    closeMenub: document.querySelector('.mob-menu__close3'),
    closeMenuc: document.querySelector('.mob-menu__close4'),
    closeMenud: document.querySelector('.mob-menu__close5'),
    closeMenue: document.querySelector('.mob-menu__close6'),
     
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenu.addEventListener('click', toggleMenu);
  refs.closeMenua.addEventListener('click', toggleMenu);
  refs.closeMenub.addEventListener('click', toggleMenu);
  refs.closeMenuc.addEventListener('click', toggleMenu);
  refs.closeMenud.addEventListener('click', toggleMenu);
  refs.closeMenue.addEventListener('click', toggleMenu);

  refs.hamburger.addEventListener("click", toggleMenu );

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
    refs.menua.classList.toggle('menu-active');
    refs.body.classList.toggle('no-scroll');
    refs.hamburger.classList.toggle("is-active");
  }
 
})();