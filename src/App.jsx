import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Signup from "./screens/signup/Signup";

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
            </Routes>
        </Router>
    )
}

export default App;