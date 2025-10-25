// src/components/Experience.jsx
import React from 'react';

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
    <section id="experience" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my design career.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-indigo-200 transform md:-translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-12 relative ${
                  index % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-indigo-600 transform md:-translate-x-1/2"></div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <span className="text-indigo-600 font-medium">{exp.year}</span>
                  <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600 mt-3">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;