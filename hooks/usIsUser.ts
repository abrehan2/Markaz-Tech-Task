"use client";

// IMPORTS -
import { useToast } from "@/components/ui/use-toast";
import { LOGIN_QUERY } from "@/constants/login";
import { userLogin } from "@/services/login";
import { useLoginStore } from "@/stores/auth";
import { setAuthCookie } from "@/utils/auth";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_REDIRECT_ROUTE } from "@/routes";

export const useIsUser = () => {
  const setUser = useLoginStore((state) => state.setUser);
  const setIsSuccess = useLoginStore((state) => state.setIsSuccess);
  const user = useLoginStore((state) => state.user);
  const isSuccessUser = useLoginStore((state) => state.isSuccess);
  const isUserPending = useLoginStore((state) => state.isPending);
  const setToken = useLoginStore((state) => state.setToken);
  const token = useLoginStore((state) => state.token);
  const setIsUserPending = useLoginStore((state) => state.setIsPending);
  const logout = useLoginStore((state) => state.logout);
  const { toast } = useToast();
  const router = useRouter();

  const { mutate, error, isSuccess, isPending } = useMutation({
    mutationKey: [LOGIN_QUERY.getUser.key],
    mutationFn: userLogin,
    onSuccess: (data) => {
      setUser(data);
      setToken(data.data.token);
    },
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error.message,
      });
    }

    if (isSuccess) {
      setAuthCookie(token);
      router.push(DEFAULT_REDIRECT_ROUTE);
    }

    setIsUserPending(isPending);
    setIsSuccess(isSuccess);
  }, [
    error,
    isSuccess,
    toast,
    setIsSuccess,
    isPending,
    setIsUserPending,
    token,
    router,
  ]);

  return {
    mutate,
    user,
    isSuccessUser,
    isUserPending,
    logout,
  };
};
