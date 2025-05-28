import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const animateOnScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      const progressFills = document.querySelectorAll('.progress-fill');
      const skillProgress = document.querySelectorAll('.skill-progress');
      const backToTop = document.querySelector('.back-to-top');

      timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop < windowHeight * 0.8) {
          item.classList.add('animate');
        }
      });

      progressFills.forEach(fill => {
        const fillTop = fill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (fillTop < windowHeight * 0.8) {
          const width = fill.getAttribute('data-width') || '0%';
          if (fill instanceof HTMLElement) {
            fill.style.width = width;
          }
        }
      });

      skillProgress.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (skillTop < windowHeight * 0.8) {
          if (skill instanceof HTMLElement &&
              skill.parentElement &&
              skill.parentElement.previousElementSibling &&
              skill.parentElement.previousElementSibling.lastElementChild) {
            const width = skill.parentElement.previousElementSibling.lastElementChild.textContent || '0%';
            skill.style.width = width;
          }
        }
      });

      if (backToTop) {
        if (window.pageYOffset > 300) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }
    };

    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);

    const hideLoading = () => {
      setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => {
          loading.remove();
        }, 500);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      hideLoading();
    } else {
      window.addEventListener('load', hideLoading);
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target instanceof HTMLElement && target.closest('.back-to-top')) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('load', hideLoading);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="App">
      <div className="dark-mode-toggle" onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </div>

      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
