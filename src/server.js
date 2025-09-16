// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

// Fix the path - remove ./src since we're already in src folder
const recipeRoutes = require("./routes/recipe");

const app = express();
app.use(bodyParser.json());

app.use("/api/recipe", recipeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
