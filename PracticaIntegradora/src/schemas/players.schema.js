import mongoose from "mongoose"

export const playersCollection = "Players"

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  },
  age: {
    type: Number
  },
  image: {
    type: String,
    default: ""
  }
})

const playerModel = mongoose.model(playersCollection, playerSchema);
export default playerModel;
