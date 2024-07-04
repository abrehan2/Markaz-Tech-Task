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

export const ProfileFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const formHook = useForm<ProfileSchemaType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      [ProfileSchemaKeys.USERNAME]: "",
      [ProfileSchemaKeys.FIRST_NAME]: "",
      [ProfileSchemaKeys.LAST_NAME]: "",
    },
    mode: "onChange",
  });

  return <FormProvider {...formHook}>{children}</FormProvider>;
};

export const useProfileFormContext = () => {
  const formHook = useFormContext<ProfileSchemaType>();

  return useMemo(() => ({ formHook }), [formHook]);
};
