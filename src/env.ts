/**
 * Centralized environment variable loader
 * Vite + Vercel safe
 * Fails fast if required env vars are missing
 */

function getEnv(key: string): string {
  const value = import.meta.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export const ENV = {
  SUPABASE_URL: getEnv("VITE_SUPABASE_URL"),
  SUPABASE_ANON_KEY: getEnv("VITE_SUPABASE_ANON_KEY"),
  GEMINI_API_KEY: getEnv("VITE_GEMINI_API_KEY"),
};
