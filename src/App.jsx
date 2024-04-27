import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SignUpLogin from "./pages/SignUpLogin";
import Navigation from "./components/Navigation"; // Import Navigation
import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation /> {/* Add Navigation component */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUpLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;