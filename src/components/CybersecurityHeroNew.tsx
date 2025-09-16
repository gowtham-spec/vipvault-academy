
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Users, Trophy, ArrowRight, CheckCircle } from "lucide-react";

const CybersecurityHeroNew = () => {
  const stats = [
    {
      number: "15K+",
      label: "Security Professionals Trained",
      icon: Users
    },
    {
      number: "98%",
      label: "Job Placement Success",
      icon: Trophy
    },
    {
      number: "500+",
      label: "Global Companies Trust Us",
      icon: Shield
    },
    {
      number: "24/7",
      label: "Learning Support Available",
      icon: Eye
    }
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-background overflow-hidden pt-4">
      {/* Classic & Modern Background Design */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />
        
        {/* Classic Geometric Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="classicGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="30" cy="30" r="1" fill="hsl(var(--primary))" opacity="0.6"/>
              </pattern>
              <pattern id="modernDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="hsl(var(--primary))" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#classicGrid)" />
            <rect width="100%" height="100%" fill="url(#modernDots)" />
          </svg>
        </div>

        {/* Animated Ornamental Elements */}
        <motion.div
          className="absolute top-16 right-32 w-32 h-32 border border-primary/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-4 border border-primary/30 rounded-full">
            <div className="absolute inset-4 border border-primary/40 rounded-full" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-32 right-16 w-24 h-24 border-2 border-primary/25 rotate-45"
          animate={{
            rotate: [45, 405],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-2 border border-primary/35 rotate-45" />
        </motion.div>

        {/* Modern Floating Orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-tl from-secondary/30 to-primary/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Elegant Lines */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          viewBox="0 0 1920 1080"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        >
          <path
            d="M0,540 Q480,200 960,540 T1920,540"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
          />
          <path
            d="M0,300 Q640,600 1280,300 T2560,300"
            stroke="hsl(var(--secondary))"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,10"
          />
        </motion.svg>

        {/* Floating Security Icons with Enhanced Animation */}
        <motion.div
          className="absolute top-20 left-10 text-primary/25"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Shield className="w-16 h-16 drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-primary/25"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -10, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <Lock className="w-12 h-12 drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-20 text-primary/25"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <Eye className="w-14 h-14 drop-shadow-lg" />
        </motion.div>

        {/* Modern Glassmorphism Cards */}
        <motion.div
          className="absolute bottom-32 right-16 w-32 h-20 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-xl"
          animate={{
            y: [0, -15, 0],
            rotateY: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute top-60 left-32 w-24 h-24 bg-secondary/15 backdrop-blur-sm border border-secondary/25 rounded-2xl"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 scale-[0.8] origin-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 max-w-2xl pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-6 py-3 text-sm font-semibold text-primary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Shield className="w-4 h-4" />
              #1 Cybersecurity Training Academy in India
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl lg:text-6xl font-bold leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Defend the{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
                Digital World
              </span>{" "}
              with Elite Cybersecurity Skills
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Master cutting-edge cybersecurity techniques, earn industry-recognized certifications, and join the elite force protecting organizations worldwide from cyber threats.
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {["Live Hacking Labs", "Real Incident Response", "Industry Mentorship", "Job Guarantee Program"].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg group"
              >
                Start Your Cyber Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

          </motion.div>

          {/* Right Content - Stats Dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Cybersecurity Terminal Simulation */}
            <div className="relative">
              <div className="bg-cyber-dark border-2 border-primary/30 rounded-xl p-6 shadow-2xl font-mono text-sm">
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-primary font-semibold">SecureShell v2.1</span>
                </div>

                {/* Terminal Content */}
                <div className="space-y-2 text-green-400 h-56 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-primary">admin@cyberacademy:~$</span> scanning network...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-yellow-400"
                  >
                    [INFO] Initializing security protocols
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    [✓] Firewall: ACTIVE
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    [✓] Intrusion Detection: MONITORING
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="text-red-400"
                  >
                    [!] Threat detected: 192.168.1.xxx
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    [✓] Threat neutralized successfully
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                  >
                    <span className="text-primary">admin@cyberacademy:~$</span> <span className="animate-pulse">|</span>
                  </motion.div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-16 right-4 space-y-2">
                    {stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-background/90 border border-primary/30 rounded px-2 py-1 text-xs"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2 + idx * 0.3 }}
                      >
                        <div className="text-primary font-bold">{stat.number}</div>
                        <div className="text-muted-foreground text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 3D Holographic Effect */}
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full border border-border/40 dark:border-primary/20 rounded-xl"
                animate={{
                  rotateX: [0, 2, 0],
                  rotateY: [0, -2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: "preserve-3d" }}
              />
              
              {/* Security Badges */}
              <div className="mt-6 flex justify-center gap-4">
                <motion.div
                  className="bg-primary/10 border border-primary/30 rounded-lg px-3 py-2 text-primary text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <Lock className="w-4 h-4 inline mr-2" />
                  Encrypted
                </motion.div>
                <motion.div
                  className="bg-primary/10 border border-primary/30 rounded-lg px-3 py-2 text-primary text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <Shield className="w-4 h-4 inline mr-2" />
                  Protected
                </motion.div>
              </div>
            </div>

            {/* Floating Alert */}
            <motion.div
              className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground p-3 rounded-lg shadow-lg"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-destructive-foreground rounded-full animate-pulse" />
                Threat Detected
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityHeroNew;
