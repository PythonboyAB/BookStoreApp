import React from "react";
import { Home } from "./Home/Home";
import { Course } from "./components/Course";
import { Route, Routes } from "react-router-dom";
import { Courses } from "./courses/Courses";
import { Signup } from "./components/Signup";
import { ContactScreen } from "./components/ContactScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<ContactScreen/>} />
      </Routes>
    </>
  );
}

export default App;
