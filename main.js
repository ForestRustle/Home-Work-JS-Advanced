
'use strict';

class Billing {
  //Для примера расчета
  #amount = 1;
  calculateTotal() {
    return this.#amount;
  }
}

class FixedBilling extends Billing {
  calculateTotal() {
    return super.calculateTotal();
  }
}

class HourBilling extends Billing {
  constructor(hours) {
    super();
    this.hours = hours;
  }
  calculateTotal() {
    return super.calculateTotal() * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(items) {
    super();
    this.items = items;
  }
  calculateTotal() {
    return super.calculateTotal() * this.items.length;
  }
}

const fix = new FixedBilling();
console.log(fix.calculateTotal());

const hour = new HourBilling(4);
console.log(hour.calculateTotal());

const itemBilling = new ItemBilling('Purple');
const itemBilling2 = new ItemBilling([1, 2, 3, 4, 5, 6]);
console.log(itemBilling.calculateTotal());
console.log(itemBilling2.calculateTotal());