(() => {
  const refs = {
    openfranchise: document.querySelector('[data-franchise-modal-open]'),
    closefranchise: document.querySelector('[data-franchise-modal-close]'),
    modalfranchise: document.querySelector('[data-franchise-modal]'),
  };

  refs.openfranchise.addEventListener('click', togglefranchise);
  refs.closefranchise.addEventListener('click', togglefranchise);

  function togglefranchise() {
    refs.modalfranchise.classList.toggle('is-hidden');
  }
})();