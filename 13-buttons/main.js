'use strict';

const butunWrapper = document.querySelector('.button-wrapper');
const scores = document.querySelector('.scores');

let counter = 0;
let lastClickButton = null
butunWrapper.addEventListener('click', function (event) {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    counter++;
    document.querySelector('.scores').innerHTML = counter;
    target.textContent = 'Нажата !';
  } 
  if (lastClickButton && lastClickButton !== target) {
    lastClickButton.textContent = 'Нажми меня'
  }
  target.textContent = 'Нажата !';
  lastClickButton = target;
})


