import mongoose from 'mongoose'
const taskSchema = new mongoose.Schema({
  title: String,
  body: String,
  dueDate: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: `user` }
});
// taskSchema.set(`timestamps`, true)
// taskSchema.pre('save', function (next) {
//   this.title = this.task.title;
//   this.body = this.task.body;
//   next();
// })

export default mongoose.model('task', taskSchema);
