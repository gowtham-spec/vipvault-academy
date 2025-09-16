
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Clock, Users, Award, CheckCircle } from "lucide-react";

const MastersCyberSecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Masters of Cyber Security</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced cybersecurity education for professionals seeking leadership roles in information security and risk management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground">2 Years (36 Credit Hours)</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Format</h3>
              <p className="text-muted-foreground">Online & Hybrid Options</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Accreditation</h3>
              <p className="text-muted-foreground">Nationally Accredited</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Program Overview</h3>
              <p className="text-muted-foreground mb-4">
                Our Master of Cybersecurity program is designed for working professionals who want to advance their careers in information security. The curriculum combines theoretical foundations with practical, hands-on experience using industry-standard tools and techniques.
              </p>
              <p className="text-muted-foreground">
                Students will develop advanced skills in risk assessment, incident response, digital forensics, and security architecture while learning to lead cybersecurity initiatives in organizations of all sizes.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Core Curriculum</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Advanced Network Security</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Cybersecurity Risk Management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Digital Forensics & Incident Response</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Ethical Hacking & Penetration Testing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Security Architecture & Design</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Cryptography & Data Protection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Cybersecurity Law & Ethics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Security Governance & Compliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Cloud Security Management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Capstone Project</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Career Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                Graduates of our Master of Cybersecurity program are prepared for senior-level positions including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Chief Information Security Officer (CISO)</li>
                <li>Cybersecurity Architect</li>
                <li>Security Consultant</li>
                <li>Incident Response Manager</li>
                <li>Risk Assessment Analyst</li>
                <li>Cybersecurity Research Scientist</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Admission Requirements</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Bachelor's degree from an accredited institution</li>
                <li>Minimum 3.0 GPA (on a 4.0 scale)</li>
                <li>Two years of relevant work experience (preferred)</li>
                <li>Letters of recommendation</li>
                <li>Statement of purpose</li>
                <li>Current resume/CV</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MastersCyberSecurity;
