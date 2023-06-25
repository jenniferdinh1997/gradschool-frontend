import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddClass.css";
import classService from "../../services/classService";

const AddClass = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const [course, setCourse] = useState({
        user: user.message,
        subject: "",
        name: "",
        institution: "",
        units: 0,
        grade: "",
        notes: ""
    });

    const handleCourseChange = (e) => {
        setCourse({...course, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        classService.addClass(course).then((response) => {
            console.log(response, "response")
        })
    }

    const [isOpen, setIsOpen] = useState(true);
    const handleCancel = () => {
        setIsOpen(false);
        setCourse({
            user: user.message,
            subject: "",
            name: "",
            institution: "",
            units: 0,
            grade: "",
            notes: ""
        })
    }

    return (
        <>
        {isOpen ? (
        <div className="add-class-container">
            <form onSubmit={handleSubmit}>
                <section id="add-class-section">
                    <label>Subject</label>
                    <select name="subject" value={course.subject} onChange={handleCourseChange}>
                        <option value="Biology">Biology</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="English">English</option>
                        <option value="Math">Math</option>
                        <option value="Physics">Physics</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Sociology">Sociology</option>
                        <option value="Other">Other</option>
                    </select>
                </section>
                <section id="add-class-section">
                    <label>Course Name</label>
                    <input
                        type="text"
                        name="name"
                        value={course.name}
                        onChange={handleCourseChange}
                    />
                </section>
                <section id="add-class-section">
                    <label>Institution</label>
                    <input
                        type="text"
                        name="institution"
                        value={course.institution}
                        onChange={handleCourseChange}
                    />
                </section>
                <section id="add-class-section">
                    <label>Units</label>
                    <input
                        type="number"
                        name="units"
                        value={course.units}
                        onChange={handleCourseChange}
                    />
                </section>
                <section id="add-class-section">
                    <label>Grade</label>
                    <select name="grade" value={course.grade} onChange={handleCourseChange}>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="A-">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="B-">B-</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="C-">C-</option>
                        <option value="D+">D+</option>
                        <option value="D">D</option>
                        <option value="D-">D-</option>
                        <option value="F">F</option>                       
                    </select>
                </section>
                <section id="add-class-section">
                    <label>Notes</label>
                    <input
                        type="text"
                        name="notes"
                        value={course.notes}
                        onChange={handleCourseChange}
                    />
                </section>
                <div id="add-class-buttons">
                    <button type="submit" id="add-class-submit-btn">
                        Save
                    </button>
                    <button id="add-class-cancel-btn" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
        ) : null }
        </>
    )
}

export default AddClass;