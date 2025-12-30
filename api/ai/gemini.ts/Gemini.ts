import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Temporary response (AI call will be added later)
    return res.status(200).json({
      success: true,
      message: "Gemini endpoint is working",
      prompt,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
