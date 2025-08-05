# AI-Chef-Companion


## 📖 Project Description

**AI-Chef-Companion** is an advanced generative AI project that acts as an expert culinary assistant. It goes beyond simple recipe lookups by leveraging the power of Large Language Models (LLMs) to create a truly interactive and "agentic" cooking experience.

Whether you're a novice cook wondering what to do with leftover ingredients or an experienced chef planning a multi-day meal plan, this AI companion is designed to help. It can generate novel recipes, adapt existing ones to your dietary needs, provide detailed nutritional information, and even help you manage your grocery list.

This project was built as a capstone for a Generative AI course, demonstrating a comprehensive understanding of modern LLM architecture and agent-based systems.

## Key Features

*   **Dynamic Recipe Generation:** Get recipes based on the ingredients you have on hand, your dietary restrictions (e.g., vegan, gluten-free), or your culinary preferences.
*   **Intelligent Meal Planning:** Automatically generate structured weekly or daily meal plans tailored to specific goals like low-carb or high-protein diets.
*   **Structured & Safe Output:** Recipes and plans are provided in a clean, predictable JSON format, always accompanied by relevant kitchen safety tips.
*   **External Tool Integration (Function Calling):**
    *   **Nutritional Analysis:** Fetches detailed nutritional data for any recipe using an external API.
    *   **Shopping List Management:** Automatically adds missing ingredients to your favorite shopping list app.
    *   **Cooking Timers:** Sets timers on your device for specific cooking steps.
*   **Up-to-Date & Reliable Knowledge (RAG):** Uses Retrieval-Augmented Generation to pull information from a curated knowledge base of trusted culinary websites, ensuring recipes are reliable and current.

## How It Works

AI-Chef-Companion operates as an AI agent, following a sophisticated workflow to process a user's request.

1.  **User Prompt:** The user provides a natural language request (e.g., "Give me a high-protein vegan dinner recipe").
2.  **RAG - Retrieval:** The system first queries a specialized **Vector Database** (containing recipes, nutritional info, and food science articles) to find the most relevant documents.
3.  **Augmented Prompting:** The retrieved documents are injected into the context of a **System Prompt**, which instructs the LLM on its persona ("Chef's Companion"), constraints, and desired output format (JSON).
4.  **LLM Processing:** The augmented prompt is sent to the LLM (e.g., GPT-4, Gemini). The model's **Tuned Parameters** (low temperature) ensure a creative yet predictable response.
5.  **Function Calling & Tool Use:** If the LLM determines that external information is needed (e.g., for nutritional data), it issues a "function call." The system executes this function (e.g., calls a nutrition API) and feeds the result back to the LLM.
6.  **Structured Output:** The LLM processes all the information and generates a final, structured JSON response that is parsed and displayed to the user.

## Core Concepts Demonstrated

This project showcases key concepts in building modern, agentic AI systems:

| Concept | Implementation in AI-Chef-Companion |
| :--- | :--- |
| **System Prompting** | A detailed system prompt defines the AI's persona, constraints (e.g., safety-first), and goals, guiding its behavior throughout the interaction. |
| **Parameter Tuning** | The LLM's `temperature` is set low to produce deterministic and reliable recipe instructions, avoiding overly random or unsafe suggestions. |
| **Structured Output** | The model is explicitly prompted to return its final answer in a `JSON` format, making the data easy to parse, validate, and display in a UI. |
| **Function Calling** | The LLM is granted access to external tools, such as a nutrition API (`get_nutritional_information`) and a shopping list API (`add_to_shopping_list`), allowing it to perform actions in the real world. |
| **Retrieval-Augmented Generation (RAG)** | To combat hallucinations and ensure expertise, the model's knowledge is augmented with up-to-date information retrieved from a curated vector database of culinary documents. |

## Tech Stack

*   **Language:** Python
*   **LLM Framework:** LangChain / LlamaIndex
*   **LLM API:** OpenAI API / Google AI API
*   **Vector Database:** ChromaDB / Pinecone
*   **Web Framework:** Flask / FastAPI for building a user-facing API.
*   **External APIs:** Edamam (for nutrition), Todoist (for shopping lists)

## 🚀 Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kalviumcommunity/AI-Chef-Companion.git
    cd AI-Chef-Companion
    ```

2.  **Create a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## ▶️ Usage

You can interact with the agent through the main script.

```bash
python main.py "Create a 3-day low-carb meal plan for one person"
```

**Example User Prompt:**

`"I have salmon fillets, asparagus, and lemons. Give me a healthy dinner recipe that's ready in under 30 minutes. I am allergic to dairy."`

**Example JSON Output:**

```json
{
  "recipeName": "Quick Lemon-Herb Salmon with Roasted Asparagus",
  "prepTime": "10 minutes",
  "cookTime": "15 minutes",
  "servings": 1,
  "dietary_notes": "Dairy-Free",
  "ingredients": [
    {"item": "Salmon Fillet", "quantity": "1", "unit": "piece"},
    {"item": "Asparagus", "quantity": "1", "unit": "bunch"},
    {"item": "Lemon", "quantity": "1", "unit": ""},
    {"item": "Olive Oil", "quantity": "2", "unit": "tablespoons"},
    {"item": "Dried Dill", "quantity": "1", "unit": "teaspoon"}
  ],
  "instructions": [
    "Preheat oven to 400°F (200°C).",
    "Toss the asparagus with 1 tbsp of olive oil, salt, and pepper. Arrange on a baking sheet.",
    "Pat the salmon dry. Rub with 1 tbsp olive oil, dill, salt, and pepper.",
    "Place the salmon on the same baking sheet. Slice half the lemon and place slices on top.",
    "Bake for 12-15 minutes, or until the salmon is cooked through.",
    "Squeeze the juice from the remaining lemon half over the salmon and asparagus before serving."
  ],
  "kitchenSafetyTip": "Be careful of steam when opening the oven. Always use oven mitts."
}
```



## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.