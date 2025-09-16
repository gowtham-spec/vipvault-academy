
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Plus, Trash2, Star } from 'lucide-react';
import ImageUpload from './ImageUpload';

const testimonialSchema = z.object({
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  testimonialText: z.string().min(10, 'Testimonial must be at least 10 characters'),
  rating: z.string().min(1, 'Please select a rating'),
  courseId: z.string().min(1, 'Please select a course'),
  testimonialDate: z.string().min(1, 'Please select a date'),
  studentImage: z.string().optional(),
});

type TestimonialForm = z.infer<typeof testimonialSchema>;

interface Course {
  id: string;
  title: string;
}

interface Testimonial {
  id: string;
  student_name: string;
  testimonial_text: string;
  rating: number;
  testimonial_date: string;
  course_id: string;
  student_image?: string;
  courses?: { title: string };
}

const TestimonialManagement = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<TestimonialForm>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      studentName: '',
      testimonialText: '',
      rating: '',
      courseId: '',
      testimonialDate: '',
      studentImage: '',
    },
  });

  useEffect(() => {
    fetchTestimonials();
    fetchCourses();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select(`
          *,
          courses (title)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast.error('Failed to fetch testimonials');
    }
  };

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('id, title')
        .eq('status', 'published');

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast.error('Failed to fetch courses');
    }
  };

  const onSubmit = async (data: TestimonialForm) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('testimonials')
        .insert({
          student_name: data.studentName,
          testimonial_text: data.testimonialText,
          rating: parseInt(data.rating),
          course_id: data.courseId,
          testimonial_date: data.testimonialDate,
          student_image: data.studentImage || null,
        });

      if (error) throw error;

      toast.success('Testimonial created successfully');
      form.reset();
      setIsCreateModalOpen(false);
      fetchTestimonials();
    } catch (error: any) {
      console.error('Error creating testimonial:', error);
      toast.error(error.message || 'Failed to create testimonial');
    } finally {
      setLoading(false);
    }
  };

  const deleteTestimonial = async (testimonialId: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', testimonialId);

      if (error) throw error;

      toast.success('Testimonial deleted successfully');
      fetchTestimonials();
    } catch (error: any) {
      console.error('Error deleting testimonial:', error);
      toast.error(error.message || 'Failed to delete testimonial');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Testimonial Management</h2>
          <p className="text-muted-foreground">Manage student testimonials and reviews</p>
        </div>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Testimonial</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="studentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="studentImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student Image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          label="Student Photo"
                          value={field.value || ''}
                          onChange={field.onChange}
                          placeholder="Upload student profile picture"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="testimonialText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Testimonial</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share your experience with the course..." 
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rating</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select rating" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="5">5 Stars</SelectItem>
                          <SelectItem value="4">4 Stars</SelectItem>
                          <SelectItem value="3">3 Stars</SelectItem>
                          <SelectItem value="2">2 Stars</SelectItem>
                          <SelectItem value="1">1 Star</SelectItem>
                        </SelectContent>
                      </Select>
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
                          {courses.map((course) => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="testimonialDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
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
                    {loading ? 'Creating...' : 'Create Testimonial'}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Testimonials ({testimonials.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testimonials.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No testimonials found. Create your first testimonial to get started.
              </div>
            ) : (
              <div className="grid gap-4">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex items-start gap-4 p-4 border rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      {testimonial.student_image ? (
                        <img
                          src={testimonial.student_image}
                          alt={testimonial.student_name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 font-medium">
                            {testimonial.student_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{testimonial.student_name}</h4>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Course: {testimonial.courses?.title}
                      </p>
                      <p className="text-sm mb-2">"{testimonial.testimonial_text}"</p>
                      <p className="text-xs text-muted-foreground">
                        Date: {new Date(testimonial.testimonial_date).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteTestimonial(testimonial.id)}
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
  );
};

export default TestimonialManagement;
