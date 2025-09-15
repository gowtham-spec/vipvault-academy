import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    title: "Executive Leadership Mastery",
    description: "Transform into a visionary leader with advanced strategic thinking and team management skills.",
    duration: "12 weeks",
    level: "Advanced",
    price: "$2,999",
    features: ["1:1 Mentorship", "Live Workshops", "Peer Network", "Certificate"]
  },
  {
    id: 2,
    title: "Digital Innovation Strategy",
    description: "Master cutting-edge digital transformation strategies used by Fortune 500 companies.",
    duration: "8 weeks", 
    level: "Intermediate",
    price: "$1,999",
    features: ["Case Studies", "Industry Experts", "Project Work", "Tools Access"]
  },
  {
    id: 3,
    title: "Elite Sales & Negotiation",
    description: "Learn high-stakes negotiation tactics and sales psychology from top performers.",
    duration: "10 weeks",
    level: "Advanced", 
    price: "$2,499",
    features: ["Role Play", "Real Scenarios", "Psychology Training", "Ongoing Support"]
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">Premium Courses</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Exclusive Learning Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Carefully crafted programs designed by industry leaders to accelerate your career growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-gold border-gold/30">{course.level}</Badge>
                  <span className="text-sm text-muted-foreground">{course.duration}</span>
                </div>
                <CardTitle className="text-2xl text-navy group-hover:text-gold transition-colors">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-navy">{course.price}</span>
                  <Button className="bg-gradient-to-r from-gold to-gold-light text-navy hover:shadow-gold">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;