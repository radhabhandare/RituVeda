const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Example protected route
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        res.json({ message: 'Profile accessed successfully', user: req.user });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
