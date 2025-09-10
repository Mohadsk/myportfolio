// Professional Skills.jsx with polished animations
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: "Python", level: 90 },
  { name: "Django & DRF", level: 85 },
  { name: "FastAPI", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "React", level: 65 },
  { name: "Docker", level: 60 },
  { name: "Git & GitHub", level: 85 },
  { name: "Linux", level: 75 },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className={`section-title ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <h2>Skills</h2>
          <p>Technologies and tools that I work with.</p>
        </div>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="skill-content">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transition: `width 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${index * 0.15}s`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        /* --- CSS Variables --- */
        :root {
          --primary-color: #6366f1;
          --bg-dark: #0f172a;
          --bg-card: #1e293b;
          --text-light: #f1f5f9;
          --text-secondary: #94a3b8;
          --border-color: #334155;
          --transition-speed: 0.4s;
          --font-family-sans: 'Inter', sans-serif;
        }

        /* --- Main Section Layout --- */
        .skills-section {
          padding: 6rem 0;
          background-color: var(--bg-dark);
          color: var(--text-light);
          font-family: var(--font-family-sans);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .section-title p {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        /* --- Skills Grid --- */
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        /* --- Skill Card --- */
        .skill-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform var(--transition-speed) ease, 
                      box-shadow var(--transition-speed) ease;
        }
        
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        /* --- Skill Content --- */
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        
        .skill-name {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-light);
        }
        
        .skill-percentage {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--primary-color);
        }
        
        /* --- Progress Bar --- */
        .skill-bar {
          background-color: rgba(99, 102, 241, 0.1);
          height: 8px;
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .skill-progress {
          background: var(--primary-color);
          height: 100%;
          width: 0%;
          transition: width 1s ease-in-out;
        }
        
        /* --- Fade-in-up Animation --- */
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity var(--transition-speed) ease, transform var(--transition-speed) ease;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}