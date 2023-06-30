import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditClass.css";
import classService from "../../services/ClassService";

const EditClass = ({ setEditForm, course, setEditedCourse }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const [updatedCourse, setUpdatedCourse] = useState({
        user: user.message,
        subject: course.subject,
        name: course.name,
        institution: course.institution,
        units: course.units,
        grade: course.grade,
        notes: course.notes
    });

    const handleCourseChange = (e) => {
        setUpdatedCourse({...updatedCourse, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        classService.updateClass(course._id, updatedCourse).then((response) => {
            setEditedCourse(response);
        })
        setEditForm(false);
    }

    const handleCancel = () => {
        setEditForm(false);
        setUpdatedCourse({
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
        <div className="add-class-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <p id="edit-class-title">Edit Class</p>
                </div>
                <section id="add-class-section">
                    <label>Subject</label>
                    <select name="subject" 
                            value={updatedCourse.subject} 
                            onChange={handleCourseChange}>
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
                        value={updatedCourse.name}
                        onChange={handleCourseChange}
                    />
                </section>
                <section id="add-class-section">
                    <label>Institution</label>
                    <input
                        type="text"
                        name="institution"
                        value={updatedCourse.institution}
                        onChange={handleCourseChange}
                    />
                </section>
                <section id="add-class-section">
                    <label>Units</label>
                    <input
                        type="number"
                        name="units"
                        value={updatedCourse.units}
                        onChange={handleCourseChange}
                    />
                </section>
                <section id="add-class-section">
                    <label>Grade</label>
                    <select name="grade" value={updatedCourse.grade} onChange={handleCourseChange}>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="A-">A-</option>
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
                        value={updatedCourse.notes}
                        onChange={handleCourseChange}
                    />
                </section>
                <div id="add-class-buttons">
                    <button type="submit" id="add-class-submit-btn">
                        Save
                    </button>
                    <button type="button" id="add-class-cancel-btn" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default EditClass;