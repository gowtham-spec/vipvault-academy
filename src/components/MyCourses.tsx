import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Play, Lock, CheckCircle } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import { useToast } from '@/hooks/use-toast';

interface Enrollment {
  id: string;
  course_id: string;
  progress_percentage: number;
  courses: {
    id: string;
    title: string;
    image_url: string;
    description: string;
  };
}

interface Video {
  id: string;
  title: string;
  description: string;
  file_url: string;
  order_index: number;
  duration_seconds: number;
}

interface VideoProgress {
  id: string;
  video_id: string;
  watch_time_seconds: number;
  completed: boolean;
  last_position_seconds: number;
}

const MyCourses = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [videoProgress, setVideoProgress] = useState<VideoProgress[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchEnrollments();
    }
  }, [user]);

  const fetchEnrollments = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        id,
        course_id,
        progress_percentage,
        courses (
          id,
          title,
          image_url,
          description
        )
      `)
      .eq('user_id', user.id)
      .eq('status', 'active');

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch your courses",
        variant: "destructive"
      });
      return;
    }

    setEnrollments(data || []);
    setLoading(false);
  };

  const fetchCourseVideos = async (courseId: string) => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .eq('course_id', courseId)
      .eq('status', 'active')
      .order('order_index');

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch course videos",
        variant: "destructive"
      });
      return;
    }

    setVideos(data || []);
    await fetchVideoProgress(courseId);
  };

  const fetchVideoProgress = async (courseId: string) => {
    if (!user) return;

    const { data, error } = await supabase
      .from('video_progress')
      .select('*')
      .eq('user_id', user.id)
      .in('video_id', videos.map(v => v.id));

    if (error) {
      console.error('Error fetching video progress:', error);
      return;
    }

    setVideoProgress(data || []);
  };

  const checkVideoAccess = async (video: Video, courseId: string) => {
    if (!user) return false;

    const { data, error } = await supabase.rpc('can_access_video', {
      p_user_id: user.id,
      p_course_id: courseId,
      p_video_order_index: video.order_index
    });

    if (error) {
      console.error('Error checking video access:', error);
      return false;
    }

    return data;
  };

  const handleCourseClick = async (courseId: string) => {
    setSelectedCourse(courseId);
    await fetchCourseVideos(courseId);
  };

  const handleVideoClick = async (video: Video) => {
    const canAccess = await checkVideoAccess(video, selectedCourse!);
    
    if (!canAccess) {
      toast({
        title: "Video Locked",
        description: "You need to complete the previous video and quiz to access this video.",
        variant: "destructive"
      });
      return;
    }

    setSelectedVideo(video);
  };

  const getVideoProgress = (videoId: string) => {
    return videoProgress.find(vp => vp.video_id === videoId);
  };

  const isVideoCompleted = (videoId: string) => {
    const progress = getVideoProgress(videoId);
    return progress?.completed || false;
  };

  const canAccessVideo = async (video: Video) => {
    if (!selectedCourse || !user) return false;
    return await checkVideoAccess(video, selectedCourse);
  };

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground mb-4">Please sign in to view your courses</p>
        <Button 
          onClick={() => window.location.href = '/auth'}
          className="px-6 py-2"
        >
          Sign In
        </Button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-muted rounded-t-lg"></div>
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-3 bg-muted rounded mb-4"></div>
              <div className="h-2 bg-muted rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (selectedVideo) {
    return (
      <VideoPlayer
        video={selectedVideo}
        courseId={selectedCourse!}
        onBack={() => setSelectedVideo(null)}
        onVideoComplete={() => {
          setSelectedVideo(null);
          fetchCourseVideos(selectedCourse!);
        }}
      />
    );
  }

  if (selectedCourse) {
    return (
      <div>
        <Button 
          variant="outline" 
          onClick={() => setSelectedCourse(null)}
          className="mb-6"
        >
          ← Back to My Courses
        </Button>
        
        <div className="grid gap-4">
          <h3 className="text-2xl font-bold mb-4">Course Videos</h3>
          {videos.map((video, index) => {
            const progress = getVideoProgress(video.id);
            const completed = isVideoCompleted(video.id);
            
            return (
              <Card key={video.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {completed ? (
                          <CheckCircle className="h-8 w-8 text-green-500" />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {video.order_index === 1 || completed ? (
                              <Play className="h-4 w-4 text-primary" />
                            ) : (
                              <Lock className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold">{video.title}</h4>
                        <p className="text-sm text-muted-foreground">{video.description}</p>
                        {progress && (
                          <div className="mt-2">
                            <Progress 
                              value={progress.watch_time_seconds / (video.duration_seconds || 1) * 100} 
                              className="h-2"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => handleVideoClick(video)}
                      variant={completed ? "outline" : "default"}
                    >
                      {completed ? "Rewatch" : "Watch"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">My Courses</h2>
      
      {enrollments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">You haven't enrolled in any courses yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enrollments.map((enrollment) => (
            <Card 
              key={enrollment.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleCourseClick(enrollment.course_id)}
            >
              <div className="relative">
                <img 
                  src={enrollment.courses.image_url || '/placeholder.svg'} 
                  alt={enrollment.courses.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2">
                  {enrollment.progress_percentage}% Complete
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{enrollment.courses.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {enrollment.courses.description}
                </p>
                
                <div className="space-y-2">
                  <Progress value={enrollment.progress_percentage} />
                  <p className="text-xs text-muted-foreground">
                    Progress: {enrollment.progress_percentage}%
                  </p>
                </div>
                
                <Button className="w-full mt-4">
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;