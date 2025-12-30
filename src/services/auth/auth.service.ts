// src/services/auth/auth.service.ts

import { supabase } from "@/lib/supabase";
import { AuthResponse, Session, User } from "@supabase/supabase-js";

/**
 * Auth Service
 * Centralized authentication logic
 * Safe for Vite + Vercel
 */
export const authService = {
  async signUp(
    email: string,
    password: string
  ): Promise<AuthResponse> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async signIn(
    email: string,
    password: string
  ): Promise<AuthResponse> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
  },

  getSession(): Promise<Session | null> {
    return supabase.auth
      .getSession()
      .then(({ data }) => data.session);
  },

  getUser(): Promise<User | null> {
    return supabase.auth
      .getUser()
      .then(({ data }) => data.user);
  },
};// src/services/auth/auth.service.ts

import { supabase } from "@/lib/supabase";

/**
 * Auth Service
 * --------------------
 * All authentication logic for FindAba.
 * Uses centralized Supabase client only.
 * Safe for Vite + Vercel.
 */
export const authService = {
  /**
   * Sign up a new user
   */
  async signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  /**
   * Sign in an existing user
   */
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  /**
   * Sign out current user
   */
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  /**
   * Get currently authenticated user
   */
  async getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  },

  /**
   * Listen to auth state changes
   */
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  },
};
