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
                    <div className="pw-requirements">
                        <ul id="pw-title">Password must contain:</ul>
                        <div id="pw-left">
                            <li>8-20 characters</li>
                            <li>2 or more numbers</li>
                        </div>
                        <div id="pw-right">
                            <li>1 upper case letter</li>
                            <li>1 lower case letter</li>
                        </div>
                    </div>
                    <button
                        type="submit"
                        id="signup-button">
                        Sign up for free    
                    </button>     
                </form>

                <p id="login-redirect">Already have an account? &nbsp;
                    <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup;