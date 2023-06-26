import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Class.css";
import classService from "../../services/classService";

const Class = ({ course }) => {
  const [showMore, setShowMore] = useState(false);
  const openTable = () => {
    setShowMore(!showMore);
  };

  const [message, setMessage] = useState("");

  const removeCourse = (id) => {
    classService.deleteClass(id).then((res) => {
      setMessage(res.message);
    });
  };

  return (
    <div className="class-container">
      <table onClick={openTable}>
        <tbody>
          <tr id="class-header">
            <td>{course.name}</td>
            <td>{course.institution}</td>
            <td>{course.units}</td>
            <td id="delete-class">
              <FaRegTrashAlt onClick={() => removeCourse(course._id)} />
            </td>
          </tr>
          {showMore ? (
            <>
              <tr>
                <td>Grade: {course.grade}</td>
              </tr>
              <tr>
                <td colSpan={4}>Notes: {course.notes}</td>
              </tr>
            </>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default Class;
