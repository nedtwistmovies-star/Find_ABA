// src/lib/supabase.ts

import { createClient } from "@supabase/supabase-js";
import { env } from "../config/env";

/**
 * Supabase client (singleton)
 * Safe for Vite + Vercel
 */
export const supabase = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_ANON_KEY
);
