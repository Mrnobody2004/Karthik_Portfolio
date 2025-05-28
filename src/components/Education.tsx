// React import is handled by JSX transform

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering (CSE-AIML)",
      institution: "Vardhaman College of Engineering, Shamshabad",
      period: "2022 - Present",
      cgpa: "8.69"
    },
    {
      degree: "Intermediate in MPC",
      institution: "Narayana Junior College, Nallakunta",
      period: "2020 - 2022",
      cgpa: "9.3"
    },
    {
      degree: "Tenth Class",
      institution: "Narayana Olympaid School, Ashok Nagar",
      period: "2019 - 2020",
      cgpa: "10.0"
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey and achievements</p>
        
        <div className="education-grid">
          {educationData.map((item, index) => (
            <div key={index} className="education-card">
              <h3 className="education-title">{item.degree}</h3>
              <h4 className="education-subtitle">{item.institution}</h4>
              <p className="education-period">{item.period}</p>
              
              <div className="progress-container">
                <div className="progress-labels">
                  <span>CGPA</span>
                  <span>{item.cgpa}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(parseFloat(item.cgpa) / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
