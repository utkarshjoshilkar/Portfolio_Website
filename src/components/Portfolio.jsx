import React, { useState, useEffect, useRef } from 'react';
import "./Portfolio.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const [animateCards, setAnimateCards] = useState(false);
  const portfolioRef = useRef(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'AI-Based Crop Disease Outbreak Prediction System',
      category: 'app',
      description: 'Developing a Java Spring Boot backend integrating CNN + LSTM models for crop disease prediction with real-time accuracy monitoring.',
      tags: ['Java', 'Spring Boot', 'AI/ML', 'CNN'],
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      icon: '🌾',
      delay: 0
    },
    {
      id: 2,
      title: 'Passive CAPTCHA',
      category: 'web',
      description: 'Developed a CAPTCHA system that verifies users passively through behavioral analysis, eliminating traditional image/text challenges.',
      tags: ['React', 'Spring Boot', 'Security'],
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      icon: '🔒',
      delay: 0.1
    },
    {
      id: 3,
      title: 'FoodBridge',
      category: 'web',
      description: 'Developing a Java Full-stack platform connecting food donors with NGOs using a location-based matching algorithm.',
      tags: ['Node.js', 'React', 'MySQL'],
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      icon: '🍲',
      delay: 0.2
    },
    {
      id: 4,
      title: 'PizzaShop',
      category: 'console-app',
      description: 'Developed a Java JDBC-based console app for managing daily pizza orders with real-time MySQL CRUD operations, reducing manual entry.',
      tags: ['Java', 'JDBC', 'MySQL'],
      gradient: 'from-yellow-400 via-orange-500 to-red-600',
      icon: '🍕',
      delay: 0.3
    },
    {
      id: 5,
      title: 'Student-Performance-Tracker',
      category: 'web',
      description: 'Developed a full-stack web app to track and predict student performance using SVM classification, achieving 85% prediction accuracy.',
      tags: ['React', 'Python', 'ML'],
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      icon: '📊',
      delay: 0.4
    },
    {
      id: 6,
      title: 'Weather App',
      category: 'web',
      description: 'Created a responsive weather app using OpenWeatherMap API with HTML/CSS/JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript', 'API'],
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      icon: '🌤️',
      delay: 0.5
    },
  ];

  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === activeFilter);
    
    setAnimateCards(false);
    setTimeout(() => {
      setFilteredItems(filtered);
      setAnimateCards(true);
    }, 300);
  }, [activeFilter]);

  useEffect(() => {
    setFilteredItems(portfolioItems);
    setAnimateCards(true);
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects', icon: '' },
    { id: 'web', label: 'Web Apps', icon: '🌐' },
    { id: 'app', label: 'Applications', icon: '📱' },
    { id: 'console-app', label: 'Console', icon: '💻' }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <span className="badge-icon">💼</span>
            <span>My Work</span>
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Explore my recent projects showcasing full-stack development and innovative solutions
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="portfolio-filters">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="filter-icon">{filter.icon}</span>
              <span>{filter.label}</span>
              {activeFilter === filter.id && (
                <span className="active-indicator"></span>
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid" ref={portfolioRef}>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`portfolio-item ${animateCards ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Background */}
              <div className={`portfolio-bg bg-gradient-to-br ${item.gradient}`}>
                <div className="bg-pattern"></div>
                <div className="icon-wrapper">
                  <span className="portfolio-icon">{item.icon}</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="portfolio-overlay">
                  <div className="overlay-buttons">
                    <button className="overlay-btn" title="View Details">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button className="overlay-btn" title="GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </button>
                    <button className="overlay-btn" title="Live Demo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="card-particles">
                  <div className="card-particle"></div>
                  <div className="card-particle"></div>
                  <div className="card-particle"></div>
                </div>
              </div>

              {/* Content */}
              <div className="portfolio-content">
                <div className="category-badge">
                  <span className="badge-dot"></span>
                  <span>{item.category}</span>
                </div>
                
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                
                <div className="portfolio-tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="portfolio-footer">
                  <button className="view-project-btn">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="corner-decoration top-left"></div>
              <div className="corner-decoration bottom-right"></div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="portfolio-cta">
          <button className="cta-button">
            <span>View All Projects</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="cta-text">Want to see more? Check out my complete portfolio</p>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="portfolio-bg-decoration">
        <div className="deco-circle circle-1"></div>
        <div className="deco-circle circle-2"></div>
        <div className="deco-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Portfolio;