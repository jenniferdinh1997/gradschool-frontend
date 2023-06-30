import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import "./Class.css";
import EditClass from "../EditClass/EditClass";
import classService from "../../services/classService";

const Class = ({
  course,
  setDeletedCourse,
  showEditCourse,
  setEditForm,
  editForm,
  setEditedCourse
}) => {
  const [showMore, setShowMore] = useState(false);
  const openTable = () => {
    setShowMore(!showMore);
  };

  const [message, setMessage] = useState("");

  const removeCourse = (id) => {
    setDeletedCourse(id);
    classService.deleteClass(id).then((res) => {
      setMessage(res.message);
    });
  };

  return (
    <>
      <div className="class-container">
        <table onClick={openTable}>
          <tbody>
            <tr id="class-header">
              <td>{course.name}</td>
              <td>{course.institution}</td>
              <td>{course.units} units</td>
              <td id="edit-class">
                <BiEditAlt onClick={showEditCourse} />
              </td>
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
                  <td colSpan={5}>Notes: {course.notes}</td>
                </tr>
              </>
            ) : null}
          </tbody>
        </table>
      </div>
      {editForm ? (
        <EditClass setEditForm={setEditForm} course={course} setEditedCourse={setEditedCourse} />
      ) : null}
    </>
  );
};

export default Class;
