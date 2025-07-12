
import { Code, Database, Globe, Brain, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "C"],
      color: "tech-blue"
    },
    {
      title: "AI/ML Frameworks",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
      color: "tech-teal"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["React.js", "Flask", "HTML/CSS", "Tailwind", "FastAPI", "REST APIs", "Git"],
      color: "primary"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Docker", "Jupyter", "AWS", "Linux"],
      color: "tech-graphite"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Communication", "Teamwork", "Problem Solving", "Leadership", "Adaptability"],
      color: "tech-blue"
    },
    {
      title: "Creative Skills",
      icon: Lightbulb,
      skills: ["UI/UX Design", "Research", "Innovation", "Critical Thinking", "Project Management"],
      color: "tech-teal"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-tech-blue/10 rounded-full blur-3xl animate-float3d" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-tech-teal/10 rounded-full blur-2xl animate-float3d" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`glass-card p-8 rounded-xl hover:shadow-2xl transition-all duration-500 card-3d transform-style-3d animate-scale-in group relative overflow-hidden`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Icon with 3D effect */}
                <div className={`w-16 h-16 bg-${category.color}/20 rounded-lg flex items-center justify-center mb-6 mx-auto animate-float relative z-10`}>
                  <IconComponent size={32} className={`text-${category.color} animate-glow`} />
                </div>

                <h3 className="text-xl font-bold mb-6 text-center relative z-10">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2 justify-center relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-3 py-2 bg-${category.color}/10 text-${category.color} rounded-full text-sm font-medium hover:bg-${category.color}/20 transition-all duration-300 hover:scale-105 card-3d animate-fade-in-up`}
                      style={{animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Floating particles inside card */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({length: 3}).map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-${category.color}/40 rounded-full animate-float3d`}
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${index + Math.random() * 3}s`,
                        animationDuration: `${4 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>

                {/* 3D border effect */}
                <div className={`absolute inset-0 border border-${category.color}/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Skill progress visualization */}
        <div className="mt-16 text-center animate-fade-in-up animate-delay-500">
          <div className="inline-flex items-center gap-4 glass-card px-8 py-4 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-tech-blue rounded-full animate-pulse"></div>
              <span className="text-sm">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-tech-teal rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="text-sm">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span className="text-sm">Proficient</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
