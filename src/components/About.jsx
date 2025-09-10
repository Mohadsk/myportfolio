import { useEffect, useRef, useState } from 'react';

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  
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
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className={`section-title ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2>About Me</h2>
          <p>Get to know more about my background and skills</p>
        </div>
        
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
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
            
            <div className="skills-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
            </div>
            
            <div className="about-actions">
              <a href="#projects" className="btn btn-primary glow-effect">View My Work</a>
              <a href="#contact" className="btn btn-outline glow-effect">Get In Touch</a>
            </div>
          </div>
          
          <div 
            className={`about-image ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div className={`image-container ${isImageHovered ? 'hovered' : ''}`}>
              <div className="profile-image">
                <i className="fas fa-code"></i>
                <div className="floating-elements">
                  <div className="floating-element element-1">{"{}"}</div>
                  <div className="floating-element element-2">{"</>"}</div>
                  <div className="floating-element element-3">{"=>"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative;
          padding: 5rem 0;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #fff;
          overflow: hidden;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .section-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section-title h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section-title p {
          color: #94a3b8;
          font-size: 1.1rem;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        .about-text {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .about-text.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .about-text h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #e2e8f0;
          white-space: nowrap;
        }
        
        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: #cbd5e1;
        }
        
        .highlight {
          color: #818cf8;
          font-weight: 600;
        }
        
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin: 2rem 0;
        }
        
        .skill-tag {
          background: rgba(99, 102, 241, 0.1);
          color: #818cf8;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          border: 1px solid rgba(99, 102, 241, 0.3);
          transition: all 0.3s ease;
          cursor: default;
        }
        
        .skill-tag:hover {
          background: rgba(99, 102, 241, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .about-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn {
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .btn-primary {
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
        }
        
        .btn-outline {
          background: transparent;
          color: #818cf8;
          border: 2px solid #6366f1;
        }
        
        .glow-effect {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        
        .glow-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: all 0.6s ease;
          z-index: -1;
        }
        
        .glow-effect:hover::before {
          left: 100%;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);
        }
        
        .btn-outline:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.2);
        }
        
        .about-image {
          display: flex;
          justify-content: center;
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .about-image.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .image-container {
          position: relative;
          text-align: center;
          transition: all 0.5s ease;
        }
        
        .image-container.hovered {
          transform: translateY(-10px);
        }
        
        .profile-image {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: linear-gradient(145deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 2rem;
          position: relative;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transition: all 0.5s ease;
        }
        
        .image-container.hovered .profile-image {
          transform: scale(1.05);
          box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.25);
        }
        
        .profile-image i {
          font-size: 4rem;
          color: #818cf8;
        }
        
        .profile-image::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.3);
          animation: pulse 3s infinite;
          box-sizing: border-box;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        .floating-element {
          position: absolute;
          color: rgba(129, 140, 248, 0.6);
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .element-1 {
          top: 20%;
          left: 10%;
          animation: float 6s ease-in-out infinite;
        }
        
        .element-2 {
          top: 60%;
          right: 15%;
          animation: float 7s ease-in-out infinite 1s;
        }
        
        .element-3 {
          bottom: 20%;
          left: 20%;
          animation: float 5s ease-in-out infinite 0.5s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) translateX(-15px) rotate(-3deg);
          }
        }
      `}</style>
    </section>
  );
}
