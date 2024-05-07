import React from "react";
import PromptSpace from "./pages/promptSpace";
import Welcome from "./pages/welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SignUpLogin from "./pages/SignUpLogin";
import Navigation from "./components/Navigation";
import "./styles/styles.css"; 
import "./styles/LandingPage.css";
import "./styles/AboutUs.css";
import "./styles/Contact.css";
import "./styles/SignUpLogin.css";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUpLogin />} />
        </Routes>
        <div>
          <Welcome />
          <div className="content">
            <PromptSpace />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;