import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  xp: {
    type: Number,
    default: 0,
  },
})

const User = mongoose.model('user', userSchema)

export default User
