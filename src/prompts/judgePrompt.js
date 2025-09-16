// src/prompts/judgePrompt.js
module.exports = ({ aiOutput, expected }) => `
You are a judge. Compare the AI's output with the expected recipe.
Evaluation parameters:
- Correctness – Is the recipe relevant?
- Completeness – Are steps & ingredient optimization meaningful?
- Format – Is it valid JSON schema?
- Clarity – Is output understandable?

AI Output:
${aiOutput}

Expected:
${expected}

Return Pass/Fail with justification.
`;
