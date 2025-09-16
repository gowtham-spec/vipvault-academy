import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Palette, Database, Shield, Cloud, BarChart3, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const CourseOfferings = () => {
  const courses = [
    {
      category: "FULL STACK AND WEB DEVELOPMENT",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-600 to-purple-800",
      borderColor: "border-purple-500/20",
      courses: [
        "Java Full-Stack Development",
        "Python Full-Stack Development", 
        "Web Full-Stack Development",
        "MEAN Stack Development",
        "MERN Stack Development",
        "DOTNET Full-Stack Development",
        "Mobile App Development"
      ]
    },
    {
      category: "EMBEDDED SYSTEMS WITH IOT",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-orange-500 to-orange-700",
      borderColor: "border-orange-500/20",
      courses: [
        "AI & Machine Learning",
        "Robotics with IOT",
        "Embedded Systems"
      ]
    },
    {
      category: "UI/UX & DIGITAL SKILLS",
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
      borderColor: "border-blue-500/20",
      courses: [
        "UI/UX Design",
        "Digital Marketing"
      ]
    },
    {
      category: "CYBERSECURITY & NETWORKING",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-red-700",
      borderColor: "border-red-500/20",
      courses: [
        "Cybersecurity & Networking",
        "Choose from 14 specialized subcourses"
      ]
    },
    {
      category: "DATA & ANALYTICS",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
      borderColor: "border-green-500/20",
      courses: [
        "Data Science",
        "Database Developer",
        "Data Analyst with Python & SQL"
      ]
    },
    {
      category: "ERP & SAP",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-pink-500 to-pink-700",
      borderColor: "border-pink-500/20",
      courses: [
        "Cloud Accounting",
        "Tally Prime & ERP",
        "SAP-FICO & S/4 HANA",
        "SAP- Human Resources & Production planning"
      ]
    },
    {
      category: "DEVOPS & CLOUD",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-700",
      borderColor: "border-yellow-500/20",
      courses: [
        "DevOps Engineer Master Program",
        "AWS Cloud Computing",
        "Azure Cloud Services"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-primary font-cabin font-semibold text-sm uppercase tracking-wider">
              Transform Your Career
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-raleway font-bold leading-tight mb-6">
            <span className="text-foreground">Courses</span> <span className="text-primary">Offered</span>
          </h2>
          <p className="text-xl font-cabin text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover industry-focused programs designed to accelerate your professional growth and unlock new career opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {courses.map((course, index) => (
            <CourseCard key={course.category} course={course} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-card rounded-3xl p-12 border border-border/50 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <Database className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="text-2xl font-raleway font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-muted-foreground font-cabin mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through our comprehensive virtual internship programs
          </p>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-cabin rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group">
              Explore All Courses
              <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOfferings;
