import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import showRoutes from "./routes/showRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();



app.get("/", (req, res) => {
  res.send("Show Booking API running");
});




app.use(cors({
  origin: "http://localhost:5173",  // Vite frontend
  credentials: true
}));

app.use(express.json());





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
app.use("/api/auth", authRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/bookings", bookingRoutes);
