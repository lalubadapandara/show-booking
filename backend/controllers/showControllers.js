import Show from "../models/Show.js";

export const createShow = async (req, res) => {
  const show = await Show.create(req.body);
  res.status(201).json(show);
};

export const getShows = async (req, res) => {
  const shows = await Show.find();
  res.json(shows);
};

export const getShowById = async (req, res) => {
  const show = await Show.findById(req.params.id);
  res.json(show);
};
