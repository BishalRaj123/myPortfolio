
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-gradient mb-2">
              Bishal Babu Rajbanshi
            </div>
            <p className="text-muted-foreground">
              AI/ML Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center">
            <div className="flex gap-6">
              <a
                href="https://github.com/bishalraj123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/bishalraj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:bishalrajbanshi009@gmail.com"
                className="p-3 glass-card hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Theme Toggle & Download */}
          <div className="flex justify-end items-center gap-4">
            <a
              href="/myPortfolio/resume.pdf"
              download
              className="glass-card hover:bg-primary/10 text-foreground px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Bishal Babu Rajbanshi. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
