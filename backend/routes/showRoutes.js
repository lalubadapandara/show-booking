import express from "express";
import {
  createShow,
  getShows,
  getShowById
} from "../controllers/showControllers.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, adminOnly, createShow);
router.get("/", getShows);
router.get("/:id", getShowById);

export default router;
