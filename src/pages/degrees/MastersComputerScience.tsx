
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Clock, Users, Award, CheckCircle } from "lucide-react";

const MastersComputerScience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
              <Code className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Master of Science in Computer Science</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive computer science program covering advanced topics in software engineering, algorithms, and emerging technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground">2 Years (36 Credit Hours)</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Format</h3>
              <p className="text-muted-foreground">Online & Hybrid Options</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Accreditation</h3>
              <p className="text-muted-foreground">ABET Accredited</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Program Overview</h3>
              <p className="text-muted-foreground mb-4">
                Our Master of Science in Computer Science program provides advanced education in computational theory, software engineering, and cutting-edge technologies. Students gain deep expertise in algorithms, data structures, machine learning, and software architecture.
              </p>
              <p className="text-muted-foreground">
                The program is designed for both working professionals and recent graduates who want to advance their technical skills and prepare for leadership roles in technology organizations.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Core Curriculum</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Advanced Algorithms & Data Structures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Software Engineering Principles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Database Systems & Design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Machine Learning & AI</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Computer Networks & Distributed Systems</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Operating Systems & Architecture</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Human-Computer Interaction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Computer Graphics & Visualization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Research Methods in Computing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Thesis or Capstone Project</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Specialization Tracks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Software Engineering</h4>
                  <p className="text-muted-foreground text-sm">Focus on large-scale software development, architecture, and project management.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Artificial Intelligence</h4>
                  <p className="text-muted-foreground text-sm">Deep dive into machine learning, neural networks, and cognitive computing.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Data Science</h4>
                  <p className="text-muted-foreground text-sm">Analytics, big data processing, and statistical modeling techniques.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Cybersecurity</h4>
                  <p className="text-muted-foreground text-sm">Information security, cryptography, and secure system design.</p>
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

export default MastersComputerScience;
