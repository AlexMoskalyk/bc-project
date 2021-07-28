(() => {
  const refs = {
    openfranchise: document.querySelector('[data-franchise-modal-open]'),
    closefranchise: document.querySelector('[data-franchise-modal-close]'),
    modalfranchise: document.querySelector('[data-franchise-modal]'),
    body: document.querySelector('[data-js-body]'),
  };

  refs.openfranchise.addEventListener('click', togglefranchise);
  refs.closefranchise.addEventListener('click', togglefranchise);

  function togglefranchise() {
    refs.modalfranchise.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');

  }
})();