import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Get all anchor links that point to sections
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each anchor link
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        
        // Get the target section
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
            // Scroll smoothly to the target section
            window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
            });
            
            // Update URL without page reload
            history.pushState(null, '', targetId);
          }
        }
      });
    });
    
    return () => {
      // Clean up event listeners
      anchorLinks.forEach(link => {
        link.removeEventListener('click', function() {});
      });
    };
  }, []);
};

export default useSmoothScroll;
