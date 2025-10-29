// server.js
require("dotenv").config();
const express = require("express");
const { listAvailableModels } = require("./controllers/geminiClient");

const recipeRoutes = require("./routes/recipe");

const app = express();
app.use(express.json());

app.use("/api/recipe", recipeRoutes);

const PORT = process.env.PORT || 3000;  // Add fallback port

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await listAvailableModels();
  } catch (err) {
    console.error("Failed to list models:", err);
  }
});
