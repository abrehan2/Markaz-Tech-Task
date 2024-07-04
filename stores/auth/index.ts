// IMPORTS -
import { userStore, updateUserStore } from "@/types/login";
import { RemoveAuthCookie } from "@/utils/auth";
import { create } from "zustand";

export const useLoginStore = create<userStore>((set) => {
  return {
    user: null,
    isSuccess: false,
    isPending: false,
    token: "",
    refreshToken: "",
    setToken: (token: userStore["token"]) => set({ token }),
    setRefreshToken: (refreshToken: userStore["refreshToken"]) =>
      set({ refreshToken }),
    setUser: (user: userStore["user"]) => set({ user }),
    setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
    setIsPending: (isPending: boolean) => set({ isPending }),
    logout: () => {
      set({
        user: null,
        token: "",
        isSuccess: false,
        isPending: false,
        refreshToken: "",
      });
      RemoveAuthCookie();
    },
  };
});

export const useUpdateStore = create<updateUserStore>((set) => {
  return {
    isSuccess: false,
    isPending: false,
    setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
    setIsPending: (isPending: boolean) => set({ isPending }),
  };
});
