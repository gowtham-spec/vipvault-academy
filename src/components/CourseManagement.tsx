
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Calendar, Plus, Edit, Eye, EyeOff, Trash2, FileText } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/components/ui/use-toast';
import CreateCourseForm from './CreateCourseForm';
import EditCourseForm from './EditCourseForm';
import DetailedCourseForm from './DetailedCourseForm';

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  subtitle: string;
  duration: string;
  session_duration: string;
  prerequisites: string;
  instructor_name: string;
  instructor_title: string;
  instructor_experience: string;
  instructor_description: string;
  status: string;
  total_lessons: number;
  created_at: string;
}

interface Enrollment {
  id: string;
  enrolled_at: string;
  expires_at: string | null;
  progress_percentage: number;
  status: string;
  user_id: string;
  course_id: string;
  courses: {
    title: string;
  } | null;
  profiles: {
    full_name: string | null;
    email: string | null;
  } | null;
}

const CourseManagement = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [editingDetailedCourse, setEditingDetailedCourse] = useState<string | null>(null);
  const [selectedCourseForEnrollments, setSelectedCourseForEnrollments] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, []);

  // Add refresh functionality for real-time updates
  const refreshData = () => {
    fetchCourses();
    fetchEnrollments();
  };

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast({
        title: "Error",
        description: "Failed to fetch courses",
        variant: "destructive",
      });
    }
  };

  const fetchEnrollments = async () => {
    try {
      // Fetch enrollments with admin privileges since we're in admin dashboard
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          id,
          enrolled_at,
          expires_at,
          progress_percentage,
          status,
          user_id,
          course_id
        `)
        .order('enrolled_at', { ascending: false });

      if (error) {
        console.error('Enrollments query error:', error);
        throw error;
      }

      console.log('Fetched enrollments:', data);

      // Fetch related data separately to avoid RLS issues
      const enrichedEnrollments = await Promise.all(
        (data || []).map(async (enrollment) => {
          // Fetch course data
          const { data: courseData } = await supabase
            .from('courses')
            .select('title')
            .eq('id', enrollment.course_id)
            .maybeSingle();

          // Fetch profile data
          const { data: profileData } = await supabase
            .from('profiles')
            .select('full_name, email')
            .eq('id', enrollment.user_id)
            .maybeSingle();

          return {
            ...enrollment,
            courses: courseData,
            profiles: profileData
          };
        })
      );

      setEnrollments(enrichedEnrollments);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleCourseStatus = async (courseId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'published' ? 'draft' : 'published';
      const { error } = await supabase
        .from('courses')
        .update({ status: newStatus })
        .eq('id', courseId);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `Course ${newStatus === 'published' ? 'published' : 'unpublished'} successfully`,
      });
      
      // Refresh courses list
      fetchCourses();
    } catch (error) {
      console.error('Error updating course status:', error);
      toast({
        title: "Error",
        description: "Failed to update course status",
        variant: "destructive",
      });
    }
  };

  const deleteCourse = async (courseId: string, courseTitle: string) => {
    try {
      // First check if there are any enrollments for this course
      const { data: enrollmentData, error: enrollmentError } = await supabase
        .from('enrollments')
        .select('id')
        .eq('course_id', courseId)
        .limit(1);

      if (enrollmentError) throw enrollmentError;

      if (enrollmentData && enrollmentData.length > 0) {
        toast({
          title: "Cannot Delete Course",
          description: "This course has active enrollments and cannot be deleted. Please contact students to withdraw first.",
          variant: "destructive",
        });
        return;
      }

      // Delete related data first
      await supabase.from('lessons').delete().eq('course_id', courseId);
      await supabase.from('syllabus_sections').delete().eq('course_id', courseId);
      await supabase.from('testimonials').delete().eq('course_id', courseId);

      // Finally delete the course
      const { error } = await supabase
        .from('courses')
        .delete()
        .eq('id', courseId);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `Course "${courseTitle}" deleted successfully`,
      });
      
      // Refresh courses list
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
      toast({
        title: "Error",
        description: "Failed to delete course",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getEnrollmentsForCourse = (courseId: string) => {
    return enrollments.filter(enrollment => enrollment.course_id === courseId);
  };

  const getCourseEnrollmentDuration = (enrollment: Enrollment) => {
    if (!enrollment.expires_at) return 'No duration set';
    
    const enrolledDate = new Date(enrollment.enrolled_at);
    const expiresDate = new Date(enrollment.expires_at);
    const diffInMs = expiresDate.getTime() - enrolledDate.getTime();
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays <= 31) return '1 Month';
    if (diffInDays <= 93) return '3 Months';
    if (diffInDays <= 186) return '6 Months';
    if (diffInDays <= 372) return '1 Year';
    return `${Math.ceil(diffInDays/30)} Months`;
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">Loading course data...</div>
        </CardContent>
      </Card>
    );
  }

  if (showCreateForm) {
    return (
      <CreateCourseForm 
        onCourseCreated={() => {
          setShowCreateForm(false);
          fetchCourses();
          toast({
            title: "Success",
            description: "Course created successfully",
          });
        }}
      />
    );
  }

  if (showDetailedForm) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Create Detailed Course</h2>
          <Button variant="outline" onClick={() => setShowDetailedForm(false)}>
            Back to Courses
          </Button>
        </div>
        <DetailedCourseForm onCourseCreated={() => {
          setShowDetailedForm(false);
          fetchCourses();
        }} />
      </div>
    );
  }

  if (editingDetailedCourse) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Edit Detailed Course</h2>
          <Button variant="outline" onClick={() => setEditingDetailedCourse(null)}>
            Back to Courses
          </Button>
        </div>
        <DetailedCourseForm 
          courseId={editingDetailedCourse}
          onCourseCreated={() => {
            setEditingDetailedCourse(null);
            fetchCourses();
          }} 
        />
      </div>
    );
  }

  if (editingCourse) {
    return (
      <EditCourseForm 
        course={editingCourse}
        onSuccess={() => {
          setEditingCourse(null);
          fetchCourses();
          toast({
            title: "Success",
            description: "Course updated successfully",
          });
        }}
        onCancel={() => setEditingCourse(null)}
      />
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Course Management
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button 
              onClick={refreshData}
              variant="outline"
              className="flex items-center gap-2"
            >
              Refresh Data
            </Button>
            <Button 
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Basic Course
            </Button>
            <Button
              onClick={() => setShowDetailedForm(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Create Detailed Course
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Courses ({courses.length})
            </TabsTrigger>
            <TabsTrigger value="enrollments" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Enrollments ({enrollments.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Title</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Lessons</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{course.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {course.description?.substring(0, 100)}...
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{course.instructor_name || 'Not assigned'}</TableCell>
                      <TableCell>{course.total_lessons || 0}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          course.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : course.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {course.status}
                        </span>
                      </TableCell>
                      <TableCell>{formatDate(course.created_at)}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingCourse(course)}
                            title="Edit basic course info"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingDetailedCourse(course.id)}
                            title="Edit detailed course content"
                          >
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(`/course/db/${course.slug}`, '_blank')}
                            title="View course detail page"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleCourseStatus(course.id, course.status)}
                            title={course.status === 'published' ? 'Unpublish course' : 'Publish course'}
                          >
                            {course.status === 'published' ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                title="Delete course"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Course</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete "{course.title}"? This action cannot be undone.
                                  All lessons, progress data, and related content will be permanently removed.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteCourse(course.id, course.title)}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  Delete Course
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {courses.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No courses found. Create your first course to get started.
              </div>
            )}
          </TabsContent>

          <TabsContent value="enrollments" className="mt-4">
            {!selectedCourseForEnrollments ? (
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Select a Course to View Enrollments</h3>
                  <p className="text-muted-foreground text-sm">Click on any course below to see enrolled students and their enrollment details.</p>
                </div>
                <div className="grid gap-4">
                  {courses.map((course) => {
                    const courseEnrollments = getEnrollmentsForCourse(course.id);
                    return (
                      <Card 
                        key={course.id} 
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setSelectedCourseForEnrollments(course.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-lg">{course.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {course.description?.substring(0, 150)}...
                              </p>
                              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                <span>Instructor: {course.instructor_name || 'Not assigned'}</span>
                                <span>•</span>
                                <span>Duration: {course.duration || 'Not specified'}</span>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{courseEnrollments.length}</div>
                              <div className="text-sm text-muted-foreground">Enrolled Students</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                {courses.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No courses found. Create your first course to get started.
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedCourseForEnrollments(null)}
                      className="mb-2"
                    >
                      ← Back to Courses
                    </Button>
                    <h3 className="text-lg font-semibold">
                      Enrolled Students for: {courses.find(c => c.id === selectedCourseForEnrollments)?.title}
                    </h3>
                  </div>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Enrolled Date</TableHead>
                        <TableHead>Expires</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getEnrollmentsForCourse(selectedCourseForEnrollments).map((enrollment) => (
                        <TableRow key={enrollment.id}>
                          <TableCell className="font-medium">
                            {enrollment.profiles?.full_name || 'Unknown'}
                          </TableCell>
                          <TableCell>{enrollment.profiles?.email || 'N/A'}</TableCell>
                          <TableCell>
                            <span className="font-medium text-primary">
                              {getCourseEnrollmentDuration(enrollment)}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{ width: `${enrollment.progress_percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm">{enrollment.progress_percentage}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              enrollment.status === 'completed' 
                                ? 'bg-green-100 text-green-800' 
                                : enrollment.status === 'active'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {enrollment.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              {formatDate(enrollment.enrolled_at)}
                            </div>
                          </TableCell>
                          <TableCell>
                            {enrollment.expires_at ? (
                              <div className="text-sm">
                                {formatDate(enrollment.expires_at)}
                              </div>
                            ) : (
                              <span className="text-muted-foreground text-sm">No expiry</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                {getEnrollmentsForCourse(selectedCourseForEnrollments).length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No students enrolled in this course yet.
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CourseManagement;
