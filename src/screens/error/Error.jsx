import React from "react";
import "./Error.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";

const Error = () => {
    return (
        <>
            <Header />
            <div className="error-container">
                <p>Oops! Seems like this page is under construction, 
                    check back soon for something bigger and better
                </p>
            </div>
        </>
    )
}

export default Error;