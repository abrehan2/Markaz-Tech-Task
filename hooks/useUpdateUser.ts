"use client";

// IMPORTS -
import { useToast } from "@/components/ui/use-toast";
import { LOGIN_QUERY } from "@/constants/login";
import { updateUser } from "@/services/user";
import { useLoginStore, useUpdateStore } from "@/stores/auth";
import { getQueryClient } from "@/utils/react-query/QueryClient";
import {
  InvalidateQueryFilters,
  QueryClient,
  useMutation,
} from "@tanstack/react-query";
import { useEffect } from "react";

export const useUpdateUser = () => {
  const isUpdateSuccess = useUpdateStore((state) => state.isSuccess);
  const isUpdatePending = useUpdateStore((state) => state.isPending);
  const setIsSuccess = useUpdateStore((state) => state.setIsSuccess);
  const setIsPending = useUpdateStore((state) => state.setIsPending);
  const setUser = useLoginStore((state) => state.setUser);

  const user = useLoginStore((state) => state.user);
  const { toast } = useToast();

  const { mutate, error, isSuccess } = useMutation({
    mutationKey: [LOGIN_QUERY.updateUser.key],
    mutationFn: updateUser,
    onSuccess: (data) => {
      setUser({
        ...user,
        data: data.data,
      });
      setIsSuccess(true);
      setIsPending(false);

      getQueryClient().invalidateQueries(
        LOGIN_QUERY.getUser.key as InvalidateQueryFilters
      );
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
      toast({
        title: "Success",
        description: "User updated successfully",
      });
    }
  }, [error, toast, isSuccess]);

  return {
    isUpdateSuccess,
    isUpdatePending,
    mutate,
  };
};
