import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  showId: mongoose.Schema.Types.ObjectId,
  seats: [String],
  totalAmount: Number,
  status: { type: String, default: "CONFIRMED" }
});

export default mongoose.model("Booking", bookingSchema);
