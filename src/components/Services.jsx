// src/components/Services.jsx
import React from 'react';

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
    <section id="services" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I offer a wide range of services to help your business grow and succeed in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;