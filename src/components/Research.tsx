
import { FileText, Award } from 'lucide-react';

const Research = () => {
  const research = [
    {
      title: "A Novel Approach of Bitcoin Price Prediction",
      description: "Comprehensive study implementing LSTM networks, technical indicators, and ensemble methods for cryptocurrency price forecasting with enhanced accuracy.",
      status: "Published",
      year: "2023",
      journal: "IEEE North Karnataka Subsection Conference (NKCon)",
      techniques: ["ARIMA", "LSTM", "GRU", "Technical Analysis", "Ensemble Methods", "Time Series Analysis"],
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "A Comparative Analysis of Traditional Methods and GAN-Based Approaches for Addressing Class Imbalance",
      description: "Novel approach using GANs to address class imbalance in medical imaging datasets, improving diagnostic model performance and reliability.",
      status: "Under Review",
      year: "2025",
      journal: "Journal of Medical AI",
      techniques: ["CGAN", "ROS", "RUS", "SMOTE", "ADASYN", "SMOTE+ENN", "SMOTE+Tomek Links", "SMOTE-NC+RUS", "Medical Imaging", "Data Augmentation", "Deep Learning"],
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Research & Publications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of AI/ML through innovative research and academic publications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {research.map((paper, index) => (
            <div key={paper.title} className="glass-card p-8 rounded-2xl hover:scale-102 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {paper.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground leading-tight">
                        {paper.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          paper.status === 'Published' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {paper.status}
                        </span>
                        <span className="text-sm text-muted-foreground">{paper.year}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {paper.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-tech-teal mb-2">
                      {paper.journal}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {paper.techniques.map((technique) => (
                      <span 
                        key={technique}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Research Interests</h3>
            <p className="text-muted-foreground mb-4">
              Currently exploring applications of Large Language Models in healthcare, 
              computer vision for medical diagnostics, and ethical AI implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["LLMs", "Computer Vision", "Healthcare AI", "Ethical AI", "Deep Learning"].map((interest) => (
                <span 
                  key={interest}
                  className="px-4 py-2 bg-tech-teal/10 text-tech-teal rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
