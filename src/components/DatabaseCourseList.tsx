
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from '@/integrations/supabase/client';
import { fadeInUpVariants, staggerChildrenVariants } from "@/hooks/useScrollAnimation";

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  subtitle: string;
  duration: string;
  session_duration: string;
  instructor_name: string;
  instructor_title: string;
  status: string;
  total_lessons: number;
  category: string;
  image_url: string;
  created_at: string;
}

const DatabaseCourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublishedCourses();
  }, []);

  const fetchPublishedCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card rounded-lg overflow-hidden shadow-lg animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-20 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return null; // Don't show anything if no courses
  }

  return (
    <motion.section 
      className="py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildrenVariants}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Available Courses</h2>
        <p className="text-muted-foreground">
          Discover our latest course offerings
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerChildrenVariants}
      >
        {courses.map((course, index) => (
          <motion.div 
            key={course.id} 
            className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            variants={fadeInUpVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { duration: 0.3 } 
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                delay: index * 0.1 
              }
            }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img 
                src={course.image_url || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'} 
                alt={course.title} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-cabin"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {course.category || 'GENERAL'}
              </motion.div>
            </div>
            
            <div className="p-6">
                <Link 
                  to={`/course/db/${course.slug}`}
                  className="block group"
                >
                <motion.h3 
                  className="text-xl font-raleway font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {course.title}
                </motion.h3>
              </Link>
              
              <p className="text-muted-foreground font-cabin text-sm leading-relaxed mb-4 line-clamp-3">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground font-cabin">
                <motion.div 
                  className="flex items-center gap-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock size={16} />
                  <span>{course.duration || 'Self-paced'}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Users size={16} />
                  <span>{course.session_duration || 'Flexible'}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <BookOpen size={16} />
                  <span>{course.total_lessons || 0}+ Lessons</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default DatabaseCourseList;
