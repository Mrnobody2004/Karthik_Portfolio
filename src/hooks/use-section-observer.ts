import { useEffect } from 'react';

const useSectionObserver = () => {
  useEffect(() => {
    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add visible class when section is in view
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Apply different slide effects to alternate sections
            const sectionIndex = Array.from(sections).indexOf(entry.target);
            if (sectionIndex % 2 === 0) {
              entry.target.classList.add('slide-right');
            } else {
              entry.target.classList.add('slide-left');
            }
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of the section is visible
    );
    
    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      // Clean up observer
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};

export default useSectionObserver;