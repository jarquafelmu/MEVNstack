import mongoose, { Mongoose } from 'mongoose'
const userSchema = new Mongoose.Schema({
  username: String,
  first: String,
  last: String,
  password: String,
});
userSchema.set(`timestamps`, true)

export default mongoose.model('user', userSchema);
