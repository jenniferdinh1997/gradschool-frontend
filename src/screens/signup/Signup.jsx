import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    return (
        <div>
            <header className="signup-header">
                <h1>Header</h1>
            </header>

            <div>
                <form className="signup-form">
                    <h1 id="signup-title">Create your free account</h1>
                    <input 
                        type="text"
                        placeholder="First Name"
                        id="first-name"/>
                    <input 
                        type="text"
                        placeholder="Last Name"
                        id="last-name"/>
                     <input 
                        type="email"
                        placeholder="Email"
                        id="email"/>    
                    <input 
                        type="password"
                        placeholder="Password"
                        id="password"/>
                    <button
                        type="submit">
                        Sign up for free    
                    </button>     
                </form>

                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    )
}

export default Signup;