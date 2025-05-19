'use strict';

export class Task {
  constructor(someText) {
    this.someText = someText;
  }
  run() {
    console.log(this.someText);
  }
}