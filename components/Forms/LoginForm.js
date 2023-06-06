import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const supabase = useSupabaseClient();

  const inputStyles = {
    valid:
      "focus:ring-primary-400 mb-3 border-primary-800/50 placeholder-primary-800/50 ",
    invalid: "border-red-400 focus:ring-red-400 placeholder-red-400",
  };

  const handleLogin = async (values) => {
    setIsLoading(true);
    const { email, password } = values;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setIsLoading(false);
      setErrorMessage("Login failed! Please try again");
      console.error(error);
    } else {
      router.push("/dashboard");
    }
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
      validateOnMount>
      {({ errors, touched, isValid }) => (
        <Form>
          <p className="mt-3 text-3xl text-center font-extrabold text-primary-600">
            Welcome back!
          </p>
          <div className="text-red-500 font-medium text-medium text-center my-2">
            {errorMessage}
          </div>

          <div className="flex items-center justify-between mt-3">
            <span className="w-1/5 border-2 border-primary-600 lg:w-1/4"></span>

            <span className="text-md text-center text-primary-600 font-bold">
              Login Below
            </span>

            <span className="w-1/5 border-2 border-primary-600 lg:w-1/4"></span>
          </div>

          {/* Email input */}
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-base font-bold text-gray-600 "
                htmlFor="email">
                Email
              </label>
            </div>

            <Field
              className={`block w-full px-4 py-2 focus:placeholder-transparent text-primary-600 font-bold bg-white border-2 rounded-lg focus:border-transparent  focus:ring-2 focus:outline-none 
            				${
                      errors.email && touched.email
                        ? inputStyles.invalid
                        : inputStyles.valid
                    }`}
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-red-500 mt-1 font-bold text-right  -mb-3"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label
                className="block mb-2 text-base font-bold text-gray-600 "
                htmlFor="loggingPassword">
                Password
              </label>
              {/* TODO: FORGOT PASSWORD FUNCTIONALITY */}
              {/* <a href="#" className="text-sm text-primary-500 hover:underline">
                Forget Password?
              </a> */}
            </div>
            <Field
              name="password"
              placeholder="Password"
              className={`block w-full px-4 py-2 focus:placeholder-transparent text-primary-600 font-bold bg-white border-2 rounded-lg focus:border-transparent  focus:ring-2 focus:outline-none 
            				${
                      errors.password && touched.password
                        ? inputStyles.invalid
                        : inputStyles.valid
                    }`}
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-sm text-red-500 mt-1 font-bold text-right -mb-6"
            />
          </div>

          {/* Sign In Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="w-full bg-primary-800 text-md py-1.5 leading-none focus:outline-none px-6 border-4 border-primary-800 duration-200  hover:enabled:bg-transparent hover:enabled:text-primary-800 text-white font-medium inline-flex items-center justify-center md:mt-0  disabled:cursor-not-allowed disabled:opacity-60 "
              disabled={!isValid || isLoading}>
              {!isLoading ? (
                "Sign In"
              ) : (
                <div className="flex flex-row bg-primary-700/70 text-white align-middle justify-center items-center">
                  <FontAwesomeIcon
                    className="inline font-bold mr-3"
                    icon={faCircleNotch}
                    spin
                  />
                  <span className="font-bold">Loading</span>
                </div>
              )}
            </button>
          </div>
          {/* Sign up redirect link */}
          <div className="flex items-center justify-center mt-4">
            <span className="text-md text-center text-primary-600 font-bold mr-3">
              Need to make an account?
            </span>

            <Link
              href="/auth/signup"
              className="text-md text-primary-800 font-bold hover:underline">
              Sign up here
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
