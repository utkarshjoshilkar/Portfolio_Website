import React, { useState } from 'react';
import "./Portfolio.css";
import cropDiseaseImg from '../assets/portfolio/crop-disease.png';
import passive_captcha from '../assets/portfolio/passive_captcha.jpg';
import food_bridge from '../assets/portfolio/food_bridge.jpg';
import PizzaShop from '../assets/portfolio/Pizza_shop.jpg';
import Student_tracker from '../assets/portfolio/student_tracker.jpg';
import weather_app from '../assets/portfolio/weather_app.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: 'AI-Based Crop Disease Outbreak Prediction System',
      category: 'app',
      description: 'Developing a Java Spring Boot backend integrating CNN + LSTM models for crop disease prediction with real-time accuracy monitoring.',
      image: cropDiseaseImg
      
    },
    {
      id: 2,
      title: 'Passive CAPTCHA',
      category: 'web',
      description: 'Developed a CAPTCHA system that verifies users passively through behavioral analysis, eliminating traditional image/text challenges.',
      image: passive_captcha
    },
    {
      id: 3,
      title: 'FoodBridge',
      category: 'web',
      description: 'Developing a Java Full-stack platform connecting food donors with NGOs using a location-based matching algorithm.',
      image: food_bridge
    },
    {
      id: 4,
      title: 'PizzaShop',
      category: 'console-app',
      description: 'Developed a Java JDBC-based console app for managing daily pizza orders with real-time MySQL CRUD operations, reducing manual entry.',
      image: PizzaShop
    },
    {
      id: 5,
      title: 'Student-Performance-Tracker',
      category: 'web',
      description: 'Developed a full-stack web app to track and predict student performance using SVM classification, achieving 85% prediction accuracy for low-performing students.',
      image: Student_tracker
    },
    {
      id: 6,
      title: 'Weather App',
      category: 'web',
      description: 'Created a responsive weather app using OpenWeatherMap API with HTML/CSS/JavaScript.',
      image: weather_app
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
          {['all', 'web', 'app', 'console-app'].map((filter) => (
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
              <div className="portfolio-image"><img src={item.image} alt={item.title} /></div>
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