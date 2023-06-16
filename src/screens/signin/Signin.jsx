import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import "./Signin.css";
import userService from "../../services/UserService";

const Signin = () => {
    const navigate = useNavigate();

    const [authRequest, setAuthRequest] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setAuthRequest({...authRequest, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await userService.login(authRequest).then((res) => {
            localStorage.setItem("user", JSON.stringify(res));
        })
        navigate("/");
    }

    return (
        <>
            <Header />
            <div className="signin-container">
                <p>Sign In</p>
                <form className="signin-form" onSubmit={handleSubmit}>
                    <section id="signup-section">
                        <label>Email</label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            value={authRequest.email}
                            onChange={handleChange} />    
                    </section>
                    <section id="signup-section">
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            value={authRequest.password}
                            onChange={handleChange} />    
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