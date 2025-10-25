import React from 'react';
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      year: '2021 - Present',
      role: 'Senior UI/UX Designer',
      company: 'Tech Innovations Inc.',
      description: 'Leading design projects for enterprise clients and mentoring junior designers.'
    },
    {
      year: '2019 - 2021',
      role: 'Product Designer',
      company: 'Digital Solutions Co.',
      description: 'Designed user interfaces for web and mobile applications in the fintech industry.'
    },
    {
      year: '2017 - 2019',
      role: 'Junior Designer',
      company: 'Creative Studio',
      description: 'Worked on branding projects and web design for small to medium businesses.'
    },
    {
      year: '2015 - 2017',
      role: 'Design Intern',
      company: 'Marketing Agency',
      description: 'Assisted senior designers and learned industry-standard design practices.'
    }
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