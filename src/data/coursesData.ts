import { Code, Cpu, Palette, Shield, BarChart3, Briefcase, Cloud, Database, Users, Clock, BookOpen } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  duration: string;
  sessionLength: string;
  totalLessons: number;
  prerequisites: string;
  color: string;
  iconName: string;
  image: string;
  instructor: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
  learningOutcomes: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
  syllabus: Array<{
    module: string;
    title: string;
    topics: string[];
  }>;
  studentProjects: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  testimonials: Array<{
    name: string;
    feedback: string;
    image: string;
    rating: number;
  }>;
}

export const coursesData: Course[] = [
  {
    id: "ui-ux-design",
    title: "UI/UX DESIGN",
    category: "UI/UX & DIGITAL SKILLS",
    description: "Learning UI/UX enables you to design user-centered interfaces, focusing on aesthetics and user experience. Whether you want to become a UI/UX designer or simply want to enhance your skills, mastering user experience is key to create digital solutions that are both functional and visually appealing.",
    shortDescription: "Master the art of creating intuitive and beautiful user interfaces that enhance user experience across digital platforms.",
    duration: "4 Month Course",
    sessionLength: "2 Hour Sessions",
    totalLessons: 45,
    prerequisites: "No prior design or programming knowledge is required for this course. Basic computer literacy is helpful.",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconName: "Palette",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Anita Sharma",
      title: "Senior UI/UX Designer",
      bio: "Anita is a professional UI/UX designer with 6+ years of experience in creating user-centered designs. She has worked with startups and established companies to deliver exceptional digital experiences.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    learningOutcomes: [
      {
        title: "User Research and Analysis",
        description: "Learn to conduct user research, analyze user behavior, and create user personas.",
        iconName: "Users"
      },
      {
        title: "Information Organization",
        description: "Master information architecture, user flows, and wireframing techniques.",
        iconName: "Database"
      },
      {
        title: "Visual Design Principles",
        description: "Apply design principles, color theory, and typography for stunning interfaces.",
        iconName: "Palette"
      }
    ],
    syllabus: [
      {
        module: "01",
        title: "Introduction to UI/UX Design",
        topics: [
          "Overview of UI/UX design principles",
          "Understanding user experience vs user interface",
          "Industry trends and opportunities",
          "Design thinking methodology"
        ]
      },
      {
        module: "02",
        title: "User Research and Analysis", 
        topics: [
          "Conducting user interviews and surveys",
          "Creating user personas and journey maps",
          "Competitive analysis techniques",
          "Usability testing fundamentals"
        ]
      },
      {
        module: "03",
        title: "Wireframing and Prototyping",
        topics: [
          "Low-fidelity wireframing techniques",
          "Information architecture design",
          "Interactive prototyping with Figma",
          "User flow creation and optimization"
        ]
      },
      {
        module: "04",
        title: "Visual Design Principles",
        topics: [
          "Color theory and psychology",
          "Typography and hierarchy",
          "Layout principles and grid systems",
          "Creating design systems"
        ]
      },
      {
        module: "05",
        title: "Interaction Design and Microinteractions",
        topics: [
          "Designing smooth user interactions",
          "Animation principles for UX",
          "Microinteraction patterns",
          "Responsive design considerations"
        ]
      }
    ],
    studentProjects: [
      {
        title: "Drink Interface",
        description: "User interface design for a beverage ordering app",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ],
    testimonials: [
      {
        name: "Olivia Singh",
        feedback: "My journey from of learning UI/UX's training, and more to fame, I've advanced significantly in my understanding of design thinking.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "William Davis",
        feedback: "The balance of practical exercises and conceptual theory provided an excellent foundation for my career in UI/UX.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Evelyn Wilson",
        feedback: "The comprehensive course covered user centered design, visual design, and prototyping - everything I needed to transition into UX design.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "CYBERSECURITY & NETWORKING",
    category: "CYBERSECURITY & NETWORKING",
    description: "Master comprehensive cybersecurity and networking skills through specialized subcourses. Choose from system administration, ethical hacking, network security, and advanced security operations to build your expertise in protecting digital assets and infrastructure.",
    shortDescription: "Comprehensive cybersecurity training with specialized subcourses in networking, system administration, and ethical hacking.",
    duration: "3-8 Month Course",
    sessionLength: "2 Hour Sessions",
    totalLessons: 40,
    prerequisites: "Basic computer knowledge is required. Some courses may require networking fundamentals.",
    color: "bg-gradient-to-br from-red-500 to-red-700",
    iconName: "Shield",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Rajesh Kumar",
      title: "Cybersecurity Expert",
      bio: "Rajesh is a certified cybersecurity professional with 12+ years of experience in network security, ethical hacking, and system administration. He holds multiple industry certifications including CEH, CISSP, and CISM.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    learningOutcomes: [
      {
        title: "Network Security Mastery",
        description: "Learn advanced networking concepts and security implementations",
        iconName: "Shield"
      },
      {
        title: "System Administration",
        description: "Master Windows and Linux system administration and server management",
        iconName: "Database"
      },
      {
        title: "Ethical Hacking Skills",
        description: "Develop penetration testing and vulnerability assessment capabilities",
        iconName: "Code"
      }
    ],
    syllabus: [
      {
        module: "01",
        title: "Fundamentals of Cybersecurity",
        topics: [
          "Introduction to cybersecurity concepts",
          "Types of cyber threats and attacks",
          "Security frameworks and compliance",
          "Risk assessment and management"
        ]
      },
      {
        module: "02",
        title: "Network Security",
        topics: [
          "Network protocols and architecture",
          "Firewall configuration and management",
          "Intrusion detection and prevention",
          "VPN and secure communications"
        ]
      },
      {
        module: "03",
        title: "System Administration",
        topics: [
          "Windows and Linux server management",
          "User access control and permissions",
          "System monitoring and maintenance",
          "Backup and disaster recovery"
        ]
      }
    ],
    studentProjects: [
      {
        title: "Network Security Lab",
        description: "Hands-on security testing and network hardening project",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ],
    testimonials: [
      {
        name: "Amit Sharma",
        feedback: "The cybersecurity course provided comprehensive training across multiple domains. The hands-on approach made complex concepts easy to understand.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Priya Patel",
        feedback: "Excellent coverage of both theoretical concepts and practical skills. The instructor's industry experience really shows.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Vikram Singh",
        feedback: "From networking basics to advanced penetration testing, this course covers everything needed for a career in cybersecurity.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  {
    id: "java-fullstack",
    title: "JAVA FULL-STACK DEVELOPMENT",
    category: "FULL STACK AND WEB DEVELOPMENT",
    description: "Become a proficient Java Full-Stack developer by mastering both front-end and back-end technologies. Learn Java, Spring Boot, React, and database management to build complete web applications from scratch.",
    shortDescription: "Master both front-end and back-end development using Java ecosystem and modern web technologies.",
    duration: "6 Month Course",
    sessionLength: "2 Hour Sessions",
    totalLessons: 60,
    prerequisites: "Basic programming knowledge is helpful but not required. We'll start with Java fundamentals and progress to advanced topics.",
    color: "bg-gradient-to-br from-purple-600 to-purple-700",
    iconName: "Code",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Vikram Patel",
      title: "Senior Java Developer",
      bio: "Vikram has 10+ years of experience in Java development and has led teams in building enterprise-scale applications. He specializes in Spring ecosystem and microservices architecture.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    learningOutcomes: [
      {
        title: "Core Java Programming",
        description: "Master Java fundamentals, OOP concepts, and advanced features",
        iconName: "Code"
      },
      {
        title: "Spring Boot Development",
        description: "Build robust backend applications with Spring Boot framework",
        iconName: "Database"
      },
      {
        title: "Frontend Integration",
        description: "Connect frontend technologies with Java backend services",
        iconName: "Palette"
      }
    ],
    syllabus: [
      {
        module: "01",
        title: "Java Fundamentals",
        topics: [
          "Java syntax and basic programming concepts",
          "Object-oriented programming principles",
          "Collections framework and generics",
          "Exception handling and file I/O"
        ]
      },
      {
        module: "02",
        title: "Database Management",
        topics: [
          "SQL fundamentals and database design",
          "JDBC and database connectivity",
          "JPA and Hibernate ORM",
          "Database optimization techniques"
        ]
      },
      {
        module: "03",
        title: "Spring Framework",
        topics: [
          "Spring Boot application development",
          "RESTful API design and implementation",
          "Spring Security for authentication",
          "Microservices architecture patterns"
        ]
      }
    ],
    studentProjects: [
      {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce application with user authentication and payment integration",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ],
    testimonials: [
      {
        name: "Ravi Kumar",
        feedback: "The Java full-stack course provided comprehensive training from basics to advanced topics. Now I'm confident building enterprise applications.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Shreya Gupta",
        feedback: "Excellent practical approach with real-world projects. The instructor's industry experience really showed in the quality of teaching.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Arjun Singh",
        feedback: "From zero knowledge in Java to building complete web applications - this course transformed my career prospects completely.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  {
    id: "python-fullstack",
    title: "PYTHON FULL-STACK DEVELOPMENT",
    category: "FULL STACK AND WEB DEVELOPMENT",
    description: "Master Python full-stack development from backend APIs to frontend frameworks. Learn Django/Flask, React, PostgreSQL, and deployment strategies to build scalable web applications that solve real-world problems.",
    shortDescription: "Build modern web applications using Python, Django/Flask, and JavaScript frameworks with real-world projects.",
    duration: "6 Month Course",
    sessionLength: "2 Hour Sessions",
    totalLessons: 55,
    prerequisites: "Basic programming concepts are helpful but not required. We'll start with Python fundamentals and build up to advanced web development.",
    color: "bg-gradient-to-br from-green-600 to-green-700",
    iconName: "Code",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Priya Sharma",
      title: "Senior Python Developer",
      bio: "Priya is a full-stack Python developer with 8+ years of experience building scalable web applications. She has worked with startups and Fortune 500 companies, specializing in Django and modern frontend frameworks.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    learningOutcomes: [
      {
        title: "Python Programming Mastery",
        description: "Master Python fundamentals, advanced concepts, and best practices",
        iconName: "Code"
      },
      {
        title: "Web Framework Expertise",
        description: "Build robust APIs and web applications using Django and Flask",
        iconName: "Database"
      },
      {
        title: "Full-Stack Integration",
        description: "Connect Python backends with modern frontend frameworks",
        iconName: "Cloud"
      }
    ],
    syllabus: [
      {
        module: "01",
        title: "Python Fundamentals",
        topics: [
          "Python syntax and data structures",
          "Object-oriented programming in Python",
          "File handling and error management",
          "Advanced Python concepts and libraries"
        ]
      },
      {
        module: "02",
        title: "Web Development with Django",
        topics: [
          "Django framework fundamentals",
          "Models, Views, and Templates (MVT)",
          "Django REST Framework for APIs",
          "User authentication and authorization"
        ]
      },
      {
        module: "03",
        title: "Database Integration & Deployment",
        topics: [
          "PostgreSQL and database design",
          "ORM concepts and query optimization",
          "Frontend integration with React",
          "Deployment strategies and DevOps basics"
        ]
      }
    ],
    studentProjects: [
      {
        title: "Social Media Platform",
        description: "Full-stack social media application with real-time features and user interactions",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ],
    testimonials: [
      {
        name: "Rahul Verma",
        feedback: "The Python course was incredibly comprehensive. I went from knowing nothing about web development to building full applications in just 6 months.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Sneha Patel",
        feedback: "Priya's teaching style made complex concepts easy to understand. The hands-on projects really prepared me for real-world development.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Kiran Singh",
        feedback: "The course structure is excellent with perfect balance of theory and practical work. Now I'm working as a full-stack Python developer.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  {
    id: "data-science",
    title: "DATA SCIENCE",
    category: "DATA & ANALYTICS",
    description: "Dive deep into the world of data science and unlock insights from complex datasets. Learn Python, machine learning, statistical analysis, and data visualization to become a skilled data scientist.",
    shortDescription: "Extract valuable insights from data using advanced analytics, machine learning, and statistical techniques.",
    duration: "5 Month Course",
    sessionLength: "2.5 Hour Sessions",
    totalLessons: 50,
    prerequisites: "Basic mathematics and statistics knowledge is recommended. Programming experience is helpful but not required.",
    color: "bg-gradient-to-br from-green-500 to-green-600",
    iconName: "BarChart3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Dr. Meera Joshi",
      title: "Lead Data Scientist",
      bio: "Dr. Joshi holds a PhD in Statistics and has 8+ years of experience in data science across finance and healthcare industries. She specializes in machine learning and predictive analytics.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    learningOutcomes: [
      {
        title: "Statistical Analysis",
        description: "Master statistical methods and hypothesis testing for data analysis",
        iconName: "BarChart3"
      },
      {
        title: "Machine Learning",
        description: "Build predictive models using supervised and unsupervised learning",
        iconName: "Cpu"
      },
      {
        title: "Data Visualization",
        description: "Create compelling visualizations to communicate insights effectively",
        iconName: "Palette"
      }
    ],
    syllabus: [
      {
        module: "01",
        title: "Python for Data Science",
        topics: [
          "Python programming fundamentals",
          "NumPy and Pandas for data manipulation",
          "Data cleaning and preprocessing techniques",
          "Working with APIs and web scraping"
        ]
      },
      {
        module: "02",
        title: "Statistical Analysis",
        topics: [
          "Descriptive and inferential statistics",
          "Probability distributions and hypothesis testing",
          "Correlation and regression analysis",
          "A/B testing and experimental design"
        ]
      },
      {
        module: "03",
        title: "Machine Learning",
        topics: [
          "Supervised learning algorithms",
          "Unsupervised learning and clustering",
          "Model evaluation and selection",
          "Deep learning fundamentals"
        ]
      }
    ],
    studentProjects: [
      {
        title: "Customer Analytics Dashboard",
        description: "Predictive analytics dashboard for customer behavior analysis",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ],
    testimonials: [
      {
        name: "Karan Mehta",
        feedback: "The data science course opened up a completely new career path for me. The practical projects were especially valuable.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Pooja Sharma",
        feedback: "Excellent balance of theory and hands-on practice. Dr. Joshi's teaching style made complex concepts easy to understand.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Rohit Verma",
        feedback: "From basic statistics to building machine learning models, this course covers everything needed to become a data scientist.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  },
  {
    id: "ai-machine-learning",
    title: "AI & MACHINE LEARNING",
    category: "EMBEDDED SYSTEMS WITH IOT",
    description: "Dive deep into artificial intelligence and machine learning to build intelligent systems that can learn and adapt. Master neural networks, deep learning, computer vision, and natural language processing with hands-on implementation.",
    shortDescription: "Dive deep into artificial intelligence and machine learning with practical implementation and projects.",
    duration: "6 Month Course",
    sessionLength: "2 Hour Sessions",
    totalLessons: 45,
    prerequisites: "Strong foundation in mathematics and programming is recommended. Knowledge of Python and basic statistics will be helpful.",
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    iconName: "Cpu",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    instructor: {
      name: "Dr. Amit Kumar",
      title: "AI Research Scientist",
      bio: "Dr. Kumar holds a PhD in Computer Science with specialization in Machine Learning. He has 12+ years of experience in AI research and has published numerous papers in top-tier conferences. He has led AI teams at major tech companies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    learningOutcomes: [
      {
        title: "Machine Learning Algorithms",
        description: "Master supervised, unsupervised, and reinforcement learning techniques",
        iconName: "Cpu"
      },
      {
        title: "Deep Learning & Neural Networks",
        description: "Build and train deep neural networks for complex problem solving",
        iconName: "Code"
      },
      {
        title: "AI Model Deployment",
        description: "Deploy AI models to production environments and optimize performance",
        iconName: "Cloud"
      }
    ],
    syllabus: [
      {
        module: "01",
        title: "AI & ML Fundamentals",
        topics: [
          "Introduction to artificial intelligence concepts",
          "Machine learning types and applications",
          "Mathematical foundations for ML",
          "Python libraries for AI (TensorFlow, PyTorch)"
        ]
      },
      {
        module: "02",
        title: "Advanced Machine Learning",
        topics: [
          "Supervised learning algorithms",
          "Unsupervised learning and clustering",
          "Ensemble methods and model optimization",
          "Feature engineering and selection"
        ]
      },
      {
        module: "03",
        title: "Deep Learning & Neural Networks",
        topics: [
          "Neural network architectures",
          "Convolutional Neural Networks (CNNs)",
          "Recurrent Neural Networks (RNNs)",
          "Transfer learning and fine-tuning"
        ]
      },
      {
        module: "04",
        title: "Specialized AI Applications",
        topics: [
          "Computer vision and image processing",
          "Natural language processing",
          "Reinforcement learning basics",
          "AI model deployment and MLOps"
        ]
      }
    ],
    studentProjects: [
      {
        title: "Smart Image Recognition System",
        description: "AI-powered image classification system with real-time processing capabilities",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ],
    testimonials: [
      {
        name: "Aditya Sharma",
        feedback: "The AI course completely transformed my understanding of machine learning. Dr. Kumar's expertise in the field is evident in every lecture.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Deepika Rao",
        feedback: "From basic concepts to building complex neural networks, this course covers everything comprehensively. The hands-on projects were incredible.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      },
      {
        name: "Sanjay Gupta",
        feedback: "The practical approach to learning AI concepts made complex topics accessible. Now I'm confidently working on AI projects in my company.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
        rating: 5
      }
    ]
  }
];

// Cybersecurity subcourses data
export const cybersecuritySubcourses = [
  {
    id: "hardware-networking",
    title: "Hardware & Networking Course",
    duration: "3 months",
    description: "Learn computer hardware components, networking fundamentals, and troubleshooting techniques."
  },
  {
    id: "windows-system-admin",
    title: "Certified Windows System Admin",
    duration: "4 months",
    description: "Master Windows system administration, user management, and system maintenance."
  },
  {
    id: "windows-server-admin",
    title: "Certified Windows Server Admin",
    duration: "5 months",
    description: "Advanced Windows Server administration, Active Directory, and enterprise services."
  },
  {
    id: "linux-system-admin",
    title: "Certified Linux System Admin",
    duration: "4 months",
    description: "Comprehensive Linux system administration, shell scripting, and system security."
  },
  {
    id: "linux-server-admin",
    title: "Certified Linux Server Admin",
    duration: "5 months",
    description: "Advanced Linux server management, services configuration, and performance tuning."
  },
  {
    id: "network-admin",
    title: "Certified Network Admin",
    duration: "6 months",
    description: "Network infrastructure management, routing, switching, and network security."
  },
  {
    id: "ethical-hacker",
    title: "Certified Ethical Hacker",
    duration: "6 months",
    description: "Learn ethical hacking techniques, penetration testing, and vulnerability assessment."
  },
  {
    id: "penetration-tester",
    title: "Certified Penetration Tester",
    duration: "7 months",
    description: "Advanced penetration testing methodologies and security assessment techniques."
  },
  {
    id: "security-operation-center",
    title: "Security Operation Center",
    duration: "5 months",
    description: "SOC operations, incident response, and security monitoring techniques."
  },
  {
    id: "vapt",
    title: "VAPT (Vulnerability and Penetration Testing)",
    duration: "6 months",
    description: "Comprehensive vulnerability assessment and penetration testing methodologies."
  },
  {
    id: "zero-trust-architecture",
    title: "Zero Trust Architecture",
    duration: "4 months",
    description: "Modern zero trust security model implementation and best practices."
  },
  {
    id: "iot-device-security",
    title: "IoT Device Management & Security",
    duration: "5 months",
    description: "Secure IoT device deployment, management, and security protocols."
  },
  {
    id: "devops-cicd",
    title: "DevOps & CI/CD Pipelines",
    duration: "6 months",
    description: "DevOps practices, continuous integration, and secure deployment pipelines."
  },
  {
    id: "proxmox-course",
    title: "Proxmox Course",
    duration: "3 months",
    description: "Proxmox virtualization platform administration and management."
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return coursesData.find(course => course.id === id);
};

export const getAllCourses = (): Course[] => {
  return coursesData;
};
