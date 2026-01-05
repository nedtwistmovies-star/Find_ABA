import { createClient } from "@supabase/supabase-js";
import { UserProfile } from "../types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single<UserProfile>();

  return { data, error: error?.message || null };
};

export const updateUserProfile = async (
  userId: string,
  updates: Partial<UserProfile>
) => {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", userId);

  return { data, error: error?.message || null };
};
