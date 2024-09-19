// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import HomePage from './pages/HomePage'; // Assuming you have a HomePage component
import BoardPage from './pages/BoardPage'; // Assuming you created the BoardPage component
import Signup from './pages/Signup'; // Assuming you created the Signup component
import Login from './pages/Login'; // Assuming you created the Login component
import './styles/global.css'; // Global styles

function App() {
  const location = useLocation(); // Get current location

  return (
    <>
      {/* Conditionally render the Navbar if not on the /board route */}
      {location.pathname !== '/board' && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/board" element={<BoardPage />} /> {/* Sidebar only on this page */}
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
