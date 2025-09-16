import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Save } from 'lucide-react';
import { toast } from 'sonner';
import ImageUpload from './ImageUpload';

interface Course {
  id?: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  short_description: string;
  category: string;
  image_url: string;
  background_image_url: string;
  duration: string;
  session_duration: string;
  total_duration_months: number;
  session_count: number;
  prerequisites: string;
  instructor_name: string;
  instructor_title: string;
  instructor_experience: string;
  instructor_description: string;
  instructor_bio: string;
  instructor_image_url: string;
  status: 'draft' | 'published' | 'archived';
}

interface LearningOutcome {
  id?: string;
  title: string;
  description: string;
  icon_name: string;
  order_index: number;
}

interface SyllabusSection {
  id?: string;
  title: string;
  order_index: number;
}

interface SyllabusTopic {
  id?: string;
  section_id?: string;
  topic: string;
  order_index: number;
}

interface CourseProject {
  id?: string;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
  order_index: number;
}

interface Testimonial {
  id?: string;
  student_name: string;
  testimonial_text: string;
  rating: number;
  testimonial_date: string;
}

interface DetailedCourseFormProps {
  courseId?: string;
  onCourseCreated?: () => void;
}

const DetailedCourseForm = ({ courseId, onCourseCreated }: DetailedCourseFormProps) => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState<Course>({
    title: '',
    slug: '',
    subtitle: '',
    description: '',
    short_description: '',
    category: '',
    image_url: '',
    background_image_url: '',
    duration: '',
    session_duration: '',
    total_duration_months: 6,
    session_count: 60,
    prerequisites: '',
    instructor_name: '',
    instructor_title: '',
    instructor_experience: '',
    instructor_description: '',
    instructor_bio: '',
    instructor_image_url: '',
    status: 'draft'
  });

  const [learningOutcomes, setLearningOutcomes] = useState<LearningOutcome[]>([
    { title: '', description: '', icon_name: 'Code', order_index: 1 }
  ]);

  const [syllabusSections, setSyllabusSections] = useState<SyllabusSection[]>([
    { title: '', order_index: 1 }
  ]);

  const [syllabusTopics, setSyllabusTopics] = useState<{ [sectionIndex: number]: SyllabusTopic[] }>({
    0: [{ topic: '', order_index: 1 }]
  });

  const [courseProjects, setCourseProjects] = useState<CourseProject[]>([
    { title: '', description: '', image_url: '', project_url: '', order_index: 1 }
  ]);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    { student_name: '', testimonial_text: '', rating: 5, testimonial_date: new Date().toISOString().split('T')[0] }
  ]);

  const categories = [
    'FULL STACK DEVELOPMENT',
    'EMBEDDED SYSTEMS WITH IOT',
    'UI/UX & DIGITAL SKILLS',
    'CYBERSECURITY & NETWORKING',
    'DATA & ANALYTICS',
    'ERP & SAP',
    'DEVOPS & CLOUD'
  ];

  const iconOptions = ['Code', 'Cpu', 'Palette', 'Shield', 'BarChart3', 'Briefcase', 'Cloud', 'Database', 'Users', 'Clock', 'BookOpen'];

  useEffect(() => {
    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

  const fetchCourseData = async () => {
    if (!courseId) return;
    
    try {
      // Fetch course basic data
      const { data: courseData, error: courseError } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();

      if (courseError) throw courseError;
      if (courseData) setCourse(courseData);

      // Fetch learning outcomes
      const { data: outcomesData } = await supabase
        .from('learning_outcomes')
        .select('*')
        .eq('course_id', courseId)
        .order('order_index');

      if (outcomesData?.length) {
        setLearningOutcomes(outcomesData);
      }

      // Fetch syllabus sections
      const { data: sectionsData } = await supabase
        .from('syllabus_sections')
        .select('*')
        .eq('course_id', courseId)
        .order('order_index');

      if (sectionsData?.length) {
        setSyllabusSections(sectionsData);

        // Fetch syllabus topics for each section
        const { data: topicsData } = await supabase
          .from('syllabus_topics')
          .select('*')
          .in('section_id', sectionsData.map(s => s.id))
          .order('order_index');

        if (topicsData?.length) {
          const topicsBySectionIndex: { [key: number]: SyllabusTopic[] } = {};
          sectionsData.forEach((section, index) => {
            topicsBySectionIndex[index] = topicsData.filter(t => t.section_id === section.id);
          });
          setSyllabusTopics(topicsBySectionIndex);
        }
      }

      // Fetch course projects
      const { data: projectsData } = await supabase
        .from('course_projects')
        .select('*')
        .eq('course_id', courseId)
        .order('order_index');

      if (projectsData?.length) {
        setCourseProjects(projectsData);
      }

      // Fetch testimonials
      const { data: testimonialsData } = await supabase
        .from('testimonials')
        .select('*')
        .eq('course_id', courseId)
        .order('testimonial_date', { ascending: false });

      if (testimonialsData?.length) {
        setTestimonials(testimonialsData);
      }
    } catch (error) {
      console.error('Error fetching course data:', error);
      toast.error('Failed to load course data');
    }
  };

  const handleCourseChange = (field: keyof Course, value: string | number) => {
    setCourse(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'title' && typeof value === 'string' && {
        slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      })
    }));
  };

  const addLearningOutcome = () => {
    setLearningOutcomes(prev => [...prev, {
      title: '',
      description: '',
      icon_name: 'Code',
      order_index: prev.length + 1
    }]);
  };

  const updateLearningOutcome = (index: number, field: keyof LearningOutcome, value: string | number) => {
    setLearningOutcomes(prev => prev.map((outcome, i) => 
      i === index ? { ...outcome, [field]: value } : outcome
    ));
  };

  const removeLearningOutcome = (index: number) => {
    setLearningOutcomes(prev => prev.filter((_, i) => i !== index));
  };

  const addSyllabusSection = () => {
    const newIndex = syllabusSections.length;
    setSyllabusSections(prev => [...prev, {
      title: '',
      order_index: prev.length + 1
    }]);
    setSyllabusTopics(prev => ({
      ...prev,
      [newIndex]: [{ topic: '', order_index: 1 }]
    }));
  };

  const updateSyllabusSection = (index: number, title: string) => {
    setSyllabusSections(prev => prev.map((section, i) => 
      i === index ? { ...section, title } : section
    ));
  };

  const removeSyllabusSection = (index: number) => {
    setSyllabusSections(prev => prev.filter((_, i) => i !== index));
    setSyllabusTopics(prev => {
      const newTopics = { ...prev };
      delete newTopics[index];
      // Reindex remaining topics
      const reindexedTopics: { [key: number]: SyllabusTopic[] } = {};
      Object.keys(newTopics).forEach((key, i) => {
        const keyNum = parseInt(key);
        if (keyNum > index) {
          reindexedTopics[keyNum - 1] = newTopics[keyNum];
        } else if (keyNum < index) {
          reindexedTopics[keyNum] = newTopics[keyNum];
        }
      });
      return reindexedTopics;
    });
  };

  const addSyllabusTopic = (sectionIndex: number) => {
    setSyllabusTopics(prev => ({
      ...prev,
      [sectionIndex]: [
        ...(prev[sectionIndex] || []),
        { topic: '', order_index: (prev[sectionIndex]?.length || 0) + 1 }
      ]
    }));
  };

  const updateSyllabusTopic = (sectionIndex: number, topicIndex: number, topic: string) => {
    setSyllabusTopics(prev => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex]?.map((t, i) => 
        i === topicIndex ? { ...t, topic } : t
      ) || []
    }));
  };

  const removeSyllabusTopic = (sectionIndex: number, topicIndex: number) => {
    setSyllabusTopics(prev => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex]?.filter((_, i) => i !== topicIndex) || []
    }));
  };

  const addCourseProject = () => {
    setCourseProjects(prev => [...prev, {
      title: '',
      description: '',
      image_url: '',
      project_url: '',
      order_index: prev.length + 1
    }]);
  };

  const updateCourseProject = (index: number, field: keyof CourseProject, value: string | number) => {
    setCourseProjects(prev => prev.map((project, i) => 
      i === index ? { ...project, [field]: value } : project
    ));
  };

  const removeCourseProject = (index: number) => {
    setCourseProjects(prev => prev.filter((_, i) => i !== index));
  };

  const addTestimonial = () => {
    setTestimonials(prev => [...prev, {
      student_name: '',
      testimonial_text: '',
      rating: 5,
      testimonial_date: new Date().toISOString().split('T')[0]
    }]);
  };

  const updateTestimonial = (index: number, field: keyof Testimonial, value: string | number) => {
    setTestimonials(prev => prev.map((testimonial, i) => 
      i === index ? { ...testimonial, [field]: value } : testimonial
    ));
  };

  const removeTestimonial = (index: number) => {
    setTestimonials(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!course.title || !course.slug) {
      toast.error('Please fill in required fields (title and slug)');
      return;
    }

    setLoading(true);
    try {
      let finalCourseId = courseId;

      // Create or update course
      if (courseId) {
        const { error } = await supabase
          .from('courses')
          .update(course)
          .eq('id', courseId);
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('courses')
          .insert([course])
          .select()
          .single();
        if (error) throw error;
        finalCourseId = data.id;
      }

      if (!finalCourseId) throw new Error('No course ID available');

      // Delete existing related data if updating
      if (courseId) {
        await Promise.all([
          supabase.from('learning_outcomes').delete().eq('course_id', courseId),
          supabase.from('syllabus_topics').delete().in('section_id', 
            await supabase.from('syllabus_sections').select('id').eq('course_id', courseId).then(r => r.data?.map(s => s.id) || [])
          ),
          supabase.from('syllabus_sections').delete().eq('course_id', courseId),
          supabase.from('course_projects').delete().eq('course_id', courseId),
          supabase.from('testimonials').delete().eq('course_id', courseId)
        ]);
      }

      // Insert learning outcomes
      if (learningOutcomes.some(o => o.title)) {
        const validOutcomes = learningOutcomes
          .filter(o => o.title)
          .map((outcome, index) => ({
            course_id: finalCourseId,
            title: outcome.title,
            description: outcome.description,
            icon_name: outcome.icon_name,
            order_index: index + 1
          }));
        
        if (validOutcomes.length > 0) {
          const { error } = await supabase.from('learning_outcomes').insert(validOutcomes);
          if (error) throw error;
        }
      }

      // Insert syllabus sections and topics
      const validSections = syllabusSections.filter(s => s.title);
      if (validSections.length > 0) {
        const { data: sectionsData, error: sectionsError } = await supabase
          .from('syllabus_sections')
          .insert(validSections.map((section, index) => ({
            course_id: finalCourseId,
            title: section.title,
            order_index: index + 1
          })))
          .select();

        if (sectionsError) throw sectionsError;

        // Insert topics for each section
        const allTopics: any[] = [];
        sectionsData?.forEach((sectionData, sectionIndex) => {
          const topics = syllabusTopics[sectionIndex] || [];
          topics.forEach((topic, topicIndex) => {
            if (topic.topic) {
              allTopics.push({
                section_id: sectionData.id,
                topic: topic.topic,
                order_index: topicIndex + 1
              });
            }
          });
        });

        if (allTopics.length > 0) {
          const { error: topicsError } = await supabase.from('syllabus_topics').insert(allTopics);
          if (topicsError) throw topicsError;
        }
      }

      // Insert course projects
      const validProjects = courseProjects.filter(p => p.title);
      if (validProjects.length > 0) {
        const { error } = await supabase.from('course_projects').insert(
          validProjects.map((project, index) => ({
            course_id: finalCourseId,
            title: project.title,
            description: project.description,
            image_url: project.image_url,
            project_url: project.project_url,
            order_index: index + 1
          }))
        );
        if (error) throw error;
      }

      // Insert testimonials
      const validTestimonials = testimonials.filter(t => t.student_name && t.testimonial_text);
      if (validTestimonials.length > 0) {
        const { error } = await supabase.from('testimonials').insert(
          validTestimonials.map(testimonial => ({
            course_id: finalCourseId,
            student_name: testimonial.student_name,
            testimonial_text: testimonial.testimonial_text,
            rating: testimonial.rating,
            testimonial_date: testimonial.testimonial_date
          }))
        );
        if (error) throw error;
      }

      toast.success(courseId ? 'Course updated successfully!' : 'Course created successfully!');
      if (onCourseCreated) onCourseCreated();
    } catch (error) {
      console.error('Error saving course:', error);
      toast.error('Failed to save course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          {courseId ? 'Edit Course Details' : 'Create Detailed Course'}
        </h1>
        <Button onClick={handleSubmit} disabled={loading}>
          <Save className="mr-2 h-4 w-4" />
          {loading ? 'Saving...' : 'Save Course'}
        </Button>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
          <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Course Title *</Label>
                  <Input
                    id="title"
                    value={course.title}
                    onChange={(e) => handleCourseChange('title', e.target.value)}
                    placeholder="e.g., JAVA FULL-STACK DEVELOPMENT"
                  />
                </div>
                <div>
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={course.slug}
                    onChange={(e) => handleCourseChange('slug', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={course.subtitle}
                  onChange={(e) => handleCourseChange('subtitle', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="description">Description (Hero Section)</Label>
                <Textarea
                  id="description"
                  value={course.description}
                  onChange={(e) => handleCourseChange('description', e.target.value)}
                  rows={4}
                  placeholder="Main description that appears in the hero section"
                />
              </div>

              <div>
                <Label htmlFor="short_description">Short Description</Label>
                <Textarea
                  id="short_description"
                  value={course.short_description}
                  onChange={(e) => handleCourseChange('short_description', e.target.value)}
                  rows={3}
                  placeholder="Brief description that appears in the main content area"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select value={course.category} onValueChange={(value) => handleCourseChange('category', value)}>
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
                  <ImageUpload
                    label="Course Thumbnail Image"
                    value={course.image_url}
                    onChange={(url) => handleCourseChange('image_url', url)}
                    placeholder="Upload the course thumbnail for listings and cards"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    This image appears as the course thumbnail in course listings and cards.
                  </p>
                </div>
                <div>
                  <ImageUpload
                    label="Course Background Image"
                    value={course.background_image_url}
                    onChange={(url) => handleCourseChange('background_image_url', url)}
                    placeholder="Upload the hero background image for course detail page"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    This image appears as the hero background on the course detail page behind the course title and description.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="duration">Duration Text</Label>
                  <Input
                    id="duration"
                    value={course.duration}
                    onChange={(e) => handleCourseChange('duration', e.target.value)}
                    placeholder="6 Month Course"
                  />
                </div>
                <div>
                  <Label htmlFor="session_duration">Session Duration</Label>
                  <Input
                    id="session_duration"
                    value={course.session_duration}
                    onChange={(e) => handleCourseChange('session_duration', e.target.value)}
                    placeholder="2 Hour Sessions"
                  />
                </div>
                <div>
                  <Label htmlFor="total_duration_months">Duration (Months)</Label>
                  <Input
                    id="total_duration_months"
                    type="number"
                    value={course.total_duration_months}
                    onChange={(e) => handleCourseChange('total_duration_months', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="session_count">Total Lessons</Label>
                  <Input
                    id="session_count"
                    type="number"
                    value={course.session_count}
                    onChange={(e) => handleCourseChange('session_count', parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="prerequisites">Prerequisites</Label>
                <Textarea
                  id="prerequisites"
                  value={course.prerequisites}
                  onChange={(e) => handleCourseChange('prerequisites', e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instructor Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="instructor_name">Instructor Name</Label>
                  <Input
                    id="instructor_name"
                    value={course.instructor_name}
                    onChange={(e) => handleCourseChange('instructor_name', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="instructor_title">Instructor Title</Label>
                  <Input
                    id="instructor_title"
                    value={course.instructor_title}
                    onChange={(e) => handleCourseChange('instructor_title', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="instructor_experience">Instructor Experience</Label>
                <Input
                  id="instructor_experience"
                  value={course.instructor_experience}
                  onChange={(e) => handleCourseChange('instructor_experience', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="instructor_bio">Instructor Bio</Label>
                <Textarea
                  id="instructor_bio"
                  value={course.instructor_bio}
                  onChange={(e) => handleCourseChange('instructor_bio', e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <ImageUpload
                  label="Instructor Photo"
                  value={course.instructor_image_url}
                  onChange={(url) => handleCourseChange('instructor_image_url', url)}
                  placeholder="Upload instructor's photo"
                />
              </div>

              <div>
                <Label>Status</Label>
                <Select value={course.status} onValueChange={(value: 'draft' | 'published') => handleCourseChange('status', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="outcomes" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Learning Outcomes</CardTitle>
              <Button onClick={addLearningOutcome}>
                <Plus className="mr-2 h-4 w-4" />
                Add Outcome
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Outcome {index + 1}</Badge>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => removeLearningOutcome(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <Label>Title</Label>
                      <Input
                        value={outcome.title}
                        onChange={(e) => updateLearningOutcome(index, 'title', e.target.value)}
                        placeholder="e.g., Core Java Programming"
                      />
                    </div>
                    <div>
                      <Label>Icon</Label>
                      <Select 
                        value={outcome.icon_name} 
                        onValueChange={(value) => updateLearningOutcome(index, 'icon_name', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {iconOptions.map((icon) => (
                            <SelectItem key={icon} value={icon}>{icon}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={outcome.description}
                      onChange={(e) => updateLearningOutcome(index, 'description', e.target.value)}
                      placeholder="Describe what students will learn"
                      rows={2}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="syllabus" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Course Syllabus</CardTitle>
              <Button onClick={addSyllabusSection}>
                <Plus className="mr-2 h-4 w-4" />
                Add Section
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {syllabusSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">
                      {String(sectionIndex + 1).padStart(2, '0')} {section.title || 'New Section'}
                    </Badge>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => removeSyllabusSection(sectionIndex)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <Label>Section Title</Label>
                    <Input
                      value={section.title}
                      onChange={(e) => updateSyllabusSection(sectionIndex, e.target.value)}
                      placeholder="e.g., Java Fundamentals"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label>Topics</Label>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => addSyllabusTopic(sectionIndex)}
                      >
                        <Plus className="mr-2 h-3 w-3" />
                        Add Topic
                      </Button>
                    </div>
                    
                    {syllabusTopics[sectionIndex]?.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex gap-2">
                        <Input
                          value={topic.topic}
                          onChange={(e) => updateSyllabusTopic(sectionIndex, topicIndex, e.target.value)}
                          placeholder="Enter topic"
                        />
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => removeSyllabusTopic(sectionIndex, topicIndex)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )) || []}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Student Projects</CardTitle>
              <Button onClick={addCourseProject}>
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {courseProjects.map((project, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Project {index + 1}</Badge>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => removeCourseProject(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Project Title</Label>
                      <Input
                        value={project.title}
                        onChange={(e) => updateCourseProject(index, 'title', e.target.value)}
                        placeholder="e.g., E-commerce Platform"
                      />
                    </div>
                    <div>
                      <Label>Project URL (Optional)</Label>
                      <Input
                        value={project.project_url}
                        onChange={(e) => updateCourseProject(index, 'project_url', e.target.value)}
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={project.description}
                      onChange={(e) => updateCourseProject(index, 'description', e.target.value)}
                      placeholder="Describe the project"
                      rows={2}
                    />
                  </div>
                  
                  <div>
                    <ImageUpload
                      label="Project Image"
                      value={project.image_url}
                      onChange={(url) => updateCourseProject(index, 'image_url', url)}
                      placeholder="Upload project screenshot or image"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Student Testimonials</CardTitle>
              <Button onClick={addTestimonial}>
                <Plus className="mr-2 h-4 w-4" />
                Add Testimonial
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Testimonial {index + 1}</Badge>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => removeTestimonial(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Student Name</Label>
                      <Input
                        value={testimonial.student_name}
                        onChange={(e) => updateTestimonial(index, 'student_name', e.target.value)}
                        placeholder="Student Name"
                      />
                    </div>
                    <div>
                      <Label>Rating (1-5)</Label>
                      <Input
                        type="number"
                        min="1"
                        max="5"
                        value={testimonial.rating}
                        onChange={(e) => updateTestimonial(index, 'rating', parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <Label>Date</Label>
                      <Input
                        type="date"
                        value={testimonial.testimonial_date}
                        onChange={(e) => updateTestimonial(index, 'testimonial_date', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Testimonial Text</Label>
                    <Textarea
                      value={testimonial.testimonial_text}
                      onChange={(e) => updateTestimonial(index, 'testimonial_text', e.target.value)}
                      placeholder="Student's feedback about the course"
                      rows={3}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DetailedCourseForm;
