
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Video Summarization, Q&A & Construction Site Report Generation",
      description: "Final year engineering project that automates video summarization, Q&A, and site reporting using MoviePy, Whisper, YOLOv8, BLIP, and SMOLVLM. Reduced manual analysis time by 80% with real-time insights and report downloads.",
      image: "/construction.jpg",
      tech: ["YOLOv8", "Python", "MoviePy", "BLIP", "SMOLVLM", "React", "Flask", "TypeScript"],
      github: "https://github.com/BishalRaj123/VIDInsights",
      live: "#",
      featured: true
    },
    {
      title: "Bitcoin Price Prediction using ML",
      description: "Advanced machine learning model leveraging LSTM networks and technical indicators to predict Bitcoin price trends. Published at IEEE NKCon 2024, providing accurate forecasts to aid financial decision-making.",
      image: "/bitcoin.png",
      tech: ["Python", "TensorFlow", "ARIMA", "LSTM", "GRU", "Pandas","Numpy", "Matplotlib"],
      github: "https://github.com/BishalRaj123/Bitcoin-Price-Prediction",
      live: "#",
      featured: true
    },
    {
      title: "DeepFake Image Detection",
      description: "Built a deepfake detection system using CNNs with 95% accuracy. Real-time Flask app lets users verify image authenticity to combat misinformation and fake content.",
      image: "/deepfake.jpg",
      tech: ["Python", "CNN", "Flask", "OpenCV"],
      github: "https://github.com/BishalRaj123/DeepFake-Image-Detection",
      live: "#",
      featured: false
    },
    
    {
      title: "NLP Sentiment Analysis Tool",
      description: "Sentiment analysis app using transformer models like BERT for social media and brand sentiment tracking.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600",
      tech: ["Python", "Transformers", "BERT", "Flask", "React"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Image Caption Generator for Visually Impaired Users",
      description: "Built an attention-based LSTM/RNN system that converts images into natural language captions to help visually impaired users access visual content online.",
      image: "/image_caption.jpeg",
      tech: ["Python", "LSTM", "RNN", "Attention", "NLP"],
      github: "#",
      live: "#",
      featured: false
    }
  
  
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI/ML expertise with full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a 
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a 
                    href={project.live}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/bishalraj123"
            className="inline-flex items-center gap-3 glass-card hover:bg-primary/10 text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
