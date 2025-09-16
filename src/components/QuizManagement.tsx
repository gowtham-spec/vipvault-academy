import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus, Edit } from 'lucide-react';

interface Course {
  id: string;
  title: string;
}

interface Video {
  id: string;
  title: string;
  order_index: number;
}

interface QuizQuestion {
  id: string;
  video_id: string;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  order_index: number;
}

const QuizManagement = () => {
  const { toast } = useToast();
  const [courses, setCourses] = useState<Course[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');
  const [editingQuestion, setEditingQuestion] = useState<QuizQuestion | null>(null);
  const [formData, setFormData] = useState({
    question_text: '',
    option_a: '',
    option_b: '',
    option_c: '',
    option_d: '',
    correct_answer: 'A'
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      fetchVideos(selectedCourse);
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedVideo) {
      fetchQuestions(selectedVideo);
    }
  }, [selectedVideo]);

  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from('courses')
      .select('id, title')
      .eq('status', 'published')
      .order('title');

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch courses",
        variant: "destructive"
      });
      return;
    }

    setCourses(data || []);
  };

  const fetchVideos = async (courseId: string) => {
    const { data, error } = await supabase
      .from('videos')
      .select('id, title, order_index')
      .eq('course_id', courseId)
      .eq('status', 'active')
      .order('order_index');

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch videos",
        variant: "destructive"
      });
      return;
    }

    setVideos(data || []);
  };

  const fetchQuestions = async (videoId: string) => {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('video_id', videoId)
      .order('order_index');

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch questions",
        variant: "destructive"
      });
      return;
    }

    setQuestions(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedVideo) {
      toast({
        title: "Error",
        description: "Please select a video first",
        variant: "destructive"
      });
      return;
    }

    const questionData = {
      video_id: selectedVideo,
      question_text: formData.question_text,
      option_a: formData.option_a,
      option_b: formData.option_b,
      option_c: formData.option_c,
      option_d: formData.option_d,
      correct_answer: formData.correct_answer,
      order_index: editingQuestion ? editingQuestion.order_index : questions.length + 1
    };

    if (editingQuestion) {
      const { error } = await supabase
        .from('quiz_questions')
        .update(questionData)
        .eq('id', editingQuestion.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update question",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Success",
        description: "Question updated successfully"
      });
    } else {
      const { error } = await supabase
        .from('quiz_questions')
        .insert(questionData);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to add question",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Success",
        description: "Question added successfully"
      });
    }

    resetForm();
    fetchQuestions(selectedVideo);
  };

  const handleEdit = (question: QuizQuestion) => {
    setEditingQuestion(question);
    setFormData({
      question_text: question.question_text,
      option_a: question.option_a,
      option_b: question.option_b,
      option_c: question.option_c,
      option_d: question.option_d,
      correct_answer: question.correct_answer
    });
  };

  const handleDelete = async (questionId: string) => {
    if (!confirm('Are you sure you want to delete this question?')) return;

    const { error } = await supabase
      .from('quiz_questions')
      .delete()
      .eq('id', questionId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete question",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success",
      description: "Question deleted successfully"
    });

    fetchQuestions(selectedVideo);
  };

  const resetForm = () => {
    setEditingQuestion(null);
    setFormData({
      question_text: '',
      option_a: '',
      option_b: '',
      option_c: '',
      option_d: '',
      correct_answer: 'A'
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Quiz Management</h2>
        <p className="text-muted-foreground">
          Add and manage quiz questions for course videos
        </p>
      </div>

      {/* Course and Video Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Course and Video</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="course">Course</Label>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map(course => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="video">Video</Label>
            <Select 
              value={selectedVideo} 
              onValueChange={setSelectedVideo}
              disabled={!selectedCourse}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a video" />
              </SelectTrigger>
              <SelectContent>
                {videos.map(video => (
                  <SelectItem key={video.id} value={video.id}>
                    {video.order_index}. {video.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Question Form */}
      {selectedVideo && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingQuestion ? 'Edit Question' : 'Add New Question'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="question_text">Question</Label>
                <Textarea
                  id="question_text"
                  value={formData.question_text}
                  onChange={(e) => setFormData(prev => ({ ...prev, question_text: e.target.value }))}
                  placeholder="Enter the question"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="option_a">Option A</Label>
                  <Input
                    id="option_a"
                    value={formData.option_a}
                    onChange={(e) => setFormData(prev => ({ ...prev, option_a: e.target.value }))}
                    placeholder="Option A"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="option_b">Option B</Label>
                  <Input
                    id="option_b"
                    value={formData.option_b}
                    onChange={(e) => setFormData(prev => ({ ...prev, option_b: e.target.value }))}
                    placeholder="Option B"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="option_c">Option C</Label>
                  <Input
                    id="option_c"
                    value={formData.option_c}
                    onChange={(e) => setFormData(prev => ({ ...prev, option_c: e.target.value }))}
                    placeholder="Option C"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="option_d">Option D</Label>
                  <Input
                    id="option_d"
                    value={formData.option_d}
                    onChange={(e) => setFormData(prev => ({ ...prev, option_d: e.target.value }))}
                    placeholder="Option D"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="correct_answer">Correct Answer</Label>
                <Select 
                  value={formData.correct_answer} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, correct_answer: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="D">D</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-2">
                <Button type="submit">
                  {editingQuestion ? 'Update Question' : 'Add Question'}
                </Button>
                {editingQuestion && (
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Questions List */}
      {selectedVideo && questions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Existing Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">
                      {index + 1}. {question.question_text}
                    </h4>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEdit(question)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDelete(question.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className={question.correct_answer === 'A' ? 'font-bold text-green-600' : ''}>
                      A. {question.option_a}
                    </div>
                    <div className={question.correct_answer === 'B' ? 'font-bold text-green-600' : ''}>
                      B. {question.option_b}
                    </div>
                    <div className={question.correct_answer === 'C' ? 'font-bold text-green-600' : ''}>
                      C. {question.option_c}
                    </div>
                    <div className={question.correct_answer === 'D' ? 'font-bold text-green-600' : ''}>
                      D. {question.option_d}
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-2">
                    Correct Answer: {question.correct_answer}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuizManagement;