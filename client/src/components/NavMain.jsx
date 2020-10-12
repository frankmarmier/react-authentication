import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/NavMain.css";

const NavMain = () => {
  return (
    <div className="NavMain">
      <h1 className="brand">My App</h1>
      <nav className="nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/profile">
          Profile
        </NavLink>
        <NavLink exact to="/signin">
          Signin
        </NavLink>
        <NavLink exact to="/signup">
          Signup
        </NavLink>
      </nav>
    </div>
  );
};

export default NavMain;
