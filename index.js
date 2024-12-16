const { GoogleGenerativeAI } = require("@google/generative-ai");

// include .env file
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

async function scrapeGemini () {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

scrapeGemini();

