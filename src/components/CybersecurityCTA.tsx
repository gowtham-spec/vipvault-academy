import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";

const CybersecurityCTA = () => {
  return (
    <section className="py-20 bg-cyber-gray dark:bg-cyber-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <GraduationCap className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let's go
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              I want to learn more about VIP Academy's certifications!
            </h3>
            <Button 
              className="bg-destructive hover:bg-destructive/90 text-white px-8 py-3 text-lg font-semibold"
            >
              Explore more
            </Button>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <Target className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              I'm interested
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              I'm ready to start my cybersecurity career
            </h3>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyber-gray px-8 py-3 text-lg font-semibold"
            >
              Inquire now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityCTA;