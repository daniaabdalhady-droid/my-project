import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [message, setMessage] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Demo complete! Connect an authentication service to create your account.');
  }
  return (
    <main className="auth-layout">
      <section className="hero-copy">
        <small>WELCOME TO OUR WORLD</small>
        <h1>Made with<br />love &amp; sugar.</h1>
        <p>A little corner of sweetness, freshly baked moments and beautiful memories. Welcome to Sweet Bites.</p>
      </section>
      <section className="auth-card">
        <div className="card-header">
          <div className="symbol">✦</div>
          <h2>Create Account</h2>
          <p>Join our sweet little world.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="register-name">Full Name</label>
            <input id="register-name" type="text" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-email">Email Address</label>
            <input id="register-email" type="email" placeholder="name@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input id="register-password" type="password" placeholder="Create a password" minLength="6" required />
          </div>
          <button className="submit-btn" type="submit">CREATE ACCOUNT</button>
        </form>
        {message && <p className="status-message" role="status">{message}</p>}
        <p className="switch-text">Already have an account? <Link to="/login">Login</Link></p>
      </section>
      <div className="auth-footer">SWEET BITES · BAKED WITH LOVE</div>
    </main>
  );
}