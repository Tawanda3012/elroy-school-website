import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './SocialMediaBar.css';

const SocialMediaBar = () => {
  return (
    <div className="social-media-bar">
      <div className="follow-us-text">Follow us on Social Media</div>
      <a href="https://www.facebook.com"><FaFacebook className="social-media-icon" /></a>
      <a href="https://www.twitter.com"><FaTwitter className="social-media-icon" /></a>
      <a href="https://www.instagram.com"><FaInstagram className="social-media-icon" /></a>
      {/* Add more social media links as needed */}
    </div>
  );
};

export default SocialMediaBar;