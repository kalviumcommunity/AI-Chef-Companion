# AI-Chef-Companion – AI-Powered Culinary Assistant

🚀 ## Project Overview

AI-Chef-Companion is an AI-powered kitchen assistant that helps users discover recipes, optimize ingredient usage, plan meals, and follow step-by-step cooking instructions. Powered by Large Language Models (LLMs) and prompt engineering, it analyzes user inputs (like available ingredients, dietary preferences, or cuisine type) to deliver structured cooking guidance and personalized meal suggestions.

The project employs advanced prompting methods (system/user prompts, zero-shot, one-shot, multi-shot) to ensure context-aware and accurate culinary support.

---

🔧 ## Features

*   **Personalized Recipe Suggestions** – Recommends dishes based on ingredients, preferences, and cuisine.
*   **Step-by-step Cooking Guidance** – Walks users through recipes interactively.
*   **Ingredient Optimization** – Suggests substitutions and minimizes food waste.
*   **Meal Planning** – Generates weekly meal plans and shopping lists.
*   **Structured Output** – Delivers guidance and recipes in a developer-friendly, JSON format for easy integration.
*   **Prompt Engineering** – Utilizes advanced prompting techniques including zero-shot prompting.

---

🎯 ## Tech Stack

*   **Backend:** Node.js / Python
*   **LLM:** OpenAI / Hugging Face API
*   **Database:** Recipe and ingredient knowledge base (SQL/NoSQL)
*   **Evaluation:** Custom framework benchmarking recipe accuracy and user satisfaction

---

📝 ## System and User Prompts (RTFC Framework)

#### 🔹 System Prompt

> You are an AI Chef Companion. Your job is to analyze user preferences, available ingredients, and cooking goals to recommend suitable recipes, guide step-by-step cooking, and optimize ingredients. Always respond in structured JSON format containing:
>
> *   `recipe`: Suggested recipe name
> *   `steps`: List of cooking instructions
> *   `ingredient_optimization`: Substitutions or suggestions
> *   `meal_plan`: (Optional) Weekly plan if requested

#### 🔹 User Prompt

> I have tomatoes, pasta, and cheese. I want to cook an Italian dinner. Suggest a recipe and guide me through the cooking steps. Format your answer as per the defined JSON schema.

---

📌 ## RTFC Framework Usage

*   **R (Role):** AI Chef Companion
*   **T (Task):** Analyze inputs, recommend recipes, guide cooking, optimize ingredients
*   **F (Format):** Structured JSON output
*   **C (Context):** User’s available ingredients and preferences

---

🎯 ## Zero-Shot Prompting

In AI-Chef Companion, we apply **Zero-Shot Prompting**, where the AI performs recipe recommendation and cooking guidance without any example recipes provided upfront. The AI relies solely on clear instructions from the system and user prompts.

#### 🔹 Zero-Shot Prompt Example

**System Prompt:**
> You are an AI culinary assistant. Analyze the available ingredients and suggest a suitable recipe along with step-by-step cooking instructions. Always respond with JSON containing `recipe`, `steps`, `ingredient_optimization`, and `meal_plan` (optional).

**User Prompt:**
> I have chicken, garlic, and lemon. Suggest a recipe and guide me through the cooking steps, formatted as per the system prompt schema.

#### 📌 Why Zero-Shot Prompting?

*   The AI works effectively without needing sample input-output pairs.
*   Makes the system flexible and adaptable to varying cuisines and ingredient combinations.
*   Ensures scalability across multiple dietary preferences and cooking scenarios.

---

🎯 ## One-Shot Prompting

In AI-Chef Companion, we use **One-Shot Prompting**, where the AI is given a single example of a recipe recommendation or cooking guidance task before performing the actual task. This approach helps guide the AI with a reference example while keeping the model generalizable and flexible.

#### 🔹 One-Shot Prompt

**System Prompt:**
> You are an AI culinary assistant. Analyze the given ingredients and user preferences, then suggest a recipe and provide cooking instructions. Always respond in JSON format with the following fields:
>
> *   `recipe`: Suggested recipe name
> *   `steps`: List of cooking instructions
> *   `ingredient_optimization`: Suggestions or substitutions
> *   `meal_plan`: (Optional) Weekly meal plan

