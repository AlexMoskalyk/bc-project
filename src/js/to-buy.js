(() => {
  const refs = {
    openMBtn: document.querySelector('.to-buy-open-btn'),
    closeMBtn: document.querySelector('.to-buy-close-btn'),
    m: document.querySelector('.mob-m'),
   
  };

  refs.openMBtn.addEventListener('click', toggleM);
  refs.closeMBtn.addEventListener('click', toggleM);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
    
  }
 
})();