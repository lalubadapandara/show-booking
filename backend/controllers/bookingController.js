import Show from "../models/Show.js";
import Booking from "../models/Booking.js";

export const bookSeats = async (req, res) => {
  try {
    const { showId, seats } = req.body;
    if (!showId || !seats || seats.length === 0) {
      return res.status(400).json({ message: "showId and seats are required" });
    }

    const show = await Show.findById(showId);
    if (!show) {
      return res.status(404).json({ message: "Show not found" });
    }

    const alreadyBooked = seats.some((seat) =>
      show.bookedSeats.includes(seat)
    );

    if (alreadyBooked) {
      return res.status(400).json({ message: "Seat already booked" });
    }

    show.bookedSeats.push(...seats);
    await show.save();

    const booking = await Booking.create({
      userId: req.user.id,
      showId,
      seats,
      totalAmount: seats.length * show.price,
      status: "CONFIRMED"
    });

    return res.status(201).json(booking);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error", error: err.message });
  }
};
