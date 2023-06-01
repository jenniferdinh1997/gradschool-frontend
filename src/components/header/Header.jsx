import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaRegUser } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/" id="logo">Break</Link>
                <p>Learn More &nbsp; <HiChevronDown/></p>
            </div>

            <div className="header-right">
                <button id="login-btn">
                    <Link to="/signup" id="login-link">
                        <FaRegUser /> &nbsp;
                        Sign in
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Header;