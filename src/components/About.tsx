import { useEffect, useRef } from 'react';
import Logo from '../Logo.png';
import '../styles/About.css';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const paragraphs = entry.target.querySelectorAll('p');
            paragraphs.forEach((p, index) => {
              setTimeout(() => {
                p.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section about">
      {/* Floating shapes for background effect */}
      <div className="floating-shape circle shape1"></div>
      <div className="floating-shape square shape2"></div>
      <div className="floating-shape triangle shape3"></div>
      
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate about AI, Machine Learning, and creating impactful solutions</p>
        
        <div className="about-content" ref={aboutRef}>
          <div className="about-image">
            <img src={Logo} alt="Karthik Reddy Padhira Logo" loading="lazy" />
          </div>
          
          <div className="about-text">
            <p>
              As a Computer Science student specializing in <span className="highlight">Artificial Intelligence</span> and <span className="highlight">Machine Learning</span>, I am passionate about developing innovative solutions that bridge the gap between theoretical concepts and practical applications. My academic journey has equipped me with a strong foundation in both traditional software engineering principles and cutting-edge AI technologies.
            </p>
            
            <p>
              I thrive on challenges that require creative problem-solving and analytical thinking. Whether it's developing a research paper summarizer that reduces review time by 40% or implementing a text-to-SQL system with 90% accuracy, I am constantly seeking opportunities to apply my <span className="highlight">technical skills</span> to create meaningful impact. My experience with various programming languages and frameworks allows me to adapt quickly to new technologies and methodologies.
            </p>
            
            <p>
              Currently working as a <span className="highlight">Machine Learning Data Engineer Intern</span> at Technizee Pvt Ltd, I contribute to AI-powered virtual try-on systems through data preprocessing, model integration, and deploying machine learning solutions for traditional outfit visualization. Beyond technical expertise, I value collaboration and knowledge sharing. My leadership roles in workshops and clubs have taught me the importance of clear communication and teamwork in achieving collective goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;