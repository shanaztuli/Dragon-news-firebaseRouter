import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { setUser, logIn } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        alert("you login scesses",result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="font-semibold text-2xl text-center">
          Login your account
        </h1>
        <form onSubmit={handleSignIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-3">
              Login
            </button>
            <p className="font-semibold text-center pt-5">
              Don't Have An Account ?{" "}
              <Link to="/auth/register" className="text-red-600">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
