import reactLogo from "@/assets/logo.svg";
const Loader = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm font-medium -tracking-tight text-white-100">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  );
};

export default Loader;
