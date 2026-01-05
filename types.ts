export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  role?: string;
  avatarUrl?: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  content: string;
  createdAt: string;
}

export interface GeminiResponse {
  text: string;
}

export interface SupabaseResponse<T> {
  data: T | null;
  error: string | null;
}
