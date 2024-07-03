export type postCardProps = {
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: string;
  };
};

export type Post = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  posts: postCardProps[];
  setPosts: (posts: postCardProps[]) => void;
};
