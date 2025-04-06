//Поддерживаемые типы: D4, D6, D8, D10, D12, D16, D20.
function randomDice(dice) {
  if (isNaN(dice)) {
    console.log('Переданное значение должно быть целым числом');
  }
  if (dice < 4 || dice > 20) {
    console.log('Значение должно быть не меньше 4 и не более 20');
  }
  return Math.floor((Math.random() * dice + 1));
}

console.log(randomDice(6));
