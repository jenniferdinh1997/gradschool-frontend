import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import HomePic from "../../assets/home-page.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Home = () => {
    const [selectedOp, setSelectedOp] = useState(null);
    const [selectedField, setSelectedField] = useState(null);
    const handleRadioSelect = (e) => {
        setSelectedOp(e.target.value);
    };

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
                            <p>Break has your applications and requirements all in one place
                                so you can focus on what really matters.
                            </p>
                            <button id="start-btn">
                                <HashLink smooth to="#home-categories">
                                    Start building your future
                                    <FaLongArrowAltRight />
                                </HashLink>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="home-categories">
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
                                            value="ma"
                                            checked={selectedOp === "ma"}
                                            onChange={handleRadioSelect}
                                        />
                                        <label>Master of Arts (MA)</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            name="degree"
                                            value="ms"
                                            checked={selectedOp === "ms"}
                                            onChange={handleRadioSelect}
                                        />
                                        <label>Master of Science (MS)</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            name="degree"
                                            value="mba"
                                            checked={selectedOp === "mba"}
                                            onChange={handleRadioSelect}
                                        />
                                        <label>Master of Business Administration (MBA)</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            name="degree"
                                            value="phd"
                                            checked={selectedOp === "phd"}
                                            onChange={handleRadioSelect}
                                        />
                                        <label>Doctor of Philosophy (PhD)</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            name="degree"
                                            value="dr"
                                            checked={selectedOp === "dr"}
                                            onChange={handleRadioSelect}
                                        />
                                        <label>Professional Doctoral Degree</label>
                                    </section>
                                </div>
                                <div className="categories-column">
                                    <p id="categories-heading">Field</p>
                                    {selectedOp === "dr" && (
                                        <>
                                        <section>
                                            <input
                                                type="radio"
                                                name="field"
                                                value="pharmd"
                                            />
                                            <label>Doctor of Pharmacy (PharmD)</label>
                                        </section>
                                        <section>
                                            <input
                                                type="radio"
                                                name="field"
                                                value="md"
                                                checked={selectedField === "md"}
                                                onChange={(e) => setSelectedField(e.target.value)}
                                            />
                                            <label>Doctor of Medicine (MD)</label>
                                        </section> 
                                        <section>
                                            <input
                                                type="radio"
                                                name="field"
                                                value="jd"
                                            />
                                            <label>Juris Doctor (JD)</label>
                                        </section> 
                                        </>                              
                                    )}
                                    {selectedOp === "ma" && (
                                        <>
                                            <section>
                                                <input
                                                    type="radio"
                                                    name="field"
                                                />
                                                <label>Education</label>
                                            </section>
                                            <section>
                                                <input
                                                    type="radio"
                                                    name="field"
                                                />
                                                <label>English</label>
                                            </section>   
                                        </>                                   
                                    )}                                    
                                    {selectedOp === "ms" && (
                                        <section>
                                            <input
                                                type="radio"
                                                name="field"
                                            />
                                            <label>Physician Assistant Studies</label>
                                        </section>
                                    )}
                                    {selectedOp === "mba" && (
                                        <>
                                            <section>
                                                <input
                                                    type="radio"
                                                    name="field"
                                                />
                                                <label>Accounting</label>
                                            </section>
                                            <section>
                                                <input
                                                    type="radio"
                                                    name="field"
                                                />
                                                <label>Finance</label>
                                            </section>   
                                        </>                                   
                                    )}
                                    {selectedOp === "phd" && (
                                        <>
                                            <section>
                                                <input
                                                    type="radio"
                                                    name="field"
                                                />
                                                <label>Chemistry</label>
                                            </section>
                                            <section>
                                                <input
                                                    type="radio"
                                                    name="field"
                                                />
                                                <label>Psychology</label>
                                            </section>   
                                        </>                                   
                                    )}                                    
                                    {selectedOp === null && (
                                        <p id="null-field-msg">Pick a degree to get started</p>
                                    )}
                                </div>
                            </div>
                            <button id="submit-field">
                                {selectedOp === "dr" && selectedField === "md" && (
                                    <Link to="/tracker/dr/md">
                                        Help me get in!
                                    </Link>
                                )}
                                {/* <Link to="/error">
                                    Help me get in!
                                </Link> */}
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