import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaRegUser } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const Header = () => {
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("jwttoken");
    localStorage.removeItem("user");
    window.location.reload();
  };

  if (user) {
    return (
      <div className="header">
        <div className="header-left">
          <Link to="/" id="logo">
            Break
          </Link>
          <p>
            Learn More &nbsp; <HiChevronDown />
          </p>
        </div>

        <div className="header-right">
          <button id="login-btn" onClick={logout}>
            <FaRegUser /> &nbsp; Log out
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/" id="logo">
          Break
        </Link>
        <p>
          Learn More &nbsp; <HiChevronDown />
        </p>
      </div>

      <div className="header-right">
        <button id="login-btn">
          <Link to="/signin" id="login-link">
            <FaRegUser /> &nbsp; Sign in
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
