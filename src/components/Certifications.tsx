// React import is handled by JSX transform

const Certifications = () => {
  const certifications = [
    {
      title: "Generative AI with LLM's",
      issuer: "Coursera",
      date: "Oct 2024",
      icon: "🤖"
    },
    {
      title: "Python",
      issuer: "Sololearn",
      date: "Sep 2024",
      icon: "🐍"
    },
    {
      title: "Java",
      issuer: "Sololearn",
      date: "Nov 2023",
      icon: "☕"
    }
  ];

  const achievements = [
    {
      title: "First Position in ML Quest",
      description: "Achieved first position by efficiently using machine learning techniques",
      event: "Festronix2k24",
      date: "Nov 2024",
      icon: "🏆"
    },
    {
      title: "Treasurer",
      description: "Serving as Treasurer for ML Verse club in CSM Department",
      event: "ML Verse Club",
      date: "2023 - Present",
      icon: "💼"
    },
    {
      title: "Public Speaking Workshop Leader",
      description: "Led public speaking workshops, boosting attendance by 40% and engaging 50+ participants",
      event: "Campus Initiative",
      date: "2023",
      icon: "🎤"
    }
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">Recognition of my skills and accomplishments</p>
        
        <h3 className="section-subtitle">Professional Certifications</h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-icon">{cert.icon}</div>
              <h4 className="certification-title">{cert.title}</h4>
              <p className="certification-issuer">Issued by {cert.issuer}</p>
              <p className="certification-date">{cert.date}</p>
            </div>
          ))}
        </div>
        
        <h3 className="section-subtitle">Achievements & Activities</h3>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-event">{achievement.event} | {achievement.date}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
