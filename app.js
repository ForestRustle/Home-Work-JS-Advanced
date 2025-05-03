'use strict';

//Для отлова ошибок
function safeFetch(url, errMessage) {
  return fetch(url)
    .then(responce => {
      if (!responce.ok) {
         throw new Error(`${errMessage} ${responce.status}`);
      }
      return responce;
  })
}

safeFetch('https://pokeapi.co/api/v2/pokemon/ditto', 'Sorry, we can`t get a description')
  .then((responce) => responce.json())
  .then((abilities) => {
    const allAbilities = abilities.abilities[0].ability.url;
    console.log(allAbilities);
    return fetch(allAbilities);
  })

  .then((data) => data.json())
  .then((lang) => {
    const res = lang.effect_entries.find((el) => el.language.name === "en");
    const viewMessage = document.querySelector('.message');
    viewMessage.innerHTML = res.effect
    console.log(res.effect);
  })
  .catch((err) => {
    const viewErrors = document.querySelector('.errors')
    viewMessage.innerHTML = err.message
    console.log(err);
  });