// IMPORTS -
import { LoginForm } from "@/components/auth/login-form";
import { LoginFormProvider } from "@/contexts/login-context";

const Page = () => {
  return (
    <LoginFormProvider>
      <LoginForm />
    </LoginFormProvider>
  );
};

export default Page;
