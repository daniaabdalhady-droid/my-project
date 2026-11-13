import React from "react";
import "../Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-welcome">
        <div className="welcome-content">
          <h1>Sweet Bites</h1>
          <p className="welcome-tagline">BAKE • SHARE • ENJOY</p>

          <div className="welcome-message">
            <h2>Welcome Back!</h2>
            <p>Your sweet corner is waiting for you ♡</p>
          </div>

         <div className="cafe-decoration">
  <div className="coffee-cup">
    <div className="cup-handle"></div>
    <div className="coffee"></div>
  </div>

  <div className="coffee-beans">
    <span>☕</span>
    <span>🥐</span>
  </div>
</div>

      <div className="login-form-section">
        <div className="login-card">

          <h2>Login</h2>
          <p className="login-subtitle">
            Welcome back to Sweet Bites
          </p>

          <form>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="button">LOGIN</button>
          </form>

          <p className="signup-text">
            Don't have an account?
            <a href="/register"> Create Account</a>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;