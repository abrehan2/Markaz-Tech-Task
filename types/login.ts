export type login = {
  data: {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
    refreshToken: string;
  };
};

export type userStore = {
  user: login | null;
  isSuccess: boolean;
  isPending: boolean;
  token: string;
  refreshToken: string;
  setUser: (user: login | null) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  setIsPending: (isPending: boolean) => void;
  setToken: (token: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  logout: () => void;
};

export type setAuthCookieType = (
  token: login["data"]["token"],
  refreshToken: login["data"]["refreshToken"]
) => void;

export type updateUserStore = {
  isSuccess: boolean;
  isPending: boolean;
  setIsSuccess: (isSuccess: boolean) => void;
  setIsPending: (isPending: boolean) => void;
};
