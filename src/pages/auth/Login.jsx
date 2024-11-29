import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="container mx-auto pt-8 px-5">
      <div className="sm:w-3/5 h-[80vh] rounded-[3rem] shadow-md mx-auto lg:flex">
        <div className="lg:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-[3rem] lg:rounded-r-none lg:rounded-l-[3rem] flex flex-col py-8 items-center justify-center">
          <h1 className="text-5xl md:text-7xl text-center font-semibold text-white">
            Login
          </h1>
          <h4 className="text-white text-center mt-5 text-xl">
            Please login to continue.
          </h4>
        </div>
        <div className="lg:w-1/2 py-8 flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
