// IMPORTS -
import { Post, postCardProps } from "@/types/posts";
import { create } from "zustand";

export const usePostStore = create<Post>((set) => {
  return {
    posts: [],
    isLoading: false,
    setPosts: (posts) => set({ posts }),
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
  };
});
