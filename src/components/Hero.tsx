import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import CourseInquiryPopup from "@/components/CourseInquiryPopup";

const Hero = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center">
      {/* Content */}
      <motion.div
        className="relative z-10 text-white px-4 w-[90%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
      >
        <div className="text-left max-w-3xl">
          <motion.p
            className="text-xl md:text-2xl mb-4 font-cabin"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WELCOME TO
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-raleway font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-primary">VIP ACADEMY</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-4 font-cabin"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Virtual Internship Programs for Professional Growth
          </motion.p>

          <motion.p
            className="text-base md:text-lg mb-8 font-cabin"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Empowering careers through innovative virtual internships, industry
            mentorship, and hands-on project experience. Join us to bridge the
            gap between academic learning and professional success.
          </motion.p>

          {/* Feature Boxes */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-raleway font-bold text-primary mb-2">
                100% Placement Support
              </h3>
              <p className="text-xs font-cabin text-white/90">
                Guaranteed career placement assistance with industry partnerships
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-raleway font-bold text-primary mb-2">
                Industry Expert Trainers
              </h3>
              <p className="text-xs font-cabin text-white/90">
                Learn from experienced professionals with real-world expertise
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-raleway font-bold text-primary mb-2">
                Hands-on Projects
              </h3>
              <p className="text-xs font-cabin text-white/90">
                Build real-world projects to strengthen your portfolio
              </p>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-cabin rounded-full">
                Start Your Journey
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-cabin rounded-full border-0">
                Explore Courses
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Inquiry Button */}
      <button
        onClick={() => setPopupOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white px-6 py-3 rounded-full shadow-xl hover:bg-primary/90 transition"
      >
        Inquiry Now
      </button>

      {/* Popup Component */}
      <CourseInquiryPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        courseTitle="General Inquiry"
      />
    </section>
  );
};

export default Hero;
