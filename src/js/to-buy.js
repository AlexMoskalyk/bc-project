(() => {
  const refs = {
    
    openMBtnm: document.querySelector('.to-buy-open-btn'),
    closeMBtnm: document.querySelector('.to-buy-close-btn'),
    m: document.querySelector('.mob-m'),
   
  };

  refs.openMBtnm.addEventListener('click', toggleM);
  refs.closeMBtnm.addEventListener('click', toggleM);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
    
  }
 
})();

