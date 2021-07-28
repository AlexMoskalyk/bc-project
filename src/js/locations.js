(() => {
  const refs = {
    openlocations: document.querySelector('[data-locations-modal-open]'),
    closelocations: document.querySelector('[data-locations-modal-close]'),
    modallocations: document.querySelector('[data-locations-modal]'),
    body: document.querySelector('[data-js-body]'),
  };

  refs.openlocations.addEventListener('click', togglelocations);
  refs.closelocations.addEventListener('click', togglelocations);

  function togglelocations() {
    refs.modallocations.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();