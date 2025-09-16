import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Award } from "lucide-react";

const Accreditations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Accreditations</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              VIP Academy maintains the highest standards through rigorous accreditations and certifications from leading industry organizations.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-6">
                <Shield className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-foreground">Educational Accreditations</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">ISO 21001:2018</h4>
                    <p className="text-muted-foreground mb-2">
                      Educational Organizations - Management Systems for Educational Organizations
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Demonstrates our commitment to enhancing satisfaction of learners and other beneficiaries through effective application of our educational management system.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">ANSI/IACET Standard</h4>
                    <p className="text-muted-foreground mb-2">
                      Continuing Education and Training (CET) Programs
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Authorized to offer IACET CEUs (Continuing Education Units) for our professional development programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">DEAC Accreditation</h4>
                    <p className="text-muted-foreground mb-2">
                      Distance Education Accrediting Commission
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Recognized for excellence in distance education delivery and student support services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-6">
                <Award className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-foreground">Industry Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">NICE Framework Alignment</h4>
                    <p className="text-sm text-muted-foreground">
                      All programs mapped to National Initiative for Cybersecurity Education framework
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">CompTIA Authorized Partner</h4>
                    <p className="text-sm text-muted-foreground">
                      Official training partner for CompTIA certification programs
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">(ISC)² Authorized Training</h4>
                    <p className="text-sm text-muted-foreground">
                      Authorized to deliver (ISC)² certification training programs
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">EC-Council Partner</h4>
                    <p className="text-sm text-muted-foreground">
                      Authorized training center for EC-Council certifications
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">SANS Authorized</h4>
                    <p className="text-sm text-muted-foreground">
                      Authorized training partner for SANS Institute programs
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">ISACA Approved</h4>
                    <p className="text-sm text-muted-foreground">
                      Approved training provider for ISACA certifications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Quality Assurance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Continuous Monitoring</h4>
                    <p className="text-muted-foreground text-sm">Regular audits and assessments ensure ongoing compliance with accreditation standards</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Student Outcome Tracking</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive tracking of student success rates and career advancement</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Faculty Qualifications</h4>
                    <p className="text-muted-foreground text-sm">All instructors maintain current industry certifications and practical experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Curriculum Review</h4>
                    <p className="text-muted-foreground text-sm">Regular updates to course content based on industry changes and feedback</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Accreditation Verification</h3>
              <p className="text-muted-foreground mb-4">
                All accreditations and certifications can be independently verified through the respective accrediting bodies. 
                Contact information and verification procedures are available upon request.
              </p>
              <p className="text-sm text-muted-foreground">
                For questions about our accreditations or to request verification documentation, 
                please contact our academic affairs office at accreditation@vipacademy.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accreditations;