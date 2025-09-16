import { motion } from "framer-motion";
import { Globe, Calendar, Users } from "lucide-react";

const CybersecurityStats = () => {
  const stats = [
    {
      icon: Globe,
      number: "150",
      label: "Countries trust our globally recognized certifications"
    },
    {
      icon: Calendar,
      number: "20+ years",
      label: "Experience delivering world-class cybersecurity training"
    },
    {
      icon: Users,
      number: "380,000",
      label: "Certified professionals worldwide trust our training"
    }
  ];

  return (
    <section className="py-20 bg-background dark:bg-cyber-darker">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real <span className="text-primary">success</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CybersecurityStats;