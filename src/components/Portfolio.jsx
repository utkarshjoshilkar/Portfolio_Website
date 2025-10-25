// src/components/Portfolio.jsx
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      description: 'A modern e-commerce platform with intuitive user interface.'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'app',
      description: 'Secure and user-friendly banking application for iOS and Android.'
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'branding',
      description: 'Complete brand identity for a tech startup.'
    },
    {
      id: 4,
      title: 'Travel Booking Platform',
      category: 'web',
      description: 'Comprehensive travel booking experience with real-time updates.'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'app',
      description: 'Mobile application for tracking workouts and nutrition.'
    },
    {
      id: 6,
      title: 'Restaurant Branding',
      category: 'branding',
      description: 'Brand identity and packaging for a gourmet restaurant.'
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Check out some of my recent projects and see how I've helped clients achieve their goals.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'web', 'app', 'branding'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full capitalize ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-60 overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed w-full h-full group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-sm text-indigo-600 font-medium uppercase">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold my-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;