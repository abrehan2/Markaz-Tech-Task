"use client";

// IMPORTS -
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import {
  loginSchema,
  LoginSchemaType,
  LoginSchemaKeys,
} from "@/schemas/login-schema";

export const LoginFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const formHook = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      [LoginSchemaKeys.USERNAME]: "",
      [LoginSchemaKeys.PASSWORD]: "",
    },
    mode: "onChange",
  });

  return <FormProvider {...formHook}>{children}</FormProvider>;
};

export const useLoginFormContext = () => {
  const formHook = useFormContext<LoginSchemaType>();

  return useMemo(() => ({ formHook }), [formHook]);
};
