export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know more about my background and skills</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Backend Python Developer</h3>
            <p>
              I'm a dedicated backend developer with a strong foundation in Python and its ecosystems. 
              I specialize in creating RESTful APIs, database architecture, and server-side logic using 
              frameworks like <span className="highlight">Django</span> and <span className="highlight">FastAPI</span>.
            </p>
            <p>
              I believe in writing clean, maintainable code and I'm passionate about learning new 
              technologies and best practices to solve complex problems efficiently.
            </p>
            <div className="about-actions">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-code"></i>
              <span>Developer Profile</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          padding-top: 120px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        }
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .about-text h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--darker);
        }
        .about-text p {
          margin-bottom: 1.5rem;
          color: var(--text);
          line-height: 1.8;
        }
        .highlight {
          color: var(--primary);
          font-weight: 600;
        }
        .about-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        .about-image {
          display: flex;
          justify-content: center;
        }
        .image-placeholder {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .image-placeholder i {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-actions {
            justify-content: center;
          }
          .image-placeholder {
            width: 250px;
            height: 250px;
          }
        }
        @media (max-width: 480px) {
          .about-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}