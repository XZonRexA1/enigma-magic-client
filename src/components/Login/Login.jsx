import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
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
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="label">
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input input-bordered"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
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
