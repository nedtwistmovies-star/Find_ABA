import { supabase } from "@/lib/supabase";

export const businessService = {
  async getBusinesses() {
    return supabase
      .from("businesses")
      .select("*")
      .order("created_at", { ascending: false });
  },

  async getBusinessById(id: string) {
    return supabase
      .from("businesses")
      .select("*")
      .eq("id", id)
      .single();
  },

  async createBusiness(payload: Record<string, any>) {
    return supabase
      .from("businesses")
      .insert(payload)
      .select()
      .single();
  },
};
