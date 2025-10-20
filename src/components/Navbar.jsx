import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom"; // use 'react-router-dom', not 'react-router'
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  // ✅ Define handleLogOut properly
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        alert("You signed out");
      })
      .catch((error) => {
        console.log("Error happened here:", error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>

      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="User Icon" />

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
