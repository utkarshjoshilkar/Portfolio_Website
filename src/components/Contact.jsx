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
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const web3FormData = new FormData();
    web3FormData.append("access_key", "d4992ade-408a-4e1e-b7ef-4cb9fbe5afac");
    web3FormData.append("name", formData.name);
    web3FormData.append("email", formData.email);
    web3FormData.append("subject", formData.subject);
    web3FormData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({
          type: 'success',
          text: "Your message has been sent successfully! I'll get back to you soon."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage({
          type: 'error',
          text: "Something went wrong. Please try again later."
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage({
        type: 'error',
        text: "Network error. Please check your connection and try again."
      });
    }

    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Phone",
      content: "+91 8446551014",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email",
      content: "utkarshjoshilkar@icloud.com",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Location",
      content: "Mahagaon, Maharashtra",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg width="24" height="24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "#333"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg width="24" height="24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "#0077b5"
    },
    {
      
      name: "Twitter",
      icon: (
        <svg width="24" height="24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: "#1DA1F2"
    },
    {
      name: "Dribbble",
      icon: (
        <svg width="24" height="24" fill="currentColor">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
        </svg>
      ),
      color: "#ea4c89"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <span className="badge-icon"></span>
            <span>Get In Touch</span>
          </span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-subtitle">Fill out the form and I'll get back to you within 24 hours</p>

              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="contact-method"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`method-icon bg-gradient-to-br ${method.gradient}`}>
                      {method.icon}
                    </div>
                    <div className="method-content">
                      <h4>{method.title}</h4>
                      <p>{method.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h4 className="social-title">Connect With Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="social-link"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        '--hover-color': social.color
                      }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="info-decoration deco-1"></div>
              <div className="info-decoration deco-2"></div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-wrapper">
              <div className="form-container">

                {/* Correct form wrapper added */}
                <form onSubmit={handleSubmit}>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Name <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`form-input ${focusedField === 'name' ? 'focused' : ''}`}
                          required
                        />
                        <div className="input-border"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Email <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`form-input ${focusedField === 'email' ? 'focused' : ''}`}
                          required
                        />
                        <div className="input-border"></div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Subject <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className={`form-input ${focusedField === 'subject' ? 'focused' : ''}`}
                        required
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Message <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`form-textarea ${focusedField === 'message' ? 'focused' : ''}`}
                        required
                      ></textarea>
                      <div className="input-border"></div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  >
                    <span className="btn-text">{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <span className="btn-icon">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </span>

                    <div className="btn-particles">
                      <span className="particle"></span>
                      <span className="particle"></span>
                      <span className="particle"></span>
                    </div>
                  </button>

                  {submitMessage && (
                    <div className={`alert alert-${submitMessage.type}`}>
                      {submitMessage.text}
                    </div>
                  )}

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="contact-bg-decoration">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
};

export default Contact;
