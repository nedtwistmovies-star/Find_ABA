import { sendToAI } from "./aiService";

export const askAI = async (prompt: string): Promise<string> => {
  return sendToAI({ prompt });
};
