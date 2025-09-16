import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CybersecurityHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-cyber-darker dark:bg-cyber-darker">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-cyber-darker/80"></div>
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-white px-4 w-full max-w-4xl mx-auto text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-white">Cybersecurity courses</span><br />
          <span className="text-white">for the </span>
          <span className="text-primary">real world</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get certified with the industry leaders in cybersecurity training
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-destructive hover:bg-destructive/90 text-white px-8 py-3 text-lg font-semibold"
          >
            GET TRAINING!
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-cyber-darker px-8 py-3 text-lg font-semibold"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CybersecurityHero;