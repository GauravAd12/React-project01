import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/authActions";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { EMAIL_REGEX } from "../constants/regex";
import Spinner from "./Spinner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState } = useForm({ mode: "all" });

  const { errors } = formState;

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  function submitForm(data) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 2500,
      });
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate className="w-4/6">
      <div className="py-1">
        <label htmlFor="email" className="ml-1 font-semibold text-sm">
          Email
        </label>
        <input
          type="email"
          className="border w-full mt-2 px-3 py-2 rounded"
          // shortcut => spread operator
          {...register("email", {
            required: "Email address is required.",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address.",
            },
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.email?.message}
        </p>
      </div>

      <div className="py-1">
        <label htmlFor="password" className="ml-1 font-semibold text-sm">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="border w-full mt-2 px-3 py-2 rounded"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password length must be greater than 6.",
              },
            })}
          />
          <span
            className="absolute right-3 top-5 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </span>
        </div>
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.password?.message}
        </p>
      </div>

      <div className="mt-5 text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 cursor-pointer w-full flex justify-center items-center"
        >
          <span className="mr-2">Login</span>
          {loading ? <Spinner /> : null}
        </button>
      </div>
      <div className="text-center mt-5 text-sm">
        <span>Do not have an account?</span>
        <Link to="/auth/register" className="ml-1 text-blue-500">
          Register
        </Link>
      </div>

      <ToastContainer />
    </form>
  );
};

export default LoginForm;
