import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
  movieName: String,
  theaterId: mongoose.Schema.Types.ObjectId,
  showTime: Date,
  price: Number,
  bookedSeats: [String]
});

export default mongoose.model("Show", showSchema);
