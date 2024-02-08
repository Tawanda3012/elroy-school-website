import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './SocialMediaBar.css';

const SocialMediaBar = () => {
  const socialMediaLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com" },
    { icon: <FaTwitter />, url: "https://www.twitter.com" },
    { icon: <FaInstagram />, url: "https://www.instagram.com" },
    // Add more social media links as needed
  ];

  return (
    <div className="social-media-bar">
      <div className="follow-us-text">Follow us on Social Media</div>
      {socialMediaLinks.map((link, index) => (
        <a href={link.url} key={index}>
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaBar;