import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Auth.css'; // Import your CSS styles
import trelloLogo from '../images/trello-seeklogo.svg'; // Import the Trello logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password); // Debug log

    try {
      const res = await axios.post('/api/auth/login', { email, password });
      
      // Save token to local storage or manage session
      localStorage.setItem('token', res.data.token);
      setMessage(res.data.message);
      
      // Redirect to the board page after successful login
      navigate('/board'); 
    } catch (error) {
      console.error('Login error:', error.response?.data || error); // Log the full error object
      setMessage(error.response?.data?.message || 'Error in login');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={trelloLogo} alt="Trello Logo" className="auth-logo" />
        <h1 className="auth-title">Login to continue</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="auth-button">Login</button>
        </form>
        {message && <p className="auth-message">{message}</p>}
        <div className="auth-footer">
          <p>Don't have an account? <a href="/signup" className="auth-link">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
