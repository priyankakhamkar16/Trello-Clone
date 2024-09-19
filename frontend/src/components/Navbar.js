import React from 'react';
import '../styles/Navbar.css';  // Import the CSS file

const Navbar = ({ isBoardPage }) => {
  return (
    <nav className={`navbar ${isBoardPage ? 'navbar-board-page' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img 
              src={require('../images/trello-seeklogo.svg').default} 
              alt="Atlassian Trello Logo"
              className="navbar-logo-image"
            />
          </a>
        </div>
        <div className="navbar-actions">
          <a href="#get-started" className="navbar-get-started">Get Trello for Free</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
