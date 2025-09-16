// src/evaluation/runner.js
const { generateWithGemini } = require("../controllers/geminiClient");
const prompts = require("../prompts/templates");
const judgePrompt = require("../prompts/judgePrompt");
const { saveEval } = require("../db/evaluationModel");
const dataset = require("../../test/evaluationSamples.json");

async function runEvaluation(mode = "zeroShot") {
  for (const test of dataset) {
    const promptFunc = prompts[mode];
    const prompt = promptFunc({ ingredients: test.ingredients, preference: test.preference });
    const aiOutput = await generateWithGemini(prompt);
    const judge = judgePrompt({ aiOutput, expected: test.expected });
    const verdict = await generateWithGemini(judge, 0.7);
    await saveEval({ testId: test.id, aiOutput, verdict, time: new Date() });
    console.log(`Test ${test.id}: ${verdict}`);
  }
}

module.exports = { runEvaluation };
