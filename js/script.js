window.addEventListener('DOMContentLoaded', () => {

    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);                
                }
            });
        }
    });

    // Timer

    const deadline = '2021-05-11';

    function getTimeRemaining(endtime) {
        const timeDiff = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
              hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((timeDiff / (1000 * 60)) % 60),
              seconds = Math.floor((timeDiff / 1000) % 60);

        return {
            'total': timeDiff,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

// if number of date part < 10 show 0 first
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        // to prevent old numbers in timer appearance causes layout blinking 
        // we should execute updateClock manually to initialize clock!! 
        updateClock();

        function updateClock() {
            const timeObj = getTimeRemaining(endtime);

            days.innerHTML = getZero(timeObj.days);
            hours.innerHTML = getZero(timeObj.hours);
            minutes.innerHTML = getZero(timeObj.minutes);
            seconds.innerHTML = getZero(timeObj.seconds);
            
            if (timeObj.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //Modal window

    // To select element by it attributes use [attribute_name] inside querySelector
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCLoseBtn = document.querySelector('[data-close]');


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

    modalCLoseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // to close modal window on esc use event code
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // to call modal window after some time user spent on the page
    const modalTimerId = setTimeout(openModal, 5000);

    // to call modal window after user scrolled to the bottom of the page 
    function showModelByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModelByScroll);
        }
    }

    window.addEventListener('scroll', showModelByScroll);


});