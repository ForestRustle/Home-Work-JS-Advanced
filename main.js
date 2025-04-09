'use strict';

function validAge(birthday) {
  const nowDate = new Date();
  const userBirthday = new Date(birthday).getTime();
  const userAge = Math.floor((nowDate - userBirthday) / (1000 * 60 * 60 * 24 * 365));
  return userAge > 14 ? true : false;
}

console.log(validAge('2022-01-01'));
console.log(validAge('2000-01-01'));