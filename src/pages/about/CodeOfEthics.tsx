import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CodeOfEthics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Code of Ethics</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed">
              Our commitment to ethical practices in cybersecurity education and training.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Ethical Principles</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-3">
                <li>Respect for intellectual property and confidential information</li>
                <li>Commitment to honest and transparent communication</li>
                <li>Dedication to continuous learning and professional development</li>
                <li>Responsibility to use cybersecurity knowledge for lawful purposes only</li>
                <li>Obligation to protect client and student privacy</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Professional Conduct</h3>
              <p className="text-muted-foreground mb-4">
                All VIP Academy members, instructors, and students are expected to maintain the highest standards of professional conduct.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Act with integrity in all professional relationships</li>
                <li>Maintain competence through continuing education</li>
                <li>Avoid conflicts of interest</li>
                <li>Report unethical behavior when encountered</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Cybersecurity Ethics</h3>
              <p className="text-muted-foreground mb-4">
                Special ethical considerations for cybersecurity professionals.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use penetration testing skills only with proper authorization</li>
                <li>Protect sensitive information discovered during security assessments</li>
                <li>Disclose vulnerabilities responsibly</li>
                <li>Never use skills for malicious purposes</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CodeOfEthics;