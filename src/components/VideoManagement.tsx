import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Video, Upload, Play, Trash2, Plus, ArrowLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Course {
  id: string;
  title: string;
  status: string;
}

interface VideoData {
  id: string;
  title: string;
  description?: string;
  file_url: string;
  duration_seconds?: number;
  order_index: number;
  status: string;
  created_at: string;
}

interface VideoManagementProps {
  onBack: () => void;
}

const VideoManagement = ({ onBack }: VideoManagementProps) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [videos, setVideos] = useState<{ [courseId: string]: VideoData[] }>({});
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form state for video upload
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('id, title, status')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCourses(data || []);
      
      // Fetch videos for all courses
      if (data) {
        for (const course of data) {
          await fetchVideosForCourse(course.id);
        }
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast.error('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const fetchVideosForCourse = async (courseId: string) => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .eq('course_id', courseId)
        .order('order_index', { ascending: true });

      if (error) throw error;
      
      setVideos(prev => ({
        ...prev,
        [courseId]: data || []
      }));
    } catch (error) {
      console.error('Error fetching videos for course:', error);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check if file is a video
      if (!file.type.startsWith('video/')) {
        toast.error('Please select a video file');
        return;
      }
      
      // Check file size (0MB to 1.5GB)
      const maxSize = 1.5 * 1024 * 1024 * 1024; // 1.5GB
      
      if (file.size > maxSize) {
        toast.error('File size should be less than 1.5GB');
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const uploadVideo = async () => {
    if (!selectedCourse || !selectedFile || !videoTitle.trim()) {
      toast.error('Please fill all required fields and select a video file');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Generate unique filename
      const timestamp = Date.now();
      const fileExtension = selectedFile.name.split('.').pop();
      const fileName = `${selectedCourse.id}/${timestamp}-${videoTitle.replace(/[^a-zA-Z0-9]/g, '_')}.${fileExtension}`;

      console.log('Starting video upload:', fileName, 'Size:', selectedFile.size);

      // Create a custom upload with progress tracking
      const uploadPromise = new Promise<string>((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const xhr = new XMLHttpRequest();

        // Track upload progress
        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            const percentComplete = Math.round((event.loaded / event.total) * 100);
            console.log('Upload progress:', percentComplete + '%');
            setUploadProgress(percentComplete);
          }
        });

        xhr.addEventListener('load', async () => {
          if (xhr.status === 200) {
            console.log('Upload completed successfully');
            
            // Get public URL after successful upload
            const { data: { publicUrl } } = supabase.storage
              .from('course-videos')
              .getPublicUrl(fileName);
            
            resolve(publicUrl);
          } else {
            console.error('Upload failed with status:', xhr.status);
            reject(new Error(`Upload failed with status: ${xhr.status}`));
          }
        });

        xhr.addEventListener('error', () => {
          console.error('Upload error occurred');
          reject(new Error('Upload failed'));
        });

        xhr.addEventListener('timeout', () => {
          console.error('Upload timeout');
          reject(new Error('Upload timed out'));
        });

        // Set timeout to 10 minutes for large files
        xhr.timeout = 10 * 60 * 1000;

        // Start the upload using Supabase storage
        supabase.storage
          .from('course-videos')
          .upload(fileName, selectedFile)
          .then(({ data, error }) => {
            if (error) {
              console.error('Supabase upload error:', error);
              reject(error);
              return;
            }
            
            console.log('Supabase upload success:', data);
            setUploadProgress(100);
            
            // Get public URL
            const { data: { publicUrl } } = supabase.storage
              .from('course-videos')
              .getPublicUrl(fileName);
            
            resolve(publicUrl);
          })
          .catch((error) => {
            console.error('Supabase upload failed:', error);
            reject(error);
          });
      });

      const publicUrl = await uploadPromise;

      // Get the next order index
      const currentVideos = videos[selectedCourse.id] || [];
      const nextOrderIndex = currentVideos.length > 0 
        ? Math.max(...currentVideos.map(v => v.order_index)) + 1 
        : 0;

      console.log('Saving video metadata to database');

      // Save video metadata to database
      const { error: dbError } = await supabase
        .from('videos')
        .insert({
          course_id: selectedCourse.id,
          title: videoTitle,
          description: videoDescription || null,
          file_url: publicUrl,
          order_index: nextOrderIndex,
          status: 'active'
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      console.log('Video upload and metadata save completed successfully');
      toast.success('Video uploaded successfully!');
      
      // Reset form
      setVideoTitle('');
      setVideoDescription('');
      setSelectedFile(null);
      setIsUploadModalOpen(false);
      
      // Refresh videos for the course
      await fetchVideosForCourse(selectedCourse.id);

    } catch (error) {
      console.error('Error uploading video:', error);
      toast.error('Failed to upload video. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const deleteVideo = async (videoId: string, courseId: string) => {
    if (!confirm('Are you sure you want to delete this video?')) {
      return;
    }

    try {
      console.log('Deleting video:', videoId);
      
      const { error } = await supabase
        .from('videos')
        .delete()
        .eq('id', videoId);

      if (error) throw error;

      toast.success('Video deleted successfully');
      await fetchVideosForCourse(courseId);
    } catch (error) {
      console.error('Error deleting video:', error);
      toast.error('Failed to delete video');
    }
  };

  const formatDuration = (seconds?: number) => {
    if (!seconds) return 'Unknown duration';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Calculate total videos across all courses
  const totalVideos = Object.values(videos).reduce((total, courseVideos) => total + courseVideos.length, 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading video management...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="flex items-center gap-2">
          <Video className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Video Management</h1>
        </div>
        <div className="ml-auto bg-primary/10 px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-primary">
            Total Videos: {totalVideos}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side - Course List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Courses</CardTitle>
              <p className="text-sm text-muted-foreground">
                Select a course to manage its videos
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {courses.map((course) => (
                  <Card 
                    key={course.id} 
                    className={`cursor-pointer transition-colors hover:bg-accent ${
                      selectedCourse?.id === course.id ? 'bg-accent border-primary' : ''
                    }`}
                    onClick={() => setSelectedCourse(course)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{course.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground">
                              {videos[course.id]?.length || 0} videos
                            </span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              course.status === 'published' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {course.status}
                            </span>
                          </div>
                        </div>
                        <Video className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {courses.length === 0 && (
                  <p className="text-center text-muted-foreground py-4 text-sm">
                    No courses available
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Video Management */}
        <div className="lg:col-span-2">
          {selectedCourse ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{selectedCourse.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage videos for this course ({videos[selectedCourse.id]?.length || 0} videos)
                    </p>
                  </div>
                  <Dialog 
                    open={isUploadModalOpen}
                    onOpenChange={setIsUploadModalOpen}
                  >
                    <DialogTrigger asChild>
                      <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Upload Video
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Upload Video to {selectedCourse.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">Video Title *</Label>
                          <Input
                            id="title"
                            value={videoTitle}
                            onChange={(e) => setVideoTitle(e.target.value)}
                            placeholder="Enter video title"
                            disabled={isUploading}
                          />
                        </div>
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            value={videoDescription}
                            onChange={(e) => setVideoDescription(e.target.value)}
                            placeholder="Enter video description (optional)"
                            disabled={isUploading}
                          />
                        </div>
                        <div>
                          <Label htmlFor="video">Video File * (up to 1.5GB)</Label>
                          <Input
                            id="video"
                            type="file"
                            accept="video/*"
                            onChange={handleFileSelect}
                            disabled={isUploading}
                          />
                          {selectedFile && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                            </p>
                          )}
                        </div>
                        {isUploading && (
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Uploading...</span>
                              <span>{Math.round(uploadProgress)}%</span>
                            </div>
                            <Progress value={uploadProgress} />
                          </div>
                        )}
                        <div className="flex gap-2">
                          <Button 
                            onClick={uploadVideo} 
                            disabled={isUploading || !selectedFile || !videoTitle.trim()}
                            className="flex items-center gap-2"
                          >
                            <Upload className="h-4 w-4" />
                            {isUploading ? 'Uploading...' : 'Upload Video'}
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => {
                              setIsUploadModalOpen(false);
                              setVideoTitle('');
                              setVideoDescription('');
                              setSelectedFile(null);
                            }}
                            disabled={isUploading}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                {videos[selectedCourse.id] && videos[selectedCourse.id].length > 0 ? (
                  <div className="space-y-4">
                    {videos[selectedCourse.id].map((video) => (
                      <Card key={video.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <Play className="h-5 w-5 text-primary flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium truncate">{video.title}</h4>
                              {video.description && (
                                <p className="text-sm text-muted-foreground truncate">{video.description}</p>
                              )}
                              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                                <span>Order: {video.order_index + 1}</span>
                                <span>{formatDuration(video.duration_seconds)}</span>
                                <span>Status: {video.status}</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteVideo(video.id, selectedCourse.id)}
                            className="flex-shrink-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      No videos uploaded for this course yet.
                    </p>
                    <Button 
                      onClick={() => setIsUploadModalOpen(true)}
                      className="flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Upload First Video
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Select a course from the left to manage its videos
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoManagement;
