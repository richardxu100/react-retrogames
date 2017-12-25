import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gameSchema = new Schema({ // you should make these all required, just for tutorial's sake no
  name: String,
  year: Number,
  description: String,
  picture: String,
  postDate: { type: Date, default: Date.now }, // Timestamp
});

export default mongoose.model('Game', gameSchema);