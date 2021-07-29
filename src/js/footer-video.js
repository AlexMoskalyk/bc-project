(() => {
  const refs = {
    openfooterVideo: document.querySelector('[data-footerVideo-modal-open]'),
    closefooterVideo: document.querySelector('[data-footerVideo-modal-close]'),
    modalfooterVideo: document.querySelector('[data-footerVideo-modal]'),
    body: document.querySelector('[data-js-body]'),
  };

  refs.openfooterVideo.addEventListener('click', togglelocations);
  refs.closefooterVideo.addEventListener('click', togglelocations);

  function togglelocations() {
    refs.modalfooterVideo.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();