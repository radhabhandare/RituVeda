const Cycle = require("../models/Cycle");

exports.addCycleEntry = async (req, res) => {
  try {
    const { lastPeriodDate, cycleLength, notes } = req.body;
    const cycle = await Cycle.create({
      userId: req.user.id,
      lastPeriodDate,
      cycleLength,
      notes,
    });
    res.status(201).json({ message: "Cycle entry added successfully", cycle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCycleHistory = async (req, res) => {
  try {
    const cycles = await Cycle.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(cycles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
