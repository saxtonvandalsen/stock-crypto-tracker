import React, { useState } from 'react';
import { signUp, logIn, logOut } from '../auth/AuthService';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSignUp = async () => {
    try {
      const user = await signUp(email, password);
      setUser(user);
    } catch (error) {
      console.error("SignUp Error: ", error.message);
    }
  };

  const handleLogIn = async () => {
    try {
      const user = await logIn(email, password);
      setUser(user);
    } catch (error) {
      console.error("LogIn Error: ", error.message);
    }
  };

  const handleLogOut = async () => {
    await logOut();
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleLogIn}>Log In</button>
        </div>
      ) : (
        <div>
          <p>Welcome {user.email}</p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
