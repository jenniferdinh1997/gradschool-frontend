import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddClass.css";

const AddClass = () => {
    return (
        <div className="add-class-container">
            <form>
                <section id="add-class-section">
                    <label>Subject</label>
                    <select>
                        <option>Biology</option>
                        <option>Chemistry</option>
                        <option>English</option>
                        <option>Math</option>
                        <option>Physics</option>
                        <option>Psychology</option>
                        <option>Sociology</option>
                        <option>Other</option>
                    </select>
                </section>
                <section id="add-class-section">
                    <label>Course Name</label>
                    <input
                        type="text"
                    />
                </section>
                <section id="add-class-section">
                    <label>Institution</label>
                    <input
                        type="text"
                    />
                </section>
                <section id="add-class-section">
                    <label>Units</label>
                    <input
                        type="number"
                    />
                </section>
                <section id="add-class-section">
                    <label>Grade</label>
                    <select>
                        <option>A+</option>
                        <option>A</option>
                        <option>A</option>
                        <option>B+</option>
                        <option>B</option>
                        <option>B-</option>
                        <option>C+</option>
                        <option>C</option>
                        <option>C-</option>
                        <option>D+</option>
                        <option>D</option>
                        <option>D-</option>
                        <option>F</option>                       
                    </select>
                </section>
                <section id="add-class-section">
                    <label>Notes</label>
                    <input
                        type="text"
                    />
                </section>
                <div id="add-class-buttons">
                    <button type="submit" id="add-class-submit-btn">
                        Save
                    </button>
                    <button id="add-class-cancel-btn">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddClass;