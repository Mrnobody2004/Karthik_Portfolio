import { useEffect } from 'react';

export function useScrollAnimation() {
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

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
}