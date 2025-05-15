'use strict';

async function race(arrPromises) {
  return new Promise((resolve, reject) => {
    arrPromises.forEach(element => {
     Promise.resolve(element).then(resolve).catch(reject);
    });
  });
}
