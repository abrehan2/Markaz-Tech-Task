export type login = {
  data: {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
  };
};

export type userStore = {
  user: login | null;
  isSuccess: boolean;
  isPending: boolean;
  token: string;
  setUser: (user: login | null) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  setIsPending: (isPending: boolean) => void;
  setToken: (token: string) => void;
  logout: () => void;
};

export type setAuthCookieType = (token: login["data"]["token"]) => void;
