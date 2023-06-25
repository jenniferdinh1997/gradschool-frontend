import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Class.css";
import classService from "../../services/classService";

const Class = () => {
  const [showMore, setShowMore] = useState(false);
  const openTable = () => {
    setShowMore(!showMore);
  };

  const [course, setCourse] = useState([]);

  useEffect(() => {
    classService.getClass().then((res) => {
      setCourse(res.courses);
    });
  }, []);

  return (
    <div className="class-container">
      <table onClick={openTable}>
          {course.map((item, index) => {
            return (
              <tbody key={index}>
                <tr id="class-header">
                  <td>{item.name}</td>
                  <td>{item.institution}</td>
                  <td>{item.units}</td>
                  <td id="delete-class">
                    <FaRegTrashAlt />
                  </td>
                </tr>
                {showMore ? (
                  <>
                    <tr>
                      <td>Grade: {item.grade}</td>
                    </tr>
                    <tr>
                      <td colSpan={4}>Notes: {item.notes}</td>
                    </tr>
                  </>
                ) : null}
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default Class;
