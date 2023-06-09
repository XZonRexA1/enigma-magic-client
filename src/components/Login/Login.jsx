import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  // sing in
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // password show button
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  //   react hook form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
      reset();
      Swal.fire({
        title: "User Logging Successful",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, {replace: true});
    })
  };




  return (
    <>
      <Helmet>
        <title>Enigma Magic | Sign In</title>
      </Helmet>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:h-screen">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label className="label">
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    id="email"
                    className="input input-bordered"
                    placeholder="Enter your Email"
                  />
                  {errors.email && (
                    <span className="text-red-600 mt-2">Email is required</span>
                  )}
                </div>
                <div className="relative">
                  <label className="label">
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Password
                    </span>
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    {...register("password", { required: true })}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600 mt-2">Password is required</p>
                  )}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={showPassword}
                    className="ml-2 py-0"
                  >
                    {passwordVisible ? (
                      <FaEyeSlash className="text-gray-400" />
                    ) : (
                      <FaEye className="text-gray-400" />
                    )}
                  </button>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Sing In"
                />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="text-primary-600 dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
