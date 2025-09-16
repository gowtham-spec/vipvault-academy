import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, FileText, ExternalLink } from "lucide-react";

const Pressroom = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Pressroom</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              Stay updated with the latest news, announcements, and press releases from VIP Academy.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Latest Press Releases</h3>
              
              <div className="space-y-6">
                <article className="border-b border-border pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Calendar className="text-primary mt-1" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        VIP Academy Launches Advanced AI Cybersecurity Training Program
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">December 15, 2024</p>
                      <p className="text-muted-foreground mb-3">
                        New comprehensive program addresses growing demand for AI-powered cybersecurity professionals with hands-on training in machine learning security applications.
                      </p>
                      <a href="#" className="text-primary hover:underline text-sm flex items-center">
                        Read full release <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </article>

                <article className="border-b border-border pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Calendar className="text-primary mt-1" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        VIP Academy Partners with Global Fortune 500 Companies for Enterprise Training
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">November 28, 2024</p>
                      <p className="text-muted-foreground mb-3">
                        Strategic partnerships established to deliver customized cybersecurity training programs to enterprise clients worldwide.
                      </p>
                      <a href="#" className="text-primary hover:underline text-sm flex items-center">
                        Read full release <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </article>

                <article className="border-b border-border pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Calendar className="text-primary mt-1" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        VIP Academy Achieves Milestone of 500,000 Certified Professionals
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">October 20, 2024</p>
                      <p className="text-muted-foreground mb-3">
                        Academy celebrates significant milestone in global cybersecurity workforce development with over half a million certified professionals.
                      </p>
                      <a href="#" className="text-primary hover:underline text-sm flex items-center">
                        Read full release <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Media Resources</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="text-primary" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">Press Kit</h4>
                      <p className="text-sm text-muted-foreground">Download our complete press kit with logos, images, and company information</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="text-primary" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">Executive Bios</h4>
                      <p className="text-sm text-muted-foreground">Biographies and headshots of our executive team</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="text-primary" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">Fact Sheet</h4>
                      <p className="text-sm text-muted-foreground">Key statistics and company information</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="text-primary" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">Brand Guidelines</h4>
                      <p className="text-sm text-muted-foreground">Logo usage and brand identity guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="text-primary" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">Awards & Recognition</h4>
                      <p className="text-sm text-muted-foreground">Complete list of awards and industry recognition</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="text-primary" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">High-Resolution Images</h4>
                      <p className="text-sm text-muted-foreground">Professional photos for media use</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Media Contact</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Media Relations Team</strong><br />
                  Email: press@vipacademy.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Available Monday-Friday, 9 AM - 6 PM EST
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  For interview requests, press inquiries, or additional information, please contact our media relations team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pressroom;