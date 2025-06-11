import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/Config';
import './login.css';

export default function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/'))
      .catch((error) => {
        alert('Login failed. Please check your credentials.');
        console.log(error.message);
      });
  };

  return (
    <div className="login">
      {/* Logo and College Name */}
      <div className="login-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-y52L2yZjET2J4y6qCZyRG_C2QjzDy50pA&s=10"
          alt="Apollo Logo"
          className="apollo-logo"
        />
        <h2 className="apollo-title">Apollo Medical College</h2>
      </div>

      {/* Login Card */}
      <div className="login-style">
        <h1>Email Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Username or Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setemail(e.target.value)}
            className="form-control"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setpassword(e.target.value)}
            className="form-control"
          />

          {/* Forgot Password */}
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="button-style">Login</button>
        </form>
      </div>
    </div>
  );
}