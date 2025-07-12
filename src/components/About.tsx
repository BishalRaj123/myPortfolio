
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate Computer Science Engineer with a strong foundation in 
                <span className="text-primary font-semibold"> Artificial Intelligence and Machine Learning</span>. 
                My journey in technology is driven by curiosity and a commitment to solving real-world problems 
                through innovative software solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in <span className="text-tech-teal font-semibold">full-stack development</span>, 
                I've worked on diverse projects spanning deep learning, natural language processing, 
                computer vision, and LLM-based applications. I thrive on continuous learning and 
                applying cutting-edge technologies to create meaningful impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">Fresher</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-tech-teal">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="font-semibold">AI & Machine Learning Specialist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-tech-teal rounded-full animate-pulse animate-delay-100" />
                    <span className="font-semibold">Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-tech-blue rounded-full animate-pulse animate-delay-200" />
                    <span className="font-semibold">Problem Solver & Innovator</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse animate-delay-300" />
                    <span className="font-semibold">Continuous Learner</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "Passionate about transforming complex problems into elegant, 
                    intelligent solutions that make a difference."
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-lg animate-float" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-tech-teal/30 rounded-full blur-md animate-float animate-delay-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
