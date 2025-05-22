(function () {
  'use strict';

  class Task {
    constructor(someText) {
      this.someText = someText;
    }
    run() {
      console.log(this.someText);
    }
  }

  class User {
    constructor(Task) {
      this.Task = Task;
    }
    do() {
      this.Task.run();
    }
  }

  const button = document.querySelector('.button-text');
  const input = document.querySelector('.message');

  button.addEventListener('click', () => {
    const message = input.value;
    if (message.trim() === '') {
      console.log('Сообщение пустой');
      return;
    }
    const task = new Task(message);
    const user = new User(task);

    user.do();

    input.value = "";
  });

})();
