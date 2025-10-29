// src/routes/recipe.js
const express = require("express");
const { generateWithGemini } = require("../controllers/geminiClient");
const prompts = require("../prompts/templates");
const { saveRecipe, getRecipes } = require("../db/recipeModel");
const { body } = require('express-validator');
const { validateRequest } = require('../middleware/validation');

const router = express.Router();

router.post(
  "/suggest",
  [
    body('ingredients').isArray({ min: 1 }).withMessage('ingredients must be a non-empty array'),
    body('preference').optional().isString().withMessage('preference must be a string'),
    body('mode').optional().isString(),
    body('temperature').optional().isFloat({ min: 0, max: 2 }).withMessage('temperature must be a number between 0 and 2')
  ],
  validateRequest,
  async (req, res, next) => {
    const { ingredients, preference, mode = "zeroShot", temperature } = req.body;
    const promptFunc = prompts[mode] || prompts.zeroShot;
    const prompt = promptFunc({ ingredients, preference });
    try {
      const result = await generateWithGemini(prompt, temperature || 1.0);
      await saveRecipe({ ingredients, preference, result, created: new Date() });
      res.json({ result });
    } catch (err) {
      console.error(`API error [suggest]:`, err);
      next(err);
    }
  }
);

router.post(
  "/mealplan",
  [
    body('ingredients').isArray({ min: 1 }).withMessage('ingredients must be a non-empty array'),
    body('dietary').optional().isString(),
    body('days').optional().isInt({ min: 1, max: 31 }).withMessage('days must be an integer between 1 and 31'),
    body('temperature').optional().isFloat({ min: 0, max: 2 })
  ],
  validateRequest,
  async (req, res, next) => {
    // Provide dynamic prompt for a week plan
    const { ingredients, dietary, days = 7, temperature } = req.body;
    const prompt = `\nYou are an AI Chef Companion. Generate a ${days}-day meal plan for dietary goal: ${dietary}, using ${ingredients.join(", ")} when possible. Return valid JSON with 'meal_plan': {"day 1": "...", ..., "day ${days}": "..."}.\n`;
    try {
      const result = await generateWithGemini(prompt, temperature || 1.0);
      res.json({ result });
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/substitute",
  [
    body('ingredient').isString().withMessage('ingredient is required'),
    body('dietary').optional().isString(),
    body('temperature').optional().isFloat({ min: 0, max: 2 })
  ],
  validateRequest,
  async (req, res, next) => {
    const { ingredient, dietary, temperature } = req.body;
    const prompt = `\nSuggest optimal culinary substitutes for ${ingredient} for dietary requirement: ${dietary}. Respond in JSON: ["substitute 1", "substitute 2", ...].\n`;
    try {
      const result = await generateWithGemini(prompt, temperature || 1.0);
      res.json({ result });
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/add',
  [
    body('recipe').isString().withMessage('recipe title required'),
    body('ingredients').isArray({ min: 1 }).withMessage('ingredients required'),
    body('steps').isArray({ min: 1 }).withMessage('steps required')
  ],
  validateRequest,
  async (req, res, next) => {
    const doc = req.body;
    try {
      await saveRecipe(doc);
      res.json({ status: "added" });
    } catch (err) {
      next(err);
    }
  }
);

router.get('/all', async (req, res, next) => {
  try {
    const recipes = await getRecipes();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
