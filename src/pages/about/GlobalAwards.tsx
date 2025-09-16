import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Trophy, Star } from "lucide-react";

const GlobalAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Global Awards</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              VIP Academy's commitment to excellence in cybersecurity education has been recognized globally through prestigious awards and certifications.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-4">
                <Trophy className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-foreground">Excellence in Education Awards</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Global Cybersecurity Education Excellence Award 2024</h4>
                  <p className="text-muted-foreground">Recognized for outstanding contribution to cybersecurity workforce development</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Best Training Provider Award 2023</h4>
                  <p className="text-muted-foreground">International Cybersecurity Training Association</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Innovation in Learning Technology 2023</h4>
                  <p className="text-muted-foreground">Educational Technology Excellence Awards</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-4">
                <Award className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-foreground">Industry Recognition</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Top 10 Cybersecurity Training Organizations 2024</h4>
                  <p className="text-muted-foreground">Cybersecurity Excellence Awards</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Most Trusted Training Partner 2023</h4>
                  <p className="text-muted-foreground">Global Security Industry Association</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">Outstanding Corporate Training Program 2023</h4>
                  <p className="text-muted-foreground">International Training Excellence Awards</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-4">
                <Star className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-foreground">Accreditations & Certifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">ISO 21001:2018</h4>
                  <p className="text-sm text-muted-foreground">Educational Organizations Management Systems</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">ANSI/IACET Standard</h4>
                  <p className="text-sm text-muted-foreground">Continuing Education and Training</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">NICE Framework Aligned</h4>
                  <p className="text-sm text-muted-foreground">National Initiative for Cybersecurity Education</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Global Recognition</h4>
                  <p className="text-sm text-muted-foreground">Trusted by Fortune 500 companies worldwide</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Student Achievement Awards</h3>
              <p className="text-muted-foreground mb-4">
                Our students consistently achieve excellence in global cybersecurity competitions and certifications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">First-time Pass Rate</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Competition Winners</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Student Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GlobalAwards;