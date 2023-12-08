import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import ContactUs from '../pages/contactus/ContactUs'
import About from '../pages/about/About'
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routers
