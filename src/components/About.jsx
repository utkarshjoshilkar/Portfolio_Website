import React from "react";
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
  const skills = [
    { name: "Frontend (React, HTML, CSS, JS)", level: 70 },
    { name: "Backend (Spring Boot)", level: 85 },
    { name: "Database (MySQL, MongoDB)", level: 80 },
    { name: "Version Control (Git & GitHub)", level: 95 },
  ];

  const techIcons = [
    { Icon: FaJava, color: "text-orange-600", name: "Java" },
    { Icon: SiSpringboot, color: "text-green-400", name: "Spring Boot" },
    { Icon: FaReact, color: "text-blue-400", name: "React" },
    { Icon: FaHtml5, color: "text-red-500", name: "HTML5" },
    { Icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
    { Icon: FaJsSquare, color: "text-yellow-400", name: "JavaScript" },
    { Icon: FaGitAlt, color: "text-white", name: "Git/GitHub" },
    { Icon: SiMysql, color: "text-blue-700", name: "MySQL" },
    { Icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          {/* Left Tech Box */}
          <div className="tech-section">
            <div className="tech-box">
              <div className="tech-badge">Tools & Technologies</div>
              <div className="tech-grid">
                {techIcons.map(({ Icon, color, name }, index) => (
                  <div 
                    key={index} 
                    className="tech-item"
                  >
                    <Icon 
                      className={`tech-icon ${color}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                    <span className="tech-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-text-section">
            <h3 className="about-title">
              I'm <span className="about-accent">Utkarsh</span>, a dedicated Full-Stack Developer
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

            {/* Call to Action
            <div className="about-actions">
              <a href="#portfolio" className="btn btn-primary">View My Projects</a>
              <a href="#contact" className="btn btn-outline">Hire Me</a>
            </div> */}

            {/* Skills Progress Bars */}
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;