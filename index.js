console.log('test');

const buttonStart = document.getElementById('button_start');
const buttonStop = document.getElementById('button_stop');
const stiralka = document.getElementById('stiralka')
const radioButtons = document.querySelectorAll('input')
console.log(radioButtons);
let intervalID;
let speed = 5;

const start = () => {
  let timer2 = setTimeout(() => stiralka.style.paddingTop = '10px', 500)
  let timer3 = setTimeout(() => stiralka.style.paddingLeft = '10px', 1000)
  let timer4 = setTimeout(() => stiralka.style.paddingTop = '0px', 1500)
  let timer5 = setTimeout(() => stiralka.style.paddingLeft = '0px', 2000)
}

radioButtons.forEach((radio) => {
  radio.addEventListener('click', () => {
    console.log(radio.value);
    speed = radio.value;
  })
})

buttonStart.addEventListener('click', () => {
  console.log('click');
  intervalID = setInterval(start, speed)
})

buttonStop.addEventListener('click', () => {
  console.log('clear interval');
  clearInterval(intervalID);
})

