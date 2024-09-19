import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const SignInSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To track and display error messages
  const [isSignUp, setIsSignUp] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Clear any previous errors
    setError('');

    // Basic validation for email and password
    if (!email || !password) {
      setError('Please enter an email and password.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        navigate('/');
      })
      .catch((error) => {
        console.error("Sign-up error:", error.message);
        handleAuthErrors(error.code); // Pass the error code to our function to set an appropriate message
      });
  };

  const handleSignIn = () => {
    // Clear any previous errors
    setError('');

    // Basic validation for email and password
    if (!email || !password) {
      setError('Please enter an email and password.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential.user);
        navigate('/');
      })
      .catch((error) => {
        console.error("Sign-in error:", error.message);
        handleAuthErrors(error.code); // Pass the error code to our function to set an appropriate message
      });
  };

  const handleAuthErrors = (errorCode) => {
    // Handle different error codes from Firebase
    switch (errorCode) {
      case 'auth/email-already-in-use':
        setError('This email is already registered.');
        break;
      case 'auth/invalid-email':
        setError('Please enter a valid email address.');
        break;
      case 'auth/weak-password':
        setError('Password should be at least 6 characters long.');
        break;
      case 'auth/user-not-found':
        setError('No account found with this email.');
        break;
      case 'auth/wrong-password':
        setError('Incorrect password. Please try again.');
        break;
      default:
        setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      
      {error && <div className="error-message">{error}</div>}  {/* Display any error messages */}

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
