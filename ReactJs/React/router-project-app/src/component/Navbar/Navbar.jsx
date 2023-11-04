import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div>
        <img
          src="https://codehelp-router-project.netlify.app/static/media/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg"
          alt=""
        />
      </div>

      <div className="nav-list-parents">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Navbar;
