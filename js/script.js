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
    // const modalTimerId = setTimeout(openModal, 5000);

    // to call modal window after user scrolled to the bottom of the page 
    function showModelByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModelByScroll);
        }
    }

    window.addEventListener('scroll', showModelByScroll);

    // Menu-item organized in classes

    class MenuItem {
        constructor(imgUrl, alt, title, descr, price, parentSelector) {
            this.imgUrl = imgUrl;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src= ${this.imgUrl} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                 </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuItem(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'

    ).render();

    new MenuItem(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuItem(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();


});