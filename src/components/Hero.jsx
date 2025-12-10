import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Animated Background Particles */}
      <div className="hero-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <div className="hero-container">
        {/* Left Text Content */}
        <div className="hero-text-content">
          <div className="hero-greeting">
            <span className="wave-emoji">👋</span>
            <span className="greeting-text">Welcome to my portfolio</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-gradient">Utkarsh Joshilkar</span>
          </h1>

          <div className="hero-subtitle-wrapper">
            <h2 className="hero-subtitle">
              <span className="typing-text">Problem Solver & Java Full-Stack Developer</span>
            </h2>
          </div>

          <p className="hero-description">
            I build Java full-stack solutions with Spring Boot and React,
            creating scalable apps from business tools to AI-driven agriculture
            systems.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              <span>Hire Me</span>
              <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#portfolio" className="btn-outline">
              <span>View Work</span>
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/utkarshjoshilkar" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/utkarsh-joshilkar-065290257/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:utkarshjoshilkar@icloud.com" className="social-icon" title="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hero-image-wrapper">
          <div className="profile-badge-container">
            {/* Animated Rings */}
            <div className="profile-ring ring-1"></div>
            <div className="profile-ring ring-2"></div>
            <div className="profile-ring ring-3"></div>
            
            <div 
              className="profile-frame"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
              }}
            >
              <div className="profile-image-placeholder">
                {/* Replace with actual image */}
                <img
                src="/images/profile.jpg"
                alt="Utkarsh Joshilkar"
                className="profile-image"
              />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="badge badge-java">
              <span className="badge-icon">☕</span>
              <span>Java Developer</span>
            </div>
            <div className="badge badge-devops">
              <span className="badge-icon">🚀</span>
              <span>DevOps Beginner</span>
            </div>

            {/* Stats Cards */}
            {/* <div className="stat-card stat-1">
              <div className="stat-number">3+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card stat-2">
              <div className="stat-number">1+</div>
              <div className="stat-label">Experience</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll Down</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="scroll-arrow">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </a>
    </section>
  );
};

export default Hero;