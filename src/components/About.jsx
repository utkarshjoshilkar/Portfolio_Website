// src/components/About.jsx
import React from 'react';

const About = () => {
  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Web Development', level: 90 },
    { name: 'Branding', level: 85 },
    { name: 'Illustration', level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white py-4 px-6 rounded-lg shadow-xl">
                <span className="text-3xl font-bold">5+</span>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">I'm Eliana, a passionate designer and developer</h3>
            <p className="text-gray-600 mb-6">
              With over 5 years of experience in the digital design industry, I specialize in creating intuitive user interfaces and engaging web experiences. My approach combines aesthetic sensibility with technical expertise to deliver solutions that are both beautiful and functional.
            </p>
            <p className="text-gray-600 mb-8">
              I believe in the power of design to solve problems and create meaningful connections between brands and their audiences. My work is driven by a passion for innovation and a commitment to excellence.
            </p>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-indigo-600 rounded-full" 
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