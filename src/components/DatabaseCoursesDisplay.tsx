import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, BookOpen, Play, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { fadeInUpVariants, staggerChildrenVariants } from "@/hooks/useScrollAnimation";

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  image_url: string;
  duration: string;
  total_lessons: number;
  category: string;
  status: string;
}

interface Enrollment {
  id: string;
  course_id: string;
  progress_percentage: number;
  enrolled_at: string;
  status: string;
}

const DatabaseCoursesDisplay = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
    if (user) {
      fetchEnrollments();
    }
  }, [user]);

  const fetchCourses = async () => {
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

  const fetchEnrollments = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;
      setEnrollments(data || []);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    }
  };

  const handleEnroll = async (courseId: string) => {
    if (!user) {
      // Redirect to login
      return;
    }

    try {
      const { error } = await supabase
        .from('enrollments')
        .insert({
          user_id: user.id,
          course_id: courseId,
          status: 'active'
        });

      if (error) throw error;
      fetchEnrollments();
    } catch (error) {
      console.error('Error enrolling in course:', error);
    }
  };

  const getEnrollmentForCourse = (courseId: string) => {
    return enrollments.find(enrollment => enrollment.course_id === courseId);
  };

  const enrolledCourses = courses.filter(course => 
    enrollments.some(enrollment => enrollment.course_id === course.id)
  );

  const availableCourses = courses.filter(course => 
    !enrollments.some(enrollment => enrollment.course_id === course.id)
  );

  const isEnrolled = (courseId: string) => {
    return enrollments.some(enrollment => enrollment.course_id === courseId);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-muted h-48 rounded-lg mb-4"></div>
            <div className="space-y-2">
              <div className="bg-muted h-4 rounded w-3/4"></div>
              <div className="bg-muted h-3 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildrenVariants}
      className="space-y-12"
    >

      {/* All Available Courses Section */}
      <motion.section variants={fadeInUpVariants}>
        <h2 className="text-3xl font-bold text-foreground mb-8">
          All <span className="text-primary">Courses</span>
        </h2>
        {availableCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No courses available for enrollment at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map((course) => (
              <motion.div key={course.id} variants={fadeInUpVariants}>
                <Link to={`/course/db/${course.slug}`} className="block h-full">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-primary/30 hover:border-primary bg-card/90 backdrop-blur-sm cursor-pointer">
                    <CardHeader className="pb-6">
                      {/* Course Image */}
                      {course.image_url && (
                        <div className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-lg ring-2 ring-primary/20">
                          <img 
                            src={course.image_url} 
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      {/* Course Category Badge */}
                      <div className="mb-3">
                        <Badge variant="secondary" className="text-xs font-medium px-2 py-1">
                          {course.category || 'General'}
                        </Badge>
                      </div>
                      
                      {/* Course Title */}
                      <CardTitle className="text-xl font-bold text-foreground hover:text-primary transition-colors mb-3">
                        {course.title}
                      </CardTitle>
                      
                      {/* Course Description */}
                      <CardDescription className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {course.description}
                      </CardDescription>

                      {/* Course Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock size={14} />
                          <span>{course.duration || '3 Months'}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Users size={14} />
                          <span>50 Sessions</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <BookOpen size={14} />
                          <span>{course.total_lessons || 0} lessons</span>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            Industry-standard curriculum
                          </li>
                          <li className="flex items-center text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            Hands-on practical projects
                          </li>
                          <li className="flex items-center text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            Expert instructor guidance
                          </li>
                          <li className="flex items-center text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            Certificate upon completion
                          </li>
                          <li className="flex items-center text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            Career development support
                          </li>
                        </ul>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {user ? (
                        <Button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEnroll(course.id);
                          }}
                          className="w-full"
                        >
                          Enroll Now
                        </Button>
                      ) : (
                        <Button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            navigate('/auth');
                          }}
                          className="w-full"
                        >
                          Enroll
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.section>
    </motion.div>
  );
};

export default DatabaseCoursesDisplay;