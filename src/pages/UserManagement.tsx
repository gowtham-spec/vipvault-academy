import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Users, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  courseId: z.string().min(1, 'Please select a course'),
  courseDuration: z.string().min(1, 'Please select course duration'),
});

type CreateUserForm = z.infer<typeof createUserSchema>;

interface Course {
  id: string;
  title: string;
  slug: string;
  duration?: string;
}

interface User {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
}

const UserManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const form = useForm<CreateUserForm>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      courseId: '',
      courseDuration: '',
    },
  });

  useEffect(() => {
    if (user) {
      checkAdminStatus();
    }
  }, [user]);

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
      fetchCourses();
      
      // Set up real-time subscription for course changes
      const courseChannel = supabase
        .channel('course-changes')
        .on(
          'postgres_changes',
          {
            event: '*', // Listen to all events (INSERT, UPDATE, DELETE)
            schema: 'public',
            table: 'courses'
          },
          (payload) => {
            console.log('Course change detected:', payload);
            // Refresh courses when any course is created, updated, or deleted
            fetchCourses();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(courseChannel);
      };
    }
  }, [isAdmin]);

  const checkAdminStatus = async () => {
    console.log('Checking admin status for user:', user);
    if (user?.email === 'gowthamj0055@gmail.com') {
      console.log('User is admin, setting isAdmin to true');
      setIsAdmin(true);
    } else {
      console.log('User is not admin, redirecting to /admin');
      navigate('/admin');
    }
  };

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to fetch users');
    }
  };

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('id, title, slug, duration')
        .eq('status', 'published');

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast.error('Failed to fetch courses');
    }
  };

  const generateUserIdWithCourse = (courseTitle: string, email: string) => {
    const coursePrefix = courseTitle.toLowerCase().replace(/\s+/g, '_').substring(0, 10);
    const emailPrefix = email.split('@')[0].substring(0, 5);
    const randomSuffix = Math.random().toString(36).substring(2, 6);
    return `${coursePrefix}_${emailPrefix}_${randomSuffix}`;
  };

  const onSubmit = async (data: CreateUserForm) => {
    setLoading(true);
    try {
      // Call the edge function to create user
      const { data: result, error } = await supabase.functions.invoke('create-user', {
        body: {
          email: data.email,
          password: data.password,
          fullName: data.fullName,
          courseId: data.courseId,
          courseDuration: data.courseDuration,
        },
      });

      if (error) {
        throw new Error(error.message || 'Failed to create user');
      }

      if (!result.success) {
        throw new Error(result.error || 'Failed to create user');
      }

      toast.success(result.message);
      form.reset();
      setIsCreateModalOpen(false);
      fetchUsers();
    } catch (error: any) {
      console.error('Error creating user:', error);
      toast.error(error.message || 'Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      const { data: result, error } = await supabase.functions.invoke('delete-user', {
        body: { userId },
      });

      if (error) {
        throw new Error(error.message || 'Failed to delete user');
      }

      if (!result.success) {
        throw new Error(result.error || 'Failed to delete user');
      }

      toast.success(result.message);
      fetchUsers();
    } catch (error: any) {
      console.error('Error deleting user:', error);
      toast.error(error.message || 'Failed to delete user');
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8">
          <CardContent>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
            <p>You don't have permission to access user management.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/admin')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin Dashboard
          </Button>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">User Management</h1>
              <p className="text-muted-foreground">Manage student accounts and course assignments</p>
            </div>
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New User
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Create New User</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="student@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="courseId"
                      render={({ field }) => (
                         <FormItem>
                           <FormLabel>Course</FormLabel>
                           <Select onValueChange={field.onChange} value={field.value}>
                             <FormControl>
                               <SelectTrigger>
                                 <SelectValue placeholder="Select a course" />
                               </SelectTrigger>
                             </FormControl>
                             <SelectContent>
                               {courses.length === 0 ? (
                                 <SelectItem value="no-courses" disabled>
                                   No courses available
                                 </SelectItem>
                               ) : (
                                  courses.map((course) => (
                                    <SelectItem key={course.id} value={course.id}>
                                      {course.title} {course.duration && `(${course.duration})`}
                                    </SelectItem>
                                  ))
                               )}
                             </SelectContent>
                           </Select>
                           <FormMessage />
                         </FormItem>
                      )}
                     />
                     <FormField
                       control={form.control}
                       name="courseDuration"
                       render={({ field }) => (
                          <FormItem>
                            <FormLabel>Course Duration</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select course duration" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">1 Month</SelectItem>
                                <SelectItem value="3">3 Months</SelectItem>
                                <SelectItem value="6">6 Months</SelectItem>
                                <SelectItem value="12">1 Year</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                       )}
                     />
                     <div className="flex justify-end space-x-2 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsCreateModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" disabled={loading}>
                        {loading ? 'Creating...' : 'Create User'}
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                All Users ({users.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No users found. Create your first user to get started.
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {users.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="font-medium">{user.full_name || 'No name'}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                          <div className="text-xs text-muted-foreground">
                            Created: {new Date(user.created_at).toLocaleDateString()}
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteUser(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserManagement;