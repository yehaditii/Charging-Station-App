const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Station = require("../models/Station");

// Create
router.post("/", auth, async (req, res) => {
  try {
    const station = new Station(req.body);
    await station.save();
    res.json(station);
  } catch {
    res.status(500).send("Error creating station");
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch {
    res.status(500).send("Error fetching stations");
  }
});

// Read one by ID
router.get("/:id", async (req, res) => {
  try {
    const station = await Station.findById(req.params.id);
    if (!station) return res.status(404).send("Station not found");
    res.json(station);
  } catch {
    res.status(500).send("Error fetching station");
  }
});

// Update
router.put("/:id", auth, async (req, res) => {
  try {
    const station = await Station.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(station);
  } catch {
    res.status(500).send("Error updating station");
  }
});

// Delete
router.delete("/:id", auth, async (req, res) => {
  try {
    await Station.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch {
    res.status(500).send("Error deleting station");
  }
});

module.exports = router;