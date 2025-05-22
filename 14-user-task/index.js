'use strict';

import { Task} from './modules/task.js'
import { User } from './modules/user.js';

const pagesElements = {
  textButton: document.querySelector('.button-text'),
  input: document.querySelector('.message'),
  userMessage: document.querySelector('.user-message'),
  clearMessage: document.querySelector('.clear-text')
}

pagesElements.textButton.addEventListener('click', () => {
  const message = pagesElements.input.value;
  if (message.trim() === '') {
    console.log('Сообщение пустой');
    return;
  }
  const task = new Task(message);
  const user = new User(task);

  user.do();
  pagesElements.userMessage.innerHTML = message
  pagesElements.input.value = "";
});

pagesElements.clearMessage.addEventListener('click', () => {
  pagesElements.userMessage.innerHTML = ""
})