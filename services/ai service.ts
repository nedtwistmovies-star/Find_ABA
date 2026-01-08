import { AI_CONFIG } from "../constants";
import { sendToGemini } from "./geminiService";
import { supabase } from "./supabaseService";

export type AIProvider = "gemini";

interface AIRequest {
  prompt: string;
  provider?: AIProvider;
}

export const sendToAI = async ({
  prompt,
  provider = AI_CONFIG.DEFAULT_PROVIDER as AIProvider,
}: AIRequest): Promise<string> => {
  let responseText = "AI service unavailable.";

  try {
    switch (provider) {
      case "gemini":
        responseText = await sendToGemini(prompt);
        break;

      default:
        responseText = "Unsupported AI provider.";
    }
  } catch {
    responseText = "AI request failed.";
  }

  // 🔐 Auto-log AI interaction (non-blocking)
  logAIInteraction(prompt, responseText, provider);

  return responseText;
};

// ---------- Internal Logger ----------
const logAIInteraction = async (
  prompt: string,
  response: string,
  provider: AIProvider
) => {
  try {
    const { data } = await supabase.auth.getUser();
    const user = data.user;

    await supabase.from("ai_logs").insert({
      user_id: user?.id ?? null,
      prompt,
      response,
      provider,
    });
  } catch {
    // ❌ Never throw — logging must not break AI usage
  }
};
