// src/routes/recipe.js
const express = require("express");
const { generateWithGemini } = require("../controllers/geminiClient");
const prompts = require("../prompts/templates");
const { saveRecipe } = require("../db/recipeModel");

const router = express.Router();

router.post("/suggest", async (req, res) => {
  const { ingredients, preference, mode = "zeroShot", temperature } = req.body;
  const promptFunc = prompts[mode] || prompts.zeroShot;
  const prompt = promptFunc({ ingredients, preference });
  try {
    const result = await generateWithGemini(prompt, temperature || 1.0);
    await saveRecipe({ ingredients, preference, result, created: new Date() });
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Gemini API error" });
  }
});

router.post("/mealplan", async (req, res) => {
  // Provide dynamic prompt for a week plan
  const { ingredients, dietary, days = 7, temperature } = req.body;
  const prompt = `
You are an AI Chef Companion. Generate a ${days}-day meal plan for dietary goal: ${dietary}, using ${ingredients.join(", ")} when possible. Return valid JSON with 'meal_plan': {"day 1": "...", ..., "day ${days}": "..."}.
`;
  try {
    const result = await generateWithGemini(prompt, temperature || 1.0);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Gemini API error" });
  }
});

router.post("/substitute", async (req, res) => {
  const { ingredient, dietary, temperature } = req.body;
  const prompt = `
Suggest optimal culinary substitutes for ${ingredient} for dietary requirement: ${dietary}. Respond in JSON: ["substitute 1", "substitute 2", ...].
`;
  try {
    const result = await generateWithGemini(prompt, temperature || 1.0);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Gemini API error" });
  }
});

module.exports = router;
