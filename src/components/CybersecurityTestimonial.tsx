import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const CybersecurityTestimonial = () => {
  return (
    <section className="py-20 bg-muted dark:bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Cybersecurity professionals working together"
              className="w-full h-96 object-cover rounded-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              What our learners say
            </h2>
            
            <div className="bg-background dark:bg-cyber-darker p-8 rounded-lg shadow-lg">
              <Quote className="w-12 h-12 text-primary mb-6" />
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "The most impactful achievement after earning the Certified CISO was completing a transformative program fundamentally and redesigning the approach to Cyber Security at the BBC."
              </blockquote>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">Justen Dyche</div>
                <div className="text-muted-foreground">Head of Information Security, BBC</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityTestimonial;