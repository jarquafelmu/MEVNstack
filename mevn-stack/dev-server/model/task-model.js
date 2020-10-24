import mongoose, { Mongoose } from 'mongoose'
const taskSchema = new Mongoose.Schema({
  title: String,
  body: String,
  dueDate: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: `user` }
});

export default mongoose.model('task', taskSchema);
