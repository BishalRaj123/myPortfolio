import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your Public Key (replace with your actual Public Key)
emailjs.init('WGUezQhDUUapF75qW');

// Define EmailJS service and template IDs (replace with your actual IDs)
const SERVICE_ID = 'service_1g5ohki';
const TEMPLATE_ID_ADMIN = 'template_q1sud48';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface AdminTemplateParams extends Record<string, unknown> {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const templateParamsForAdmin: AdminTemplateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParamsForAdmin);
      console.log('Admin email sent successfully');

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      if (error instanceof Error) {
        console.error('Error details:', error.message);
      }
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in AI/ML and software development
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:bishalrajbanshi009@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      bishalrajbanshi009@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-tech-teal/10 text-tech-teal rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+977-9709177107</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-tech-blue/10 text-tech-blue rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
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
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;