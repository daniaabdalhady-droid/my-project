import React from "react";
import "../Register.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration will be available soon!");
  };

  return (
    <div className="register-page">

      <div className="reception-scene">

        <div className="cafe-background">
          <h1 className="cafe-title">Sweet Bites</h1>
          <p className="cafe-subtitle">
            Bake • Share • Enjoy
          </p>

          <div className="cafe-shelves">
            <div className="shelf-item">♡</div>
            <div className="shelf-item">♡</div>
            <div className="shelf-item">♡</div>
          </div>
        </div>

        <div className="marinette-area">
          <div className="marinette-placeholder">
            Marinette
          </div>
        </div>

       <div className="reception-counter">

    <div className="counter-logo">
        <span>Sweet Bites</span>
        <small>BAKE • SHARE • ENJOY</small>
    </div>

    <div className="counter-cup">
        <div className="cup-handle"></div>
    </div>

    <div className="counter-plant">
        <span>✿</span>
        <span>✿</span>
        <span>✿</span>
        <div className="plant-pot"></div>
    </div>

</div>

    <div className="counter-decoration">
        ♡
    </div>
</div>

        <div className="register-card">

          <h1>Create Account</h1>
          <p className="subtitle">
            Join our sweet world!
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" required />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" required />
            </div>

            <button type="submit" className="register-btn">
              Create Account
            </button>

          </form>

          <p className="login-text">
            Already have an account?
            <a href="/login"> Login</a>
          </p>

        </div>

      </div>
  );
}


export default Register;