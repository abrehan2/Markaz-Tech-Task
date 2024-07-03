"use client";

// IMPORTS -
import { Loader } from "@/components/others/loader";
import { PostCard } from "@/components/posts/post-card";
import { useGetAllPosts } from "@/hooks/useGetAllPosts";
import { postCardProps } from "@/types/posts";
import dynamic from "next/dynamic";

const Masonry = dynamic(() => import("react-layout-masonry"), { ssr: false });

const Page = () => {
  const { posts, isPostsLoading } = useGetAllPosts();

  return isPostsLoading ? (
    <Loader />
  ) : (
    <main className="w-full max-w-full">
      <Masonry columns={{ 640: 1, 768: 2, 1024: 3 }} gap={16}>
        {posts?.map((post: postCardProps) => (
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
