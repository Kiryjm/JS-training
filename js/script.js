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

    // Menu-item organized in classes

    class MenuItem {
        constructor(imgUrl, alt, title, descr, price, parentSelector, ...classes) {
            this.imgUrl = imgUrl;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src= ${this.imgUrl} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }

    const getData = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };


    // getData('http://localhost:3000/menu')
    //     .then(data => {
            // data.forEach(({img, alt, title, descr, price}) => {
            //     new MenuItem(img, alt, title, descr, price, '.menu .container').render();
            // });
    //     });

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, alt, title, descr, price}) => {
                new MenuItem(img, alt, title, descr, price, '.menu .container').render();
            });
        });

    // setting data forms from modal window to post data to server

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Мы вам перезвоним.',
        failure: 'Что-то пошло не так..'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            // preventing default behaviour of button element attribute type submit:
            // to reload page
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            
            form.insertAdjacentElement('afterend', statusMessage);

            // to pass data to server in JSON format 
            // use content-type application/json in header
            const formData = new FormData(form);

            // method entries() returns array of arrays as properties key-value pairs
            // method fromEntries turn array of props key-value arrays into object
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    const prevModalDialog = document.querySelector('.modal__dialog');

    function showThanksModal(message) {
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        function modalClearCallback(e) {
                modalClickCallback(e);
                thanksModalremove();
                clearTimeout(thanksModalTimeout);
        }
   
        modal.addEventListener('click', modalClearCallback, {once : true});
         
        function thanksModalremove () {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal();
                modal.removeEventListener('click', modalClearCallback);
        }
        const thanksModalTimeout = setTimeout(thanksModalremove, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

        
    // Slider
    
    const slider = document.querySelector('.offer__slider'),
          slides = slider.querySelectorAll('.offer__slide'),
          sliderCounter = slider.querySelector('.offer__slider-counter'),
          left = sliderCounter.querySelector('.offer__slider-prev'),
          right = sliderCounter.querySelector('.offer__slider-next'),
          current = sliderCounter.querySelector('#current'),
          total = sliderCounter.querySelector('#total');
    let slideIndex = 1;

    showSlides(slideIndex);

    total.textContent = `${getZero(slides.length)}`;

    function showSlides(index) {
        if (index > slides.length) {
            slideIndex = 1;
        }

        if (index < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
        current.textContent = `${getZero(slideIndex)}`;
    }

    function changeSlides(index) {
        showSlides(slideIndex += index);
    }

    left.addEventListener('click', () => {
        changeSlides(-1);
    });

    right.addEventListener('click', () => {
        changeSlides(1);
    });

});