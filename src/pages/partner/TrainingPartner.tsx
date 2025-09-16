import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Globe, TrendingUp, Handshake } from "lucide-react";

const TrainingPartner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Become a Training Partner</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              Partner with VIP Academy to deliver world-class cybersecurity training in your region and expand your business opportunities.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Partnership Benefits</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Building2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Established Brand</h4>
                    <p className="text-muted-foreground text-sm">Leverage VIP Academy's global reputation and trusted brand recognition</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Globe className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Market Expansion</h4>
                    <p className="text-muted-foreground text-sm">Access new markets and customer segments in cybersecurity training</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Revenue Growth</h4>
                    <p className="text-muted-foreground text-sm">Generate additional revenue streams with proven training programs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Handshake className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ongoing Support</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive support including marketing, sales, and technical assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">What We Provide</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Comprehensive Curriculum</h4>
                  <p className="text-muted-foreground text-sm">Access to our complete library of cybersecurity courses and materials</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Instructor Training</h4>
                  <p className="text-muted-foreground text-sm">Comprehensive training program to certify your instructors</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Marketing Materials</h4>
                  <p className="text-muted-foreground text-sm">Professional marketing collateral, brochures, and digital assets</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Technical Platform</h4>
                  <p className="text-muted-foreground text-sm">Access to our learning management system and virtual lab environments</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Sales Support</h4>
                  <p className="text-muted-foreground text-sm">Lead generation assistance and sales training for your team</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Certification Authority</h4>
                  <p className="text-muted-foreground text-sm">Ability to issue official VIP Academy certificates to your students</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Partner Requirements</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Established training or educational organization</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Minimum 2 years of experience in technology training</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Dedicated training facilities or virtual delivery capabilities</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Qualified instructors with cybersecurity background</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Commitment to maintaining VIP Academy quality standards</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Marketing and sales capabilities in your target market</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Partnership Models</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-border rounded-lg text-center">
                  <h4 className="font-semibold text-foreground mb-3">Regional Partner</h4>
                  <p className="text-sm text-muted-foreground mb-4">Exclusive rights to deliver VIP Academy training in your region</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Territory protection</li>
                    <li>• Marketing co-investment</li>
                    <li>• Premium support</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-border rounded-lg text-center">
                  <h4 className="font-semibold text-foreground mb-3">Authorized Partner</h4>
                  <p className="text-sm text-muted-foreground mb-4">Standard partnership with full course access and support</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Complete curriculum</li>
                    <li>• Instructor certification</li>
                    <li>• Sales support</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-border rounded-lg text-center">
                  <h4 className="font-semibold text-foreground mb-3">Affiliate Partner</h4>
                  <p className="text-sm text-muted-foreground mb-4">Referral-based partnership with commission structure</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Lead referrals</li>
                    <li>• Commission earnings</li>
                    <li>• Flexible engagement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Success Stories</h3>
              <p className="text-muted-foreground mb-4">
                "Partnering with VIP Academy has transformed our business. We've seen a 300% increase in cybersecurity training revenue and have trained over 2,000 professionals in the past two years."
              </p>
              <p className="text-sm text-muted-foreground">- TechTraining Solutions, Regional Partner</p>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply for Partnership
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Ready to grow your training business? Let's discuss partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingPartner;