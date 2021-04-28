import {openModal, closeModal} from './modal';
import {postData} from '../services/services';
var FormData = require('formdata-polyfill');



function forms(formSelector, modalSelector, modalTimerId) {
    // setting data forms from modal window to post data to server

    const forms = document.querySelectorAll(formSelector),
          modal = document.querySelector(modalSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Мы вам перезвоним.',
        failure: 'Что-то пошло не так..'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function serializeObject(form) {

        // Create an object
        var obj = {};
    
        // Loop through each field in the form
        Array.prototype.slice.call(form.elements).forEach(function (field) {
    
        // Add the value to the object
        obj[field.name] = field.value;
        });
    
        // Return the object
        return obj;
    }

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
            // const formData = new FormData(form);            

            // method entries() returns array of arrays as properties key-value pairs
            // method fromEntries turn array of props key-value arrays into object
            // const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // const request = new Request('http://localhost:3000/requests', {
            //     method: 'post',
            //     body: formData._blob ? formData._blob() : formData
            // });          

            let json = JSON.stringify(serializeObject(form));
            
            // for (let key in formData) {
            //     obj[key] = formData.get(key);
            // }

            // let obj = {};             
            // formData.forEach((value, key) => { obj[key] = value;});    
            // let json = JSON.stringify(obj);

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
        openModal('.modal', modalTimerId);

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
            if (e.target === modal || e.target.getAttribute('data-close') == "") {
                closeModal(modalSelector);
            }
                thanksModalRemove();
                clearTimeout(thanksModalTimeout);
        }
   
        modal.addEventListener('click', modalClearCallback, {once : true});
         
        function thanksModalRemove () {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
            modal.removeEventListener('click', modalClearCallback);
        }
        const thanksModalTimeout = setTimeout(thanksModalRemove, 4000);
    } 
}

export default forms;
