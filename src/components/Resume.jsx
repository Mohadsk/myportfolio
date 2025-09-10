export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Download my resume to learn more about my experience and qualifications</p>
        </div>
        <div className="resume-content">
          <div className="resume-card">
            <div className="resume-icon">
              <i className="fas fa-file-download"></i>
            </div>
            <h3>Download My Resume</h3>
            <p>Get a complete overview of my skills, experience, and education</p>
            <a 
              href="/resume.pdf" 
              download 
              className="btn btn-primary"
            >
              <i className="fas fa-download"></i>
              Download PDF
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .resume-section {
          background-color: white;
        }
        .resume-content {
          display: flex;
          justify-content: center;
        }
        .resume-card {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: white;
          max-width: 500px;
          width: 100%;
        }
        .resume-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        .resume-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .resume-card p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .resume-card .btn {
          background: white;
          color: var(--primary);
          font-weight: 600;
        }
        .resume-card .btn:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}