import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import "./Md.css";

const Md = () => {

  return (
    <>
      <SideNav />
      <div className="home-tracker-container">
        <h1>Welcome back, Name</h1>
        <ProgressBar />
        <div className="quote-container"></div>
      </div>
    </>
  );
};

export default Md;
