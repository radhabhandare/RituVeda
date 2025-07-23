const express = require("express");
const { sendMessage, getMessages } = require("../controllers/contactController");

const router = express.Router();

router.post("/send", sendMessage);
router.get("/all", getMessages);

module.exports = router;
