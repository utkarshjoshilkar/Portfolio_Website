import React, { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaJava,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt
} from "react-icons/fa";
import { SiMysql, SiSpringboot, SiMongodb } from "react-icons/si";
import "./About.css";

const About = () => {
  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { 
      name: "Frontend (React, HTML, CSS, JS)", 
      level: 65,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
      color: "#3b82f6"
    },
    { 
      name: "Backend (Spring Boot)", 
      level: 85,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
      color: "#10b981"
    },
    { 
      name: "Database (MySQL, MongoDB)", 
      level: 80,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
      color: "#8b5cf6"
    },
    { 
      name: "Version Control (Git & GitHub)", 
      level: 95,
      icon: <FaGithub size={20} />,
      color: "#f59e0b"
    },
  ];

  const techIcons = [
    { Icon: FaJava, color: "text-orange-600", name: "Java", bg: "#fff5ed" },
    { Icon: SiSpringboot, color: "text-green-400", name: "Spring Boot", bg: "#ecfdf5" },
    { Icon: FaReact, color: "text-blue-400", name: "React", bg: "#eff6ff" },
    { Icon: FaHtml5, color: "text-red-500", name: "HTML5", bg: "#fef2f2" },
    { Icon: FaCss3Alt, color: "text-blue-500", name: "CSS3", bg: "#eff6ff" },
    { Icon: FaJsSquare, color: "text-yellow-400", name: "JavaScript", bg: "#fefce8" },
    { Icon: FaGitAlt, color: "text-orange-500", name: "Git", bg: "#fff7ed" },
    { Icon: SiMysql, color: "text-blue-700", name: "MySQL", bg: "#dbeafe" },
    { Icon: SiMongodb, color: "text-green-500", name: "MongoDB", bg: "#f0fdf4" },
  ];

  const stats = [
    { number: "6+", label: "Projects Completed" },
    { number: "3+", label: "Technologies" },
    { number: "1+", label: "Years Experience" },
    { number: "100%", label: "Dedication" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Passionate developer crafting innovative solutions with modern technologies
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div> */}

        <div className="about-content">
          {/* Left Tech Box */}
          <div className="tech-section">
            <div className="tech-box">
              <div className="tech-badge">
                <span className="badge-icon"></span>
                <span>Tools & Technologies</span>
              </div>
              
              <div className="tech-grid">
                {techIcons.map(({ Icon, color, name, bg }, index) => (
                  <div 
                    key={index} 
                    className="tech-item"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      backgroundColor: bg
                    }}
                  >
                    <Icon className={`tech-icon ${color}`} />
                    <span className="tech-name">{name}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="tech-decoration deco-1"></div>
              <div className="tech-decoration deco-2"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-text-section">
            <h3 className="about-title">
              I'm <span className="about-accent">Utkarsh</span>, a dedicated 
              <span className="about-highlight"> Full-Stack Developer</span>
            </h3>

            <div className="about-description">
              <p>
                I enjoy solving real-world problems using clean and efficient code. 
                I build full-stack applications using modern technologies such as 
                <strong> React, Spring Boot, MySQL, and MongoDB</strong>.
              </p>

              <p>
                My goal is to become an industry-ready software engineer capable of 
                delivering impactful solutions that make a difference.
              </p>
            </div>

            {/* Skills Progress Bars */}
            <div className="skills-container" ref={skillsRef}>
              <h4 className="skills-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>Technical Expertise</span>
              </h4>
              
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-name-wrapper">
                      <div 
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span 
                      className="skill-percentage"
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ 
                        width: skillsInView ? `${skill.level}%` : '0%',
                        background: skill.color
                      }}
                    >
                      <div className="skill-glow" style={{ background: skill.color }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="about-actions">
              <a href="#portfolio" className="btn-about-primary">
                <span>View My Projects</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn-about-outline">
                <span>Let's Talk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="about-bg-decoration">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  );
};

export default About;