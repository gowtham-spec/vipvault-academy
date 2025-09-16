import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, Star, Code, Cpu, Palette, Shield, BarChart3, Briefcase, Cloud, Database, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Code,
  Cpu, 
  Palette,
  Shield,
  BarChart3,
  Briefcase,
  Cloud,
  Database
};

const categoryData = {
  "full-stack-web-development": {
    title: "FULL STACK AND WEB DEVELOPMENT",
    icon: "Code",
    color: "from-purple-600 to-purple-800",
    description: "Master the complete web development stack from frontend to backend. Build modern, scalable web applications using the latest technologies and frameworks.",
    shortDescription: "Transform your career with comprehensive full-stack development skills that are in high demand across industries.",
    duration: "4-8 Months",
    courses: [
      "Java Full-Stack Development",
      "Python Full-Stack Development", 
      "Web Full-Stack Development",
      "MEAN Stack Development",
      "MERN Stack Development",
      "DOTNET Full-Stack Development",
      "Mobile App Development"
    ],
    highlights: [
      "Industry-relevant curriculum designed by experts",
      "Hands-on projects with real-world applications",
      "Individual mentorship and career guidance",
      "100% placement assistance guarantee",
      "Live project experience with industry partners"
    ],
    learningOutcomes: [
      {
        title: "Frontend Development",
        description: "Master HTML, CSS, JavaScript, React, Angular, and modern UI frameworks",
        icon: "Palette"
      },
      {
        title: "Backend Development", 
        description: "Learn server-side programming with Node.js, Python, Java, and .NET",
        icon: "Database"
      },
      {
        title: "Database Management",
        description: "Work with SQL, NoSQL, MongoDB, PostgreSQL, and database optimization",
        icon: "Database"
      }
    ],
    instructor: {
      name: "Tech Academy Team",
      title: "Full-Stack Development Experts",
      bio: "Our team of senior developers brings over 50+ years of combined industry experience from top tech companies.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    testimonials: [
      {
        name: "Rajesh Kumar",
        feedback: "The full-stack program completely transformed my career. I went from a junior developer to a senior full-stack engineer at a Fortune 500 company.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Priya Sharma",
        feedback: "Amazing comprehensive curriculum! The hands-on projects and mentorship helped me land my dream job as a full-stack developer.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  "embedded-systems-iot": {
    title: "EMBEDDED SYSTEMS WITH IOT",
    icon: "Cpu",
    color: "from-orange-500 to-orange-700",
    description: "Dive into the world of embedded systems and Internet of Things. Learn to design and develop smart devices that connect and communicate in our increasingly digital world.",
    shortDescription: "Build the future with embedded systems and IoT technologies that power smart cities, autonomous vehicles, and connected devices.",
    duration: "5-6 Months",
    courses: [
      "AI & Machine Learning",
      "Robotics with IOT",
      "Embedded Systems"
    ],
    highlights: [
      "Hands-on hardware and software integration",
      "Real IoT project development experience",
      "Industry-standard development tools and platforms",
      "Connection with IoT industry leaders",
      "Certification preparation for embedded systems"
    ],
    learningOutcomes: [
      {
        title: "Embedded Programming",
        description: "Master C/C++, microcontroller programming, and real-time systems",
        icon: "Code"
      },
      {
        title: "IoT Development",
        description: "Build connected devices with sensors, actuators, and communication protocols",
        icon: "Cpu"
      },
      {
        title: "AI Integration",
        description: "Implement machine learning models in embedded systems and edge computing",
        icon: "Database"
      }
    ],
    instructor: {
      name: "Dr. Ankit Patel",
      title: "Embedded Systems Expert",
      bio: "PhD in Electrical Engineering with 15+ years in embedded systems design for automotive and IoT industries.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    testimonials: [
      {
        name: "Vikram Singh",
        feedback: "The IoT course opened up a completely new career path for me. Now I'm working on cutting-edge smart city projects.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  "ui-ux-digital-skills": {
    title: "UI/UX & DIGITAL SKILLS",
    icon: "Palette",
    color: "from-blue-500 to-blue-700",
    description: "Create exceptional user experiences through thoughtful design and digital marketing strategies. Learn to design interfaces that users love and market them effectively.",
    shortDescription: "Master the art of user-centered design and digital marketing to create products that resonate with users and drive business growth.",
    duration: "3-4 Months",
    courses: [
      "UI/UX Design",
      "Digital Marketing"
    ],
    highlights: [
      "Design thinking and user research methodologies",
      "Industry-standard design tools (Figma, Adobe Creative Suite)",
      "Digital marketing strategy and implementation",
      "Portfolio development and career guidance",
      "Client project experience"
    ],
    learningOutcomes: [
      {
        title: "User Experience Design",
        description: "Master user research, wireframing, prototyping, and usability testing",
        icon: "Palette"
      },
      {
        title: "Visual Design",
        description: "Learn color theory, typography, layout principles, and design systems",
        icon: "Palette"
      },
      {
        title: "Digital Marketing",
        description: "Understand SEO, social media marketing, content strategy, and analytics",
        icon: "BarChart3"
      }
    ],
    instructor: {
      name: "Neha Agarwal",
      title: "Design & Marketing Expert",
      bio: "Senior UX Designer and Digital Marketing Strategist with 10+ years at leading design agencies and tech companies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    testimonials: [
      {
        name: "Shreya Gupta",
        feedback: "The UI/UX course taught me not just design skills but how to think from a user's perspective. My career transformation has been incredible.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  "cybersecurity-networking": {
    title: "CYBERSECURITY & NETWORKING",
    icon: "Shield",
    color: "from-red-500 to-red-700",
    description: "Protect digital assets and infrastructure with comprehensive cybersecurity and networking expertise. Choose from 14 specialized subcourses to build your security career.",
    shortDescription: "Become a cybersecurity expert with specialized training in network security, ethical hacking, and digital forensics.",
    duration: "3-8 Months",
    courses: [
      "Cybersecurity & Networking",
      "Choose from 14 specialized subcourses"
    ],
    highlights: [
      "14 specialized cybersecurity subcourses available",
      "Hands-on penetration testing and ethical hacking",
      "Industry certifications preparation (CEH, CISSP, Security+)",
      "Real-world security incident response training",
      "Career placement in cybersecurity roles"
    ],
    learningOutcomes: [
      {
        title: "Network Security",
        description: "Master firewall configuration, intrusion detection, and secure communications",
        icon: "Shield"
      },
      {
        title: "Ethical Hacking",
        description: "Learn penetration testing, vulnerability assessment, and security auditing",
        icon: "Code"
      },
      {
        title: "Digital Forensics",
        description: "Investigate security incidents and analyze digital evidence",
        icon: "Database"
      }
    ],
    instructor: {
      name: "Rahul Mehta",
      title: "Cybersecurity Specialist",
      bio: "Certified Ethical Hacker and Security Consultant with 12+ years of experience protecting enterprise infrastructure.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    testimonials: [
      {
        name: "Amit Kumar",
        feedback: "The cybersecurity program is incredibly comprehensive. I'm now leading security operations at a major financial institution.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  "data-analytics": {
    title: "DATA & ANALYTICS",
    icon: "BarChart3",
    color: "from-green-500 to-green-700",
    description: "Transform raw data into actionable insights. Master data science, analytics, and database development to drive business decisions with data-driven solutions.",
    shortDescription: "Unlock the power of data with comprehensive training in data science, analytics, and database technologies.",
    duration: "4-6 Months",
    courses: [
      "Data Science",
      "Database Developer",
      "Data Analyst with Python & SQL"
    ],
    highlights: [
      "Real-world datasets and business case studies",
      "Advanced machine learning and AI techniques",
      "Industry-standard tools (Python, R, SQL, Tableau, Power BI)",
      "Data visualization and storytelling skills",
      "Certification in leading analytics platforms"
    ],
    learningOutcomes: [
      {
        title: "Data Analysis",
        description: "Master statistical analysis, data mining, and predictive modeling",
        icon: "BarChart3"
      },
      {
        title: "Machine Learning",
        description: "Implement ML algorithms and build predictive models for business insights",
        icon: "Database"
      },
      {
        title: "Data Visualization",
        description: "Create compelling dashboards and reports using modern visualization tools",
        icon: "Palette"
      }
    ],
    instructor: {
      name: "Dr. Kavita Sharma",
      title: "Data Science Expert",
      bio: "PhD in Statistics with 8+ years of experience in data science consulting for Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    testimonials: [
      {
        name: "Rohit Patel",
        feedback: "The data science program gave me the skills to transition from traditional analytics to advanced machine learning. Amazing career growth!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  "erp-sap": {
    title: "ERP & SAP",
    icon: "Briefcase",
    color: "from-pink-500 to-pink-700",
    description: "Master enterprise resource planning and SAP systems that power global businesses. Gain expertise in financial management, HR systems, and business process optimization.",
    shortDescription: "Become an ERP and SAP specialist with skills in financial systems, human resources, and business process management.",
    duration: "3-5 Months",
    courses: [
      "Cloud Accounting",
      "Tally Prime & ERP",
      "SAP-FICO & S/4 HANA",
      "SAP- Human Resources & Production planning"
    ],
    highlights: [
      "SAP certification preparation and guidance",
      "Real SAP system access for hands-on practice",
      "Business process optimization techniques",
      "Financial management and accounting expertise",
      "Direct placement opportunities with SAP partners"
    ],
    learningOutcomes: [
      {
        title: "SAP FICO",
        description: "Master financial accounting and controlling modules in SAP",
        icon: "Briefcase"
      },
      {
        title: "HR Management",
        description: "Implement human resources and payroll systems using SAP HR",
        icon: "Users"
      },
      {
        title: "Business Processes",
        description: "Optimize business workflows and enterprise resource planning",
        icon: "Database"
      }
    ],
    instructor: {
      name: "Suresh Agarwal",
      title: "SAP Certified Consultant",
      bio: "SAP certified professional with 15+ years of experience implementing ERP solutions for multinational corporations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    testimonials: [
      {
        name: "Deepak Singh",
        feedback: "The SAP course opened doors to high-paying consulting opportunities. The practical approach made complex concepts easy to understand.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  "devops-cloud": {
    title: "DEVOPS & CLOUD",
    icon: "Cloud",
    color: "from-yellow-500 to-yellow-700",
    description: "Master cloud computing and DevOps practices that power modern software development. Learn AWS, Azure, and automation tools to build scalable, reliable systems.",
    shortDescription: "Bridge the gap between development and operations with cloud computing and DevOps expertise that's critical for modern businesses.",
    duration: "4-6 Months",
    courses: [
      "DevOps Engineer Master Program",
      "AWS Cloud Computing",
      "Azure Cloud Services"
    ],
    highlights: [
      "AWS and Azure certification preparation",
      "Hands-on cloud project implementation",
      "CI/CD pipeline setup and automation",
      "Infrastructure as Code (IaC) expertise",
      "High-demand skills with excellent career prospects"
    ],
    learningOutcomes: [
      {
        title: "Cloud Platforms",
        description: "Master AWS, Azure, and Google Cloud services for scalable applications",
        icon: "Cloud"
      },
      {
        title: "DevOps Automation",
        description: "Implement CI/CD pipelines, containerization, and infrastructure automation",
        icon: "Code"
      },
      {
        title: "System Architecture",
        description: "Design resilient, scalable, and cost-effective cloud architectures",
        icon: "Database"
      }
    ],
    instructor: {
      name: "Manoj Kumar",
      title: "Cloud Architect",
      bio: "AWS and Azure certified architect with 12+ years of experience designing cloud solutions for enterprise clients.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    testimonials: [
      {
        name: "Sandeep Sharma",
        feedback: "The DevOps program completely changed my career trajectory. I'm now a cloud architect at a leading tech company with amazing growth opportunities.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  }
};

const CategoryDetail = () => {
  const { category } = useParams<{ category: string }>();
  const categoryInfo = category ? categoryData[category as keyof typeof categoryData] : null;

  if (!categoryInfo) {
    return <Navigate to="/not-found" replace />;
  }

  const IconComponent = iconMap[categoryInfo.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center gap-4 p-6 bg-gradient-to-br ${categoryInfo.color} rounded-3xl text-white mb-8 shadow-2xl`}>
              <IconComponent className="w-12 h-12" />
              <h1 className="text-3xl lg:text-4xl font-raleway font-bold">
                {categoryInfo.title}
              </h1>
            </div>
            
            <p className="text-xl font-cabin text-muted-foreground mb-8 leading-relaxed">
              {categoryInfo.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-cabin font-medium">{categoryInfo.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-cabin font-medium">{categoryInfo.courses.length} Courses</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-cabin font-medium">Expert Instructors</span>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-cabin rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group">
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Academy Information */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="bg-card rounded-3xl p-12 border shadow-lg mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-raleway font-bold text-foreground mb-6">
                About Our Academy
              </h2>
              <p className="text-lg font-cabin text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We are a leading technology education institute dedicated to transforming careers through hands-on, industry-relevant training. Our expert instructors bring real-world experience to help you master the skills that matter in today's competitive job market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-raleway font-bold text-foreground mb-2">10,000+ Students</h3>
                <p className="text-muted-foreground font-cabin">Successfully trained professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-raleway font-bold text-foreground mb-2">95% Placement</h3>
                <p className="text-muted-foreground font-cabin">Success rate in job placements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-raleway font-bold text-foreground mb-2">4.9/5 Rating</h3>
                <p className="text-muted-foreground font-cabin">Average student satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-raleway font-bold text-foreground mb-6">
              Courses in This Category
            </h2>
            <p className="text-xl font-cabin text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {categoryInfo.shortDescription}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {categoryInfo.courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${categoryInfo.color} rounded-xl flex items-center justify-center text-white`}>
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-raleway font-bold text-foreground">{course}</h3>
                </div>
                <p className="text-muted-foreground font-cabin mb-4">
                  Comprehensive training program designed to make you industry-ready with hands-on projects and expert mentorship.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-raleway font-bold text-foreground mb-6">
              What You'll Learn
            </h2>
            <p className="text-xl font-cabin text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Gain comprehensive skills and knowledge that will set you apart in the industry
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryInfo.learningOutcomes.map((outcome, index) => {
              const OutcomeIcon = iconMap[outcome.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${categoryInfo.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                    <OutcomeIcon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-raleway font-bold text-foreground mb-4">{outcome.title}</h3>
                  <p className="text-muted-foreground font-cabin leading-relaxed">
                    {outcome.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-raleway font-bold text-foreground mb-6">
              Program Highlights
            </h2>
            <p className="text-xl font-cabin text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Why our students choose us for their career transformation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryInfo.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-card rounded-2xl p-6 border shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground font-cabin leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-raleway font-bold text-foreground mb-6">
              Meet Your Instructor
            </h2>
          </motion.div>
          
          <motion.div 
            className="bg-card rounded-3xl p-12 border shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={categoryInfo.instructor.image}
              alt={categoryInfo.instructor.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
            />
            <h3 className="text-2xl font-raleway font-bold text-foreground mb-2">
              {categoryInfo.instructor.name}
            </h3>
            <p className="text-primary font-cabin font-semibold mb-6">
              {categoryInfo.instructor.title}
            </p>
            <p className="text-muted-foreground font-cabin leading-relaxed max-w-2xl mx-auto">
              {categoryInfo.instructor.bio}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-raleway font-bold text-foreground mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl font-cabin text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real success stories from our graduates
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryInfo.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-8 border shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-raleway font-bold text-foreground">{testimonial.name}</h4>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                        <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground font-cabin leading-relaxed">
                  "{testimonial.feedback}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className={`bg-gradient-to-br ${categoryInfo.color} rounded-3xl p-12 text-white text-center shadow-2xl`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-raleway font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands of professionals who have already transformed their careers with our expert training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-lg font-cabin rounded-full shadow-lg">
                Enroll Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-cabin rounded-full">
                Download Curriculum
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryDetail;