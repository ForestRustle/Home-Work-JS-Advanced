
'use strict';

class Billing {
  constructor(amount) {
    this.amount = amount;
  }
  calculateTotal() {
    return this.amount;
  }
}

class FixedBilling extends Billing {
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }
  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    if (!Array.isArray(items)) {
      console.log('Переданный аргумент должен быть массивом');
      return;
    }
    this.items = items;
  }
  calculateTotal() {
    return this.amount * this.items.length;
  }
}

const fix = new FixedBilling(1);
console.log(fix.calculateTotal());

const hour = new HourBilling(1, 4);
console.log(hour.calculateTotal());

const itemBilling = new ItemBilling(1, [1, 2, 3]);
console.log(itemBilling.calculateTotal());

const itemBilling2 = new ItemBilling(1, 'Purple');
console.log(itemBilling2.calculateTotal());