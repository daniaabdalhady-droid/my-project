<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import About from "./pages/About";
=======
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./App.css";
>>>>>>> 51086cf8518c6f01a4113d1c4ff0831b57e0bd4d

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        {/* فعّلي هدول لما نعمل الصفحات */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
=======
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
>>>>>>> 51086cf8518c6f01a4113d1c4ff0831b57e0bd4d
      </Routes>
    </BrowserRouter>
  );
}

export default App;