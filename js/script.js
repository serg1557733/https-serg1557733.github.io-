//hamburger menu activation classes
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click',() => {
    menu.classList.add('active');
    hamburger.classList.add('hamburger_active');
    document.body.style.overflow = "hidden";
});
closeElem.addEventListener('click',() => {
    menu.classList.remove('active')
    hamburger.classList.remove('hamburger_active');
    document.body.style.overflow = "";
});

//auto progress bar width 
const skillsCounter = document.querySelectorAll('.skills__counter');
const skillsBar = document.querySelectorAll('.skills__progress-status span');

skillsCounter.forEach((item, i) => {
    skillsBar[i].style.width = item.textContent;
});

//slow-scroll script 
$(document).ready(function(){
    $("#btns").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    const form = document.getElementById('form');
    form.addEventListener('submit',formSend);

    async function formSend(e) {
        e.preventDefault();
      /*   console.log(FormData('form'));
        let formData = form.dataset;  */
        let response = await fetch('sendmail.php', {
            method: 'POST',
           /*  body: formData */
        });
        if (response.ok) {
            let result = await response.json();
            alert (result.messsage);
            form.reset();
        }
        else {console.log('error send')
    };
    };
});
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const overlay = document.querySelector('.overlay');
const formSend = document.querySelector('.contacts__btn');
formSend.addEventListener('click',() => {
    if (inputName.value !='' && inputEmail.value !='' && inputEmail.value !='') 
    {overlay.classList.add('overlay_active')}
});

document.addEventListener('scroll',()=>{
    overlay.classList.remove('overlay_active')
});

/* const deadline = '2022-02-15';

    function getTimeRemaining(endtime) {
        const toTime = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(toTime /(1000*60*60*24)),
            hours = Math.floor(toTime /(1000*60*60) % 24),
            minutes = Math.floor((toTime /1000/60)%60),
            seconds = Math.floor((toTime /1000)%60);
            return {
                'total' : toTime,
                'days' : days,
                'hours':hours,
                'minutes' : minutes,
                'seconds': seconds
            }
    }

    function addZero(num) {
        if (num >= 0 && num <10) {
            return `0${num}`;
        } else 
        return num;
    }


    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days =timer.querySelector('#days'),
            hourse =timer.querySelector('#hourse'),
            minutes =timer.querySelector('#minutes'),
            seconds =timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);
                days.innerHTML = addZero(t.days);
                hours.innerHTML = addZero(t.hours);
                minutes.innerHTML = addZero(t.minutes);
                seconds.innerHTML = addZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
        }

    }

    setClock('.timer', deadline);
 */