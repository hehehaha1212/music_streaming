import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../firebase";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login Successful! ✅");
      // Navigate after showing message
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Login Error: ", error); 
      setMessage("Failed to login. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setMessage("Logged in with Google! ✅");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Login Error: ", error); 
      setMessage("Failed to login with Google. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit">Login</button>
        <hr className="divider" />
      </form>
      <button onClick={handleGoogleLogin} className="google-btn">
        <img src="src/assets/icons8-google-48.png" alt="Google" className="google-icon" />
        Continue with Google
      </button>
      <div className="other">
        <p><h5>Forgot Password?</h5></p>
        <p>
          <h5 style={{ color: "#90CAF9" }}>
            Don't have an account?   
            <Link style={{ color: "white" }} to="/signup"> 
              <u> Signup</u>
            </Link>
          </h5>
        </p>
      </div>
      <p className="message">{message}</p>
    </div>
  );
}
