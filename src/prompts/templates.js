// src/prompts/templates.js
module.exports = {
  zeroShot: ({ ingredients, preference }) => `
    Generate a recipe using these ingredients: ${ingredients.join(", ")}
    Dietary preference: ${preference}
    Return as JSON: {
      "title": "Recipe name",
      "ingredients": ["list"],
      "steps": ["numbered steps"],
      "nutrition": {"calories": "...", "protein": "..."}
    }
  `,

  oneShot: ({ ingredients, preference }) => `
You are an AI Chef Companion.
Example:
Input: ingredients: chicken, rice, broccoli; preference: Asian cuisine.
Output: {
  "recipe": "Chicken Stir Fry",
  "steps": [ "Cut chicken", "Stir fry chicken with veggies", "Serve with rice" ],
  "ingredient_optimization": [ "Replace chicken with tofu for vegetarian" ],
  "meal_plan": null
}

Now answer for:
ingredients: ${ingredients.join(", ")};
preference: ${preference}.
Respond in JSON.
`,

  multiShot: ({ ingredients, preference }) => `
You are an AI Chef Companion.
Examples:

1)
Input: tomato, basil, mozzarella; preference: Italian cuisine.
Output: {
  "recipe": "Caprese Salad",
  "steps": [ "Slice tomatoes and mozzarella", "Arrange with basil", "Drizzle oil" ],
  "ingredient_optimization": [ "Sub vegan cheese if needed" ],
  "meal_plan": null
}

2)
Input: chicken, garlic, lemon; preference: Mediterranean cuisine.
Output: {
  "recipe": "Chicken Lemon Garlic",
  "steps": [ "Marinate chicken", "Sear chicken", "Add garlic, lemon, cook" ],
  "ingredient_optimization": [ "Use tofu for vegan" ],
  "meal_plan": null
}

Now for:
ingredients: ${ingredients.join(", ")};
preference: ${preference}.
Respond in JSON.
`,

  dynamic: ({ ingredients, preference }) => `
Review the following ingredients for ${preference}: ${ingredients.join(", ")}.
Suggest a recipe and cooking steps, optimize ingredients if possible.
Return JSON per schema: recipe, steps, ingredient_optimization, meal_plan.

`,

  chainOfThought: ({ ingredients, preference }) => `
You are an AI culinary assistant. Analyze step by step, reason internally, but only show output in JSON:
{
  "recipe": "...",
  "steps": [ "...", "...", ... ],
  "ingredient_optimization": [ "...", ... ],
  "meal_plan": null
}
Ingredients: ${ingredients.join(", ")};
Preference: ${preference}
Do not show internal reasoning.
`,
};
