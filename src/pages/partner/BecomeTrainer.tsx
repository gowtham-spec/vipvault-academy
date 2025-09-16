import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, DollarSign } from "lucide-react";

const BecomeTrainer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Become a Trainer</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              Join VIP Academy's elite network of cybersecurity trainers and help shape the next generation of security professionals.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Why Become a VIP Academy Trainer?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Global Reach</h4>
                    <p className="text-muted-foreground text-sm">Teach students from over 150 countries and make a worldwide impact</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Recognition</h4>
                    <p className="text-muted-foreground text-sm">Gain recognition as an expert in your field and build your professional brand</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <DollarSign className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Competitive Compensation</h4>
                    <p className="text-muted-foreground text-sm">Earn competitive rates with flexible scheduling options</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Professional Support</h4>
                    <p className="text-muted-foreground text-sm">Access to training resources, marketing support, and administrative assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Trainer Requirements</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-muted-foreground">Minimum 5 years of hands-on cybersecurity experience</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-muted-foreground">Current industry certifications (CISSP, CEH, CISM, or equivalent)</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-muted-foreground">Previous training or teaching experience preferred</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-muted-foreground">Excellent communication and presentation skills</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-muted-foreground">Bachelor's degree in Computer Science, IT, or related field</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-muted-foreground">Ability to commit to consistent training schedule</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Training Opportunities</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Ethical Hacking</h4>
                  <p className="text-sm text-muted-foreground">CEH, penetration testing, vulnerability assessment</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Security Management</h4>
                  <p className="text-sm text-muted-foreground">CISSP, CISM, security governance and risk</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Digital Forensics</h4>
                  <p className="text-sm text-muted-foreground">Computer forensics, incident response, evidence handling</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Network Security</h4>
                  <p className="text-sm text-muted-foreground">Firewall management, intrusion detection, network monitoring</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Cloud Security</h4>
                  <p className="text-sm text-muted-foreground">AWS, Azure, GCP security architectures</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Compliance & Audit</h4>
                  <p className="text-sm text-muted-foreground">ISO 27001, SOX, HIPAA, PCI-DSS frameworks</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Application Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Submit Application</h4>
                    <p className="text-sm text-muted-foreground">Complete our online application with your credentials and experience</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Technical Interview</h4>
                    <p className="text-sm text-muted-foreground">Participate in a technical interview to assess your expertise</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Demo Session</h4>
                    <p className="text-sm text-muted-foreground">Conduct a sample training session to demonstrate your teaching skills</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Onboarding</h4>
                    <p className="text-sm text-muted-foreground">Complete our comprehensive trainer onboarding program</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply to Become a Trainer
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Ready to share your expertise? Submit your application today.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeTrainer;