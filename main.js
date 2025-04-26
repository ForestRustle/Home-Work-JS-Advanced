'use strict';

class Car {
  #make;
  #model;
  #run;
  constructor(make, model, run) {
    this.#make = make;
    this.#model = model;
    this.setRun(run);
  }

  get getRun() {
    return this.#run;
  }

  setRun(mileage) {
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

const test = new Car('bmw', 'x6', 20000);
console.log(test.info());
test.setRun(21000);
console.log(test.info());
