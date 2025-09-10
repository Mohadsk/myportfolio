export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <a href="#about" className="logo">Shaikh Mohammad</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text);
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }
          .nav-links a {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </nav>
  );
}