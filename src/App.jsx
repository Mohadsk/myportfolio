import { useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
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

  return (
    <div className="app">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  )
}

export default App