import { StringUtil } from '../../utilities/string-util';
import User from '../../model/user-model';
import Task from '../../model/task-model';
import moment from 'moment';

export function index(req, res) {
  // FIND ALL TASKS
  return res.status(200).json();
}
export function create(req, res) {
  // CREATE TASK
  const id = 10;
  User.findOne({ _id: id }, (error, user) => {
    if (error && !user) {
      return res.status(500).json()
    }
    const task = new Task(req.body.task);
    task.author = user._id;
    task.dueDate = moment(task.dueDate);

    task.save(error => {
      if (error) {
        return res.status(500).json();
      }
      return res.status(201).json();
    })
  })
}

export function update(req, res) {
  // UPDATE TASK
  return res.status(204).json();
}

export function remove(req, res) {
  // DELETE TASK
  return res.status(204).json();
}

export function show(req, res) {
  // GET TASK BY ID
  return res.status(200).json();
}
