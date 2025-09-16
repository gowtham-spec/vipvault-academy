import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Trophy } from "lucide-react";

const AcademicPartner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Become an Academic Partner</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              Partner with VIP Academy to enhance your institution's cybersecurity program and provide students with industry-leading education.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Academic Partnership Benefits</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Enhanced Curriculum</h4>
                    <p className="text-muted-foreground text-sm">Integrate industry-relevant cybersecurity content into your existing programs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <BookOpen className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Faculty Development</h4>
                    <p className="text-muted-foreground text-sm">Professional development opportunities for your faculty members</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Student Opportunities</h4>
                    <p className="text-muted-foreground text-sm">Internships, scholarships, and direct industry connections for students</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Trophy className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research Collaboration</h4>
                    <p className="text-muted-foreground text-sm">Joint research opportunities in emerging cybersecurity fields</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Partnership Programs</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Curriculum Integration Program</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Seamlessly integrate VIP Academy's cybersecurity modules into your existing computer science, IT, or business programs.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Modular course content</li>
                    <li>• Assessment materials</li>
                    <li>• Virtual lab access</li>
                    <li>• Industry certifications</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Degree Partnership Program</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Collaborate to offer joint degrees or certificates that combine academic rigor with practical industry skills.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Joint degree programs</li>
                    <li>• Certificate pathways</li>
                    <li>• Credit transfer agreements</li>
                    <li>• Dual credentials</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Research Partnership Program</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Engage in collaborative research projects addressing current and emerging cybersecurity challenges.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Joint research initiatives</li>
                    <li>• Funding opportunities</li>
                    <li>• Publication collaboration</li>
                    <li>• Conference presentations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Academic Support Services</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Faculty Training</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive training programs to upskill your faculty in the latest cybersecurity technologies and methodologies.
                  </p>
                </div>
                
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Student Resources</h4>
                  <p className="text-sm text-muted-foreground">
                    Access to virtual labs, practice environments, and industry-standard tools for hands-on learning.
                  </p>
                </div>
                
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Career Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Job placement assistance, career counseling, and direct connections to our industry partner network.
                  </p>
                </div>
                
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Guest Lectures</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular guest lectures from industry experts and VIP Academy's network of cybersecurity professionals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Partnership Requirements</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Accredited higher education institution</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Existing IT, Computer Science, or related program</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Commitment to cybersecurity education excellence</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Qualified faculty with technical background</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Adequate technology infrastructure and lab facilities</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Administrative support for program implementation</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Success Metrics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Job Placement Rate</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Partner Universities</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Students Graduated</div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Partner Testimonial</h3>
              <p className="text-muted-foreground mb-4">
                "VIP Academy's partnership has elevated our cybersecurity program to new heights. Our students are more engaged, better prepared for the workforce, and our faculty feels confident teaching cutting-edge cybersecurity concepts."
              </p>
              <p className="text-sm text-muted-foreground">- Dr. Sarah Johnson, Department Chair, University of Technology</p>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Academic Partnership
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Ready to enhance your cybersecurity program? Let's discuss how we can work together.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicPartner;