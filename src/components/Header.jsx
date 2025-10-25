import React, { useEffect, useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  // 1. Setup code runs when component mounts
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  
  window.addEventListener('scroll', handleScroll);

  // 2. Cleanup function (automatically called when component unmounts)
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    // { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed z-50 bg-white/90 backdrop-blur-md shadow-md rounded-3xl max-w-screen-xl w-[94%] h-16 left-1/2 -translate-x-1/2 mt-4">
      <div className="px-6 flex justify-between items-center h-full">
        <a href="#" className="text-2xl font-bold text-indigo-900">
          Developer Hub
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          {" "}
          {/* hidden on mobile visible on med and up screen (hidden md:block) */}
          <ul className="flex space-x-8 items-center h-full">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 rounded-b-3xl bg-white/90 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium hover:text-indigo-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
