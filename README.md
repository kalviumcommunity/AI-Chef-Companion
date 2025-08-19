# 🍳 AI-Chef-Companion  

## 📖 Project Description  

**AI-Chef-Companion** is a Generative AI project that acts as an expert culinary assistant. It goes beyond simple recipe lookups by using Large Language Models (LLMs) to create an interactive and personalized cooking experience.  

Whether you’re a beginner cook experimenting with leftovers or an experienced chef planning a full week’s meals, AI-Chef-Companion is here to help. It can:  
- Generate recipes based on ingredients you have  
- Adapt recipes to dietary needs (e.g., vegan, gluten-free, dairy-free)  
- Provide step-by-step instructions with kitchen safety tips  
- Support meal planning and ingredient management  

---

## ✨ Key Features (Planned & In Progress)  

- **Dynamic Recipe Generation** → Get customized recipes based on available ingredients or preferences  
- **Meal Planning** → Generate structured daily/weekly meal plans  
- **Structured Output** → Recipes are returned in a clean JSON format for easy parsing in apps or UIs  
- **Safety-first Cooking** → Each recipe comes with kitchen safety reminders  

*(Future Enhancements)*  
- Nutrition analysis via external API (e.g., Edamam)  
- Shopping list integration (e.g., Todoist or Notion)  
- Cooking timers and reminders  
- Retrieval-Augmented Generation (RAG) for more diverse and updated recipe knowledge  

---

## ⚙️ How It Works  

1. **User Prompt** → You provide an input like:  
   `"Give me a quick dinner recipe with salmon and asparagus, dairy-free."`

2. **LLM Processing** → The AI model generates structured recipe data.  

3. **Structured Output (JSON)** → The recipe is returned in this format:  


```
{
  "recipeName": "Quick Lemon-Herb Salmon with Roasted Asparagus",
  "prepTime": "10 minutes",
  "cookTime": "15 minutes",
  "servings": 1,
  "dietaryNotes": "Dairy-Free",
  "ingredients": [
    {"item": "Salmon Fillet", "quantity": "1", "unit": "piece"},
    {"item": "Asparagus", "quantity": "1", "unit": "bunch"},
    {"item": "Lemon", "quantity": "1", "unit": ""},
    {"item": "Olive Oil", "quantity": "2", "unit": "tablespoons"},
    {"item": "Dried Dill", "quantity": "1", "unit": "teaspoon"}
  ],
  "instructions": [
    "Preheat oven to 200°C (400°F).",
    "Toss asparagus with olive oil, salt, and pepper. Arrange on baking sheet.",
    "Season salmon with olive oil, dill, and pepper. Place on same baking sheet.",
    "Top salmon with lemon slices and bake for 12–15 minutes.",
    "Squeeze fresh lemon juice before serving."
  ],
  "kitchenSafetyTip": "Be careful of steam when opening the oven. Use mitts."
}
```

## 🛠️ Tech Stack  

For **Prototype / Milestone 1**:  
- **Language:** Python  
- **LLM API:** OpenAI API (later can swap with Anthropic, Gemini, etc.)  
- **Framework:** FastAPI (for serving an API) or Flask  
- **Output Handling:** JSON for structured recipes  

*(Future expansion — optional later milestones)*  
- Retrieval-Augmented Generation → ChromaDB or Pinecone  
- LangChain or LlamaIndex for orchestration  
- External APIs → Edamam (nutrition), Todoist (shopping lists)  

---

## 🚀 Usage  

**Run the main script with your query:**

Example Input:
```
python main.py "Create a 3-day low-carb meal plan for one person"
```

text
```
"I have salmon fillets, asparagus, and lemons. Give me a healthy dinner recipe that's ready in under 30 minutes. I am allergic to dairy."
```
**📈 Future Milestones:**  
- Integrate Nutrition API  
- Shopping list tool integration  
- Add meal planning agent with RAG  

---

## 📄 License  

MIT License – free to use and modify. 