
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Users, Award, Target, CheckCircle, Building } from "lucide-react";

const GlobalServices = () => {
  const serviceOfferings = [
    {
      title: "Executive Cybersecurity Advisory",
      description: "Strategic guidance for C-suite and board members on cybersecurity governance and risk management",
      icon: Building
    },
    {
      title: "Cybersecurity Program Assessment",
      description: "Comprehensive evaluation of existing security programs with improvement recommendations",
      icon: Target
    },
    {
      title: "Regulatory Compliance Consulting",
      description: "Expert guidance on meeting industry-specific compliance requirements and frameworks",
      icon: Award
    },
    {
      title: "Incident Response Planning",
      description: "Development and testing of comprehensive incident response and business continuity plans",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-32 px-4 bg-foreground text-background">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Global cybersecurity services" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 w-4/5 mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-raleway font-bold mb-6">
            VIP Academy <span className="text-primary">Global Services</span>
          </h1>
          <p className="text-xl font-cabin max-w-2xl mx-auto">
            World-class cybersecurity advisory services delivered by industry experts to organizations worldwide.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
              <Globe className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Expert Advisory Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leverage decades of cybersecurity expertise to strengthen your organization's security posture and strategic decision-making.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Global Reach</h3>
              <p className="text-muted-foreground mb-4">
                VIP Academy Global Services brings together world-renowned cybersecurity experts, former government officials, and industry leaders to provide strategic advisory services to organizations across the globe. Our team has advised Fortune 500 companies, government agencies, and emerging businesses on critical cybersecurity challenges.
              </p>
              <p className="text-muted-foreground">
                With offices and partners in major business centers worldwide, we deliver localized expertise with global best practices to help organizations navigate the complex cybersecurity landscape.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Service Offerings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceOfferings.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="bg-background rounded-lg p-6 border border-border">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                          <p className="text-muted-foreground text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Why Choose VIP Academy Global Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Industry-leading expertise from certified professionals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Customized solutions for your specific industry and needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Global perspective with local implementation support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Proven track record with leading organizations</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Strategic guidance aligned with business objectives</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Ongoing support and relationship management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Access to exclusive research and threat intelligence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Confidential and trusted advisor relationship</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Get Started</h3>
              <p className="text-muted-foreground mb-4">
                Ready to strengthen your cybersecurity posture with expert guidance? Our team of advisors is ready to help you navigate complex security challenges and build resilient defenses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border border-border text-foreground px-6 py-3 rounded-lg hover:bg-muted transition-colors">
                  Download Capabilities Overview
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

export default GlobalServices;
