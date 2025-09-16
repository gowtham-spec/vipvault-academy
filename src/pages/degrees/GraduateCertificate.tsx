
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Clock, Users, CheckCircle, Star } from "lucide-react";

const GraduateCertificate = () => {
  const certificatePrograms = [
    {
      title: "Cybersecurity Leadership",
      duration: "12 months",
      credits: "15 credits",
      description: "Executive-level cybersecurity management and strategy"
    },
    {
      title: "Digital Forensics",
      duration: "9 months", 
      credits: "12 credits",
      description: "Investigation and analysis of digital evidence"
    },
    {
      title: "Ethical Hacking",
      duration: "6 months",
      credits: "9 credits", 
      description: "Penetration testing and vulnerability assessment"
    },
    {
      title: "Cloud Security",
      duration: "9 months",
      credits: "12 credits",
      description: "Securing cloud infrastructure and services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
              <Award className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Graduate Certificate Programs</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Focused certificate programs for professionals seeking specialized cybersecurity skills and career advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground">6-15 months</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Format</h3>
              <p className="text-muted-foreground">100% Online</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Credits</h3>
              <p className="text-muted-foreground">9-15 Credit Hours</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Program Overview</h3>
              <p className="text-muted-foreground mb-4">
                Our graduate certificate programs provide focused, intensive training in specialized areas of cybersecurity. These programs are designed for working professionals who want to enhance their skills, change career directions, or prepare for advanced degree programs.
              </p>
              <p className="text-muted-foreground">
                All certificate credits can be applied toward our Master's degree programs, providing a pathway for continued education and career advancement.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Available Certificate Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificatePrograms.map((program, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="text-lg font-semibold text-primary mb-2">{program.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{program.description}</p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{program.duration}</span>
                      <span>{program.credits}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Cybersecurity Leadership Certificate</h3>
              <p className="text-muted-foreground mb-4">
                Our flagship certificate program designed for current and aspiring cybersecurity leaders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Strategic Cybersecurity Management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Risk Assessment & Management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Security Governance & Compliance</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Incident Response Leadership</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Security Program Development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Executive Communication</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Admission Requirements</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Bachelor's degree from an accredited institution</li>
                <li>Minimum 2.5 GPA (on a 4.0 scale)</li>
                <li>Current resume demonstrating professional experience</li>
                <li>Statement of purpose (500 words)</li>
                <li>Official transcripts</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Career Benefits</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Immediate application of skills in current role</li>
                <li>Enhanced credibility with employers and clients</li>
                <li>Pathway to advanced degree programs</li>
                <li>Networking opportunities with industry professionals</li>
                <li>Preparation for industry certifications</li>
                <li>Potential salary increase of 15-25%</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GraduateCertificate;
