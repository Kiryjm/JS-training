function modal() {
    //Modal window

    // To select element by it attributes use [attribute_name] inside querySelector
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');

        //we can toggle class to show/hide modal window by adding/removing class show
        // before that we must add show class to the modal window <div class="modal show">
        // modal.classList.toggle('show');


        //to prevent page scrolling while modal window is showed use overflow = 'hidden'
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');

        // to recover page scrolling use overflow = ''
        document.body.style.overflow = '';
    }

    function modalClickCallback(e) {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    }
    
    modal.addEventListener('click', modalClickCallback);

    // to close modal window on esc use event code
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // to call modal window after some time user spent on the page
    const modalTimerId = setTimeout(openModal, 50000);

    // to call modal window after user scrolled to the bottom of the page 
    function showModelByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModelByScroll);
        }
    }

    window.addEventListener('scroll', showModelByScroll);
}

module.exports = modal;