// src/controllers/geminiClient.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Check if API key exists
if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

// Initialize with API version
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY, {
  apiVersion: "v1"  // Change from v1beta to v1
});

// Updated function to check model availability
async function listAvailableModels() {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40
      }
    });
    
    // Test the model with a simple prompt
    const result = await model.generateContent("Test connection");
    const response = await result.response;
    console.log('Gemini API connection successful');
    return true;
  } catch (error) {
    console.error("Error connecting to Gemini API:", error);
    throw error;
  }
}

async function generateWithGemini(prompt, temperature = 1.0) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

// Export both functions
module.exports = { generateWithGemini, listAvailableModels };
