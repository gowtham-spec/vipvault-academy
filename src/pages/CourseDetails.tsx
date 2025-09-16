import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, BookOpen, Shield, Target, Award, CheckCircle, Plus, Code, BarChart, Monitor, Cpu, Brain, Database } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CourseDetails = () => {
  const { courseId } = useParams();

  const courseData = {
    "mean-stack-development": {
      title: "MEAN Stack Development",
      subtitle: "Master HTML, CSS, JavaScript, Angular, Node.js, Express.js, and MongoDB to build complete web applications",
      category: "Full Stack Development",
      duration: "3 Months",
      sessions: "48 Sessions",
      totalLessons: 120,
      description: "Comprehensive training program covering the entire MEAN stack ecosystem. Learn to build scalable web applications using MongoDB, Express.js, Angular, and Node.js. This course provides hands-on experience with modern JavaScript frameworks and databases.",
      features: [
        "Complete HTML, CSS & JavaScript fundamentals",
        "Angular framework and TypeScript development",
        "Backend development with Node.js & Express.js",
        "MongoDB database design and integration",
        "RESTful API development and consumption",
        "Project deployment and hosting strategies"
      ],
      uniqueFeatures: [
        {
          title: "Full-Stack JavaScript Development",
          description: "Master JavaScript across the entire development stack, from frontend to backend and database interactions.",
          icon: <Code className="w-6 h-6" />
        },
        {
          title: "Real-World Project Experience",
          description: "Build complete web applications from scratch using industry-standard tools and practices.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Modern Development Practices",
          description: "Learn contemporary development methodologies, version control, and deployment strategies.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: HTML5 & CSS3 Fundamentals",
        "Module 02: JavaScript ES6+ Programming",
        "Module 03: Angular Framework & TypeScript",
        "Module 04: Component Architecture & Routing",
        "Module 05: Node.js Backend Development",
        "Module 06: Express.js Framework",
        "Module 07: MongoDB Database Operations",
        "Module 08: RESTful API Development",
        "Module 09: Authentication & Authorization",
        "Module 10: Testing & Debugging",
        "Module 11: Deployment & DevOps",
        "Module 12: Final Project Development"
      ]
    },
    "data-analytics-python-sql": {
      title: "Data Analytics with Python & SQL",
      subtitle: "Learn data cleaning, manipulation, analysis using Python, SQL, and visualization tools",
      category: "Data Science",
      duration: "3 Months",
      sessions: "42 Sessions", 
      totalLessons: 105,
      description: "Comprehensive data analytics program covering Python programming, SQL databases, and data visualization. Learn to extract insights from data using industry-standard tools and techniques for business intelligence and decision making.",
      features: [
        "Microsoft Excel advanced techniques",
        "SQL for data analysis and manipulation",
        "Python programming for data science",
        "Data visualization with matplotlib and seaborn",
        "Statistical analysis and hypothesis testing",
        "Business intelligence and reporting"
      ],
      uniqueFeatures: [
        {
          title: "Industry-Standard Tools",
          description: "Master the most widely used tools in data analytics including Python, SQL, and Excel.",
          icon: <BarChart className="w-6 h-6" />
        },
        {
          title: "Real Business Cases",
          description: "Work with actual business scenarios and datasets to solve real-world problems.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "End-to-End Analytics",
          description: "Learn the complete data pipeline from collection to visualization and reporting.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: Excel for Data Analysis",
        "Module 02: SQL Fundamentals",
        "Module 03: Advanced SQL Queries",
        "Module 04: Python Programming Basics",
        "Module 05: Data Manipulation with Pandas",
        "Module 06: Data Visualization",
        "Module 07: Statistical Analysis",
        "Module 08: Business Intelligence",
        "Module 09: Dashboard Creation",
        "Module 10: Final Analytics Project"
      ]
    },
    "hardware-networking": {
      title: "Hardware and Networking",
      subtitle: "Comprehensive training in computer hardware components, networking fundamentals, and system administration",
      category: "Infrastructure",
      duration: "3 Months",
      sessions: "45 Sessions",
      totalLessons: 112,
      description: "Complete hardware and networking course covering computer assembly, troubleshooting, network configuration, and system administration. Gain practical skills in maintaining and managing IT infrastructure.",
      features: [
        "Computer hardware components and assembly",
        "PC troubleshooting and repair techniques",
        "Network fundamentals and protocols",
        "Router and switch configuration",
        "Wireless networking technologies",
        "Server administration and maintenance"
      ],
      uniqueFeatures: [
        {
          title: "Hands-On Hardware Training",
          description: "Practical experience with real hardware components and assembly techniques.",
          icon: <Monitor className="w-6 h-6" />
        },
        {
          title: "Network Infrastructure",
          description: "Complete understanding of network design, implementation, and troubleshooting.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Industry Certifications",
          description: "Preparation for industry-standard certifications in hardware and networking.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: Computer Hardware Basics",
        "Module 02: PC Assembly and Configuration",
        "Module 03: Hardware Troubleshooting",
        "Module 04: Operating System Installation",
        "Module 05: Networking Fundamentals",
        "Module 06: TCP/IP and Network Protocols",
        "Module 07: Router and Switch Configuration",
        "Module 08: Wireless Networking",
        "Module 09: Network Security Basics",
        "Module 10: Server Administration",
        "Module 11: Network Troubleshooting",
        "Module 12: Final Infrastructure Project"
      ]
    },
    "certified-ethical-hacker": {
      title: "Certified Ethical Hacker (CEH)",
      subtitle: "Learn ethical hacking techniques, penetration testing, and cybersecurity fundamentals with industry-standard tools",
      category: "Cybersecurity",
      duration: "3 Months",
      sessions: "50 Sessions",
      totalLessons: 125,
      description: "Comprehensive ethical hacking course covering penetration testing methodologies, vulnerability assessment, and security analysis. Learn to think like a hacker to better defend against cyber threats.",
      features: [
        "Introduction to cybersecurity principles",
        "Vulnerability assessment techniques",
        "Penetration testing methodologies",
        "Advanced hacking techniques and tools",
        "Security tools and frameworks",
        "Compliance and regulatory requirements"
      ],
      uniqueFeatures: [
        {
          title: "Ethical Hacking Methodology",
          description: "Learn systematic approaches to identifying and exploiting vulnerabilities ethically.",
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: "Real-World Scenarios",
          description: "Practice on realistic environments that simulate actual security challenges.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Industry Recognition",
          description: "Prepare for globally recognized cybersecurity certifications and career advancement.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: Introduction to Ethical Hacking",
        "Module 02: Footprinting and Reconnaissance",
        "Module 03: Scanning Networks",
        "Module 04: Enumeration",
        "Module 05: Vulnerability Analysis",
        "Module 06: System Hacking",
        "Module 07: Malware Threats",
        "Module 08: Sniffing",
        "Module 09: Social Engineering",
        "Module 10: Denial of Service",
        "Module 11: Session Hijacking",
        "Module 12: Evading IDS, Firewalls, and Honeypots",
        "Module 13: Hacking Web Servers",
        "Module 14: Hacking Web Applications"
      ]
    },
    "java-full-stack": {
      title: "Java Full Stack Development",
      subtitle: "Complete Java development training covering core Java, Spring Boot, databases, and modern frontend technologies",
      category: "Full Stack Development",
      duration: "3 Months",
      sessions: "55 Sessions",
      totalLessons: 138,
      description: "Comprehensive Java full-stack development course covering core Java, Spring framework, database integration, and frontend technologies. Build enterprise-level applications with industry best practices.",
      features: [
        "Core Java and Object-Oriented Programming",
        "Frontend technologies (HTML, CSS, JavaScript)",
        "Spring Boot and Spring MVC frameworks",
        "Database design and integration",
        "RESTful web services development",
        "Cloud deployment and DevOps practices"
      ],
      uniqueFeatures: [
        {
          title: "Enterprise Java Development",
          description: "Master enterprise-level Java development with Spring framework and microservices architecture.",
          icon: <Code className="w-6 h-6" />
        },
        {
          title: "Full-Stack Integration",
          description: "Learn to integrate frontend and backend systems seamlessly using modern technologies.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Industry Best Practices",
          description: "Adopt coding standards, design patterns, and deployment strategies used in the industry.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: Core Java Fundamentals",
        "Module 02: Object-Oriented Programming",
        "Module 03: Collections and Exception Handling",
        "Module 04: Frontend Development Basics",
        "Module 05: Advanced JavaScript",
        "Module 06: Spring Framework Introduction",
        "Module 07: Spring Boot Development",
        "Module 08: Database Integration with JPA",
        "Module 09: RESTful Web Services",
        "Module 10: Security Implementation",
        "Module 11: Testing and Quality Assurance",
        "Module 12: Deployment and Cloud Integration"
      ]
    },
    "python-full-stack": {
      title: "Python Full Stack Development", 
      subtitle: "Master Python programming, Django framework, databases, and modern web development practices",
      category: "Full Stack Development",
      duration: "3 Months",
      sessions: "52 Sessions",
      totalLessons: 130,
      description: "Complete Python full-stack development course covering Python programming, Django web framework, database management, and frontend integration. Build scalable web applications using Python ecosystem.",
      features: [
        "Python programming fundamentals and advanced concepts",
        "Frontend development with HTML, CSS, and JavaScript",
        "Django framework and Django REST framework",
        "Database design and ORM integration",
        "API development and integration",
        "DevOps practices and cloud deployment"
      ],
      uniqueFeatures: [
        {
          title: "Python Ecosystem Mastery",
          description: "Master the complete Python ecosystem for web development and data processing.",
          icon: <Code className="w-6 h-6" />
        },
        {
          title: "Rapid Development",
          description: "Learn Django's rapid development capabilities for building robust web applications quickly.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Scalable Architecture",
          description: "Build applications that can scale from startup to enterprise level using Python best practices.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: Python Programming Fundamentals", 
        "Module 02: Advanced Python Concepts",
        "Module 03: Frontend Development Essentials",
        "Module 04: JavaScript and AJAX",
        "Module 05: Django Framework Basics",
        "Module 06: Django Models and Database",
        "Module 07: Django Views and Templates",
        "Module 08: Django REST Framework",
        "Module 09: Authentication and Authorization",
        "Module 10: Testing and Debugging",
        "Module 11: Deployment Strategies",
        "Module 12: Performance Optimization"
      ]
    },
    "embedded-systems": {
      title: "Embedded Systems",
      subtitle: "Learn C/C++ programming, microcontroller interfacing, IoT, and real-time industry projects",
      category: "Hardware Programming", 
      duration: "3 Months",
      sessions: "48 Sessions",
      totalLessons: 120,
      description: "Comprehensive embedded systems course covering microcontroller programming, hardware interfacing, and IoT development. Gain hands-on experience with real-time systems and industrial applications.",
      features: [
        "C/C++ programming for embedded systems",
        "Microcontroller architecture and programming",
        "Hardware interfacing and sensor integration",
        "IoT development and connectivity",
        "Real-time operating systems (RTOS)",
        "Industry project development"
      ],
      uniqueFeatures: [
        {
          title: "Hardware-Software Integration",
          description: "Master the integration of hardware components with software systems for embedded applications.",
          icon: <Cpu className="w-6 h-6" />
        },
        {
          title: "IoT and Automation",
          description: "Develop IoT solutions and automation systems for real-world applications.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Industry Projects",
          description: "Work on actual industry projects to gain practical experience in embedded system development.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: C Programming for Embedded Systems",
        "Module 02: C++ Advanced Concepts",
        "Module 03: Microcontroller Architecture",
        "Module 04: GPIO and Basic Interfacing",
        "Module 05: Serial Communication Protocols",
        "Module 06: ADC and Sensor Integration",
        "Module 07: Timer and Interrupt Handling",
        "Module 08: IoT Fundamentals",
        "Module 09: Wireless Communication",
        "Module 10: Real-Time Operating Systems",
        "Module 11: Industry Project Development",
        "Module 12: Testing and Deployment"
      ]
    },
    "ai-machine-learning": {
      title: "AI & Machine Learning",
      subtitle: "Comprehensive training in Python, machine learning, deep learning, and real-world AI applications",
      category: "Artificial Intelligence",
      duration: "3 Months", 
      sessions: "60 Sessions",
      totalLessons: 150,
      description: "Advanced AI and machine learning course covering Python programming, machine learning algorithms, deep learning, and practical AI applications. Build intelligent systems using cutting-edge technologies.",
      features: [
        "Python programming for AI and data science",
        "Machine learning algorithms and implementation",
        "Deep learning and neural networks",
        "TensorFlow and Scikit-Learn frameworks",
        "Natural language processing and computer vision",
        "Real-world AI project development"
      ],
      uniqueFeatures: [
        {
          title: "Cutting-Edge AI Technologies",
          description: "Learn the latest AI and machine learning technologies used in industry today.",
          icon: <Brain className="w-6 h-6" />
        },
        {
          title: "Practical Applications",
          description: "Apply AI techniques to solve real-world problems across various industries.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Industry-Ready Skills",
          description: "Develop skills that are immediately applicable in AI and data science roles.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: Python for AI and Data Science",
        "Module 02: Mathematics for Machine Learning",
        "Module 03: Data Preprocessing and Analysis",
        "Module 04: Supervised Learning Algorithms",
        "Module 05: Unsupervised Learning",
        "Module 06: Deep Learning Fundamentals",
        "Module 07: Neural Networks and TensorFlow",
        "Module 08: Computer Vision",
        "Module 09: Natural Language Processing",
        "Module 10: Reinforcement Learning",
        "Module 11: AI Ethics and Deployment",
        "Module 12: Capstone AI Project"
      ]
    },
    "database-development": {
      title: "Database Development",
      subtitle: "Master database fundamentals, SQL, database design, and advanced database management techniques",
      category: "Database Management",
      duration: "3 Months",
      sessions: "40 Sessions", 
      totalLessons: 100,
      description: "Comprehensive database development course covering database design, SQL programming, performance optimization, and database administration. Master both relational and NoSQL database technologies.",
      features: [
        "Database design principles and normalization",
        "SQL programming and advanced queries",
        "Database modeling and architecture",
        "Performance tuning and optimization",
        "NoSQL databases and modern approaches",
        "Database security and backup strategies"
      ],
      uniqueFeatures: [
        {
          title: "Complete Database Lifecycle",
          description: "Learn every aspect of database development from design to deployment and maintenance.",
          icon: <Database className="w-6 h-6" />
        },
        {
          title: "Multi-Database Expertise",
          description: "Gain experience with both relational (SQL) and NoSQL database technologies.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Performance Optimization",
          description: "Master database performance tuning and optimization techniques for enterprise applications.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: Database Fundamentals",
        "Module 02: Relational Database Design",
        "Module 03: SQL Basics and Data Types",
        "Module 04: Advanced SQL Queries",
        "Module 05: Stored Procedures and Functions",
        "Module 06: Database Indexing and Optimization",
        "Module 07: Transactions and Concurrency",
        "Module 08: NoSQL Databases",
        "Module 09: Database Security",
        "Module 10: Backup and Recovery",
        "Module 11: Database Administration",
        "Module 12: Final Database Project"
      ]
    },
    "data-science": {
      title: "Data Science",
      subtitle: "Transform raw data into smart decisions with comprehensive data science training and real-world projects",
      category: "Data Analysis",
      duration: "3 Months",
      sessions: "58 Sessions",
      totalLessons: 145,
      description: "Advanced data science course covering statistical analysis, machine learning, data visualization, and business intelligence. Learn to extract actionable insights from complex datasets using modern tools and techniques.",
      features: [
        "Fundamentals of data science and statistics",
        "Data analysis and visualization techniques",
        "Machine learning essentials and algorithms",
        "Deep learning basics and applications",
        "Big data technologies and tools",
        "Real-world data science projects"
      ],
      uniqueFeatures: [
        {
          title: "End-to-End Data Science",
          description: "Master the complete data science pipeline from data collection to model deployment.",
          icon: <BarChart className="w-6 h-6" />
        },
        {
          title: "Business Intelligence",
          description: "Learn to translate data insights into actionable business recommendations.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Industry Applications",
          description: "Work on real-world projects across different industries to build a strong portfolio.",
          icon: <Award className="w-6 h-6" />
        }
      ],
      modules: [
        "Module 01: Data Science Fundamentals",
        "Module 02: Statistics for Data Science",
        "Module 03: Python for Data Science",
        "Module 04: Data Collection and Cleaning",
        "Module 05: Exploratory Data Analysis",
        "Module 06: Data Visualization",
        "Module 07: Machine Learning Fundamentals",
        "Module 08: Advanced Machine Learning",
        "Module 09: Deep Learning Basics",
        "Module 10: Big Data Technologies",
        "Module 11: Model Deployment",
        "Module 12: Capstone Data Science Project"
      ]
    }
  };

  // Add common properties to all courses
  const addCommonProperties = (course: any) => ({
    ...course,
    aiSkills: [
      "Enhanced efficiency and productivity",
      "Real-time data processing and analysis", 
      "Automated decision making capabilities",
      "Advanced pattern recognition",
      "Improved accuracy in predictions",
      "Scalable solution architecture",
      "Industry-standard best practices",
      "Professional development opportunities"
    ],
    selfStudyModules: [
      "Programming Fundamentals Review",
      "Industry Best Practices",
      "Project Management Basics",
      "Version Control with Git",
      "Code Quality and Testing",
      "Documentation Standards",
      "Debugging Techniques",
      "Performance Optimization"
    ],
    targetAudience: [
      {
        title: "Students and Graduates",
        description: "Perfect for students looking to build practical skills and launch their tech careers",
        icon: <BookOpen className="w-8 h-8" />
      },
      {
        title: "Working Professionals", 
        description: "Advance your career with industry-relevant skills and certifications",
        icon: <Users className="w-8 h-8" />
      },
      {
        title: "Career Changers",
        description: "Transition into tech with comprehensive training and hands-on experience",
        icon: <Target className="w-8 h-8" />
      },
      {
        title: "Entrepreneurs",
        description: "Build the technical skills needed to develop your own products and solutions",
        icon: <Award className="w-8 h-8" />
      }
    ],
    topCourses: [
      {
        id: "java-full-stack",
        title: "Java Full Stack",
        subtitle: "Complete Java Development",
        description: "Master enterprise-level Java development with Spring framework and modern technologies.",
        category: "Full Stack Development"
      },
      {
        id: "python-full-stack", 
        title: "Python Full Stack",
        subtitle: "Python Web Development",
        description: "Build scalable web applications using Python, Django, and modern development practices.",
        category: "Full Stack Development"
      },
      {
        id: "ai-machine-learning",
        title: "AI & ML",
        subtitle: "Artificial Intelligence & Machine Learning",
        description: "Master AI technologies and machine learning algorithms for real-world applications.",
        category: "Artificial Intelligence"
      }
    ]
  });

  const course = courseData[courseId as keyof typeof courseData];
  
  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const courseWithCommon = addCommonProperties(course);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-32 px-4 bg-gradient-to-r from-red-900 via-red-800 to-black text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-red-500 opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            {course.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl mb-8 max-w-4xl"
          >
            {course.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Course Info and Inquiry Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Course Description */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Gain unmatched pentesting skills with the CPENT <sup className="text-primary">AI</sup>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {course.description}
              </p>
              
              <div className="space-y-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Course Inquiry Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Course Inquiry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name *" 
                    className="px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name *" 
                    className="px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                />
                <div className="flex items-center space-x-2">
                  <span className="text-primary">🇮🇳 +91</span>
                  <input 
                    type="tel" 
                    placeholder="Enter Phone Number*" 
                    className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                  />
                </div>
                <textarea 
                  placeholder="Please let us know how we can help! *" 
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                />
                <Button className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                  Submit
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What's unique about the CPENT <sup className="text-primary">AI</sup> program
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {course.uniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-3">
              Become a pen tester with AI skills
            </Button>
          </div>
        </div>
      </section>

      {/* AI Skills Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Lead and advance your offensive security career with AI pentesting skills
            </h2>
            <p className="text-muted-foreground mb-8">
              Master systematic, versatile pen testing and AI skills to emulate a hacker's movements, identify and exploit vulnerabilities, assess risks, and craft actionable reports to guide organizations in addressing security threats.
            </p>
            <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
              Inquire now
            </Button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              What AI skills you'll learn
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {courseWithCommon.aiSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-8">Course outline</h2>
            
            <Accordion type="single" collapsible className="space-y-2">
              {course.modules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`} className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-foreground font-medium">{module}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Comprehensive training module covering advanced techniques and practical applications.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-8 bg-card border border-border rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Additional self-study modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courseWithCommon.selfStudyModules.map((module, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-foreground text-sm">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-8">Who is it for?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {courseWithCommon.targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{audience.title}</h3>
                <p className="text-muted-foreground text-sm">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Courses Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Top Courses</h2>
            <p className="text-muted-foreground">
              Discover our most popular certifications and see for yourself why participants rate them so highly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courseWithCommon.topCourses.map((topCourse, index) => (
              <motion.div
                key={topCourse.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-red-900 to-black text-white h-full hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2">{topCourse.title}</div>
                    <div className="text-lg mb-4">{topCourse.subtitle}</div>
                    <p className="text-sm mb-6 opacity-90">{topCourse.description}</p>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      View Course →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-card border-border h-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Looking for something else?</h3>
                  <p className="text-muted-foreground mb-6">
                    EC-Council has many high-profile certifications, all accredited by leading organizations in the cybersecurity industry.
                  </p>
                  <Button className="text-primary hover:text-primary/80">
                    See all certifications →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;