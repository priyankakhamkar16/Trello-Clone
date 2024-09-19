import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Auth.css';
import trelloLogo from '../images/trello-seeklogo.svg'; // Import the Trello logo

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending signup request to server
      const res = await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });
      setMessage(res.data.message); // Set success message
      navigate('/login'); // Redirect to login page on successful signup
    } catch (error) {
      console.error('Error details:', error.response); // Log full error response
      setMessage(error.response?.data?.message || 'Error in signup');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={trelloLogo} alt="Trello Logo" className="auth-logo" />
        <h1 className="auth-title">Sign up to continue</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="auth-input" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            type="email" 
            className="auth-input" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            className="auth-input" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        {message && <p className="auth-message">{message}</p>}
        <div className="auth-footer">
          <p>Already have an account? <a href="/login" className="auth-link">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
