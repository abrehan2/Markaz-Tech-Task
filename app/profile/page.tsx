// IMPORTS -
import { ProfileForm } from "@/components/profile/profile-form";
import { ProfileFormProvider } from "@/contexts/profile-context";

const Page = () => {
  return (
    <ProfileFormProvider>
      <ProfileForm />
    </ProfileFormProvider>
  );
};

export default Page;
