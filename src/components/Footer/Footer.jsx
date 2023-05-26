import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-info">
                <Link to="https://github.com/jenniferdinh1997/gradschool-frontend">
                    <FaGithub />
                </Link>
                <p>Contact Us | Privacy Policy | About Us</p>
            </div>
        </div>
    )
}

export default Footer;