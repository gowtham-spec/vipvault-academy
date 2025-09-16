
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';

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
}

interface EditCourseFormProps {
  course: Course;
  onSuccess: () => void;
  onCancel: () => void;
}

type CourseStatus = 'draft' | 'published' | 'archived';

const EditCourseForm = ({ course, onSuccess, onCancel }: EditCourseFormProps) => {
  const [formData, setFormData] = useState({
    title: course.title || '',
    slug: course.slug || '',
    description: course.description || '',
    subtitle: course.subtitle || '',
    duration: course.duration || '',
    session_duration: course.session_duration || '',
    prerequisites: course.prerequisites || '',
    instructor_name: course.instructor_name || '',
    instructor_title: course.instructor_title || '',
    instructor_experience: course.instructor_experience || '',
    instructor_description: course.instructor_description || '',
    status: (course.status || 'draft') as CourseStatus
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('courses')
        .update(formData)
        .eq('id', course.id);

      if (error) throw error;
      
      onSuccess();
    } catch (error) {
      console.error('Error updating course:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStatusChange = (value: CourseStatus) => {
    setFormData(prev => ({ ...prev, status: value }));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onCancel}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle>Edit Course: {course.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Course Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => handleChange('slug', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="subtitle">Course Subtitle</Label>
              <Input
                id="subtitle"
                value={formData.subtitle}
                onChange={(e) => handleChange('subtitle', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={handleStatusChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Course Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Total Duration</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => handleChange('duration', e.target.value)}
                placeholder="e.g., 6 weeks"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="session_duration">Session Duration</Label>
              <Input
                id="session_duration"
                value={formData.session_duration}
                onChange={(e) => handleChange('session_duration', e.target.value)}
                placeholder="e.g., 2 hours"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="prerequisites">Prerequisites</Label>
            <Textarea
              id="prerequisites"
              value={formData.prerequisites}
              onChange={(e) => handleChange('prerequisites', e.target.value)}
              rows={3}
            />
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Instructor Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="instructor_name">Instructor Name</Label>
                <Input
                  id="instructor_name"
                  value={formData.instructor_name}
                  onChange={(e) => handleChange('instructor_name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instructor_title">Instructor Title</Label>
                <Input
                  id="instructor_title"
                  value={formData.instructor_title}
                  onChange={(e) => handleChange('instructor_title', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="instructor_experience">Instructor Experience</Label>
              <Input
                id="instructor_experience"
                value={formData.instructor_experience}
                onChange={(e) => handleChange('instructor_experience', e.target.value)}
                placeholder="e.g., 10+ years"
              />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="instructor_description">Instructor Description</Label>
              <Textarea
                id="instructor_description"
                value={formData.instructor_description}
                onChange={(e) => handleChange('instructor_description', e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <Button type="submit" disabled={loading}>
              <Save className="h-4 w-4 mr-2" />
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditCourseForm;
