import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import "./Signin.css";

const Signin = () => {
    return (
        <>
            <Header />
            <div className="signin-container">
                <p>Sign In</p>
                <form className="signin-form">
                    <section id="signup-section">
                        <label>Email</label>
                        <input 
                            type="email"
                            id="email"/>    
                    </section>
                    <section id="signup-section">
                        <label>Password</label>
                        <input 
                            type="password"
                            id="password"/>    
                    </section>
                    <button
                        type="submit"
                        id="signin-button">
                        Sign In
                    </button>
                </form>

                <p id="signup-lnk">
                    Don't have an account? &nbsp;
                    <Link to="/signup">Sign Up</Link>
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Signin;