**User Prompt (with one example):**
> Example input:
> ```json
> {
>   "ingredients": ["chicken", "rice", "broccoli"],
>   "preference": "Asian cuisine"
> }
> ```
> Example output:
> ```json
> {
>   "recipe": "Chicken Stir Fry",
>   "steps": [
>     "Cut chicken into strips",
>     "Stir fry chicken with vegetables",
>     "Serve hot with rice"
>   ],
>   "ingredient_optimization": [
>     "Use tofu instead of chicken for a vegetarian option"
>   ],
>   "meal_plan": null
> }
> ```
> Now, suggest a recipe and cooking steps for this input:
> ```json
> {
>   "ingredients": ["tomatoes", "pasta", "cheese"],
>   "preference": "Italian cuisine"
> }
> ```

#### 📌 Why One-Shot Prompting?

*   Provides one clear guiding example that sets the response pattern.
*   Ensures the AI generates consistent, structured, and relevant outputs.
*   Reduces ambiguity compared to zero-shot prompting by clarifying expectations with an example.

---

🎯 ## Multi-Shot Prompting

In AI-Chef Companion, we apply **Multi-Shot Prompting**, where the AI is provided with multiple examples of recipe recommendations and cooking guidance before being asked to perform the actual task. This method ensures the AI clearly understands the pattern, structure, and expectations of the output.

#### 🔹 Multi-Shot Prompt

**System Prompt:**
> You are an AI culinary assistant. Analyze the given ingredients and user preferences, then suggest a recipe and provide cooking instructions. Always respond in JSON format with the following fields:
>
> *   `recipe`: Suggested recipe name
> *   `steps`: List of cooking instructions
> *   `ingredient_optimization`: Suggestions or substitutions
> *   `meal_plan`: (Optional) Weekly meal plan

**User Prompt (with multiple examples):**
>
> Example 1:
> ```json
> {
>   "ingredients": ["chicken", "rice", "broccoli"],
>   "preference": "Asian cuisine"
> }
> ```
> Expected Output:
> ```json
> {
>   "recipe": "Chicken Stir Fry",
>   "steps": [
>     "Cut chicken into strips",
>     "Stir fry chicken with vegetables",
>     "Serve hot with rice"
>   ],
>   "ingredient_optimization": [
>     "Use tofu instead of chicken for a vegetarian option"
>   ],
>   "meal_plan": null
> }
> ```
> Example 2:
> ```json
> {
>   "ingredients": ["tomato", "basil", "mozzarella"],
>   "preference": "Italian cuisine"
> }
> ```
> Expected Output:
> ```json
> {
>   "recipe": "Caprese Salad",
>   "steps": [
>     "Slice tomatoes and mozzarella",
>     "Arrange on a plate with basil leaves",
>     "Drizzle with olive oil and balsamic vinegar"
>   ],
>   "ingredient_optimization": [
>     "Substitute mozzarella with vegan cheese if lactose intolerant"
>   ],
>   "meal_plan": null
> }
> ```
> Now, suggest a recipe and cooking steps for this input:
> ```json
> {
>   "ingredients": ["salmon", "lemon", "dill"],
>   "preference": "Seafood cuisine"
> }
> ```

#### 📌 Why Multi-Shot Prompting?

*   Provides multiple reference examples to show the expected output pattern.
*   Helps the AI learn complex tasks where one example might not suffice.
*   Improves accuracy and consistency in recipe recommendations and cooking guidance.

---

🎯 ## Dynamic Prompting

In AI-Chef Companion, we use **Dynamic Prompting**, where the prompt is automatically adapted based on the user's input context, such as available ingredients, dietary preferences, or cuisine type. This makes the system flexible and personalized instead of relying on fixed, static instructions.

#### 🔹 Dynamic Prompt Example

**System Prompt (Template):**
> You are an AI culinary assistant. Analyze the given ingredients and user preferences to suggest recipes and provide cooking instructions. Always respond in JSON format with fields:
>
> *   `recipe`
> *   `steps`
> *   `ingredient_optimization`
> *   `meal_plan` (optional)

**User Prompt (Generated Dynamically):**

Given user input:
```json
{
  "ingredients": ["chicken", "garlic", "lemon"],
  "preference": "Mediterranean cuisine"
}
```
The dynamically generated prompt becomes:
> Review the following ingredients for Mediterranean cuisine: chicken, garlic, lemon. Suggest a recipe with step-by-step instructions and any ingredient optimization. Format your response in the specified JSON schema.

#### 📌 Why Dynamic Prompting?

*   Automatically adapts prompts to the user's specific context and preferences.
*   Increases scalability and personalization of cooking guidance.
*   Reduces manual intervention while ensuring consistent, structured output.