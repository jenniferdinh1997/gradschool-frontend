import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import Class from "../../components/Class/Class";
import AddClass from "../../components/AddClass/AddClass";
import { MdAdd } from "react-icons/md";
import "./MdCourse.css";

const MdCourse = () => {
    const [course, setCourse] = useState([]);

    const showAddCourse = () => {
        setCourse(prevCourse => [...prevCourse, <AddClass key={prevCourse.length}/>])
    }

    return (
        <>
            <SideNav />
            <div className="courses-container">
                <div className="courses-header">
                    <p id="prereq-title">Prerequisite Courses</p>
                    <button id="add-class-button" onClick={showAddCourse}>
                        <MdAdd /> &nbsp; <p>Add Course</p>
                    </button>
                </div>
                <p id="course-name">Biology</p>
                <Class />
                {course}
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