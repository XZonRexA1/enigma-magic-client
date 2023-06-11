import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Fade } from "react-awesome-reveal";

const SignUp = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  // creating user
  const { createUser, updateUserProfile } = useAuth();
  // navigation
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch(`https://enigma-magic-server-xzonrexa1.vercel.app/users`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created Successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };
  const password = watch("password", "");
  return (
    <>
      <Fade>
        <Helmet>
          <title>Enigma Magic | Sign Up</title>
        </Helmet>
        <section className="bg-gray-50 dark:bg-gray-900 ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create your account
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label className="label">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Name
                      </span>
                    </label>
                    <input
                      type="name"
                      {...register("name", { required: true })}
                      name="name"
                      id="name"
                      className="input input-bordered"
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <span className="text-red-600 mt-2">
                        Name is required
                      </span>
                    )}
                  </div>
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
                      <span className="text-red-600 mt-2">
                        Email is required
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label className="label">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Password
                      </span>
                    </label>
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                      })}
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      className="input input-bordered"
                      required
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-600 mt-2">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600 mt-2">
                        Password must be 6 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600 mt-2">
                        Password must have a capital letter and a special
                        character
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="label">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Conform Password
                      </span>
                    </label>
                    <input
                      type="password"
                      {...register("conform_password", {
                        required: true,
                        validate: (value) => value === password,
                      })}
                      name="conform_password"
                      id="conform_password"
                      placeholder="Conform your password"
                      className="input input-bordered"
                      required
                    />
                    {errors.conform_password?.type === "required" && (
                      <p className="text-red-600 mt-2">
                        Please conform your password
                      </p>
                    )}
                    {errors.conform_password?.type === "validate" && (
                      <p className="text-red-600 mt-2">
                        Passwords do not match
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="label">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("photoURL", { required: true })}
                      name="photoURL"
                      id="photoURL"
                      placeholder="Photo URL"
                      className="input input-bordered"
                      required
                    />
                    {errors.conform_password?.type === "required" && (
                      <p className="text-red-600 mt-2">Photo URL is required</p>
                    )}
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Sing In"
                  />
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-primary-600 dark:text-primary-500"
                    >
                      Sign in
                    </Link>
                  </p>
                  <SocialLogin></SocialLogin>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default SignUp;
