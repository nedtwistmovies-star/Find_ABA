import { GeminiResponse } from "../types";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;
const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export const sendToGemini = async (
  prompt: string
): Promise<GeminiResponse> => {
  const response = await fetch(
    `${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = await response.json();

  return {
    text:
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI.",
  };
};
