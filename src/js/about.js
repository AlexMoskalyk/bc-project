(() => {
  const refs = {
    openModalBtn: document.querySelector('.about-btn'),
    closeModalBtn: document.querySelector('.about-close-btn'),
    modal: document.querySelector('.about-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();