// React import is handled by JSX transform

const Skills = () => {
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
        
        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-category">
              <h3 className="skills-category-title">{category.category}</h3>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-name">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="soft-skills">
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
