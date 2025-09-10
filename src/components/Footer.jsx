export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Shaikh Mohammad</h3>
            <p>Backend Python Developer</p>
          </div>
          <div className="footer-links">
            <div className="social-links">
              <a href="skmohammad0783.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Shaikh Mohammad. All rights reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--darker);
          color: white;
          padding: 3rem 0 1.5rem;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .footer-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .footer-info p {
          color: #9ca3af;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background-color: var(--primary);
          transform: translateY(-3px);
        }
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 1.5rem;
          text-align: center;
          color: #9ca3af;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}