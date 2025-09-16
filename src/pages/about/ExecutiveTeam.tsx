import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ExecutiveTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Executive Team</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              Meet the visionary leaders driving VIP Academy's mission to deliver world-class cybersecurity education and training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">CEO</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center mb-2">Chief Executive Officer</h3>
              <p className="text-muted-foreground text-center mb-4">Leading our organization with over 20 years of cybersecurity experience</p>
              <p className="text-sm text-muted-foreground">
                Responsible for strategic direction, partnerships, and ensuring VIP Academy maintains its position as a leader in cybersecurity education.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">CTO</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center mb-2">Chief Technology Officer</h3>
              <p className="text-muted-foreground text-center mb-4">Driving innovation in cybersecurity training technology</p>
              <p className="text-sm text-muted-foreground">
                Oversees our technical infrastructure, course development platform, and emerging technology integration.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">CAO</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center mb-2">Chief Academic Officer</h3>
              <p className="text-muted-foreground text-center mb-4">Ensuring excellence in curriculum and instruction</p>
              <p className="text-sm text-muted-foreground">
                Leads curriculum development, instructor training, and maintains our high educational standards.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">COO</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center mb-2">Chief Operating Officer</h3>
              <p className="text-muted-foreground text-center mb-4">Managing global operations and partnerships</p>
              <p className="text-sm text-muted-foreground">
                Oversees day-to-day operations, manages strategic partnerships, and ensures operational excellence.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExecutiveTeam;