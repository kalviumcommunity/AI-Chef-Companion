# AI-Chef-Companion – AI-Powered Culinary Assistant

🚀 ## Project Overview

AI-Chef-Companion is an AI-powered kitchen assistant that helps users discover recipes, optimize ingredient usage, plan meals, and follow step-by-step cooking instructions. Powered by Large Language Models (LLMs) and prompt engineering, it analyzes user inputs (like available ingredients, dietary preferences, or cuisine type) to deliver structured cooking guidance and personalized meal suggestions.

The project employs advanced prompting methods (system/user prompts, zero-shot, one-shot, multi-shot) to ensure context-aware and accurate culinary support.

🔧 ## Features

*   **Personalized Recipe Suggestions** – Recommends dishes based on ingredients, preferences, and cuisine.
*   **Step-by-step Cooking Guidance** – Walks users through recipes interactively.
*   **Ingredient Optimization** – Suggests substitutions and minimizes food waste.
*   **Meal Planning** – Generates weekly meal plans and shopping lists.
*   **Structured Output** – Delivers guidance and recipes in a developer-friendly, JSON format for easy integration.
*   **Prompt Engineering** – Utilizes advanced prompting techniques for robust, contextual outputs.

🎯 ## Tech Stack

*   **Backend:** Node.js / Python
*   **LLM:** OpenAI / Hugging Face API
*   **Database:** Recipe and ingredient knowledge base (SQL/NoSQL)
*   **Evaluation:** Custom framework benchmarking recipe accuracy and user satisfaction

📝 ## System and User Prompts (RTFC Framework)

🔹 ### System Prompt:

You are an AI Chef Companion. Your job is to analyze user preferences, available ingredients, and cooking goals to recommend suitable recipes, guide step-by-step cooking, and optimize ingredients. Always respond in structured JSON format containing:

```json
{
  "recipe": "Suggested recipe name",
  "steps": [
    "List of cooking instructions"
  ],
  "ingredient_optimization": "Substitutions or suggestions",
  "meal_plan": "(Optional) Weekly plan if requested"
}
```

🔹 ### User Prompt:

I have tomatoes, pasta, and cheese. I want to cook an Italian dinner. Suggest a recipe and guide me through the cooking steps. Format your answer as per the defined JSON schema.

📌 ## RTFC Framework Usage

*   **R (Role):** AI Chef Companion defined in the system prompt.
*   **T (Task):** Analyzing user input, recommending recipes, guiding cooking, optimizing ingredients.
*   **F (Format):** Structured output in JSON.
*   **C (Context):** Provided ingredients, user preferences, and cuisine type.

📈 ## Future Scope

*   Integration with grocery shopping apps
*   Real-time dietary tracking and nutrition analysis
*   Multi-language recipe support
*   Voice-enabled kitchen guidance