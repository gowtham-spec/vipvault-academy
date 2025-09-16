import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CultureCollaboration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Culture and Collaboration</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              At VIP Academy, we foster a culture of collaboration, innovation, and continuous learning that empowers our global community.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Culture</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Innovation</h4>
                  <p className="text-muted-foreground text-sm">We encourage creative thinking and embrace new technologies to enhance cybersecurity education.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Excellence</h4>
                  <p className="text-muted-foreground text-sm">We strive for excellence in everything we do, from course content to student support.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Inclusivity</h4>
                  <p className="text-muted-foreground text-sm">We welcome learners from all backgrounds and create an inclusive learning environment.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Growth</h4>
                  <p className="text-muted-foreground text-sm">We support continuous learning and professional development for all community members.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Collaboration Initiatives</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Industry Partnerships</h4>
                  <p className="text-muted-foreground">We collaborate with leading cybersecurity organizations to ensure our curriculum reflects current industry needs and best practices.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Academic Alliances</h4>
                  <p className="text-muted-foreground">Our partnerships with universities and research institutions drive innovation in cybersecurity education.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Student Communities</h4>
                  <p className="text-muted-foreground">We facilitate peer-to-peer learning through forums, study groups, and collaborative projects.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Global Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                  <div className="text-sm text-muted-foreground">Students Trained</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Corporate Partners</div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Join Our Community</h3>
              <p className="text-muted-foreground mb-4">
                Become part of a global network of cybersecurity professionals committed to making the digital world safer.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access to exclusive networking events</li>
                <li>Mentorship opportunities</li>
                <li>Collaborative research projects</li>
                <li>Professional development resources</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CultureCollaboration;