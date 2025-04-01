'use strict';

const exampleArray = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const uniqArray = new Set(exampleArray.map((element) => exampleArray.find((property) => element.id === property.id)));
console.log(uniqArray);