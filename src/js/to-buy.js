(() => {
  const refs = {
    
    openb: document.querySelector('.to-buy-open-btn'),
    openc: document.querySelector('.to-buy-open-btn2'),

    closeb: document.querySelector('.to-buy-close-btn'),
    modalb: document.querySelector('.mob-m-tob'),
   
  };

  refs.openb.addEventListener('click', toggleMenu);
  refs.openc.addEventListener('click', toggleMenu);

  refs.closeb.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.modalb.classList.toggle('visually-hidden');
    
  }
 
})();

