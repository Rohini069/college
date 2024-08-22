import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import LoginSuccess from "./Components/LoginSuccess";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
