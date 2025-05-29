import { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const softSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillCategories = skillsRef.current?.querySelectorAll('.skills-category');
    skillCategories?.forEach((category) => {
      observer.observe(category);
    });

    if (softSkillsRef.current) {
      observer.observe(softSkillsRef.current);
    }

    return () => {
      skillCategories?.forEach((category) => {
        observer.unobserve(category);
      });
      
      if (softSkillsRef.current) {
        observer.unobserve(softSkillsRef.current);
      }
    };
  }, []);

  // Get logo URL for each skill
  const getSkillLogo = (name: string) => {
    const logos: {[key: string]: string} = {
      // Programming Languages
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      
      // Web Technologies
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      'OpenAI API': 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
      'Git/GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'StreamLit': 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
      
      // Libraries & Frameworks
      'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      'Matplotlib': 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
      'OpenCV': 'https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_no_text-1.svg',
      'spaCy': 'https://spacy.io/static/icon-dark.svg',
      'Pillow': 'https://raw.githubusercontent.com/python-pillow/pillow-logo/main/pillow-logo-248x250.png',
      
      // Databases
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Microsoft SQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    };
    
    return logos[name] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'; // Default icon if not found
  };

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "Django", level: 75 },
        { name: "Figma", level: 70 },
        { name: "OpenAI API", level: 85 },
        { name: "Git/GitHub", level: 80 },
        { name: "StreamLit", level: 75 }
      ]
    },
    {
      category: "Libraries & Frameworks",
      skills: [
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "spaCy", level: 70 },
        { name: "Pillow", level: 75 }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Microsoft SQL Server", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">My technical toolkit and proficiencies</p>
        
        <div className="skills-container" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-category">
              <h3 className="skills-category-title">{category.category}</h3>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-logo-container">
                      <img 
                        src={getSkillLogo(skill.name)} 
                        alt={`${skill.name} logo`} 
                        className="skill-logo" 
                      />
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="soft-skills" ref={softSkillsRef}>
            <h3 className="skills-category-title">Soft Skills</h3>
            <p>
              Beyond technical expertise, I've developed strong <span className="highlight">leadership abilities</span> through organizing and leading technical workshops, which has enhanced my <span className="highlight">communication</span> and presentation skills. I actively contribute to machine learning open-source tools, demonstrating my commitment to the tech community and <span className="highlight">collaborative development</span>. My experience working on various college projects and events has strengthened my <span className="highlight">teamwork</span>, time management, and <span className="highlight">problem-solving</span> capabilities, allowing me to effectively navigate complex challenges and deliver results in diverse settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;