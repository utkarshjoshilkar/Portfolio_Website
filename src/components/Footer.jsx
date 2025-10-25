import React from 'react';
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#" className="logo">Developer Hub</a>
            <p className="footer-description">
              Creating amazing digital experiences with passion and expertise.
            </p>
          </div>
          
          <nav className="footer-nav">
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              {['github', 'linkedin', 'twitter', 'dribbble'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="social-icon"
                  aria-label={platform}
                >
                  <div className="social-placeholder"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Developer Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;