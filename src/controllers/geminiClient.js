// src/controllers/geminiClient.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const configuration = new GoogleGenerativeAI(apiKey);
const modelId = "gemini-pro"; // Or other model variant

const model = configuration.getGenerativeModel({ model: modelId });

async function generateWithGemini(prompt, temperature = 1.0) {
  // Gemini supports 0.0 to 2.0 temperature
  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: { temperature },
  });
  // Usually result.response.text() gives generated output
  const responseText = await result.response.text();
  return responseText;
}

module.exports = { generateWithGemini };
