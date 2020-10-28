import User from '../../model/user-model';
import Task from '../../model/task-model';
import moment from 'moment';
import * as auth from '../../services/auth-service'

export function index(req, res) {
  // FIND ALL TASKS
  Task.find({}, (error, tasks) => {
    if (error) {
      return res.status(500).json();
    }
    // tasks were found
    return res.status(200).json({ tasks: tasks });
  }).populate('author', 'username', 'user')
}

export function create(req, res) {
  // CREATE TASK
  const id = auth.getUserId(req);
  User.findOne({ _id: id }, (error, user) => {
    if (error && !user)
      return res.status(500).json();

    // const task = new Task(req.body.task);
    const task = new Task(req.body.task)
    console.log(req.body.task)
    console.log(task)
    task.author = user._id;
    task.dueDate = moment(task.dueDate);

    task.save(error => {
      if (error) {
        return res.status(500).json();
      }
      // task was created
      console.log("task saved")
      return res.status(201).json();
    })
  })
}

export function update(req, res) {
  // UPDATE TASK
  const id = auth.getUserId(req);
  User.findOne({ _id: id }, (error, user) => {
    if (error)
      return res.status(500).json();
    if (!user)
      return res.status(404).json();

    const task = new Task(req.body.task);
    task.author = user._id;
    task.dueDate = moment(task.dueDate);
    Task.findByIdAndUpdate({ _id: task._id }, (error, task) => {
      if (error)
        return res.status(500).json();
      if (!task)
        return res.status(404).json();

      // task was found and updated
      return res.status(204).json();
    })
  })
}

export function remove(req, res) {
  // DELETE TASK
  const id = 10; // temporary fake id for testing

  Task.findOne({ _id: req.params.id }, (error, task) => {
    if (error)
      return res.status(500).json();
    if (!task)
      return res.status(404).json();
    if (task.author._id.toString() !== id)
      return res.status(403).json({ message: `Not allowed to delete another user's post.` });
    Task.deleteOne({ _id: req.params.id }, (error) => {
      if (error)
        return res.status(500).json();

      // task was deleted
      return res.status(204).json();
    })
  })
}

export function show(req, res) {
  // GET TASK BY ID
  Task.findOne({ _id: req.params.id }, (error, task) => {
    if (error)
      return res.status(500).json();
    if (!task)
      return res.status(404).json();

    // found task to show
    return res.status(200).json({ task: task });
  })
}
