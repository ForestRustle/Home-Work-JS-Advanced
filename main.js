
'use strict';

class Character {
  constructor(race, name, language, health) {
    this.race = race;
    this.name = name;
    this.language = language;
    this.health = health;
  }

  #speak() {
    console.log(`Персонаж ${this.name}, раса ${this.race}, Язык ${this.language}`);
  }

  speak() {
    this.#speak();
  }
}

class Orc extends Character {
  constructor(race, name, language, health, weapon) {
    super(race, name, language, health);
    this.weapon = weapon;
  }
  strike(enemy) {
    enemy.health -= this.weapon;
    console.log(`Персонаж ${this.name} нанес удар по ${enemy.name} на ${this.weapon} урона`);
  }
  getSpeak() {
    console.log(`Персонаж ${this.name} говорит на языке ${this.language}`);
  }
}

class Elf extends Character {
  constructor(race, name, language, health, spell) {
    super(race, name, language, health);
    this.spell = spell;
  }
  

  createSpell() {
    console.log(`Персонаж ${this.name} сотворил заклинание ${this.spell}`);
  }
  getSpeak() {
    console.log(`Персонаж ${this.name} говорит на языке ${this.language}`);
  }
}
const character = new Character('Человек', 'Рохирим', 'Вестрон', 100);
const orc = new Orc('Орк', 'Азог', 'Чёрное Наречие', 100, 20);
const elf = new Elf('Эльф', 'Элладан', 'Сииндарин', 100, 'Гоетия');

orc.speak();
orc.strike(character);
elf.speak();
elf.createSpell(character);

