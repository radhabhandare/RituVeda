const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const connectDB = require("./config/db");

// Load environment variables BEFORE connecting DB
dotenv.config();

// Connect to database
connectDB();

// Import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const cycleRoutes = require("./routes/cycleRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(helmet()); // Security headers
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cycle", cycleRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/contact", contactRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Smart Menstrual Pad API!");
});

// Handle unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handling
app.use((err, req, res, next) => {
  console.error("💥 Server Error:", process.env.NODE_ENV === "development" ? err.stack : err.message);
  res.status(500).json({
    message: process.env.NODE_ENV === "production" ? "Server error" : err.message,
  });
});

// Start server only if DB is connected
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("🔴 Server shutting down...");
  await mongoose.connection.close();
  server.close(() => process.exit(0));
});
