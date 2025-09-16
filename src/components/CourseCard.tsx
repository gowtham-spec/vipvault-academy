
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { memo } from "react";

// Function to convert category names to correct slugs that match CategoryDetail page
const getCategorySlug = (category: string): string => {
  const slugMap: { [key: string]: string } = {
    "FULL STACK AND WEB DEVELOPMENT": "full-stack-web-development",
    "EMBEDDED SYSTEMS WITH IOT": "embedded-systems-iot", 
    "UI/UX & DIGITAL SKILLS": "ui-ux-digital-skills",
    "CYBERSECURITY & NETWORKING": "cybersecurity-networking",
    "DATA & ANALYTICS": "data-analytics",
    "ERP & SAP": "erp-sap",
    "DEVOPS & CLOUD": "devops-cloud"
  };
  
  return slugMap[category] || category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/[^a-z0-9\-]/g, '');
};

interface CourseCardProps {
  course: {
    category: string;
    icon: React.ReactNode;
    color: string;
    borderColor: string;
    courses: string[];
  };
  index: number;
}

const CourseCard = memo(({ course, index }: CourseCardProps) => {
  return (
    <motion.div
      className={`group relative bg-card border ${course.borderColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.4,
          delay: index * 0.08,
          ease: "easeOut"
        }
      }}
      whileHover={{ 
        y: -4, 
        transition: { duration: 0.2 } 
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      {/* Icon and Title */}
      <div className="relative z-10 flex items-start gap-3 mb-5">
        <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${course.color} rounded-xl text-white shadow-lg group-hover:scale-105 transition-transform duration-200`}>
          {course.icon}
        </div>
        <div className="flex-1 min-w-0">
          <Link 
            to={`/category/${getCategorySlug(course.category)}`}
            className="block"
          >
            <h3 className="text-base font-raleway font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200 hover:text-primary cursor-pointer line-clamp-2">
              {course.category}
            </h3>
          </Link>
          <div className="w-10 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
        </div>
      </div>
      
      {/* Courses List */}
      <div className="relative z-10 space-y-2">
        {course.courses.map((courseName, courseIndex) => {
          return (
            <div key={courseIndex}>
              <Link 
                to={`/category/${getCategorySlug(course.category)}`}
                className="group/item flex items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-150" />
                <span className="text-sm font-cabin text-muted-foreground group-hover/item:text-foreground transition-colors duration-150 flex-1 leading-relaxed">
                  {courseName}
                </span>
                <ChevronRight className="w-3 h-3 text-muted-foreground group-hover/item:text-primary transform group-hover/item:translate-x-1 transition-all duration-150 opacity-0 group-hover/item:opacity-100" />
              </Link>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
});

CourseCard.displayName = "CourseCard";

export default CourseCard;
