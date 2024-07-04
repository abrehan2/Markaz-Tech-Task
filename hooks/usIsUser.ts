"use client";

// IMPORTS -
import { useToast } from "@/components/ui/use-toast";
import { LOGIN_QUERY } from "@/constants/login";
import { DEFAULT_REDIRECT_ROUTE } from "@/routes";
import { userLogin } from "@/services/user";
import { useLoginStore } from "@/stores/auth";
import { setAuthCookie } from "@/utils/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useIsUser = () => {
  const setUser = useLoginStore((state) => state.setUser);
  const setIsSuccess = useLoginStore((state) => state.setIsSuccess);
  const isSuccessUser = useLoginStore((state) => state.isSuccess);
  const setIsUserPending = useLoginStore((state) => state.setIsPending);
  const setToken = useLoginStore((state) => state.setToken);
  const setRefreshToken = useLoginStore((state) => state.setRefreshToken);

  const user = useLoginStore((state) => state.user);
  const isUserPending = useLoginStore((state) => state.isPending);
  const logout = useLoginStore((state) => state.logout);
  const { toast } = useToast();
  const router = useRouter();

  const { mutate, error } = useMutation({
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

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error.message,
      });
    }
  }, [error, toast]);

  return {
    mutate,
    user,
    isSuccessUser,
    isUserPending,
    logout,
  };
};
