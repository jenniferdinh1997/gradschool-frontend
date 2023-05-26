import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import HomePic from "../../assets/home-page.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-container">
                <div className="home-heading">
                    <div className="home-heading-left">
                        <img
                            src={HomePic}
                        />
                    </div>
                    <div className="home-heading-right">
                        <div id="home-heading-text">
                            <h1>Higher education made easy.</h1>
                            <p>Company name has your applications and requirements all in one place
                                so you can focus on what really matters.
                            </p>
                            <button id="start-btn">
                                <Link>
                                    Start building your future
                                    <FaLongArrowAltRight />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home-categories">
                    <div className="home-categories-left">
                        <div className="categories-container">
                            <p>I am striving towards...</p>
                            <div className="categories-row">
                                <div className="categories-column">
                                    <p id="categories-heading">Degree Type</p>
                                    <section>
                                        <input
                                            type="radio"
                                            name="degree"
                                        />
                                        <label>Master of Arts (MA)</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            name="degree"
                                        />
                                        <label>Master of Science (MS)</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            name="degree"
                                        />
                                        <label>Master of Business Administration (MBA)</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            name="degree"
                                        />
                                        <label>Doctor of Philosophy (PhD)</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            name="degree"
                                        />
                                        <label>Professional Doctoral Degree</label>
                                    </section>
                                </div>
                                <div className="categories-column">
                                    <p id="categories-heading">Field</p>
                                </div>
                            </div>
                            <button id="submit-field">
                                Help me get in!
                            </button>
                        </div>
                    </div>
                    <div className="home-categories-right">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;