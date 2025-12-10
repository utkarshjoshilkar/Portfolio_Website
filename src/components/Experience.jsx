import React from 'react';
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      year: 'June 2025 - July 2025',
      role: 'Java Developer Intern',
      company: 'Elevate Labs',
      description: 'Developed and optimized core application features and RESTful APIs using Spring Boot, enhancing performance and stability',
      skills: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
      icon: '💼'
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <span className="badge-icon"></span>
            <span>Career Journey</span>
          </span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            My professional journey and the experiences that have shaped my development career
          </p>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line">
            <div className="timeline-progress"></div>
          </div>

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot">
                  <span className="dot-icon">{exp.icon}</span>
                  <div className="dot-pulse"></div>
                </div>
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="year-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{exp.year}</span>
                    </div>
                  </div>

                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    {exp.company}
                  </p>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="skills-tags">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="card-decoration top-right"></div>
                  <div className="card-decoration bottom-left"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="experience-bg">
        <div className="bg-element element-1"></div>
        <div className="bg-element element-2"></div>
      </div>
    </section>
  );
};

export default Experience;