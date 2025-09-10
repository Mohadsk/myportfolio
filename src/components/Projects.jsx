// Enhanced Projects.jsx with staggered animation
import { useEffect, useRef, useState } from 'react';
import projectsData from '../data/projects';

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <div className={`section-title ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <h2>Projects</h2>
          <p>A showcase of my recent work and personal projects</p>
        </div>

        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="project-image">
                <i className="fas fa-laptop-code"></i>
                <div className="project-overlay">
                  <div className="project-links-inner">
                    <a
                      href={project.live}
                      className="project-link-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href={project.github}
                      className="project-link-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Source Code"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desc}</p>

                <div className="project-tech-list">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* --- CSS Variables (for easy theming) --- */
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
        .projects-section {
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

        /* --- Projects Grid --- */
        .projects-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        /* --- Project Card --- */
        .project-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform var(--transition-speed) ease, 
                      box-shadow var(--transition-speed) ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        /* --- Project Image & Overlay --- */
        .project-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          background-color: var(--bg-dark);
          color: var(--text-secondary);
          font-size: 3rem;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-speed) ease;
        }

        .project-image:hover img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(30, 41, 59, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity var(--transition-speed) ease;
        }

        .project-image:hover .project-overlay {
          opacity: 1;
        }

        /* --- Project Link Icons --- */
        .project-links-inner {
          display: flex;
          gap: 1.5rem;
        }

        .project-link-icon {
          width: 48px;
          height: 48px;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-decoration: none;
          transform: scale(0.8);
          opacity: 0;
          transition: transform var(--transition-speed) ease, opacity var(--transition-speed) ease;
        }

        .project-image:hover .project-link-icon {
          transform: scale(1);
          opacity: 1;
        }

        .project-link-icon:hover {
          background: #4f46e5;
        }

        /* --- Project Content --- */
        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .project-description {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background-color: rgba(99, 102, 241, 0.1);
          color: var(--primary-color);
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
        }

        /* --- Fade-in Animation --- */
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