import express from "express";
import { bookSeats } from "../controllers/bookingController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", protect, bookSeats);

export default router;
