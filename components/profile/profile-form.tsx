"use client";

// IMPORTS -
import { SubmitHandler } from "react-hook-form";
import { ProfileSchemaKeys, ProfileSchemaType } from "@/schemas/profile-schema";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useProfileFormContext } from "@/contexts/profile-context";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ShimmerButton from "../magicui/shimmer-button";
import { useIsUser } from "@/hooks/usIsUser";
import { Loader } from "@/components/others/loader";
import { useRouter } from "next/navigation";
import { publicRoutes } from "@/routes";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useCallback, useState } from "react";

export const ProfileForm = () => {
  const { logout } = useIsUser();
  const { formHook } = useProfileFormContext();
  const { isUpdatePending, mutate } = useUpdateUser();
  const { user } = useIsUser();
  // const [currentValues, setCurrentValues] = useState<ProfileSchemaType>({
  //   username: user?.data.username ?? "",
  //   firstName: user?.data?.firstName ?? "",
  //   lastName: user?.data?.lastName ?? "",
  // });

  const router = useRouter();
  console.log("PROFILE FORM USER:\n");
  console.log(formHook);
  console.log(user);

  const handleLogout = useCallback(() => {
    logout();
    router.push(publicRoutes[0]);
  }, []);

  const handleSubmit: SubmitHandler<ProfileSchemaType> = ({
    firstName,
    lastName,
    username,
  }) => {
    console.log(firstName, lastName, username);
    // mutate({
    //   id: String(user?.data.id),
    //   values: {
    //     firstName,
    //     lastName,
    //     username,
    //   },
    // });
    // formHook.reset();
  };

  return isUpdatePending ? (
    <Loader />
  ) : (
    <CardWrapper
      headerLabel="You can update your details here!"
      headingLabel="Profile"
    >
      <Form {...formHook}>
        <form
          className="space-y-6"
          onSubmit={formHook.handleSubmit(handleSubmit)}
        >
          <div className="space-y-4">
            <FormField
              control={formHook.control}
              name={ProfileSchemaKeys.USERNAME}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {ProfileSchemaKeys.USERNAME.toUpperCase()}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name={ProfileSchemaKeys.USERNAME}
                      disabled={!formHook.formState.isValid}
                      type="text"
                      value={user?.data.username}
                      onChange={() => {}}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={formHook.control}
              name={ProfileSchemaKeys.FIRST_NAME}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {ProfileSchemaKeys.FIRST_NAME.toUpperCase()}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name={ProfileSchemaKeys.FIRST_NAME}
                      disabled={!formHook.formState.isValid}
                      type="text"
                      value={user?.data.firstName}
                      onChange={() => {}}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={formHook.control}
              name={ProfileSchemaKeys.LAST_NAME}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {ProfileSchemaKeys.LAST_NAME.toUpperCase()}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name={ProfileSchemaKeys.LAST_NAME}
                      disabled={!formHook.formState.isValid}
                      type="text"
                      value={user?.data.lastName}
                      onChange={() => {}}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-auto overflow-hidden gap-x-3">
            <ShimmerButton className="w-full" shimmerSize="0.5em" type="submit">
              Save
            </ShimmerButton>
            <ShimmerButton
              className="w-full"
              shimmerSize="0.5em"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </ShimmerButton>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
