import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
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
                        </div>
                    </div>
                    <div className="home-categories-right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;