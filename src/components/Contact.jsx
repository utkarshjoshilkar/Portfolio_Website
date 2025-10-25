import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let’s Build Something Together</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className={`alert alert-${submitMessage.type}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
          
          <div className="contact-info-section">
            <div className="contact-info">
              <h3 className="contact-info-title">Contact Information</h3>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>+91 8446551014</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>utkarshjoshilkar@icloud.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Mahagaon, Mahagrastra </p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {['dribbble', 'behance', 'linkedin', 'twitter'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="social-icon"
                    >
                      <div className="social-placeholder"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;