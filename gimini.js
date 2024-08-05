import { GoogleGenerativeAI } from "@google/generative-ai";

// Set your API key directly in the script or via environment variable
const apiKey = 'AIzaSyCsuZn39V72kEmGx6494MHe5HFCG7gp-do';  // Use the actual API key

async function run() {
  // Initialize the GoogleGenerativeAI client
  const genAI = new GoogleGenerativeAI(apiKey);

  // Choose a model that's appropriate for your use case
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompts = [
    "What is Python? Provide a concise 2-3 line summary.",
    "What is JavaScript? Provide a concise 2-3 line summary.",
    "What is React? Provide a concise 2-3 line summary."
  ];

  for (const prompt of prompts) {
    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text;
      console.log("*****************", text);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

run();
