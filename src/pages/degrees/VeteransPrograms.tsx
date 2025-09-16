
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Clock, Users, Award, CheckCircle, Flag } from "lucide-react";

const VeteransPrograms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
              <Flag className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Programs for Veterans</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized degree programs designed to support military veterans transitioning to successful cybersecurity careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground">Flexible Timeline</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Format</h3>
              <p className="text-muted-foreground">Online & Campus</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Benefits</h3>
              <p className="text-muted-foreground">GI Bill Approved</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Supporting Our Heroes</h3>
              <p className="text-muted-foreground mb-4">
                VIP Academy is proud to support veterans in their transition from military service to cybersecurity careers. Our veteran-focused programs recognize the unique skills and experiences that veterans bring to the cybersecurity field.
              </p>
              <p className="text-muted-foreground">
                We understand that military experience in security, intelligence, and technology provides an excellent foundation for cybersecurity careers, and our programs are designed to build upon these strengths while filling any knowledge gaps.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Veteran Benefits & Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">GI Bill and VA Education Benefits Accepted</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Yellow Ribbon Program Participation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Military Credit for Prior Experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Flexible Scheduling for Military Obligations</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Dedicated Veteran Student Services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Career Transition Counseling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Industry Mentorship Program</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Job Placement Assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Available Degree Programs</h3>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 border border-border">
                  <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Science in Cybersecurity</h4>
                  <p className="text-muted-foreground text-sm mb-2">Complete undergraduate program with military credit recognition</p>
                  <p className="text-xs text-muted-foreground">Duration: 2-4 years (depending on prior credits) | Format: Online/Hybrid</p>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <h4 className="text-lg font-semibold text-primary mb-2">Master of Cybersecurity</h4>
                  <p className="text-muted-foreground text-sm mb-2">Advanced degree for veterans with technical backgrounds</p>
                  <p className="text-xs text-muted-foreground">Duration: 18-24 months | Format: Online/Hybrid</p>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <h4 className="text-lg font-semibold text-primary mb-2">MBA in Cybersecurity</h4>
                  <p className="text-muted-foreground text-sm mb-2">Business-focused program for military leaders</p>
                  <p className="text-xs text-muted-foreground">Duration: 2 years | Format: Executive/Online</p>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <h4 className="text-lg font-semibold text-primary mb-2">Graduate Certificates</h4>
                  <p className="text-muted-foreground text-sm mb-2">Focused training in specialized cybersecurity areas</p>
                  <p className="text-xs text-muted-foreground">Duration: 6-12 months | Format: Online</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Military Experience Recognition</h3>
              <p className="text-muted-foreground mb-4">
                We recognize and provide academic credit for relevant military training and experience:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Information Systems Technician (IT) roles</li>
                <li>Cybersecurity and Information Systems Security</li>
                <li>Intelligence and Surveillance operations</li>
                <li>Network Operations and Administration</li>
                <li>Communications and Signal Intelligence</li>
                <li>Military Police and Security Forces</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Career Outcomes</h3>
              <p className="text-muted-foreground mb-4">
                Our veteran graduates have successfully transitioned to careers with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Department of Defense Contractors</li>
                  <li>Federal Government Agencies</li>
                  <li>Fortune 500 Corporations</li>
                  <li>Cybersecurity Consulting Firms</li>
                </ul>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Financial Services Companies</li>
                  <li>Healthcare Organizations</li>
                  <li>Technology Startups</li>
                  <li>Critical Infrastructure Providers</li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Get Started Today</h3>
              <p className="text-muted-foreground mb-4">
                Ready to begin your civilian cybersecurity career? Our veteran services team is here to help you navigate the admission process and maximize your benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                  Schedule Consultation
                </button>
                <button className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold">
                  Download Benefits Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VeteransPrograms;
