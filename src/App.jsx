import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Use a function for initial state to check system preference only once
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Effect for handling smooth anchor link scrolling
  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Effect for applying the dark mode class to the root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  // Effect for showing/hiding the back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to handle the back-to-top button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <About />
        <Skills />
        <Projects />
        <Resume />
        {/* Contact section to be added here */}
        <Contact />
      </main>
      <Footer />
      {showBackToTop && (
        <div 
          className="back-to-top visible" 
          onClick={scrollToTop}
          role="button"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </div>
  );
}

export default App;
