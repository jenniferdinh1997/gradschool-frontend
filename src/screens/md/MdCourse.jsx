import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import Class from "../../components/Class/Class";
import AddClass from "../../components/AddClass/AddClass";
import { MdAdd } from "react-icons/md";
import "./MdCourse.css";
import classService from "../../services/ClassService";

const MdCourse = () => {
    const [addForm, setAddForm] = useState(false);
    const [editForm, setEditForm] = useState(false);

    const showAddCourse = () => {
        setAddForm(true);
    }

    const showEditCourse = () => {
        setEditForm(true);
    }

    const [course, setCourse] = useState([]);
    const [addedCourse, setAddedCourse] = useState({});
    const [deletedCourse, setDeletedCourse] = useState({});
    const [editedCourse, setEditedCourse] = useState({});

    useEffect(() => {
      classService.getClass().then((res) => {
        setCourse(res.courses);
      });
    }, [addedCourse, deletedCourse, editedCourse]);

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
          {course.length !== 0 ? (
            course.map((item, index) => {
              return (
                <Class
                  course={item}
                  key={index}
                  setDeletedCourse={setDeletedCourse}
                  showEditCourse={showEditCourse}
                  setEditForm={setEditForm}
                  editForm={editForm}
                  setEditedCourse={setEditedCourse}
                />
              );
            })
          ) : (
            <p>No courses listed, add a class to start tracking!</p>
          )}
          {addForm ? (
            <AddClass setAddForm={setAddForm} setAddedCourse={setAddedCourse} />
          ) : null}
          <p>Chemistry</p>
          <p>English</p>
          <p>Math</p>
          <p>Physics</p>
          <p>Psychology</p>
          <p>Sociology</p>
        </div>
      </>
    );
}

export default MdCourse;