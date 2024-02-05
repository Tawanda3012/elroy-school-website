import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
function Header() {
  return (
    <header className="site-header">
      <nav>
        <ul>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/instruction">INSTRUCTION</Link></li>
          <li><Link to="/resources">RESOURCES</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/enroll">ENROLL</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <button className="read-more">READ MORE</button>
        <button className="donate">DONATE</button>
      </div>
    </header>
  );
}

export default Header;
