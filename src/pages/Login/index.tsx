import { LoginFormCard } from "@/widgets/LoginFormCard";
import Logo from "@/assets/logo.svg";

const LoginPage = () => {
  return (
    <div className="mobile:p-5 flex h-screen min-h-[600px] flex-col items-center justify-center p-10">
      <img src={Logo} className="logo react" alt="logo" />
      <LoginFormCard />
    </div>
  );
};

export default LoginPage;
