import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExtraContent = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Detection",
      description: "Learn cutting-edge techniques to identify and neutralize sophisticated cyber threats before they compromise systems."
    },
    {
      icon: Award,
      title: "Industry Certifications", 
      description: "Earn globally recognized certifications including CEH, CISSP, CompTIA Security+, and specialized cybersecurity credentials."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Get guidance from seasoned cybersecurity professionals with real-world experience in enterprise security."
    },
    {
      icon: Clock,
      title: "24/7 Lab Access",
      description: "Practice in our state-of-the-art virtual labs anytime with unlimited access to hacking environments and tools."
    },
    {
      icon: Target,
      title: "Hands-on Projects",
      description: "Work on real security incidents, vulnerability assessments, and penetration testing scenarios."
    },
    {
      icon: Zap,
      title: "Rapid Skill Building",
      description: "Accelerated learning paths designed to get you job-ready in cybersecurity within months, not years."
    }
  ];

  const achievements = [
    { number: "15,000+", label: "Graduates Placed" },
    { number: "500+", label: "Partner Companies" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "Countries Served" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Why Choose Us */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">VIP Academy</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just teach cybersecurity - we prepare you to be the defender the digital world needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="bg-primary/10 border border-primary/20 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-8">Our Track Record Speaks</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Ready to Secure Your Future?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our comprehensive cybersecurity programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Explore Our Programs
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraContent;