import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import Class from "../../components/Class/Class";
import "./MdCourse.css";

const MdCourse = () => {
    return (
        <>
            <SideNav />
            <div className="courses-container">
                <p id="prereq-title">Prerequisite Courses</p>
                <p id="course-name">Biology</p>
                <Class />
                <p>Chemistry</p>
                <p>English</p>
                <p>Math</p>
                <p>Physics</p>
                <p>Psychology</p>
                <p>Sociology</p>
            </div>
        </>
    )
}

export default MdCourse;