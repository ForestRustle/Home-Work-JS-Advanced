'use strict';

const pageCoords = document.querySelector('.coords')

function getCoords() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Do something wrong.'));
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        latitude: position.coords.latitude,
        altitude: position.coords.altitude
      });
    });
  });
}

getCoords()
  .then(data => {
    pageCoords.innerHTML = `Широта ${data.latitude} долгота ${data.altitude}`
    console.log(data);
  })
  .catch(err => {
    pageCoords.innerHTML = `Возникла ошибка ${err}`
    console.log(err.message);
  });