import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignupPage.css';
import drdo from "./Images/drdoLogo.png"

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Handle signup logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-section">
        <img src={drdo} alt="" class="logo" />
        <div className="input-container">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
