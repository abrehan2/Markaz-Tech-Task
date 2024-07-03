"use client";

// IMPORTS -
import { useToast } from "@/components/ui/use-toast";
import { POSTS_QUERY } from "@/constants/posts";
import { getAllPosts } from "@/services/posts";
import { usePostStore } from "@/stores/posts";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetAllPosts = () => {
  const setPosts = usePostStore((state) => state.setPosts);
  const setIsLoading = usePostStore((state) => state.setIsLoading);
  const posts = usePostStore((state) => state.posts);
  const isPostsLoading = usePostStore((state) => state.isLoading);
  const { toast } = useToast();

  const { data, error, isLoading } = useQuery({
    queryKey: [POSTS_QUERY.getPosts.key],
    queryFn: getAllPosts,
    staleTime: POSTS_QUERY.getPosts.staleTime,
  });

  useEffect(() => {
    if (data) {
      setPosts(data?.posts);
    }

    if (error) {
      toast({
        title: "Error",
        description: error.message,
      });
    }

    setIsLoading(isLoading);
  }, [data, error, setPosts, setIsLoading, toast, isLoading]);

  return {
    posts,
    isPostsLoading,
  };
};
