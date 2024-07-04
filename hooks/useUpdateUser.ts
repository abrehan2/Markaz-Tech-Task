"use client";

// IMPORTS -
import { useToast } from "@/components/ui/use-toast";
import { LOGIN_QUERY } from "@/constants/login";
import { updateUser } from "@/services/user";
import { useLoginStore, useUpdateStore } from "@/stores/auth";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

export const useUpdateUser = () => {
  const isUpdateSuccess = useUpdateStore((state) => state.isSuccess);
  const isUpdatePending = useUpdateStore((state) => state.isPending);
  const setIsSuccess = useUpdateStore((state) => state.setIsSuccess);
  const setIsPending = useUpdateStore((state) => state.setIsPending);
  const user = useLoginStore((state) => state.user);
  const setUser = useLoginStore((state) => state.setUser);
  const { toast } = useToast();

  const { mutate, error, isSuccess, isPending, data } = useMutation({
    mutationKey: [LOGIN_QUERY.updateUser.key],
    mutationFn: updateUser,
  });

  console.log("UPDATE USER HOOK RESULTS:\n");
  console.log(isSuccess, isPending, error, data);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error.message,
      });
    }

    if (isSuccess) {
      setUser(data.data);
    }

    setIsSuccess(isSuccess);
    setIsPending(isPending);
  }, [
    error,
    isSuccess,
    toast,
    setIsSuccess,
    isPending,
    setIsPending,
    data,
    setUser,
  ]);

  return {
    isUpdateSuccess,
    isUpdatePending,
    mutate,
  };
};
