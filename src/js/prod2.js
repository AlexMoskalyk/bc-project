(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-prod2-open]'),
        closeModalBtn: document.querySelector('[data-modal-prod2-close]'),
        modal: document.querySelector('[data-modal-prod2]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();