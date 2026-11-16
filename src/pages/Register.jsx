import React from "react";
import "../Register.css";

function Register() {
    return (
        <div className="register-page">
            <div className="reception-scene">

                <div className="cafe-background">

                    <div className="ceiling-lights">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="cafe-name">
                        <h2>Sweet Bites</h2>
                        <p>BAKE • SHARE • ENJOY</p>
                    </div>

                    <div className="cafe-shelves">
                        <div className="shelf">
                            <span>🥐</span>
                            <span>🍰</span>
                            <span>🧁</span>
                        </div>

                        <div className="shelf">
                            <span>🍪</span>
                            <span>🥨</span>
                            <span>🍩</span>
                        </div>
                    </div>

                    <div className="wall-decoration">
                        Freshly Baked ♡
                    </div>

                </div>

                <div className="register-card">

                    <h1>Create Account</h1>

                    <p className="subtitle">
                        Join our sweet little world!
                    </p>

                    <form>
                        <div className="input-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" />
                        </div>

                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Create a password" />
                        </div>

                        <button type="button" className="register-btn">
                            Create Account
                        </button>
                    </form>

                    <p className="login-text">
                        Already have an account? <a href="/login">Login</a>
                    </p>

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
                        <div className="plant-pot"></div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Register;
