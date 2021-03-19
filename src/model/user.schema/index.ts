
import mongoose, { model } from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

export default model('User', userSchema)