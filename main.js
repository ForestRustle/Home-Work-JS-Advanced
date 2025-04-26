'use strict';

const Roles = {
  manager: 'manager',
  user: 'user',
}

class Car {
  #make;
  #model;
  #run;
  #role;
  constructor(make, model, run, role) {
    this.#make = make;
    this.#model = model;
    this.#role = role;
    this.setRun(run);
  }

  get getRun() {
    return this.#run;
  }

  setRun(mileage) {
    if (this.#role !== 'manager') {
      console.log('Изменение пробега возможно после одобрения мэнеджера');
      
      return
    }
    if (mileage < 0) {
      console.log('Пробег не может быть отрицательным');
      this.#run = 0;
    } else if (this.#run !== undefined && mileage < this.#run) {
      console.log('Пробег не может быть уменьшен');
    } else {
      this.#run = mileage;
    }
  }

  info() {
    console.log(`Марка: ${this.#make} модель: ${this.#model} пробег: ${this.#run}`);
  }
}

const test = new Car('bmw', 'x6', 20000, 'manager');
// const test = new Car('bmw', 'x6', 20000, 'user');
console.log(test.info());
test.setRun(21000);
console.log(test.info());
