import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <div className="container mx-auto py-8 px-5">
      <div className="sm:w-3/5 lg:h-[80vh] rounded-[3rem] shadow-md mx-auto lg:flex">
        <div className="lg:w-1/2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-t-[3rem] lg:rounded-r-none lg:rounded-l-[3rem] flex flex-col py-8 items-center justify-center">
          <h1 className="text-5xl md:text-7xl text-center font-semibold text-white">
            Register
          </h1>
          <h4 className="text-white text-center mt-5 text-xl">
            Do not have an account? Please register.
          </h4>
        </div>
        <div className="lg:w-1/2 flex py-8 items-center justify-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
