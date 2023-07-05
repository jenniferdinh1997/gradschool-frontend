import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
    return (
        <div className="progress-bar-container">
            <div id="progress-bar-section">
                <p>Prerequisites</p>
                <p>0%</p>
            </div>
            <div id="progress-bar-section">
                <p>Extracurriculars</p>
                <p>0%</p>
            </div>
            <div id="progress-bar-section">
                <p>MCAT</p>
                <p>0%</p>
            </div>
            <div id="progress-bar-section">
                <p>Personal Statement</p>
                <p>0%</p>
            </div>
            <div id="progress-bar-section">
                <p>Letters of Recommendation</p>
                <p>0%</p>
            </div>                      
        </div>
    )
}

export default ProgressBar;