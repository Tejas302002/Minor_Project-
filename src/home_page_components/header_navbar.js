import React from 'react';
import './header_navbar.css'; // Import your CSS file for styling
import logo from './images/image.png';

function HeaderNav() {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Your Company Logo" className="header__logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li><a href="about:blank" target="_blank" rel="noreferrer">Sign Up</a></li>
          <li><a href="about:blank" target="_blank" rel="noreferrer">Application</a></li>
          <li><a href="about:blank" target="_blank" rel="noreferrer">Contact Us</a></li>
          <li><a href="about:blank" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;
