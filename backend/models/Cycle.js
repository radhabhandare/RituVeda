const mongoose = require("mongoose");

const cycleSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    lastPeriodDate: { type: Date, required: true },
    cycleLength: { type: Number, required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cycle", cycleSchema);
