import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import QuizModal from './QuizModal';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Play, Pause } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  file_url: string;
  order_index: number;
  duration_seconds: number;
}

interface VideoPlayerProps {
  video: Video;
  courseId: string;
  onBack: () => void;
  onVideoComplete: () => void;
}

interface QuizQuestion {
  id: string;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  order_index: number;
}

const VideoPlayer = ({ video, courseId, onBack, onVideoComplete }: VideoPlayerProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [watchTime, setWatchTime] = useState(0);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideo();
    loadVideoProgress();
    loadQuizQuestions();
  }, [video.id]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && videoRef.current) {
        const currentWatchTime = Math.floor(videoRef.current.currentTime);
        setWatchTime(currentWatchTime);
        updateVideoProgress(currentWatchTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const loadVideo = async () => {
    try {
      const signedUrl = await getSignedUrl(video.file_url);
      setVideoUrl(signedUrl);
      setLoading(false);
    } catch (error) {
      console.error('Error loading video:', error);
      toast({
        title: "Error",
        description: "Failed to load video",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  const getSignedUrl = async (url: string): Promise<string> => {
    const { data, error } = await supabase.storage
      .from('course-videos')
      .createSignedUrl(url, 3600); // 1 hour expiry

    if (error) throw error;
    return data.signedUrl;
  };

  const loadVideoProgress = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('video_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('video_id', video.id)
      .single();

    if (data && !error) {
      setWatchTime(data.watch_time_seconds);
      setVideoCompleted(data.completed);
      
      // Set video to last position
      if (videoRef.current && data.last_position_seconds > 0) {
        videoRef.current.currentTime = data.last_position_seconds;
      }
    }
  };

  const loadQuizQuestions = async () => {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('video_id', video.id)
      .order('order_index');

    if (error) {
      console.error('Error loading quiz questions:', error);
      return;
    }

    setQuizQuestions(data || []);
  };

  const updateVideoProgress = async (currentWatchTime: number) => {
    if (!user || !videoRef.current) return;

    const currentPosition = Math.floor(videoRef.current.currentTime);
    const videoDuration = Math.floor(videoRef.current.duration || 0);
    const completed = currentWatchTime >= (videoDuration * 0.9); // 90% watched = completed

    await supabase
      .from('video_progress')
      .upsert({
        user_id: user.id,
        video_id: video.id,
        watch_time_seconds: currentWatchTime,
        total_duration_seconds: videoDuration,
        completed,
        completed_at: completed ? new Date().toISOString() : null,
        last_position_seconds: currentPosition
      });

    if (completed && !videoCompleted) {
      setVideoCompleted(true);
      handleVideoCompletion();
    }
  };

  const handleVideoCompletion = () => {
    if (quizQuestions.length > 0) {
      setShowQuiz(true);
    } else {
      // No quiz, video is complete
      toast({
        title: "Video Completed!",
        description: "You can now proceed to the next video."
      });
      onVideoComplete();
    }
  };

  const handleQuizComplete = async (score: number) => {
    if (!user) return;

    const passed = score >= 6; // Need 6/10 to pass
    setQuizPassed(passed);

    // Get attempt number
    const { data: attempts } = await supabase
      .from('quiz_attempts')
      .select('attempt_number')
      .eq('user_id', user.id)
      .eq('video_id', video.id)
      .order('attempt_number', { ascending: false })
      .limit(1);

    const attemptNumber = attempts && attempts.length > 0 ? attempts[0].attempt_number + 1 : 1;

    await supabase
      .from('quiz_attempts')
      .insert({
        user_id: user.id,
        video_id: video.id,
        score,
        total_questions: quizQuestions.length,
        passed,
        attempt_number: attemptNumber
      });

    if (passed) {
      toast({
        title: "Quiz Passed!",
        description: "Great job! You can now proceed to the next video."
      });
      onVideoComplete();
    } else {
      toast({
        title: "Quiz Failed",
        description: "You need at least 6/10 to pass. Please watch the video again and retake the quiz.",
        variant: "destructive"
      });
      setShowQuiz(false);
      // Reset video progress to force rewatch
      setVideoCompleted(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="animate-pulse">Loading video...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" onClick={onBack}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Course
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>{video.title}</CardTitle>
          <p className="text-muted-foreground">{video.description}</p>
        </CardHeader>

        <CardContent>
          <div className="relative">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full rounded-lg"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls
            />
          </div>

          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <span className="text-sm text-muted-foreground">
                Watch time: {formatTime(watchTime)}
              </span>
            </div>

            <Progress value={(currentTime / duration) * 100} />

            {videoCompleted && quizQuestions.length > 0 && !quizPassed && (
              <Button 
                onClick={() => setShowQuiz(true)}
                className="w-full"
              >
                Take Quiz
              </Button>
            )}

            {videoCompleted && quizQuestions.length === 0 && (
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-medium">Video Completed!</p>
                <p className="text-green-600">You can now proceed to the next video.</p>
              </div>
            )}

            {quizPassed && (
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-medium">Quiz Passed!</p>
                <p className="text-green-600">You can now proceed to the next video.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <QuizModal
        isOpen={showQuiz}
        onClose={() => setShowQuiz(false)}
        onComplete={handleQuizComplete}
        lessonTitle={video.title}
        questions={quizQuestions.map(q => ({
          id: q.id,
          question: q.question_text,
          options: [q.option_a, q.option_b, q.option_c, q.option_d],
          correctAnswer: q.correct_answer.charCodeAt(0) - 65 // Convert A,B,C,D to 0,1,2,3
        }))}
      />
    </div>
  );
};

export default VideoPlayer;