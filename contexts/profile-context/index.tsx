"use client";

// IMPORTS -
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import {
  profileSchema,
  ProfileSchemaType,
  ProfileSchemaKeys,
} from "@/schemas/profile-schema";
import { useIsUser } from "@/hooks/usIsUser";

export const ProfileFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useIsUser();
  const formHook = useForm<ProfileSchemaType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      [ProfileSchemaKeys.USERNAME]: user?.data.username ?? "",
      [ProfileSchemaKeys.FIRST_NAME]: user?.data.firstName ?? "",
      [ProfileSchemaKeys.LAST_NAME]: user?.data.lastName ?? "",
    },
    mode: "onChange",
  });

  return <FormProvider {...formHook}>{children}</FormProvider>;
};

export const useProfileFormContext = () => {
  const formHook = useFormContext<ProfileSchemaType>();

  return useMemo(() => ({ formHook }), [formHook]);
};
