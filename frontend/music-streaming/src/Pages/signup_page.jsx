import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Registration Successful! 🎉");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Signup Error: ", error);
      switch (error.code) {
        case "auth/email-already-in-use":
          setMessage("This email is already registered.");
          break;
        case "auth/invalid-email":
          setMessage("Invalid email address.");
          break;
        case "auth/weak-password":
          setMessage("Password should be at least 6 characters.");
          break;
        default:
          setMessage("Signup failed. Please try again.");
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      setMessage("Signed in with Google ✅");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Google Signup Error: ", error);
      setMessage("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <button onClick={handleGoogleSignup} className="google-btn">
        <img src="src/assets/icons8-google-48.png" alt="Google" className="google-icon" />
        Continue with Google
      </button>
      <form onSubmit={handleSignup}>
        <hr className="divider" />
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
        <button type="submit" className="submit">Sign Up</button>
      </form>
      <h5 style={{ color: "#90CAF9" }}>
        Already have an account? <Link style={{ color: "white" }} to="/login"><u>Login</u></Link>
      </h5>
      <p className="message">{message}</p>
    </div>
  );
}
