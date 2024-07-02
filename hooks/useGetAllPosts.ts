// IMPORTS -
import { POSTS_QUERY } from "@/constants/posts";
import { getAllPosts } from "@/services/posts";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPosts = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: [POSTS_QUERY.getPosts.key],
    queryFn: getAllPosts,
  });

  return {
    data,
    error,
    isError,
    isLoading,
  };
};
