import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <h1 id="logo">Header</h1>
            </div>

            <div className="header-right">
                <Link to="/login" id="login-link">Log in</Link>
                <button id="signup-button">
                    <Link to="/signup" id="signup-link">Get started</Link>
                </button>
            </div>
        </div>
    )
}

export default Header;