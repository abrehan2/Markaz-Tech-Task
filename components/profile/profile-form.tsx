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

export const ProfileForm = () => {
  const { logout } = useIsUser();
  const { formHook } = useProfileFormContext();
  const router = useRouter();
  console.log(formHook.formState);
  let isUserPending = false;

  const handleLogout = () => {
    logout();
    router.push(publicRoutes[0]);
  };

  const handleSubmit: SubmitHandler<ProfileSchemaType> = ({
    username,
    firstName,
    lastName,
  }) => {
    console.log("clicked");
    formHook.setValue(ProfileSchemaKeys.USERNAME, username);
    formHook.setValue(ProfileSchemaKeys.FIRST_NAME, firstName);
    formHook.setValue(ProfileSchemaKeys.LAST_NAME, lastName);

    // mutate({
    //   username,
    //   password,
    // });
    formHook.reset();
  };

  return isUserPending ? (
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
                      value={formHook.watch(ProfileSchemaKeys.USERNAME)}
                      required
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
                      value={formHook.watch(ProfileSchemaKeys.FIRST_NAME)}
                      required
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
                      value={formHook.watch(ProfileSchemaKeys.LAST_NAME)}
                      required
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
              type="submit"
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
