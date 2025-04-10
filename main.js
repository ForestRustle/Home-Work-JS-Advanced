'use strict';
function randomDate(min, max) {
  const minDate = new Date(min);
  const maxDate = new Date(max);
  const randomTime = minDate.getTime() + Math.floor(Math.random() * (maxDate.getTime() - minDate.getTime()));

  const date = new Date(randomTime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function validAge(birthday) {
  const nowDate = new Date();
  const userBirthday = new Date(birthday).getTime();
  const userAge = Math.floor((nowDate - userBirthday) / (1000 * 60 * 60 * 24 * 365));
  return userAge >= 14;
}

const result = randomDate('1990-01-01', '2025-01-01');

console.log(validAge(result));