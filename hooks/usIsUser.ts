"use client";

// IMPORTS -
import { useToast } from "@/components/ui/use-toast";
import { LOGIN_QUERY } from "@/constants/login";
import { DEFAULT_REDIRECT_ROUTE } from "@/routes";
import { getCurrentUser, userLogin } from "@/services/user";
import { useLoginStore } from "@/stores/auth";
import { setAuthCookie } from "@/utils/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export const useIsUser = () => {
  const setUser = useLoginStore((state) => state.setUser);
  const setIsSuccess = useLoginStore((state) => state.setIsSuccess);
  const isSuccessUser = useLoginStore((state) => state.isSuccess);
  const setIsUserPending = useLoginStore((state) => state.setIsPending);
  const setToken = useLoginStore((state) => state.setToken);
  const setRefreshToken = useLoginStore((state) => state.setRefreshToken);

  const user = useLoginStore((state) => state.user);
  const isUserPending = useLoginStore((state) => state.isPending);
  const token = useLoginStore((state) => state.token);
  const logout = useLoginStore((state) => state.logout);
  const refreshToken = useLoginStore((state) => state.refreshToken);
  const { toast } = useToast();
  const router = useRouter();

  const {
    mutate,
    error,
    isSuccess,
    isPending,
    data: loggedInUser,
  } = useMutation({
    mutationKey: [LOGIN_QUERY.getUser.key],
    mutationFn: userLogin,
    onSuccess: (data) => {
      setUser({
        data: data.data,
      });
      setToken(data.data.token);
      setRefreshToken(data.data.refreshToken);
      setAuthCookie(data.data.token, data.data.refreshToken);
      setIsSuccess(true);
      setIsUserPending(false);
      router.push(DEFAULT_REDIRECT_ROUTE);
    },
  });

  const { data: currentUser, isSuccess: currentUserSuccess } = useQuery({
    queryKey: [LOGIN_QUERY.currentUser.key],
    queryFn: getCurrentUser,
  });

  console.log("CURRENT USER:\n");
  console.log(currentUser, currentUserSuccess);

  console.log("LOGGED IN USER:\n");
  console.log(loggedInUser?.data);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error.message,
      });
    }

    if (currentUser) {
      setUser({
        data: currentUser.data,
      });
      setIsSuccess(currentUserSuccess);
    }

    // setIsUserPending(isPending);
    // setIsSuccess(isSuccess);
  }, [
    error,
    // isSuccess,
    toast,
    setIsSuccess,
    // isPending,
    // setIsUserPending,
    currentUser,
    currentUserSuccess,
    setUser,
  ]);

  return {
    mutate,
    user,
    isSuccessUser,
    isUserPending,
    logout,
  };
};
