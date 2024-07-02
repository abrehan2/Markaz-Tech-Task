"use client";

// IMPORTS -
import { PostCard } from "@/components/posts/post-card";
import { useGetAllPosts } from "@/hooks/useGetAllPosts";
import { postCardProps } from "@/types/posts";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Page = () => {
  const { data, error, isError, isLoading } = useGetAllPosts();

  return (
    <main className="max-w-full">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {data?.posts.map((post: postCardProps) => (
            <PostCard
              key={post.title}
              title={post.title}
              body={post.body}
              tags={post.tags}
              reactions={{
                likes: post.reactions.likes,
              }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
};

export default Page;
