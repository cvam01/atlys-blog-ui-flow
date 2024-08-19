import Logo from "@/assets/logo.svg";
import { SignInFormCard } from "@/widgets/SignupCard";

const LoginPage = () => {
  return (
    <div className="flex h-screen min-h-[600px] flex-col items-center justify-center p-10">
      <img src={Logo} className="logo react" alt="logo" />
      <SignInFormCard />
    </div>
  );
};

export default LoginPage;
