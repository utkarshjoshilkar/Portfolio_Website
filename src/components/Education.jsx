import React from "react";
import "./Education.css";

const educationData = [
  {
    year: "2019 - 2020",
    title: "Secondary (SSC)",
    institute: "Shri Shivaji High School",
    details: "Scored 94.60%"
  },
  {
    year: "2020 - 2022",
    title: "Higher Secondary (HSC)",
    institute: "Sai International Junior College",
    details: "Completed with distinction in Science stream. Scored 84.17%"
  },
  {
    year: "2022 - Present",
    title: "B.Tech in Computer Science",
    institute: "DKTE Textile & Engineering Institute, Ichalkaranji",
    details: "Focusing on software engineering, full-stack development, and AI research."
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-titlee">Education Journey</h2>
      <div className="road-container">
        <div className="road">
          <div className="road-line"></div>
          <div className="road-dashes">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="road-dash"></div>
            ))}
          </div>
          
          {educationData.map((edu, index) => (
            <div className={`milestone milestone-${index}`} key={index}>
              <div className="milestone-marker">
                <div className="marker-circle"></div>
                <div className="marker-flag">
                  <span>{edu.year.split(' ')[0]}</span>
                </div>
              </div>
              <div className={`milestone-content ${index % 2 === 0 ? 'top' : 'bottom'}`}>
                <div className="content-card">
                  <h3>{edu.title}</h3>
                  <h4>{edu.institute}</h4>
                  <p>{edu.details}</p>
                  <div className="year-badge">{edu.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;