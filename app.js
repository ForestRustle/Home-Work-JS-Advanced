'use strict';

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.speak = function () {
  console.log(`Персонаж ${this.name}, Язык ${this.language}`);
};

const Ork = function (race, name, language, weapon) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
};

const Elf = function (race, name, language, spell) {
  Character.call(this, race, name, language);
  this.spell = spell;
};

//Для прототипа эльфа присвоил создаваемый прототип перса
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function () {
  console.log(`Персонаж ${this.name} расы ${this.race} применил заклинание ${this.spell}`);
};

//Тоже самое для орка
Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.strike = function () {
  console.log(`Персонаж ${this.name} расы ${this.race} нанес удар оружием ${this.weapon}`);
};

const orc = new Ork('Орк', 'Азог', 'Чёрное Наречие', 'ятаган');
const elf = new Elf('Эльф', 'леди Галадриэль', 'синдарин', 'осанвэ');

orc.speak();
orc.strike();
elf.speak()
elf.createSpell();