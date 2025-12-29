Ts
export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  geminiKey: import.meta.env.VITE_GEMINI_API_KEY
};

Object.entries(env).forEach(([key, value]) => {
  if (!value) throw new Error(`Missing env variable: ${key}`);
});
