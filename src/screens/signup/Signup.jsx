import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import SignUp from "../../assets/signup.jpg";
import "./Signup.css";
import userService from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userService.signup(user);
        navigate("/");
    }

    return (
        <div>
            <Header />
            <div className="signup-container">
                <div className="signup-left">
                    <img
                        src={SignUp}
                        alt="Lab Worker"
                        id="signup-stock-photo"
                    />
                </div>
                <div className="signup-right">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <h1 id="signup-title">Create your free account</h1>
                        <section id="signup-section">
                            <label>First Name</label>
                            <input 
                                type="text"
                                id="first-name"
                                name="firstName"
                                value={user.firstName}
                                onChange={handleChange} />
                        </section>
                        <section id="signup-section">
                            <label>Last Name</label>
                            <input 
                                type="text"
                                id="last-name"
                                name="lastName"
                                value={user.lastName}
                                onChange={handleChange} />
                        </section>
                        <section id="signup-section">
                            <label>Email</label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange} />    
                        </section>
                        <section id="signup-section">
                            <label>Password</label>
                            <input 
                                type="password"
                                id="password"
                                name="password" 
                                value={user.password}
                                onChange={handleChange} />
                        </section>
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
                        <Link to="/signin">Sign in</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup;