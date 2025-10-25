import React from 'react';
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces that enhance user experience and satisfaction.',
      icon: '🎨'
    },
    {
      title: 'Web Development',
      description: 'Building responsive, high-performance websites and applications using modern technologies.',
      icon: '💻'
    },
    {
      title: 'Brand Identity',
      description: 'Developing unique brand identities that communicate your values and resonate with your audience.',
      icon: '🆔'
    },
    {
      title: 'Mobile App Design',
      description: 'Designing beautiful and functional mobile applications for iOS and Android platforms.',
      icon: '📱'
    },
    {
      title: 'Illustration',
      description: 'Creating custom illustrations that bring your brand story to life and captivate your audience.',
      icon: '✏️'
    },
    {
      title: 'Motion Design',
      description: 'Adding motion and animation to enhance user engagement and bring interfaces to life.',
      icon: '🎬'
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            I offer a wide range of services to help your business grow and succeed in the digital world.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;