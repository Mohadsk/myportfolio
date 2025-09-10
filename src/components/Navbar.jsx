import { useState, useEffect } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const SunIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5c-5.247 0-9.5 4.253-9.5 9.5s4.253 9.5 9.5 9.5 9.5-4.253 9.5-9.5-4.253-9.5-9.5-9.5zm-1.5 2.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v2.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-2.5zm1.5 14c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5v-2.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v2.5zm-5.732-15.068l1.768-1.768c.586-.586 1.536-.586 2.121 0 .586.586.586 1.536 0 2.121l-1.768 1.768c-.586.586-1.536.586-2.121 0-.586-.586-.586-1.536 0-2.121zm10.232 10.232l-1.768-1.768c-.586-.586-.586-1.536 0-2.121.586-.586 1.536-.586 2.121 0l1.768 1.768c.586.586.586 1.536 0 2.121-.586.586-1.536.586-2.121 0zm-10.232-1.768l-1.768 1.768c-.586.586-.586 1.536 0 2.121.586.586 1.536.586 2.121 0l1.768-1.768c.586-.586.586-1.536 0-2.121-.586-.586-1.536-.586-2.121 0zm10.232 1.768l1.768-1.768c.586-.586.586-1.536 0-2.121-.586-.586-1.536-.586-2.121 0l-1.768 1.768c-.586.586-.586 1.536 0 2.121.586.586 1.536.586 2.121 0zM5.5 12c0-.828.672-1.5 1.5-1.5h2.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-2.5c-.828 0-1.5-.672-1.5-1.5zm11.5 0c0-.828.672-1.5 1.5-1.5h2.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-2.5c-.828 0-1.5-.672-1.5-1.5z"/>
    </svg>
  );

  const MoonIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5c-5.247 0-9.5 4.253-9.5 9.5s4.253 9.5 9.5 9.5 9.5-4.253 9.5-9.5-4.253-9.5-9.5-9.5zm-2.73 17.5c-4.437-1.378-7.77-5.59-7.77-10.5 0-.74.1-1.46.28-2.15.54 3.79 3.91 6.78 7.91 6.78 4.21 0 7.64-3.43 7.64-7.64 0-4.08-3.21-7.44-7.26-7.64.69-.18 1.41-.28 2.15-.28 5.4 0 9.77 4.37 9.77 9.77s-4.37 9.77-9.77 9.77z"/>
    </svg>
  );

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a href="#about" className="logo">Shaikh Mohammad</a>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#about" className="hover-lift">About</a>
            <a href="#skills" className="hover-lift">Skills</a>
            <a href="#projects" className="hover-lift">Projects</a>
            <a href="#resume" className="hover-lift">Resume</a>
            <a href="#contact" className="hover-lift">Contact</a>
            
            {/* Dark mode toggle */}
            <button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon />
              ) : (
                <MoonIcon />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#resume" onClick={handleLinkClick}>Resume</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
          
          <button 
            className="theme-toggle-mobile"
            onClick={() => {
              setDarkMode(!darkMode);
              handleLinkClick();
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon />
            ) : (
              <MoonIcon />
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        /* --- CSS Variables --- */
        :root {
          --primary-color: #6366f1;
          --text-light: #f1f5f9;
          --text-dark: #1e293b;
          --bg-light: #fff;
          --bg-dark: #0f172a;
          --border-color-light: #e2e8f0;
          --border-color-dark: #334155;
          --transition-speed: 0.3s;
          --font-family-sans: 'Inter', sans-serif;
        }

        /* --- Navbar Styles --- */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.25rem 0;
          background-color: var(--bg-light);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: padding var(--transition-speed) ease, 
                      background-color var(--transition-speed) ease, 
                      box-shadow var(--transition-speed) ease;
          z-index: 1000;
        }

        .dark .navbar {
          background-color: var(--bg-dark);
          color: var(--text-light);
        }
        
        .navbar.scrolled {
          padding: 0.75rem 0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .dark .navbar.scrolled {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
          transition: transform var(--transition-speed) ease;
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        /* --- Desktop Links --- */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color var(--transition-speed) ease;
        }

        .dark .nav-links a {
          color: var(--text-light);
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--primary-color);
          transition: width var(--transition-speed) ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* --- Dark Mode Toggle --- */
        .theme-toggle, .theme-toggle-mobile {
          background: none;
          border: none;
          color: var(--text-dark);
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: transform var(--transition-speed) ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark .theme-toggle, .dark .theme-toggle-mobile {
          color: var(--text-light);
        }

        .theme-toggle:hover, .theme-toggle-mobile:hover {
          color: var(--primary-color);
          transform: rotate(30deg);
        }

        /* --- Mobile Menu --- */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          width: 2rem;
          height: 2rem;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }

        .mobile-menu-btn span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--text-dark);
          margin-bottom: 5px;
          transition: transform var(--transition-speed) ease, opacity var(--transition-speed) ease;
        }

        .dark .mobile-menu-btn span {
          background-color: var(--text-light);
        }

        .mobile-menu-btn.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.open span:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-menu-btn.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--bg-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: transform var(--transition-speed) ease, 
                      opacity var(--transition-speed) ease, 
                      visibility var(--transition-speed) ease;
          z-index: 9;
        }

        .dark .mobile-nav {
          background-color: var(--bg-dark);
        }
        
        .mobile-nav.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav a {
          color: var(--text-dark);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-decoration: none;
          transition: color var(--transition-speed) ease;
        }

        .dark .mobile-nav a {
          color: var(--text-light);
        }

        .mobile-nav a:hover {
          color: var(--primary-color);
        }

        /* --- Responsive Design --- */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
