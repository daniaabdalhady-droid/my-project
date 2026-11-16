import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="top-nav">
      <Link to="/" className="nav-link">Home</Link>

      <div className="cafe-logo">
        <span className="logo-icon">♨</span>
        <h1>Sweet Bites</h1>
        <p>Discover · Cook · Enjoy ♡</p>
      </div>

      <div className="nav-links">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;