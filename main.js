//Поддерживаемые типы: D4, D6, D8, D10, D12, D16, D20.
function randomDice(dice) {
  const dices = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d16: 16,
    d20: 20,
  };
  if (dices[dice]) {
    return Math.floor((Math.random() * dices[dice] + 1));
  }
  else {
    console.log('Неверное значение');
    return;
  }
}

console.log(randomDice('d6'));
