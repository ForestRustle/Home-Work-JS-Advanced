'use strict';

const req = new XMLHttpRequest();
req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
req.send();

req.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);

  const firstRequest = data.abilities[0].ability.url;
  console.log(firstRequest);

  const req = new XMLHttpRequest();
  req.open('GET', firstRequest);
  req.send();
  req.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    const findEng = data.effect_entries.find((english) => english.language.name === 'en');
    console.log(findEng.effect);
  });
});