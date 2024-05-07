// Navigation.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css"

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/LandingPage">Home</Link>
        </li>
        <li>
          <Link to="/Info">Info</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Signup">Sign Up/Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
