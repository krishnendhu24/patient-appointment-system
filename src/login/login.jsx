import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css"
import { auth } from '../Config/Config';

export default function Login() {
    const [email,setemail] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) =>
        {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
           navigate("/")
          })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
        }
  return (
    <div className='login'>
   <div className="login-style">
  <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Email Login</h1>
  <form onSubmit={handleSubmit} className="login-form">
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
        Username or Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
        onChange={(e) => setemail(e.target.value)}
        className="form-control"
      />
    </div>
    <div className="form-group" style={{ marginBottom: '15px' }}>
      <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
        onChange={(e) => setpassword(e.target.value)}
        className="form-control"
      />
    </div>
    <div style={{ textAlign: 'center' }}>
      <button type="submit" className="button-style" style={{ marginTop: 10 }}>
        Login
      </button>
    </div>
  </form>
</div>
    </div>
 

  )
}
