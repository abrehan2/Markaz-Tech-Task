"use client";

// IMPORTS -
import { Loader } from "@/components/loader";
import { PostCard } from "@/components/posts/post-card";
import { useGetAllPosts } from "@/hooks/useGetAllPosts";
import { postCardProps } from "@/types/posts";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const Masonry = dynamic(() => import("react-layout-masonry"), { ssr: false });

const Page = () => {
  const { data, error, isError, isLoading } = useGetAllPosts();
  const { toast } = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        title: "Error",
        description: error?.message,
      });
    }
  });

  return isLoading ? (
    <Loader />
  ) : (
    <main className="w-full max-w-full">
      <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={16}>
        {data?.posts.map((post: postCardProps) => (
          <PostCard
            key={post.title}
            title={post.title}
            body={post.body}
            tags={post.tags.map((tag: string) => tag)}
            reactions={{
              likes: post.reactions.likes,
            }}
          />
        ))}
      </Masonry>
    </main>
  );
};

export default Page;
