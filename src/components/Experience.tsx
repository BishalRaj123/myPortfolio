
const Experience = () => {
  const experiences = [
    {
      title: "Frontend Intern",
      company: "Maurisys Software",
      duration: "2024 - Present",
      location: "Remote",
      description: [
        "Developed responsive web applications using React.js and modern frontend technologies",
        "Collaborated with cross-functional teams to deliver high-quality user interfaces",
        "Implemented state management solutions and optimized application performance",
        "Participated in code reviews and maintained coding standards across projects"
      ],
      skills: ["React.js","TypeScript", "JavaScript", "HTML/CSS", "Tailwind", "Git", "Figma", "AWS", "Agile"]
    },
    {
      title: "IT Intern",
      company: "Bageshwari Hospital",
      duration: "2022 - 2023",
      location: "Jhapa, Nepal",
      description: [
        "Managed hospital information systems and provided technical support",
        "Developed automated solutions for patient data management and reporting",
        "Implemented security protocols and maintained system infrastructure",
        "Trained staff on new technologies and troubleshot technical issues"
      ],
      skills: ["System Administration", "Database Management", "Network Security", "Technical Support"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience in software development and IT systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-tech-teal to-primary"></div>

            {experiences.map((exp, index) => (
              <div key={exp.title} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-foreground">{exp.company}</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">{exp.duration}</div>
                        <div className="text-sm text-muted-foreground">{exp.location}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-tech-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-tech-teal/10 text-tech-teal rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
