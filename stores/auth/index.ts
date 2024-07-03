// IMPORTS -
import { userStore } from "@/types/login";
import { RemoveAuthCookie } from "@/utils/auth";
import { create } from "zustand";

export const useLoginStore = create<userStore>((set) => {
  return {
    user: null,
    isSuccess: false,
    isPending: false,
    token: "",
    setToken: (token: userStore["token"]) => set({ token }),
    setUser: (user: userStore["user"]) => set({ user }),
    setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
    setIsPending: (isPending: boolean) => set({ isPending }),
    logout: () => {
      set({ user: null, token: "", isSuccess: false, isPending: false });
      RemoveAuthCookie();
    },
  };
});
