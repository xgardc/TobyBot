import mongoose from 'mongoose'

const connectDatabase = () =>
  mongoose.connect(process.env.MONGO_CONNECTION_URI!)

export default connectDatabase
