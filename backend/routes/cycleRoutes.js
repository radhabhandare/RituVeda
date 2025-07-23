const express = require("express");
const { addCycleEntry, getCycleHistory } = require("../controllers/cycleController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, addCycleEntry);
router.get("/history", authMiddleware, getCycleHistory);

module.exports = router;
