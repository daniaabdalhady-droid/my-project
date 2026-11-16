import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="topbar">
      <NavLink className="brand" to="/home">SWEET <span>BITES</span></NavLink>
      <nav className="nav" aria-label="Main navigation">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>
    </header>
  );
}