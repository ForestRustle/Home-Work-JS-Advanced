'use strict';

const new_year = document.querySelector('.new_year');
const date_newYear = document.querySelector('.date_newYear');

function timerNewYear() {
  const currentDate = new Date();
  const newYear = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0);

  const timeNewYear = newYear - currentDate;

  const seconds = Math.floor(timeNewYear / 1000) % 60;
  const minutes = Math.floor(timeNewYear / 1000 / 60) % 60;
  const hours = Math.floor(timeNewYear / (1000 * 60 * 60) % 24);
  const days = Math.floor(timeNewYear / (1000 * 60 * 60 * 24));
  
  let months = (newYear.getFullYear() - currentDate.getFullYear()) * 12 + (newYear.getMonth() - currentDate.getMonth());
  if (newYear.getDate() < currentDate.getDate()) {
    months--;
  }

  new_year.innerHTML = `${months} месяцев  ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
}
timerNewYear();
setInterval(() => {
  timerNewYear();
}, 1000);