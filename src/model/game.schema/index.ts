
import mongoose, { model } from "mongoose"

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

export default model('Game', gameSchema)