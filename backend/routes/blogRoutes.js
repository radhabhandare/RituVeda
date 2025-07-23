const express = require("express");
const { createBlog, getAllBlogs, getBlogById } = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createBlog);
router.get("/all", getAllBlogs);
router.get("/:id", getBlogById);

module.exports = router;
