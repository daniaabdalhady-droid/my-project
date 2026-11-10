import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="top-nav">
        <Link to="/" className="nav-link">Home</Link>

        <div className="cafe-logo">
          <span className="logo-icon">🍰</span>
          <h1>Sweet Bites</h1>
          <p>Discover • Cook • Enjoy 🤍</p>
        </div>

        <div className="nav-links">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;