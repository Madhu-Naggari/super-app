import { create } from "zustand";

interface UserData {
  name: string;
  username: string;
  email: string;
  mobile: string;
}

interface Store {
  user: UserData | null;
  categories: string[];
  setUser: (user: UserData) => void;
  setCategories: (categories: string[]) => void;
}

export const useUserStore = create<Store>((set) => ({
  user: null,

  categories: [],

  setUser: (user) =>
    set({
      user,
    }),

  setCategories: (categories) =>
    set({
      categories,
    }),
}));
