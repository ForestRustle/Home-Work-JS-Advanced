//Поддерживаемые типы: D4, D6, D8, D10, D12, D16, D20.
function randomDice(dice) {
  const diceLower = dice.toLowerCase()
  const dices = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d16: 16,
    d20: 20,
  };
  if (dices[diceLower]) {
    return Math.floor((Math.random() * dices[diceLower] + 1));
  }
  else {
    return `Ошибка: Неверный тип дайса. Поддерживаемые типы: ${Object.keys(dices).join(', ')}`;
  }
}

console.log(randomDice('D6'));
console.log(randomDice('d8'));
console.log(randomDice('d'));
