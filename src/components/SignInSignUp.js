import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

const SignInSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-in and sign-up
  const auth = getAuth();
  const navigate = useNavigate(); // To navigate back to the home page

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        navigate('/'); // Redirect to home page after sign-up
      })
      .catch((error) => {
        console.error("Sign-up error:", error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential.user);
        navigate('/'); // Redirect to home page after sign-in
      })
      .catch((error) => {
        console.error("Sign-in error:", error.message);
      });
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isSignUp ? (
        <button className="auth-button" onClick={handleSignUp}>Sign Up</button>
      ) : (
        <button className="auth-button" onClick={handleSignIn}>Sign In</button>
      )}
      <button className="auth-button" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
      </button>
      <Link to="/" className="auth-button home-button">Back to Home</Link>
    </div>
  );
};

export default SignInSignUp;
