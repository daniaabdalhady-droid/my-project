import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [message, setMessage] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Demo complete! Connect an authentication service to sign in.');
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
          <h2>Welcome Back</h2>
          <p>Sign in to discover something sweet.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">Email Address</label>
            <input id="login-email" type="email" placeholder="name@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" placeholder="Enter password" minLength="6" required />
          </div>
          <button className="submit-btn" type="submit">LOGIN</button>
        </form>
        {message && <p className="status-message" role="status">{message}</p>}
        <p className="switch-text">Don't have an account? <Link to="/register">Create Account</Link></p>
      </section>
      <div className="auth-footer">SWEET BITES · BAKED WITH LOVE</div>
    </main>
  );
}