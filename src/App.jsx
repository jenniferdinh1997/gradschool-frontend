import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Signup from "./screens/signup/Signup";
import Signin from "./screens/signin/Signin";
import Error from "./screens/error/Error";
import Md from "./screens/md/Md";
import MdCourse from "./screens/md/MdCourse";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Home />} />
                <Route
                    path="/signup"
                    element={<Signup />} />
                <Route
                    path="/signin"
                    element={<Signin />} />
                <Route
                    path="/error"
                    element={<Error />} />
                <Route 
                    path="/tracker/dr/md"
                    element={<Md />} />
                <Route 
                    path="/tracker/dr/md/courses"
                    element={<MdCourse />} />
            </Routes>
        </Router>
    )
}

export default App;