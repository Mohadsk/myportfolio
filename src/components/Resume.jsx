// Refined Resume.jsx
import { useEffect, useRef, useState } from 'react';

export default function Resume() {
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
    <section id="resume" className="resume-section" ref={sectionRef}>
      <div className="container">
        <div className={`section-title ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <h2>Resume</h2>
          <p>Download my resume to learn more about my experience and qualifications.</p>
        </div>
        
        <div className="resume-content">
          <div className={`resume-card ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="resume-icon">
              <i className="fas fa-file-download"></i>
            </div>
            
            <h3>Download My Resume</h3>
            <p>Get a complete overview of my skills, experience, and education.</p>
            
            <a 
              href="/resume.pdf" 
              download 
              className="btn-download"
              aria-label="Download My Resume"
            >
              <i className="fas fa-download"></i>
              <span>Download PDF</span>
            </a>
          </div>
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

        /* --- Section Styling --- */
        .resume-section {
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

        .resume-content {
          display: flex;
          justify-content: center;
        }

        /* --- Resume Card --- */
        .resume-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          padding: 2rem;
          max-width: 400px;
          width: 100%;
          transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
        }
        
        .resume-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        
        .resume-icon {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        
        .resume-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .resume-card p {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        /* --- Download Button --- */
        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background-color: var(--primary-color);
          color: white;
          text-decoration: none;
          font-weight: 600;
          border-radius: 9999px;
          transition: background-color var(--transition-speed) ease, 
                      transform var(--transition-speed) ease, 
                      box-shadow var(--transition-speed) ease;
        }
        
        .btn-download:hover {
          background-color: #4f46e5; /* A slightly darker shade */
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
        }
        
        .btn-download i {
          font-size: 1.125rem;
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