
import { motion } from "framer-motion";

const TrustedTechnology = () => {
  const companies = [
    { name: "IBM", logo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png" },
    { name: "Microsoft", logo: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png" },
    { name: "TCS", logo: "https://logos-world.net/wp-content/uploads/2020/09/TCS-Logo.png" },
    { name: "Xerox", logo: "https://logos-world.net/wp-content/uploads/2020/11/Xerox-Logo.png" },
    { name: "Accenture", logo: "https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png" },
    { name: "Cisco", logo: "https://logos-world.net/wp-content/uploads/2020/06/Cisco-Logo.png" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted worldwide
          </h2>
          <div className="w-16 h-1 bg-destructive mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Earn world-class certifications trusted and highly valued globally by government bodies, private organizations, and the defense.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advance your career with our expert guidance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 max-w-32 object-contain filter opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedTechnology;
