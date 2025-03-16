const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Ensure .env file is loaded

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB with error handling
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Exit process if MongoDB connection fails
  });

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

// Blog Routes
const blogRoutes = require('./routes/blogroutes');
app.use('/api/blogs', blogRoutes);

// Set PORT from environment or default to 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
