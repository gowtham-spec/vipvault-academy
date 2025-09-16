
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, BookOpen, Award, CheckCircle, Target } from "lucide-react";

const SecurityAwareness = () => {
  const trainingModules = [
    {
      title: "Phishing & Social Engineering",
      description: "Learn to identify and defend against phishing attacks and social engineering tactics",
      duration: "45 minutes"
    },
    {
      title: "Password Security",
      description: "Best practices for creating and managing secure passwords",
      duration: "30 minutes"
    },
    {
      title: "Data Protection",
      description: "Understanding data classification and protection requirements",
      duration: "60 minutes"
    },
    {
      title: "Remote Work Security",
      description: "Security protocols for working from home and mobile environments",
      duration: "40 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-32 px-4 bg-foreground text-background">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Security awareness training" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 w-4/5 mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-raleway font-bold mb-6">
            Security <span className="text-primary">Awareness</span>
          </h1>
          <p className="text-xl font-cabin max-w-2xl mx-auto">
            Comprehensive security awareness training to build a human firewall and protect your organization from cyber threats.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
              <Shield className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Build Your Human Firewall</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empower your employees with the knowledge and skills to recognize, respond to, and prevent cybersecurity threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Training</h3>
              <p className="text-muted-foreground">Engaging, scenario-based learning modules</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Simulated Attacks</h3>
              <p className="text-muted-foreground">Real-world phishing simulations and testing</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Certification</h3>
              <p className="text-muted-foreground">Industry-recognized completion certificates</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Program Overview</h3>
              <p className="text-muted-foreground mb-4">
                Our Security Awareness program is designed to transform your employees into your first line of defense against cyber threats. Through interactive training modules, simulated attacks, and ongoing assessments, we help build a security-conscious culture within your organization.
              </p>
              <p className="text-muted-foreground">
                The program covers current threat landscapes, best practices, and provides practical tools that employees can use to protect both corporate and personal data.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Training Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trainingModules.map((module, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{module.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{module.description}</p>
                        <span className="text-xs text-primary font-medium">{module.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Reduce successful phishing attacks by up to 90%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Improve incident reporting and response times</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Build security-conscious organizational culture</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Meet compliance requirements and standards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Measurable ROI through risk reduction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Ongoing support and program updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityAwareness;
