import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GoverningCommittees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Governing Committees</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              Our governing committees ensure the highest standards of education, ethics, and industry relevance in all our programs.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Academic Standards Committee</h3>
              <p className="text-muted-foreground mb-4">
                Responsible for maintaining curriculum quality, establishing learning objectives, and ensuring our courses meet industry demands.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Curriculum review and approval</li>
                <li>Instructor qualification standards</li>
                <li>Assessment and certification criteria</li>
                <li>Industry alignment verification</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Ethics and Compliance Committee</h3>
              <p className="text-muted-foreground mb-4">
                Ensures all activities adhere to ethical standards and regulatory requirements in cybersecurity education.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Code of ethics enforcement</li>
                <li>Compliance monitoring</li>
                <li>Ethical hacking guidelines</li>
                <li>Student conduct policies</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Industry Advisory Board</h3>
              <p className="text-muted-foreground mb-4">
                Comprised of industry leaders who provide strategic guidance on emerging threats and skill requirements.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Industry trend analysis</li>
                <li>Skills gap identification</li>
                <li>Partnership opportunities</li>
                <li>Graduate placement support</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Quality Assurance Committee</h3>
              <p className="text-muted-foreground mb-4">
                Monitors and improves the quality of our educational delivery and student experience.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Course effectiveness evaluation</li>
                <li>Student feedback analysis</li>
                <li>Continuous improvement initiatives</li>
                <li>Performance metrics tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GoverningCommittees;