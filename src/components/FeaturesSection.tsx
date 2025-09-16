import { motion } from "framer-motion";
import { Shield, Users, Award, BookOpen, Target, Zap, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Industry-Standard Security",
      description: "Learn with the same tools and methodologies used by top cybersecurity professionals worldwide.",
      color: "text-blue-400",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from certified professionals with real-world experience in cybersecurity and threat management.",
      color: "text-green-400",
    },
    {
      icon: Award,
      title: "Recognized Certifications",
      description: "Earn industry-recognized certifications that employers value and trust in the cybersecurity field.",
      color: "text-primary",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Master everything from ethical hacking to incident response with our structured learning path.",
      color: "text-purple-400",
    },
    {
      icon: Target,
      title: "Hands-On Labs",
      description: "Practice with real-world scenarios in our secure virtual lab environment.",
      color: "text-red-400",
    },
    {
      icon: Zap,
      title: "Fast-Track Learning",
      description: "Accelerated programs designed to get you job-ready in months, not years.",
      color: "text-yellow-400",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join a worldwide network of cybersecurity professionals and continue learning together.",
      color: "text-cyan-400",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with 24/7 access to course materials and recorded sessions.",
      color: "text-orange-400",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            Why Choose VIP Academy
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive cybersecurity training program is designed to take you from beginner to professional with industry-leading resources and support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;