// server.js
require("dotenv").config();
const express = require("express");
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { listAvailableModels } = require("./controllers/geminiClient");

const recipeRoutes = require("./routes/recipe");
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

// Basic security hardening
app.use(helmet());
app.use(rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
}));

app.use("/api/recipe", recipeRoutes);

// Centralized error handler (should be after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;  // Add fallback port

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await listAvailableModels();
  } catch (err) {
    console.error("Failed to list models:", err);
  }
});
