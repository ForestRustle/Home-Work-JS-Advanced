'use strict';

import { Task} from './modules/task.js'
import { User } from './modules/user.js';

const task = new Task('some one');
const user = new User(task);

user.do()