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

//slow loading

function onEntry(entry) {
    entry.forEach(change => {    
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.2] };

  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }



const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputText = document.getElementById('text');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', () => {
    overlay.style.visibility = "hidden";
    spinner.setAttribute('hidden', '');
    document.body.style.overflow = "";
    
})
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const formSend = document.querySelector('.contacts__btn');

inputEmail.addEventListener('input', onInput);

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function onInput() {

    if (isEmailValid(inputEmail.value)) {
        inputEmail.style.borderColor = 'green';
    } else {
        inputEmail.style.borderColor = 'red';
    }
  }


const spinner = document.getElementById("spinner");

  

formSend.addEventListener('click',(e) => {
    try {   
       
        e.preventDefault()
        spinner.removeAttribute('hidden');
        overlay.style.visibility = "visible";
        document.body.style.overflow = "hidden";
        if (inputName.value !='' && inputEmail.value !='' && inputText.value !='' && isEmailValid(inputEmail.value)) {
            overlay.firstElementChild.textContent = 'Sending... wait a moment'
            const data = JSON.stringify({name: inputName.value , email: inputEmail.value, text:inputText.value })
            fetch( 'https://telegramBank.serg1557733.repl.co' ,
                { 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'post',
                    body: data,
                    mode: 'cors'
                }).then(res => {
                    
                    if (res.status == 200) {
                        overlay.firstElementChild.textContent = 'Thank you, your message has been sent to me...'
                        inputName.value ='';
                        inputEmail.value ='';
                        inputText.value ='';
                        overlay.style.visibility = "visible";
                        spinner.setAttribute('hidden', '');
                        
                    } else {
                            overlay.style.visibility = "visible";
                    }
                }).catch(er => {
                    console.log(er)
                    overlay.style.visibility = "visible"
                })
        } else {
            overlay.firstElementChild.textContent = 'Please fill in all fields correctly'
            overlay.style.visibility = "visible";
        }
        } catch (error) {
                console.log(error)
                spinner.setAttribute('hidden', '');
        }

})




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