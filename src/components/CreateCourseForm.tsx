
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface CreateCourseFormProps {
  onCourseCreated: () => void;
}

const CreateCourseForm = ({ onCourseCreated }: CreateCourseFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    subtitle: '',
    description: '',
    category: '',
    image_url: '',
    background_image_url: '',
    duration: '',
    session_duration: '',
    prerequisites: '',
    instructor_name: '',
    instructor_title: '',
    instructor_experience: '',
    instructor_description: '',
    status: 'draft' as 'draft' | 'published'
  });
  
  const [loading, setLoading] = useState(false);

  const categories = [
    'FULL STACK DEVELOPMENT',
    'EMBEDDED SYSTEMS WITH IOT',
    'UI/UX & DIGITAL SKILLS',
    'CYBERSECURITY & NETWORKING',
    'DATA & ANALYTICS',
    'ERP & SAP',
    'DEVOPS & CLOUD'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      // Auto-generate slug from title
      ...(field === 'title' && {
        slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      })
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('courses')
        .insert([formData]);

      if (error) throw error;

      toast.success('Course created successfully!');
      setFormData({
        title: '',
        slug: '',
        subtitle: '',
        description: '',
        category: '',
        image_url: '',
        background_image_url: '',
        duration: '',
        session_duration: '',
        prerequisites: '',
        instructor_name: '',
        instructor_title: '',
        instructor_experience: '',
        instructor_description: '',
        status: 'draft'
      });
      onCourseCreated();
    } catch (error) {
      console.error('Error creating course:', error);
      toast.error('Failed to create course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Course Title *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="slug">Slug *</Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) => handleInputChange('slug', e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="subtitle">Subtitle</Label>
        <Input
          id="subtitle"
          value={formData.subtitle}
          onChange={(e) => handleInputChange('subtitle', e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={4}
        />
      </div>

      {/* Course Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="category">Category</Label>
          <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="image_url">Course Thumbnail Image URL</Label>
          <Input
            id="image_url"
            type="url"
            value={formData.image_url}
            onChange={(e) => handleInputChange('image_url', e.target.value)}
            placeholder="https://example.com/course-thumbnail.jpg"
          />
          <p className="text-sm text-muted-foreground mt-1">
            This image will be used as the course thumbnail in course listings and cards.
          </p>
        </div>
      </div>

      <div>
        <Label htmlFor="background_image_url">Course Background Image URL</Label>
        <Input
          id="background_image_url"
          type="url"
          value={formData.background_image_url}
          onChange={(e) => handleInputChange('background_image_url', e.target.value)}
          placeholder="https://example.com/course-hero-background.jpg"
        />
        <p className="text-sm text-muted-foreground mt-1">
          This image will be used as the hero background on the course detail page behind the course title and description. 
          Upload to course-images bucket in Supabase Storage for best performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="duration">Course Duration</Label>
          <Input
            id="duration"
            value={formData.duration}
            onChange={(e) => handleInputChange('duration', e.target.value)}
            placeholder="e.g., 6 months"
          />
        </div>
        <div>
          <Label htmlFor="session_duration">Session Duration</Label>
          <Input
            id="session_duration"
            value={formData.session_duration}
            onChange={(e) => handleInputChange('session_duration', e.target.value)}
            placeholder="e.g., 2 Hour Sessions"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="prerequisites">Prerequisites</Label>
        <Textarea
          id="prerequisites"
          value={formData.prerequisites}
          onChange={(e) => handleInputChange('prerequisites', e.target.value)}
          rows={3}
        />
      </div>

      {/* Instructor Information */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Instructor Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="instructor_name">Instructor Name</Label>
            <Input
              id="instructor_name"
              value={formData.instructor_name}
              onChange={(e) => handleInputChange('instructor_name', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="instructor_title">Instructor Title</Label>
            <Input
              id="instructor_title"
              value={formData.instructor_title}
              onChange={(e) => handleInputChange('instructor_title', e.target.value)}
              placeholder="e.g., Senior Developer"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="instructor_experience">Instructor Experience</Label>
          <Input
            id="instructor_experience"
            value={formData.instructor_experience}
            onChange={(e) => handleInputChange('instructor_experience', e.target.value)}
            placeholder="e.g., 5+ years in web development"
          />
        </div>

        <div>
          <Label htmlFor="instructor_description">Instructor Description</Label>
          <Textarea
            id="instructor_description"
            value={formData.instructor_description}
            onChange={(e) => handleInputChange('instructor_description', e.target.value)}
            rows={3}
          />
        </div>
      </div>

      {/* Status */}
      <div>
        <Label htmlFor="status">Status</Label>
        <Select value={formData.status} onValueChange={(value: 'draft' | 'published') => handleInputChange('status', value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Creating...' : 'Create Course'}
      </Button>
    </form>
  );
};

export default CreateCourseForm;
