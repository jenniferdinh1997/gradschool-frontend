import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import "./Md.css";

const Md = () => {
    useEffect(() => {
        const api_url="https://zenquotes.io/api/quotes";

        const getQuote = () => {
            fetch(api_url)
            .then((res) => res.json())
        }

        getQuote();
    })

    return (
        <>
            <SideNav />
            <div className="home-tracker-container">
                <h1>Welcome back, Name</h1>
                <div className="quote-container">

                </div>
            </div>
        </>
    )
}

export default Md;