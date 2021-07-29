(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-prod2-open]'),
        closeModalBtn: document.querySelector('[data-modal-prod2-close]'),
        modal: document.querySelector('[data-modal-prod2]'),
        body: document.querySelector('[data-js-body]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
})();