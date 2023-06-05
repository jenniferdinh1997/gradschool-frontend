import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";


const SideNav = () => {
    return (
        <div className="sidenav-container">
            <Link to="/tracker/dr/md">Home</Link>
            <Link>Applications</Link>
            <Link to="/tracker/dr/md/courses">Courses</Link>
            <Link>Testing</Link>
            <Link>Extracurriculars</Link>
        </div>
    )
}

export default SideNav;