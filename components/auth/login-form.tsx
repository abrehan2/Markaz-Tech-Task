"use client";

// IMPORTS -
import { SubmitHandler } from "react-hook-form";
import { LoginSchemaKeys, LoginSchemaType } from "@/schemas/loginSchema";
import { CardWrapper } from "./card-wrapper";
import { useLoginFormContext } from "@/contexts/login-context";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LOGIN_QUERY } from "@/constants/login";
import ShimmerButton from "../magicui/shimmer-button";

export const LoginForm = () => {
  const { formHook } = useLoginFormContext();

  const handleSubmit: SubmitHandler<LoginSchemaType> = ({
    username,
    password,
  }) => {
    console.log("clicked");
    formHook.setValue(LoginSchemaKeys.USERNAME, username);
    formHook.setValue(LoginSchemaKeys.PASSWORD, password);

    formHook.reset();
  };

  return (
    <CardWrapper headerLabel="Welcome back!">
      <Form {...formHook}>
        <form
          className="space-y-6"
          onSubmit={formHook.handleSubmit(handleSubmit)}
        >
          <div className="space-y-4">
            <FormField
              control={formHook.control}
              name={LoginSchemaKeys.USERNAME}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {LoginSchemaKeys.USERNAME.toUpperCase()}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name={LoginSchemaKeys.USERNAME}
                      disabled={!formHook.formState.isValid}
                      type="text"
                      placeholder={LOGIN_QUERY.login.username}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={formHook.control}
              name={LoginSchemaKeys.PASSWORD}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {LoginSchemaKeys.PASSWORD.toUpperCase()}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name={LoginSchemaKeys.PASSWORD}
                      disabled={!formHook.formState.isValid}
                      type="password"
                      placeholder={LOGIN_QUERY.login.password}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <ShimmerButton
            className="w-full mt-5"
            shimmerSize="0.5em"
            type="submit"
          >
            Submit
          </ShimmerButton>
        </form>
      </Form>
    </CardWrapper>
  );
};
