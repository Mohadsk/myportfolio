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
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Technologies and tools that I work with</p>
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-section {
          background-color: white;
        }
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .skill-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        .skill-card:hover {
          transform: translateY(-5px);
        }
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .skill-name {
          font-weight: 600;
          color: var(--darker);
        }
        .skill-percentage {
          color: var(--primary);
          font-weight: 700;
        }
        .skill-bar {
          height: 8px;
          background-color: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }
        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }
        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}