import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BookOpen, User, Users, Play, CheckCircle, Code, Database, Server, Star, Lock, ArrowLeft, BarChart, Target, Award, Briefcase, GraduationCap, TrendingUp, Palette, Monitor, Smartphone, ChevronDown } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedVideo from '@/components/ProtectedVideo';
import QuizModal from '@/components/QuizModal';
import CourseInquiryPopup from '@/components/CourseInquiryPopup';

interface Course {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  duration: string;
  session_duration: string;
  instructor_name: string;
  instructor_title: string;
  instructor_experience: string;
  instructor_description: string;
  instructor_bio: string;
  instructor_image_url: string;
  status: string;
  total_lessons: number;
  total_duration_months: number;
  session_count: number;
  category: string;
  image_url: string;
  background_image_url: string;
  prerequisites: string;
}

interface LearningOutcome {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  order_index: number;
}

interface CourseProject {
  id: string;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
  order_index: number;
}

interface Testimonial {
  id: string;
  student_name: string;
  testimonial_text: string;
  rating: number;
  testimonial_date: string;
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration_minutes: number;
  order_index: number;
  lesson_type: string;
}

interface SyllabusSection {
  id: string;
  title: string;
  order_index: number;
  topics: { topic: string }[];
}

const DatabaseCourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [syllabus, setSyllabus] = useState<SyllabusSection[]>([]);
  const [learningOutcomes, setLearningOutcomes] = useState<LearningOutcome[]>([]);
  const [courseProjects, setCourseProjects] = useState<CourseProject[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [userEnrollment, setUserEnrollment] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<any>(null);
  const [showInquiryPopup, setShowInquiryPopup] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchCourseData(slug);
    }
  }, [slug, user]);

  const fetchCourseData = async (courseSlug: string) => {
    try {
      // Fetch course details
      const { data: courseData, error: courseError } = await supabase
        .from('courses')
        .select('*')
        .eq('slug', courseSlug)
        .eq('status', 'published')
        .single();

      if (courseError) throw courseError;
      setCourse(courseData);
      console.log('Course data fetched:', courseData);

      // Fetch videos for this course
      const { data: videosData, error: videosError } = await supabase
        .from('videos')
        .select('*')
        .eq('course_id', courseData.id)
        .eq('status', 'active')
        .order('order_index', { ascending: true });

      if (videosError) {
        console.error('Error fetching videos:', videosError);
      } else {
        console.log('Videos fetched for course:', videosData);
        setVideos(videosData || []);
      }

      // Check if user is enrolled in this course
      if (user) {
        console.log('Checking enrollment for user:', user.id, 'course:', courseData.id);
        const { data: enrollmentData, error: enrollmentError } = await supabase
          .from('enrollments')
          .select('*')
          .eq('user_id', user.id)
          .eq('course_id', courseData.id)
          .eq('status', 'active')
          .maybeSingle();

        if (enrollmentError) {
          console.error('Error fetching enrollment:', enrollmentError);
        } else {
          console.log('User enrollment data:', enrollmentData);
          setUserEnrollment(enrollmentData);
        }
      }

      // Fetch lessons
      const { data: lessonsData, error: lessonsError } = await supabase
        .from('lessons')
        .select('*')
        .eq('course_id', courseData.id)
        .order('order_index', { ascending: true });

      if (lessonsError) throw lessonsError;
      setLessons(lessonsData || []);

      // Fetch syllabus
      const { data: syllabusData, error: syllabusError } = await supabase
        .from('syllabus_sections')
        .select(`
          id,
          title,
          order_index,
          syllabus_topics(topic)
        `)
        .eq('course_id', courseData.id)
        .order('order_index', { ascending: true });

      if (syllabusError) throw syllabusError;
      
      // Map the data to match SyllabusSection interface
      const mappedSyllabus = (syllabusData || []).map(section => ({
        ...section,
        topics: section.syllabus_topics || []
      }));
      setSyllabus(mappedSyllabus);

      // Fetch learning outcomes
      const { data: outcomesData } = await supabase
        .from('learning_outcomes')
        .select('*')
        .eq('course_id', courseData.id)
        .order('order_index');
      
      setLearningOutcomes(outcomesData || []);

      // Fetch course projects
      const { data: projectsData } = await supabase
        .from('course_projects')
        .select('*')
        .eq('course_id', courseData.id)
        .order('order_index');
      
      setCourseProjects(projectsData || []);

      // Fetch testimonials
      const { data: testimonialsData } = await supabase
        .from('testimonials')
        .select('*')
        .eq('course_id', courseData.id)
        .order('testimonial_date', { ascending: false });
      
      setTestimonials(testimonialsData || []);

    } catch (error) {
      console.error('Error fetching course data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInClick = () => {
    navigate('/auth');
  };

  const renderVideoAccessControl = () => {
    console.log('Rendering video access control. User:', !!user, 'Enrollment:', !!userEnrollment, 'Videos count:', videos.length);
    
    if (!user) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-800 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <Lock size={32} className="mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Sign In Required</h4>
              <p className="text-sm text-gray-400 mb-4">Please sign in to watch course videos</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                onClick={handleSignInClick}
              >
                Sign In
              </Button>
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <Lock size={32} className="mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Sign In Required</h4>
              <p className="text-sm text-gray-400 mb-4">Please sign in to watch course videos</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                onClick={handleSignInClick}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      );
    }

    if (!userEnrollment) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-900 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <Lock size={32} className="mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Access Denied</h4>
              <p className="text-sm text-gray-400 mb-4">This course is not available for your account</p>
              <p className="text-xs text-gray-500">Please contact support to enroll in this course</p>
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-2 p-2 bg-red-800 rounded text-xs">
                  <p>Debug: User ID: {user?.id}</p>
                  <p>Course ID: {course?.id}</p>
                </div>
              )}
            </div>
          </div>
          <div className="bg-red-900 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <Lock size={32} className="mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Access Denied</h4>
              <p className="text-sm text-gray-400 mb-4">This course is not available for your account</p>
              <p className="text-xs text-gray-500">Please contact support to enroll in this course</p>
            </div>
          </div>
        </div>
      );
    }

    // Check if enrollment has expired
    if (userEnrollment.expires_at && new Date(userEnrollment.expires_at) < new Date()) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-orange-900 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <Lock size={32} className="mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Course Expired</h4>
              <p className="text-sm text-gray-400 mb-4">Your access to this course has expired</p>
              <p className="text-xs text-gray-500">Please renew your enrollment to continue</p>
            </div>
          </div>
          <div className="bg-orange-900 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <Lock size={32} className="mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Course Expired</h4>
              <p className="text-sm text-gray-400 mb-4">Your access to this course has expired</p>
              <p className="text-xs text-gray-500">Please renew your enrollment to continue</p>
            </div>
          </div>
        </div>
      );
    }

    // User has valid access - show videos
    if (videos.length === 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-800 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <BookOpen size={32} className="mx-auto mb-3" />
              <h4 className="font-semibold mb-2">No Videos Available</h4>
              <p className="text-sm text-gray-400">Course videos will be uploaded soon</p>
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-2 p-2 bg-slate-700 rounded text-xs">
                  <p>Debug: Course ID: {course?.id}</p>
                  <p>Fetching videos with status 'active'</p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    console.log('Rendering videos:', videos);
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {videos.slice(0, 4).map((video) => {
          console.log('Rendering video:', video);
          return (
            <ProtectedVideo
              key={video.id}
              videoUrl={video.file_url}
              courseId={course?.id || ''}
              title={video.title}
              thumbnail={video.thumbnail_url}
            />
          );
        })}
      </div>
    );
  };

  const sidebarItems = [
    { id: 'overview', label: 'Course Overview' },
    { id: 'learn', label: "What you'll learn" },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'instructors', label: 'Course Instructors' },
    { id: 'projects', label: 'Projects' },
    { id: 'reviews', label: 'Student Reviews' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoComplete = (lesson: any) => {
    setCurrentLesson(lesson);
    setShowQuiz(true);
  };

  const handleQuizComplete = async (score: number) => {
    if (!user || !currentLesson) return;

    try {
      // Mark lesson as completed
      const { error } = await supabase
        .from('lesson_progress')
        .upsert({
          user_id: user.id,
          lesson_id: currentLesson.id,
          completed: score >= 70,
          completed_at: score >= 70 ? new Date().toISOString() : null
        });

      if (error) throw error;
      
      setShowQuiz(false);
      setCurrentLesson(null);
    } catch (error) {
      console.error('Error updating lesson progress:', error);
    }
  };

  // Sample quiz questions (in real app, these would come from database)
  const generateQuizQuestions = (lesson: any) => [
    {
      id: '1',
      question: `What is the main topic covered in "${lesson.title}"?`,
      options: [
        'Basic concepts and fundamentals',
        'Advanced implementation techniques',
        'Project management strategies',
        'Testing and debugging methods'
      ],
      correctAnswer: 0,
      explanation: 'This lesson covers the fundamental concepts that form the foundation for understanding the topic.'
    },
    {
      id: '2',
      question: 'Which of the following is a key learning objective from this lesson?',
      options: [
        'Memorizing terminology',
        'Understanding practical applications',
        'Completing assignments quickly',
        'Avoiding common mistakes'
      ],
      correctAnswer: 1,
      explanation: 'The primary focus is on understanding how to apply concepts in practical scenarios.'
    },
    {
      id: '3',
      question: 'What should you do after completing this lesson?',
      options: [
        'Move immediately to the next lesson',
        'Practice and review the concepts',
        'Skip the exercises',
        'Focus only on theory'
      ],
      correctAnswer: 1,
      explanation: 'Practice and review help reinforce the concepts learned in the lesson.'
    }
  ];

  const getIconForOutcome = (iconName: string) => {
    const icons: { [key: string]: any } = {
      'Code': Code,
      'Database': Database,
      'Server': Server,
    };
    return icons[iconName] || Code;
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="py-20 px-4">
          <div className="animate-pulse">
            <div className="h-64 bg-muted rounded mb-8"></div>
            <div className="flex gap-8">
              <div className="w-1/4 space-y-4">
                <div className="h-8 bg-muted rounded"></div>
                <div className="h-8 bg-muted rounded"></div>
                <div className="h-8 bg-muted rounded"></div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="h-32 bg-muted rounded"></div>
                <div className="h-64 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="py-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p>The course you're looking for doesn't exist or has been removed.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[500px] flex items-center">
        {/* Background Image */}
        {course.background_image_url && (
          <div className="absolute inset-0">
            <img 
              src={course.background_image_url} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Modern Overlay with Design System - Theme Aware */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/80 to-slate-700/40 dark:from-background/95 dark:via-background/80 dark:to-accent/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-transparent to-slate-600/20 dark:from-primary/20 dark:via-transparent dark:to-secondary/10" />
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-t from-yellow-300/25 via-white/20 to-transparent dark:from-black/10 dark:via-yellow-500/5 dark:to-transparent" />
        
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/courses')}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white hover:text-primary transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Courses</span>
        </motion.button>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 uppercase">
                {course.title}
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{course.total_duration_months || 6} Month Course</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{course.session_duration || '2 Hour Sessions'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} />
                  <span>{course.total_lessons || course.session_count || 60} Lessons</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Enroll Now
                </Button>
              </div>
            </div>
            
            <div className="relative">
              {course.image_url ? (
                <div className="rounded-lg overflow-hidden aspect-video border border-slate-700">
                  <img 
                    src={course.image_url} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="bg-slate-800 rounded-lg overflow-hidden aspect-video flex items-center justify-center border border-slate-700">
                  <div className="text-center">
                    <BookOpen size={48} className="mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl font-semibold mb-2">Course Preview</h3>
                    <p className="text-gray-400">Course image not available</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Navigation */}
      <motion.div 
        className="fixed top-1/2 right-8 -translate-y-1/2 z-30 hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="bg-background/80 backdrop-blur-lg border border-border/50 rounded-2xl p-2 space-y-1 shadow-2xl">
          {sidebarItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 block w-full text-left ${
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
              whileHover={{ x: -8 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 1.2 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id ? 'bg-primary-foreground' : 'bg-muted-foreground/30'
                }`} />
                <span className="whitespace-nowrap">{item.label}</span>
              </div>
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl -z-10"
                  layoutId="activeSection"
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Main Content with Modern Layout */}
      <div className="relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
          {/* Course Overview - Animated Cards */}
          <motion.section 
            id="overview"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-300/20 dark:bg-primary/5 rounded-full blur-3xl transform-gpu will-change-transform"></div>
            <div className="relative bg-gradient-to-br from-background via-background to-accent/10 rounded-3xl p-8 border border-border/50 shadow-2xl">
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {course.title} Course
              </motion.h2>
              <motion.p 
                className="text-muted-foreground mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {course.subtitle || course.description}
              </motion.p>

              {course.prerequisites && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Prerequisites</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {course.prerequisites}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.section>

          {/* What's unique about the course - Interactive Grid */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <motion.h2 
              className="text-4xl font-bold mb-4 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              What's unique about the <span className="text-yellow-400">UI/UX Design</span> program
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: BarChart,
                  title: "Industry-Standard Tools",
                  description: "Master the most widely used design tools including Figma, Adobe XD, and Sketch."
                },
                {
                  icon: Target,
                  title: "Real Design Cases",
                  description: "Work with actual design briefs and user scenarios to solve real-world problems."
                },
                {
                  icon: Award,
                  title: "End-to-End Design Process",
                  description: "Learn the complete design pipeline from research to prototyping and testing."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-gradient-to-br from-background to-accent/5 rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Button 
                className="bg-red-700 hover:bg-red-800 text-white px-8 py-3"
                onClick={() => setShowInquiryPopup(true)}
              >
                Become a designer with UI/UX skills
              </Button>
            </div>
          </motion.section>

          {/* Career advancement section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 
                  className="text-4xl font-bold mb-6 text-foreground"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Lead and advance your creative career with UI/UX design skills
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Master systematic, versatile design thinking and user experience skills to create intuitive interfaces, 
                  identify user needs, design compelling experiences, assess usability, and craft actionable design strategies 
                  to guide organizations in creating user-centered digital products.
                </motion.p>
                <Button 
                  className="bg-red-700 hover:bg-red-800 text-white px-6"
                  onClick={() => setShowInquiryPopup(true)}
                >
                  Inquire now
                </Button>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-foreground">What UI/UX skills you'll learn</h3>
                {[
                  "Enhanced user research and analysis capabilities",
                  "Real-time prototyping and testing methods",
                  "Automated design system creation",
                  "Advanced wireframing techniques",
                  "Improved usability in design decisions",
                  "Scalable design architecture",
                  "Industry-standard best practices",
                  "Professional portfolio development"
                ].map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <CheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* What you'll learn - Interactive Grid */}
          <motion.section 
            id="learn"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              What you'll learn
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningOutcomes.length > 0 ? (
                learningOutcomes.map((outcome, index) => (
                   <motion.div 
                     key={outcome.id} 
                     className="group relative bg-gradient-to-br from-background to-accent/5 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 transform-gpu will-change-transform"
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "50px" }}
                     transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                     whileHover={{ scale: 1.02 }}
                   >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative text-center">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.div>
                      <h3 className="font-bold mb-4 text-xl text-foreground group-hover:text-primary transition-colors duration-300">{outcome.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <>
                  {[
                    { title: "Core Java Programming", desc: "Master Java fundamentals, OOP concepts, and advanced features" },
                    { title: "Spring Boot Development", desc: "Build robust backend applications with Spring Boot framework" },
                    { title: "Frontend Integration", desc: "Connect frontend technologies with Java backend services" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="group relative bg-gradient-to-br from-background to-accent/5 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative text-center">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-lg shadow-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.div>
                        <h3 className="font-bold mb-4 text-xl text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
            </div>
          </motion.section>

          {/* Course Outline - Accordion Style */}
          <motion.section 
            id="syllabus"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Course outline
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {(syllabus.length > 0 ? syllabus : [
                  { id: '1', title: 'Module 01: Design Fundamentals', topics: [{ topic: 'Design principles and theory' }, { topic: 'Color theory and typography' }] },
                  { id: '2', title: 'Module 02: User Research', topics: [{ topic: 'User personas and journey mapping' }, { topic: 'Usability testing methods' }] },
                  { id: '3', title: 'Module 03: Wireframing & Prototyping', topics: [{ topic: 'Low and high fidelity wireframes' }, { topic: 'Interactive prototyping' }] },
                  { id: '4', title: 'Module 04: Visual Design', topics: [{ topic: 'UI component design' }, { topic: 'Design systems creation' }] },
                  { id: '5', title: 'Module 05: Design Tools Mastery', topics: [{ topic: 'Advanced Figma techniques' }, { topic: 'Adobe XD workflows' }] },
                  { id: '6', title: 'Module 06: Responsive Design', topics: [{ topic: 'Mobile-first design approach' }, { topic: 'Cross-platform considerations' }] },
                  { id: '7', title: 'Module 07: Interaction Design', topics: [{ topic: 'Animation and micro-interactions' }, { topic: 'Gesture-based interfaces' }] },
                  { id: '8', title: 'Module 08: Design Portfolio', topics: [{ topic: 'Portfolio presentation techniques' }, { topic: 'Case study development' }] },
                  { id: '9', title: 'Module 09: Industry Collaboration', topics: [{ topic: 'Working with developers' }, { topic: 'Design handoff processes' }] },
                  { id: '10', title: 'Module 10: Final Design Project', topics: [{ topic: 'End-to-end design challenge' }, { topic: 'Portfolio review and feedback' }] }
                ]).map((section, index) => (
                  <AccordionItem 
                    key={section.id} 
                    value={section.id}
                    className="bg-slate-800/50 border border-slate-700 rounded-lg"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-slate-700/30 rounded-lg">
                      <span className="text-lg font-medium text-white">{section.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      {section.topics && section.topics.length > 0 && (
                        <ul className="space-y-2">
                          {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-gray-300">
                              • {topic.topic}
                            </li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.section>

          {/* Additional self-study modules */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h2 
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Additional self-study modules
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                [
                  "Design Fundamentals Review",
                  "Advanced Color Theory", 
                  "Typography Mastery"
                ],
                [
                  "Industry Best Practices",
                  "Accessibility Standards",
                  "Performance Optimization"
                ],
                [
                  "Portfolio Enhancement",
                  "Presentation Skills",
                  "Client Communication"
                ]
              ].map((column, columnIndex) => (
                <motion.div 
                  key={columnIndex}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: columnIndex * 0.1 + 0.3, duration: 0.6 }}
                >
                  {column.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Who is it for? */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Who is it for?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Students and Graduates",
                  description: "Perfect for students looking to build practical design skills and launch their creative careers"
                },
                {
                  icon: Briefcase,
                  title: "Working Professionals",
                  description: "Advance your career with industry-relevant design skills and certifications"
                },
                {
                  icon: TrendingUp,
                  title: "Career Changers",
                  description: "Transition into design with comprehensive training and hands-on experience"
                },
                {
                  icon: Monitor,
                  title: "Entrepreneurs",
                  description: "Build the design skills needed to create compelling user experiences for your products"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Meet your instructor - Enhanced Card */}
          <motion.section 
            id="instructors"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={ { delay: 0.2, duration: 0.6 }}
            >
              Meet Your Instructor
            </motion.h2>
            <motion.div 
              className="bg-gradient-to-br from-background via-background to-primary/5 rounded-3xl p-8 border border-border/50 shadow-2xl max-w-4xl mx-auto"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-30"></div>
                  <img
                    src={course.instructor_image_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'}
                    alt={course.instructor_name}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-xl"
                  />
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <motion.h3 
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {course.instructor_name || 'Vikram Patel'}
                  </motion.h3>
                  <motion.p 
                    className="text-secondary font-medium mb-4 text-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {course.instructor_title || 'Senior Java Developer'}
                  </motion.p>
                  <motion.p 
                    className="text-muted-foreground leading-relaxed text-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {course.instructor_bio || course.instructor_description || 'Vikram has 10+ years of experience in Java development and has led teams in building enterprise-scale applications. He specializes in Spring ecosystem and microservices architecture.'}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Course Videos - Glassmorphism */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Course Videos
            </motion.h2>
            <div className="bg-background/60 backdrop-blur-lg rounded-3xl p-8 border border-border/30 shadow-2xl">
              {renderVideoAccessControl()}
              {user && userEnrollment && videos.length > 4 && (
                <motion.div 
                  className="text-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Button variant="outline" className="px-8 hover:scale-105 transition-transform duration-300">
                    Load More Videos ({videos.length - 4} more)
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.section>

          {/* Projects - Interactive Showcase */}
          <motion.section 
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {courseProjects.length > 0 && (
              <>
                <motion.h2 
                  className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Featured Projects
                </motion.h2>
                <div className="space-y-8">
                  {courseProjects.map((project, index) => (
                    <motion.div 
                      key={project.id} 
                      className="group bg-gradient-to-br from-background to-accent/5 rounded-3xl p-6 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                      onClick={() => project.project_url && window.open(project.project_url, '_blank')}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <motion.div
                          className="relative overflow-hidden rounded-2xl flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={project.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'}
                            alt={project.title}
                            className="w-full md:w-64 h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                        <div className="flex-1">
                          <h3 
                            className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300"
                            onClick={() => project.project_url && window.open(project.project_url, '_blank')}
                          >
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4 text-lg">{project.description}</p>
                          {project.project_url && (
                            <motion.p 
                              className="text-primary font-medium"
                              whileHover={{ x: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              View Project →
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
            {courseProjects.length === 0 && (
              <>
                <motion.h2 
                  className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Featured Projects
                </motion.h2>
                <motion.div 
                  className="group bg-gradient-to-br from-background to-accent/5 rounded-3xl p-6 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <motion.div
                      className="relative overflow-hidden rounded-2xl flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
                        alt="E-commerce Platform"
                        className="w-full md:w-64 h-48 object-cover"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">E-commerce Platform</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Full-stack e-commerce application with user authentication and payment integration
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.section>

          {/* Student Reviews - Modern Testimonials */}
          <motion.section 
            id="reviews"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              What Students Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(testimonials.length > 0 ? testimonials : [
                { id: '1', student_name: 'Priya Sharma', testimonial_text: 'The UI/UX design course provided comprehensive training from research to final prototypes. Now I\'m confident creating user-centered designs.', rating: 5 },
                { id: '2', student_name: 'Rohit Patel', testimonial_text: 'Excellent practical approach with real design projects. The portfolio I built helped me land my dream job at a tech company.', rating: 5 },
                { id: '3', student_name: 'Ananya Singh', testimonial_text: 'From zero design knowledge to creating beautiful interfaces - this course transformed my creative career completely.', rating: 5 }
              ]).map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id} 
                  className="bg-gradient-to-br from-background to-accent/5 rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1472099645785-5658abf4ff4e' : index === 1 ? '1494790108755-2616b612b602' : '1507003211169-0a1dd7228f2d'}?w=60&h=60&fit=crop&crop=face`}
                      alt={testimonial.student_name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.student_name}</h4>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.2 }}
                          >
                            <Star
                              size={16}
                              className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.testimonial_text}"</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Top Courses Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Top Courses
            </motion.h2>
            <motion.p 
              className="text-center text-muted-foreground mb-12 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Discover our most popular certifications and see for yourself why participants rate them so highly.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "UI/UX Design",
                  subtitle: "Complete Design Masterclass",
                  description: "Master user-centered design with modern tools and methodologies.",
                  color: "from-red-800 to-red-700"
                },
                {
                  title: "Frontend Development",
                  subtitle: "React & Next.js Stack",
                  description: "Build scalable web applications using React, Next.js, and modern development practices.",
                  color: "from-blue-800 to-blue-700"
                },
                {
                  title: "Full Stack",
                  subtitle: "Complete Web Development",
                  description: "Master both frontend and backend technologies for complete web applications.",
                  color: "from-purple-800 to-purple-700"
                },
                {
                  title: "Looking for something else?",
                  subtitle: "",
                  description: "VIP Academy has many high-profile certifications, all accredited by leading organizations in the tech industry.",
                  color: "from-slate-700 to-slate-600",
                  isSpecial: true
                }
              ].map((course, index) => (
                <motion.div 
                  key={index}
                  className={`bg-gradient-to-br ${course.color} rounded-lg p-6 text-white relative overflow-hidden`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    {course.subtitle && (
                      <h4 className="text-lg font-medium mb-4 opacity-90">{course.subtitle}</h4>
                    )}
                    <p className="text-sm opacity-80 mb-6 leading-relaxed">{course.description}</p>
                    {course.isSpecial ? (
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
                        Explore All Courses
                      </Button>
                    ) : (
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                        View Course →
                      </Button>
                    )}
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Scroll to top button */}
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-3 text-lg hover:scale-110 transition-all duration-300 bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10"
            >
              ↑ Back to Top
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Quiz Modal */}
      {showQuiz && currentLesson && (
        <QuizModal
          isOpen={showQuiz}
          onClose={() => setShowQuiz(false)}
          onComplete={handleQuizComplete}
          lessonTitle={currentLesson.title}
          questions={generateQuizQuestions(currentLesson)}
        />
      )}

      {/* Course Inquiry Popup */}
      <CourseInquiryPopup 
        isOpen={showInquiryPopup}
        onClose={() => setShowInquiryPopup(false)}
        courseTitle={course?.title || 'Course'}
      />

      <Footer />
    </div>
  );
};

export default DatabaseCourseDetail;
