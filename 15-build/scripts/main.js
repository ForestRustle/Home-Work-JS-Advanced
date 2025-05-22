'use strict';

import { Task } from './modules/task.js';
import { User } from './modules/user.js';


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

  input.value = ""
});