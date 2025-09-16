<<<<<<< HEAD

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Search, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    user,
    signOut,
    loading
  } = useAuth();

  const developmentCourses = [
    {
      title: "FULL STACK DEVELOPMENT",
      items: [
        { name: "Java Full Stack Development", id: "java-full-stack" },
        { name: "Python Full Stack Development", id: "python-full-stack" }, 
        { name: "MEAN Stack Development", id: "mean-stack-development" }
      ]
    },
    {
      title: "DATA & ANALYTICS",
      items: [
        { name: "Data Science", id: "data-science" },
        { name: "Data Analytics with Python & SQL", id: "data-analytics-python-sql" },
        { name: "Database Development", id: "database-development" }
      ]
    },
    {
      title: "CYBERSECURITY",
      items: [
        { name: "Certified Ethical Hacker (CEH)", id: "certified-ethical-hacker" }
      ]
    },
    {
      title: "EMERGING TECHNOLOGIES",
      items: [
        { name: "AI & Machine Learning", id: "ai-machine-learning" },
        { name: "Embedded Systems", id: "embedded-systems" }
      ]
    }
  ];

  const specializedCourses = [
    { name: "Hardware and Networking", id: "hardware-networking" },
    { name: "Database Development", id: "database-development" },
    { name: "AI & Machine Learning", id: "ai-machine-learning" },
    { name: "Data Science Fundamentals", id: "data-science" },
    { name: "Cybersecurity Essentials", id: "certified-ethical-hacker" },
    { name: "Cloud Computing Basics", id: "java-full-stack" },
    { name: "Mobile App Development", id: "java-full-stack" },
    { name: "DevOps and CI/CD", id: "python-full-stack" },
    { name: "Blockchain Technology", id: "java-full-stack" },
    { name: "IoT Development", id: "embedded-systems" }
  ];

  const degreePrograms = [
    { name: "Masters of Cyber Security", href: "/degrees/masters-cyber-security" },
    { name: "Master of Science in Computer Science", href: "/degrees/masters-computer-science" },
    { name: "MBA in Cyber Security", href: "/degrees/mba-cyber-security" },
    { name: "Bachelors of Science in Cyber Security", href: "/degrees/bachelors-cyber-security" },
    { name: "Graduate Certificate Program", href: "/degrees/graduate-certificate" },
    { name: "Programs for Veterans", href: "/degrees/veterans-programs" }
  ];

  const advisoryServices = [
    { name: "Security Awareness", href: "/advisory/security-awareness" },
    { name: "VIP Academy Global Services", href: "/advisory/global-services" }
  ];

  const aboutSections = [
    {
      title: "OUR STORY",
      items: [
        { name: "Executive Team", href: "/about/executive-team" },
        { name: "Governing Committees", href: "/about/governing-committees" },
        { name: "Code Of Ethics", href: "/about/code-of-ethics" },
        { name: "Culture and Collaboration", href: "/about/culture-collaboration" },
        { name: "Global Awards", href: "/about/global-awards" },
        { name: "Pressroom", href: "/about/pressroom" },
        { name: "Accreditations", href: "/about/accreditations" },
        { name: "Contact Us", href: "/about/contact-us" }
      ]
    },
    {
      title: "PARTNER WITH US",
      items: [
        { name: "Become a Trainer", href: "/partner/become-trainer" },
        { name: "Become a Training Partner", href: "/partner/training-partner" },
        { name: "Become an Academic Partner", href: "/partner/academic-partner" },
        { name: "Become a Reseller", href: "/partner/reseller" },
        { name: "Become a Subject Matter Expert", href: "/partner/subject-matter-expert" },
        { name: "Become an VIP Academy Advisory Board Member", href: "/partner/advisory-board" },
        { name: "Become a Conference Partner", href: "/partner/conference-partner" },
        { name: "Become a Media Partner", href: "/partner/media-partner" }
      ]
    },
    {
      title: "RESOURCES",
      items: [
        { name: "NICE Framework Mapping", href: "/resources/nice-framework" },
        { name: "Store", href: "/resources/store" },
        { name: "Certified Member Portal", href: "/resources/member-portal" },
        { name: "Training Partner Portal", href: "/resources/training-portal" },
        { name: "Have a Question", href: "/resources/questions" }
      ]
    },
    {
      title: "THOUGHT LEADERSHIP",
      items: [
        { name: "C|EH Hall of Fame 2025", href: "/thought/ceh-hall-fame-2025" },
        { name: "C|EH Hall of Fame 2023", href: "/thought/ceh-hall-fame-2023" },
        { name: "C|EH Hall of Fame 2021-2022", href: "/thought/ceh-hall-fame-2021-2022" },
        { name: "C|CISO Hall of Fame 2023", href: "/thought/cciso-hall-fame-2023" },
        { name: "Success Stories", href: "/thought/success-stories" },
        { name: "Cybersecurity Exchange", href: "/thought/cybersecurity-exchange" },
        { name: "Ethical Hacking Leaderboard", href: "/thought/ethical-hacking-leaderboard" }
      ]
    }
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  const handleSignInClick = () => {
    navigate('/auth');
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">VA</span>
            </div>
            <span className="text-xl font-bold text-foreground">VIP Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent">
                    Train & Certify
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-3 gap-6 p-6 w-[800px]">
                      <div className="col-span-2 grid grid-cols-2 gap-6">
                        {developmentCourses.map((category, idx) => (
                          <div key={idx} className="space-y-2">
                            <h4 className="text-primary text-sm font-semibold">{category.title}</h4>
                            <ul className="space-y-1">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link 
                                    to={`/course/${item.id}`} 
                                    className="text-foreground hover:text-primary text-xs transition-colors block"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="border-l border-border pl-6">
                        <h4 className="text-primary text-sm font-semibold mb-4">Specialized Courses</h4>
                        <ul className="space-y-1">
                          {specializedCourses.map((item, idx) => (
                            <li key={idx}>
                              <Link 
                                to={`/course/${item.id}`} 
                                className="text-foreground hover:text-primary text-xs transition-colors block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent">
                    Degrees
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[400px]">
                      <ul className="space-y-2">
                        {degreePrograms.map((degree, idx) => (
                          <li key={idx}>
                            <Link 
                              to={degree.href} 
                              className="text-foreground hover:text-primary text-sm transition-colors block p-2 rounded hover:bg-muted"
                            >
                              {degree.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent">
                    Advisory
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">
                      <ul className="space-y-2">
                        {advisoryServices.map((service, idx) => (
                          <li key={idx}>
                            <Link 
                              to={service.href} 
                              className="text-foreground hover:text-primary text-sm transition-colors block p-2 rounded hover:bg-muted"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-4 gap-6 p-6 w-[900px]">
                      {aboutSections.map((section, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="text-destructive text-xs font-semibold uppercase tracking-wide">{section.title}</h4>
                          <ul className="space-y-1">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link 
                                  to={item.href} 
                                  className="text-foreground hover:text-primary text-xs transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              to="/courses" 
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/courses' ? "text-primary font-semibold" : ""}`}
            >
              Courses
            </Link>
            <Link 
              to="/blog" 
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/blog' ? "text-primary font-semibold" : ""}`}
            >
              Blog
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Search size={18} />
            </Button>
            <ThemeToggle />
            {loading ? (
              <div className="w-8 h-8 animate-pulse bg-muted rounded"></div>
            ) : user ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 text-foreground">
                  <User size={20} />
                  <span className="text-sm">Welcome back!</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleSignOut} className="flex items-center space-x-1">
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                  GET TRAINING!
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link 
                to="/courses" 
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors ${location.pathname === '/courses' ? "text-primary font-semibold" : ""}`} 
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/blog" 
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors ${location.pathname === '/blog' ? "text-primary font-semibold" : ""}`} 
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile Auth */}
              <div className="px-3 py-2">
                {loading ? (
                  <div className="w-full h-8 animate-pulse bg-gray-200 rounded"></div>
                ) : user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <User size={20} />
                      <span className="text-sm">Welcome back!</span>
                    </div>
                    <Button variant="outline" onClick={handleSignOut} className="w-full flex items-center justify-center space-x-1">
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button onClick={() => {
                      handleSignInClick();
                      setIsOpen(false);
                    }} className="w-full">
                      Sign In
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
=======
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-gradient-to-r from-gold to-gold-light flex items-center justify-center">
              <span className="text-navy font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-navy">VIP Academy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-navy hover:text-gold transition-colors">Courses</a>
            <a href="#about" className="text-navy hover:text-gold transition-colors">About</a>
            <a href="#testimonials" className="text-navy hover:text-gold transition-colors">Success Stories</a>
            <a href="#contact" className="text-navy hover:text-gold transition-colors">Contact</a>
          </nav>
          
          <Button variant="default" className="bg-gradient-to-r from-gold to-gold-light text-navy hover:shadow-gold">
            Enroll Now
          </Button>
        </div>
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
      </div>
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
