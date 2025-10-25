import React from 'react';
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      year: 'June 2025 - July 2025',
      role: 'Java Developer Intern',
      company: 'Elevate Labs',
      description: 'Developed and optimized core application features and RESTful APIs using Spring Boot, enhancing performance and stability',
    },
    
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            My professional journey and the experiences that have shaped my design career.
          </p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{exp.year}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;