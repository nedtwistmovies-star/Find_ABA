// src/config/env.ts

export const env = {
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
} as const;

if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) {
  throw new Error(
    "Missing Supabase environment variables. Check .env and Vercel settings."
  );
}
