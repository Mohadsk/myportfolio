import projectsData from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Some of my recent work and personal projects</p>
        </div>
        <div className="projects-container">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} className="project-link primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className="project-link secondary" target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        .projects-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
        }
        .project-image {
          height: 180px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 3rem;
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
          color: var(--darker);
        }
        .project-description {
          color: var(--text-light);
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tech-tag {
          background-color: #e0f2fe;
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .project-link {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 500;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .project-link.primary {
          background-color: var(--primary);
          color: white;
        }
        .project-link.secondary {
          border: 1px solid var(--primary);
          color: var(--primary);
        }
        .project-link:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .projects-container {
            grid-template-columns: 1fr;
          }
          .project-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}