// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wave-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p className="copyright">&copy; 2024 Shaikh Mohammad. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        /* --- CSS Variables --- */
        :root {
          --primary-color: #6366f1; /* A professional blue-violet */
          --secondary-text-color: #94a3b8; /* Subtle gray for contrast */
          --bg-dark: #0f172a; /* Main dark background */
          --bg-medium: #1e293b; /* For the wave divider */
          --transition-speed: 0.3s;
          --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        /* --- Base Footer Styling --- */
        .footer {
          position: relative;
          background-color: var(--bg-dark);
          color: white;
          padding: 3rem 0; /* Reduced padding for a compact feel */
          overflow: hidden;
          font-family: var(--font-family-sans);
          text-align: center;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* --- Wave Divider --- */
        .wave-divider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          line-height: 0;
          transform: rotate(180deg);
        }
        
        .wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 60px; /* A smaller, more subtle wave */
        }
        
        .shape-fill {
          fill: var(--bg-medium);
        }
        
        /* --- Footer Content Layout (Centered) --- */
        .footer-content {
          display: flex;
          flex-direction: column; /* Stack vertically for a clean column layout */
          align-items: center; /* Center horizontally */
          gap: 1.5rem; /* Space between the icon and copyright */
          width: 100%;
        }

        /* --- Social Links --- */
        .social-links {
          display: flex;
          gap: 1.25rem;
        }
        
        .social-icon {
          width: 36px;
          height: 36px;
          background-color: transparent;
          border: 1px solid var(--secondary-text-color);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--secondary-text-color);
          transition: all var(--transition-speed) ease;
        }
        
        .social-icon:hover {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          transform: translateY(-2px);
          color: white;
        }
        
        .social-icon i {
          font-size: 1.1rem;
        }
        
        /* --- Copyright --- */
        .copyright {
          color: var(--secondary-text-color);
          font-size: 0.875rem;
          margin: 0;
        }
      `}</style>
    </footer>
  );
}