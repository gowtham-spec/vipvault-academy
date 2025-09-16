
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Clock, Users, Award } from "lucide-react";

const Degrees = () => {
  const degreePrograms = [
    {
      title: "Masters of Cyber Security",
      description: "Advanced cybersecurity education for professionals seeking leadership roles in information security.",
      duration: "2 Years",
      format: "Online/Hybrid",
      href: "/degrees/masters-cyber-security"
    },
    {
      title: "Master of Science in Computer Science",
      description: "Comprehensive computer science program covering advanced topics in software engineering and technology.",
      duration: "2 Years",
      format: "Online/Hybrid", 
      href: "/degrees/masters-computer-science"
    },
    {
      title: "MBA in Cyber Security",
      description: "Business-focused cybersecurity degree combining management principles with technical security expertise.",
      duration: "2 Years",
      format: "Online/Hybrid",
      href: "/degrees/mba-cyber-security"
    },
    {
      title: "Bachelors of Science in Cyber Security",
      description: "Undergraduate program providing foundational knowledge in cybersecurity principles and practices.",
      duration: "4 Years",
      format: "Online/Hybrid",
      href: "/degrees/bachelors-cyber-security"
    },
    {
      title: "Graduate Certificate Program",
      description: "Focused certificate programs for professionals seeking specialized cybersecurity skills.",
      duration: "1 Year",
      format: "Online",
      href: "/degrees/graduate-certificate"
    },
    {
      title: "Programs for Veterans",
      description: "Specialized degree programs designed to support military veterans transitioning to cybersecurity careers.",
      duration: "Varies",
      format: "Online/Hybrid",
      href: "/degrees/veterans-programs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative py-32 px-4 bg-foreground text-background">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Graduation ceremony" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 w-4/5 mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-raleway font-bold mb-6">
            Degree <span className="text-primary">Programs</span>
          </h1>
          <p className="text-xl font-cabin max-w-2xl mx-auto">
            Advance Your Career with Our Comprehensive Degree Programs in Cybersecurity and Technology
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="w-4/5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose Your <span className="text-primary">Academic Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our degree programs are designed to provide comprehensive education that combines theoretical knowledge with practical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {degreePrograms.map((program, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    <Link to={program.href}>
                      {program.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{program.format}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={program.href}
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Degrees;
