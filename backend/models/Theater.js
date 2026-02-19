import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema({
  name: String,
  location: String
});

export default mongoose.model("Theater", theaterSchema);
