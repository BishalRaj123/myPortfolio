
import { Trophy, Star, Award, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Best Outgoing Student",
      organization: "University Excellence Award",
      year: "2025",
      description: "Recognized for outstanding academic performance and contribution to university community",
      icon: <Trophy className="w-8 h-8" />,
      color: "text-yellow-500"
    },
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2023",
      description: "Certified in cloud computing fundamentals and AWS core services",
      icon: <Award className="w-8 h-8" />,
      color: "text-blue-500"
    },
    {
      title: "LeetCode 150+ Problems",
      organization: "Competitive Programming",
      year: "2023-2024",
      description: "Solved over 500 algorithmic problems demonstrating strong problem-solving skills",
      icon: <Target className="w-8 h-8" />,
      color: "text-green-500"
    },
    {
      title: "Research Publication",
      organization: "IEEE Conference",
      year: "2023",
      description: "Published research on Bitcoin price prediction using machine learning techniques",
      icon: <Star className="w-8 h-8" />,
      color: "text-purple-500"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Achievements & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that reflect dedication, continuous learning, and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-background/50 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <p className="text-primary font-semibold mb-3">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "9.53", label: "CGPA Score", color: "text-primary" },
            { number: "15+", label: "Projects", color: "text-tech-teal" },
            { number: "150+", label: "LeetCode Problems", color: "text-green-500" },
            { number: "2", label: "Research Papers", color: "text-purple-500" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center glass-card p-4 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
