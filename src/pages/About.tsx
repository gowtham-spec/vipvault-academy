
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUpVariants, staggerChildrenVariants } from "@/hooks/useScrollAnimation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildrenVariants}
      >
        <div className="w-4/5 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUpVariants}>
              <h1 className="text-4xl lg:text-5xl font-raleway font-bold text-foreground mb-6">
                About <span className="text-primary">VIP Academy</span>
              </h1>
              <p className="text-lg font-cabin text-muted-foreground leading-relaxed mb-6">
                VIP Academy stands at the forefront of professional education, specializing in Virtual Internship Programs that bridge the critical gap between academic learning and industry requirements. Founded with the vision of empowering individuals through practical, hands-on training, we have established ourselves as a trusted partner in career transformation.
              </p>
              <p className="text-lg font-cabin text-muted-foreground leading-relaxed mb-6">
                Our comprehensive approach combines cutting-edge curriculum with real-world project experience, ensuring our participants develop not just technical skills, but also the professional acumen required to excel in today's competitive landscape.
              </p>
              <p className="text-lg font-cabin text-muted-foreground leading-relaxed">
                At VIP Academy, we believe that quality education should be accessible, practical, and immediately applicable. Our programs are designed by industry experts and delivered through innovative virtual platforms that provide flexibility without compromising on learning outcomes.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning together" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-foreground text-background">
        <div className="w-4/5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-raleway font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg font-cabin leading-relaxed">
                To empower individuals with industry-relevant skills and practical experience through innovative virtual internship programs, creating a bridge between academic knowledge and professional success in the rapidly evolving technology landscape.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-raleway font-bold mb-6 text-primary">Our Vision</h2>
              <p className="text-lg font-cabin leading-relaxed">
                To become the global leader in virtual professional education, recognized for transforming careers and building industry-ready professionals who drive innovation and excellence in their respective fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="w-4/5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-foreground mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-xl font-cabin text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our approach to education and professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-background border-none shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-raleway font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-sm font-cabin text-muted-foreground leading-relaxed">
                  We maintain the highest standards in curriculum design, instruction delivery, and student support to ensure exceptional learning outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-background border-none shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-raleway font-bold text-foreground mb-3">Collaboration</h3>
                <p className="text-sm font-cabin text-muted-foreground leading-relaxed">
                  We foster a collaborative learning environment that encourages peer interaction, knowledge sharing, and collective growth.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-background border-none shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-raleway font-bold text-foreground mb-3">Innovation</h3>
                <p className="text-sm font-cabin text-muted-foreground leading-relaxed">
                  We continuously evolve our teaching methods and technology integration to provide cutting-edge educational experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-background border-none shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-raleway font-bold text-foreground mb-3">Empowerment</h3>
                <p className="text-sm font-cabin text-muted-foreground leading-relaxed">
                  We empower learners with confidence, skills, and knowledge needed to succeed in their chosen career paths.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-4 bg-background">
        <div className="w-4/5 mx-auto">
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold text-center mb-16 text-foreground">
            Meet Our <span className="text-primary">Leadership Team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Director */}
            <div className="bg-card rounded-lg p-6 text-center shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Dr. Rajesh Kumar" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-raleway font-bold text-foreground mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-primary font-cabin mb-4">Director & Founder</p>
              <p className="text-sm font-cabin text-muted-foreground leading-relaxed">
                With over 15 years of experience in IT education and industry consulting, Dr. Kumar leads VIP Academy's vision of transforming professional education through innovative virtual learning platforms.
              </p>
            </div>

            {/* Academic Head */}
            <div className="bg-card rounded-lg p-6 text-center shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Prof. Priya Nair" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-raleway font-bold text-foreground mb-2">Prof. Priya Nair</h3>
              <p className="text-primary font-cabin mb-4">Academic Head</p>
              <p className="text-sm font-cabin text-muted-foreground leading-relaxed">
                Prof. Nair oversees curriculum development and academic standards at VIP Academy. Her expertise in educational technology ensures our programs meet the highest quality standards.
              </p>
            </div>

            {/* Industry Relations Head */}
            <div className="bg-card rounded-lg p-6 text-center shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Mr. Arun Menon" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-raleway font-bold text-foreground mb-2">Mr. Arun Menon</h3>
              <p className="text-primary font-cabin mb-4">Industry Relations Head</p>
              <p className="text-sm font-cabin text-muted-foreground leading-relaxed">
                Mr. Menon manages our industry partnerships and placement initiatives, ensuring our students have access to the best career opportunities in their chosen fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="w-4/5 mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-raleway font-bold mb-4">
            Join the VIP Academy Community
          </h2>
          <p className="text-lg font-cabin mb-8 max-w-2xl mx-auto">
            Begin your journey towards professional excellence with our industry-focused virtual internship programs.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-cabin">
            Explore Our Programs →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
