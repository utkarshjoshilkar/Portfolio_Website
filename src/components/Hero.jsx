import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* Left Text */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Utkarsh Joshilkar</span>
          </h1>

          <h2 className="hero-subtitle">
            Problem Solver & Java Full-Stack Developer
          </h2>

          <p className="hero-description">
            I build Java full-stack solutions with Spring Boot and React,
            creating scalable apps from business tools to AI-driven agriculture systems.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Hire Me</a>
            <a href="#portfolio" className="btn-outline">View Work</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <div className="profile-badge-container">
            <div className="profile-frame">
              <img 
                src="/images/profile.jpg" 
                alt="Utkarsh Joshilkar"
                className="profile-image"
              />
            </div>
            
            {/* Badges now inside the profile-badge-container */}
            <span className="badge badge-java">Java Developer</span>
            <span className="badge badge-devops">DevOps Beginner</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;