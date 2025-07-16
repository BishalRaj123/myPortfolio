
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const typingTexts = [
    "Full-Stack Developer",
    "AI Enthusiast", 
    "Problem Solver",
    "Innovation Driver"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = typingTexts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, typingSpeed, typingTexts]);

  return (
    <section id="hero" className="min-h-screen py-20 flex items-center justify-center relative overflow-hidden perspective-1000 pt-20">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 via-background to-tech-teal/10" />
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute inset-0 gradient-conic opacity-30" />
      
      {/* Multiple 3D Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating spheres */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-tech-blue/20 rounded-full blur-xl animate-float3d" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-tech-teal/20 rounded-full blur-xl animate-float3d floating-element" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-float3d floating-element" style={{animationDelay: '1s'}} />
        
        {/* Additional smaller elements */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-tech-teal/30 rounded-full blur-md animate-float" style={{animationDelay: '3s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-tech-blue/25 rounded-full blur-lg animate-float3d" style={{animationDelay: '4s'}} />
      </div>

      {/* Enhanced 3D Rotating Elements */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-40 perspective-2000">
        <div className="w-24 h-24 border-2 border-tech-blue animate-cube transform-style-3d" />
        <div className="absolute inset-2 w-16 h-16 border border-tech-teal animate-rotate3d" style={{animationDirection: 'reverse'}} />
      </div>
      
      <div className="absolute left-10 bottom-1/4 opacity-30 perspective-1000">
        <div className="w-20 h-20 border border-tech-teal rotate-45 animate-cube card-3d" />
        <div className="absolute top-2 left-2 w-12 h-12 border border-primary animate-rotate3d" />
      </div>

      {/* New 3D elements */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-25">
        <div className="w-28 h-28 border-2 border-tech-blue/50 rounded-lg animate-cube transform-style-3d" />
      </div>

      <div className="absolute bottom-10 right-1/3 opacity-20">
        <div className="w-16 h-16 bg-gradient-to-br from-tech-blue/30 to-tech-teal/30 rotate-12 animate-float3d transform-style-3d" />  
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture with 3D Effects */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="relative group perspective-1000">
              {/* Floating background elements around the avatar */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-tech-blue/20 rounded-full blur-xl animate-float3d opacity-60" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-tech-teal/20 rounded-full blur-lg animate-float3d opacity-60" style={{animationDelay: '1s'}} />
              
              {/* Main Avatar Container with 3D effects */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 transform-style-3d">
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-blue via-tech-teal to-tech-blue p-1 animate-glow group-hover:animate-pulse">
                  <div className="w-full h-full rounded-full bg-background/10 backdrop-blur-sm" />
                </div>
                
                {/* Secondary ring for depth */}
                <div className="absolute inset-2 rounded-full border-2 border-tech-teal/30 animate-rotate3d opacity-60" />
                
                {/* Avatar */}
                <Avatar className="w-full h-full relative z-10 card-3d group-hover:scale-105 transition-all duration-500 transform-style-3d">
                  <AvatarImage 
                    src="/bishal.png" 
                    alt="Bishal Babu Rajbanshi"
                    className="object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-tech-blue to-tech-teal text-white">
                    BBR
                  </AvatarFallback>
                </Avatar>
                
                {/* Floating particles around avatar */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({length: 8}).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-tech-blue/40 rounded-full animate-float3d"
                      style={{
                        left: `${20 + Math.cos(i * Math.PI / 4) * 60}%`,
                        top: `${20 + Math.sin(i * Math.PI / 4) * 60}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${4 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content with enhanced animations */}
          <div className="animate-fade-in-up transform-style-3d animate-delay-200">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight perspective-1000">
              Hi, I'm{' '}
              <span className="text-gradient animate-glow">Bishal</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in-left animate-delay-300 min-h-[2rem]">
              I'm a{' '}
              <span className="text-gradient font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-right animate-delay-400">
              Computer Science Engineer specialized in AI & ML, with hands-on experience in 
              full-stack development, deep learning, NLP, and computer vision.
            </p>
          </div>

          {/* Enhanced CTA Buttons with 3D effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-scale-in animate-delay-500">
            <a
              href="/resume.pdf"
              download
              className="group relative flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl card-3d transform-style-3d"
            >
              <Download size={20} className="animate-float" />
              Download Resume
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="#contact"
              className="group relative flex items-center gap-3 glass-card hover:bg-primary/10 text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 card-3d transform-style-3d"
            >
              <Mail size={20} className="animate-float" style={{animationDelay: '0.5s'}} />
              Contact Me
            </a>
          </div>

          {/* Enhanced Social Links with 3D hover effects */}
          <div className="flex justify-center space-x-6 animate-fade-in-up animate-delay-600">
            <a
              href="https://github.com/bishalraj123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 card-3d transform-style-3d animate-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/bishalraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 card-3d transform-style-3d animate-glow"
              style={{animationDelay: '0.5s'}}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bishalrajbanshi009@gmail.com"
              className="p-4 glass-card hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 card-3d transform-style-3d animate-glow"
              style={{animationDelay: '1s'}}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with 3D effect */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce perspective-1000 ">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center card-3d">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse animate-glow" />
        </div>
      </div>

      {/* Additional floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({length: 20}).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-tech-blue/30 rounded-full animate-float3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
