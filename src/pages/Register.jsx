import React, { use } from "react";
import { Link } from "react-router";
import { auth, AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser,setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
    // console.log(name, photo, email, password);
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className="font-semibold text-2xl text-center">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-3">
                Register Now
              </button>
              <p className="font-semibold text-center pt-5">
                Already Have An Account ?{" "}
                <Link to="/auth/login" className="text-red-600">
                  Login Now
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
