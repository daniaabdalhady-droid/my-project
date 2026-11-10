import React from "react";
import "../Register.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration will be available soon!");
  };

  return (
    <div className="register-page">
      <div className="register-overlay">
        <div className="register-card">

          <h1>Welcome to Sugar & Cream</h1>
          <p className="subtitle">
            Create your account and enjoy our sweet world!
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                required
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button type="submit" className="register-btn">
              Create Account
            </button>

          </form>

          <p className="login-text">
            Already have an account?
            <a href="/login"> Login</a>
          </p>

          <p className="footer-text">
            Made with love & sugar ♡
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;