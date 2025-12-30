// src/services/ai/gemini.service.ts

export async function askGemini(prompt: string): Promise<string> {
  const res = await fetch("/api/ai/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    throw new Error("Gemini request failed");
  }

  const data = await res.json();
  return data.text;
}
