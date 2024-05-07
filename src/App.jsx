import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import Info from "./pages/Info";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SignUpLogin from "./pages/SignUpLogin";
import Welcome from "./pages/welcome";
import PromptSpace from "./pages/promptSpace";

function HomePage() {
  return (
    <div>
      <LandingPage />
      <Welcome />
      <PromptSpace />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/LandingPage" element={<HomePage />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<SignUpLogin />} />
      </Routes>
    </Router>
  );
}

export default App;