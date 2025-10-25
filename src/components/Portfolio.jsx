import React, { useState } from 'react';
import "./Portfolio.css";

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
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Portfolio</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Check out some of my recent projects and see how I've helped clients achieve their goals.
          </p>
        </div>
        
        <div className="portfolio-filters">
          {['all', 'web', 'app', 'branding'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-item"
            >
              <div className="portfolio-image"></div>
              <div className="portfolio-content">
                <span className="portfolio-category">{item.category}</span>
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;