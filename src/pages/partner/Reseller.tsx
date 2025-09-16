import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DollarSign, Target, Zap, Shield } from "lucide-react";

const Reseller = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Become a Reseller</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              Join VIP Academy's reseller network and earn substantial commissions by promoting world-class cybersecurity training programs.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Why Become a VIP Academy Reseller?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <DollarSign className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">High Commission Rates</h4>
                    <p className="text-muted-foreground text-sm">Earn up to 25% commission on all successful course enrollments</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Target className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Growing Market</h4>
                    <p className="text-muted-foreground text-sm">Cybersecurity training market growing at 15% annually</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Easy to Sell</h4>
                    <p className="text-muted-foreground text-sm">Industry-leading content that sells itself with proven ROI</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Trusted Brand</h4>
                    <p className="text-muted-foreground text-sm">Leverage VIP Academy's global reputation and credibility</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Commission Structure</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">15%</div>
                  <h4 className="font-semibold text-foreground mb-2">Bronze Level</h4>
                  <p className="text-sm text-muted-foreground">$0 - $25,000 in sales</p>
                  <p className="text-xs text-muted-foreground mt-2">Starting commission rate</p>
                </div>
                
                <div className="text-center p-6 bg-muted/30 rounded-lg border-2 border-primary">
                  <div className="text-3xl font-bold text-primary mb-2">20%</div>
                  <h4 className="font-semibold text-foreground mb-2">Silver Level</h4>
                  <p className="text-sm text-muted-foreground">$25,001 - $100,000 in sales</p>
                  <p className="text-xs text-muted-foreground mt-2">Most popular tier</p>
                </div>
                
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <h4 className="font-semibold text-foreground mb-2">Gold Level</h4>
                  <p className="text-sm text-muted-foreground">$100,000+ in sales</p>
                  <p className="text-xs text-muted-foreground mt-2">Maximum commission rate</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">What We Provide</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Sales Materials</h4>
                  <p className="text-muted-foreground text-sm">
                    Professional sales presentations, brochures, case studies, and ROI calculators to help you close deals.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Marketing Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Co-branded marketing materials, digital assets, and campaign templates for your promotional activities.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Training & Certification</h4>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive product training and sales certification program to maximize your success.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Lead Generation</h4>
                  <p className="text-muted-foreground text-sm">
                    Access to qualified leads and prospects from our marketing campaigns and inbound inquiries.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Sales Tools</h4>
                  <p className="text-muted-foreground text-sm">
                    CRM integration, tracking dashboard, and commission reporting tools to manage your sales pipeline.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Target Markets</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Corporate Sector</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Enterprise security teams</li>
                    <li>• IT departments</li>
                    <li>• Compliance organizations</li>
                    <li>• Financial services</li>
                    <li>• Healthcare institutions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Individual Professionals</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Career changers</li>
                    <li>• IT professionals</li>
                    <li>• Recent graduates</li>
                    <li>• Security consultants</li>
                    <li>• Government employees</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Reseller Requirements</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Proven sales experience in technology or training sector</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Understanding of cybersecurity market and challenges</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Established network of potential customers</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Commitment to achieving quarterly sales targets</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Professional business credentials and references</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Agreement to maintain VIP Academy brand standards</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Getting Started</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Application Submission</h4>
                    <p className="text-sm text-muted-foreground">Complete our reseller application with your business details and experience</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Approval Process</h4>
                    <p className="text-sm text-muted-foreground">Our team reviews your application and conducts a brief interview</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Training & Onboarding</h4>
                    <p className="text-sm text-muted-foreground">Complete our reseller certification program and product training</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Start Selling</h4>
                    <p className="text-sm text-muted-foreground">Launch your sales activities with full support from our team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply to Become a Reseller
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Start earning high commissions selling cybersecurity training. Apply today!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reseller;