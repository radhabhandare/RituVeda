const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contactMessage = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message sent successfully", contactMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
