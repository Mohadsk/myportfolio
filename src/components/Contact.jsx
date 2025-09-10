import { useEffect, useRef, useState } from 'react';

export function Contact() {
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
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className={`section-title ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <h2>Contact</h2>
          <p>Have a question or want to work together? Let's get in touch.</p>
        </div>
        
        <div className={`contact-content ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location:</h4>
                <p>New York, NY</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email:</h4>
                <p>your.email@example.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Call:</h4>
                <p>+1 123 456 7890</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form card" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" className="form-control" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" className="form-control" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" className="form-control"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-send">Send Message</button>
            </div>
            <div className="text-center mt-2 text-sm text-secondary">
              <p>Note: This form is a visual demo only and is not connected to a backend.</p>
            </div>
          </form>
        </div>
      </div>
      
      <style jsx>{`
        /* --- Contact Section Styling --- */
        .contact-section {
          padding: 6rem 0;
          background-color: var(--bg-color);
          color: var(--text-primary);
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr 2fr;
            gap: 3rem;
          }
        }

        /* --- Contact Info --- */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          height: fit-content;
        }
        
        .dark .contact-info {
          background: var(--dm-card-bg);
          border: 1px solid var(--dm-border);
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .info-item i {
          font-size: 1.5rem;
          color: var(--primary-color);
          padding-top: 0.25rem;
        }
        
        .info-item h4 {
          font-size: 1.125rem;
          font-weight: 600;
        }
        
        .info-item p {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        /* --- Contact Form --- */
        .contact-form {
          padding: 2.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
          background-color: var(--card-bg);
          color: var(--text-primary);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .dark .form-control {
          background-color: var(--dm-bg);
          border: 1px solid var(--dm-border);
          color: var(--dm-text-primary);
        }

        .form-control:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
        }

        textarea.form-control {
          resize: vertical;
          min-height: 150px;
        }

        .btn-send {
          padding: 0.75rem 2rem;
          background-color: var(--primary-color);
          color: white;
          border: none;
          border-radius: 9999px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-send:hover {
          background-color: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
        }
        
        .text-secondary {
          color: var(--text-secondary);
        }

      `}</style>
    </section>
  );
}
