import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {styles} from './LoginPage.module.css';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    console.log('Admin Username:', username);
    console.log('Admin Password:', password);
  };

  const handleSignupClick = () => {
    history.push('/signup');
  };

  return (
    <div className="container">
      <div className="login-section">
        <h2>Admin Login</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="User ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="forgot-password-container">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
      <div className="welcome-section">
        <h2>Hello, Friend!</h2>
        <p>Register with your personal details to use all of our site's features.</p>
        <button className="signup-button" onClick={handleSignupClick}>Sign Up</button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
