import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-indigo-300 to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-indigo-600">Utkarsh Joshilkar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Problem Solver & Java Full-Stack Developer
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            I build Java full-stack solutions with Spring Boot and React, creating scalable apps from business tools to AI-driven agriculture systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
            >
              Hire Me
            </a>
            <a 
              href="#portfolio" 
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-600 overflow-hidden border-8 border-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="/images/profile.jpg" 
                alt="Utkarsh Joshilkar - Java Full-Stack Developer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>
            {/* Badges */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-110 transition-transform">
              Java Developer
            </div>
            <div className="absolute -bottom-6 -left-6 bg-indigo-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-110 transition-transform">
              DevOps Beginner 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;