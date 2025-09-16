
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Video, BookOpen, BarChart3, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CourseManagement from './CourseManagement';
import VideoManagement from './VideoManagement';
import SystemPerformance from './SystemPerformance';
import TestimonialManagement from './TestimonialManagement';
import QuizManagement from './QuizManagement';

interface DashboardStats {
  totalUsers: number;
  totalVideoViews: number;
  totalCourses: number;
}

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalVideoViews: 0,
    totalCourses: 3 // Static for now since courses are in data file
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [showCourseManagement, setShowCourseManagement] = useState(false);
  const [showVideoManagement, setShowVideoManagement] = useState(false);
  const [showSystemPerformance, setShowSystemPerformance] = useState(false);
  const [showTestimonialManagement, setShowTestimonialManagement] = useState(false);
  const [showQuizManagement, setShowQuizManagement] = useState(false);

  useEffect(() => {
    if (user) {
      checkAdminStatus();
      fetchDashboardStats();
    }
  }, [user]);

  const checkAdminStatus = async () => {
    if (user?.email === 'gowthamj0055@gmail.com') {
      setIsAdmin(true);
    }
  };

  const fetchDashboardStats = async () => {
    try {
      // Fetch user count
      const { count: userCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      // Fetch video views count
      const { count: videoViewCount } = await supabase
        .from('video_views')
        .select('*', { count: 'exact', head: true });

      setStats({
        totalUsers: userCount || 0,
        totalVideoViews: videoViewCount || 0,
        totalCourses: 3
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8">
          <CardContent>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
            <p>You don't have permission to access the admin dashboard.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showCourseManagement) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
              <p className="text-gray-600">Manage courses and track student enrollments</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowCourseManagement(false)}
            >
              Back to Dashboard
            </Button>
          </div>
          
          <CourseManagement />
        </div>
      </div>
    );
  }

  if (showVideoManagement) {
    return (
      <VideoManagement onBack={() => setShowVideoManagement(false)} />
    );
  }

  if (showSystemPerformance) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">System Performance & Management</h1>
              <p className="text-gray-600">Monitor system health and manage platform components in real-time</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowSystemPerformance(false)}
            >
              Back to Dashboard
            </Button>
          </div>

          <SystemPerformance />
        </div>
      </div>
    );
  }

  if (showQuizManagement) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Quiz Management</h1>
              <p className="text-gray-600">Add and manage quiz questions for course videos</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowQuizManagement(false)}
            >
              Back to Dashboard
            </Button>
          </div>
          
          <QuizManagement />
        </div>
      </div>
    );
  }

  if (showTestimonialManagement) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Testimonial Management</h1>
              <p className="text-gray-600">Manage student testimonials and reviews</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowTestimonialManagement(false)}
            >
              Back to Dashboard
            </Button>
          </div>

          <TestimonialManagement />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.email}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                Registered students
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Video Views</CardTitle>
              <Video className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalVideoViews}</div>
              <p className="text-xs text-muted-foreground">
                Total video engagements
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCourses}</div>
              <p className="text-xs text-muted-foreground">
                Available programs
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>System Performance & Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Monitor real-time system health, performance metrics, and manage all platform components
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowSystemPerformance(true)}
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Open Performance Monitor
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setShowCourseManagement(true)}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Manage Courses
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setShowVideoManagement(true)}
                >
                  <Video className="mr-2 h-4 w-4" />
                  Manage Videos
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate('/admin/users')}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Manage Users
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setShowQuizManagement(true)}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Manage Quizzes
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setShowTestimonialManagement(true)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Manage Testimonials
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
