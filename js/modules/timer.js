 function timer() {

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
 }

 module.exports = timer;
 