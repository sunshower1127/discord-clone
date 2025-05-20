import type { User } from "@supabase/supabase-js";
import { create } from "zustand";

type AuthState = {
  user: User | null;
  actions: {
    setUser: (user: User | null) => void;
  };
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  actions: {
    setUser: (user) => set({ user }),
  },
}));
