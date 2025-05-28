// React import is handled by JSX transform

const Projects = () => {
  const projects = [
    {
      title: "Research Paper Summarizer using Google API",
      date: "Feb 2025",
      description: "Developed an AI-powered tool that leverages the Gemini API to automatically summarize research papers, reducing review time by 40%. The system extracts key findings, methodologies, and conclusions, making it easier for researchers to quickly understand complex academic content.",
      technologies: ["Python", "Gemini API", "NLP", "StreamLit"],
      metrics: "40% reduction in review time"
    },
    {
      title: "Text to SQL Query Using GPT NEO",
      date: "Jan 2025",
      description: "Implemented a natural language to SQL conversion system using the GPT-Neo language model. This tool allows users to write database queries in plain English, which are then accurately converted to SQL syntax. The system achieved 90% accuracy in query generation and reduced manual SQL writing time by 50%.",
      technologies: ["Python", "GPT-Neo", "NLP", "SQL"],
      metrics: "90% accuracy, 50% reduction in manual SQL writing"
    },
    {
      title: "NLP-Driven Biomedical Text Analysis",
      date: "Sept 2024",
      description: "Built a sophisticated natural language processing model specifically designed for biomedical text analysis. The system can identify and classify medical entities, relationships, and key information from clinical documents and research papers, processing over 100,000 records with 85% accuracy and 30% faster entity recognition.",
      technologies: ["Python", "spaCy", "NLP", "Machine Learning"],
      metrics: "85% accuracy, 30% faster entity recognition, 100K+ records processed"
    },
    {
      title: "Facial Emotion Detection Using Deep Learning",
      date: "Feb 2024",
      description: "Designed and implemented a convolutional neural network (CNN) based emotion detection system that can identify seven different facial expressions from images and video streams. Using TensorFlow and Keras, the model was trained on over 10,000 facial images and achieved 92% accuracy in emotion classification.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
      metrics: "92% accuracy on 10K+ samples"
    },
    {
      title: "Credit Card Fraud Detection Using Random Forest",
      date: "July 2023",
      description: "Created a machine learning model using Random Forest algorithm to detect fraudulent credit card transactions. The system analyzes transaction patterns and flags suspicious activities with high precision, reducing false positives by 30% compared to traditional rule-based systems.",
      technologies: ["Python", "Random Forest", "Machine Learning", "Data Analysis"],
      metrics: "98% precision, 30% reduction in false positives"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Showcasing my technical expertise through real-world applications</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                {project.title.split(' ')[0]}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-date">{project.date}</div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-metrics">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>{project.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
