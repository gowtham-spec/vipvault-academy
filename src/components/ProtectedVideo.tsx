
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { Play, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProtectedVideoProps {
  videoUrl: string;
  courseId: string;
  title: string;
  thumbnail?: string;
}

const ProtectedVideo = ({ videoUrl, courseId, title, thumbnail }: ProtectedVideoProps) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(videoUrl);

  console.log('ProtectedVideo props:', { videoUrl, courseId, title, thumbnail });

  const getSignedUrl = async (url: string) => {
    try {
      // Extract the file path from the public URL
      const urlParts = url.split('/storage/v1/object/public/');
      if (urlParts.length === 2) {
        const [bucketAndPath] = urlParts[1].split('/', 1);
        const filePath = urlParts[1].substring(bucketAndPath.length + 1);
        
        console.log('Getting signed URL for:', { bucket: bucketAndPath, path: filePath });
        
        const { data, error } = await supabase.storage
          .from(bucketAndPath)
          .createSignedUrl(filePath, 3600); // 1 hour expiry
        
        if (error) {
          console.error('Error creating signed URL:', error);
          return url; // Fallback to original URL
        }
        
        console.log('Generated signed URL:', data.signedUrl);
        return data.signedUrl;
      }
    } catch (error) {
      console.error('Error processing signed URL:', error);
    }
    return url; // Fallback to original URL
  };

  useEffect(() => {
    const initializeVideo = async () => {
      if (videoUrl) {
        console.log('Initializing video with signed URL');
        setIsLoading(true);
        setVideoError(false);
        
        // Always try to get signed URL first since it's a private bucket
        const signedUrl = await getSignedUrl(videoUrl);
        setCurrentVideoUrl(signedUrl);
        setIsLoading(false);
      }
    };
    
    initializeVideo();
  }, [videoUrl]);

  const trackVideoView = async () => {
    if (user) {
      try {
        await supabase
          .from('video_views')
          .insert({
            user_id: user.id,
            course_id: courseId,
            video_url: videoUrl
          });
        console.log('Video view tracked successfully');
      } catch (error) {
        console.error('Error tracking video view:', error);
      }
    }
  };

  const handleVideoPlay = () => {
    console.log('Video play event triggered');
    if (user) {
      trackVideoView();
    }
  };

  const handleVideoError = async (event: any) => {
    console.error('Video failed to load:', currentVideoUrl);
    console.error('Video error event:', event);
    setVideoError(true);
  };

  const handleVideoCanPlay = () => {
    console.log('Video can play - loaded successfully');
    setVideoError(false);
    setIsLoading(false);
  };

  const handleVideoLoadStart = () => {
    console.log('Video load started');
    setIsLoading(true);
    setVideoError(false);
  };

  if (!user) {
    return (
      <div className="relative cursor-pointer">
        <div className="relative">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-64 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <Play size={48} className="mx-auto mb-2 opacity-60" />
                <p className="text-lg font-medium">{title}</p>
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
            <div className="text-white text-center">
              <Lock size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sign In Required</h3>
              <p className="mb-4">Please sign in to watch this video</p>
              <Link to="/auth">
                <Button className="bg-primary hover:bg-primary/90">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-64 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <p className="text-lg font-medium">{title}</p>
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
            <Play size={64} className="text-white" />
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl w-[90vw]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Course video content
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video">
          {videoError ? (
            <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-lg mb-2">Unable to load video</p>
                <p className="text-sm text-gray-400 mb-4">
                  Please try refreshing the page or contact support if the issue persists.
                </p>
              </div>
            </div>
          ) : (
            <>
              {isLoading && (
                <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                  <div className="text-white">Loading video...</div>
                </div>
              )}
              <video 
                controls 
                className="w-full h-full rounded"
                onPlay={handleVideoPlay}
                onError={handleVideoError}
                onCanPlay={handleVideoCanPlay}
                onLoadStart={handleVideoLoadStart}
                onLoadedData={() => {
                  console.log('Video data loaded');
                  setIsLoading(false);
                }}
                preload="metadata"
                style={{ display: isLoading ? 'none' : 'block' }}
                key={currentVideoUrl}
              >
                <source src={currentVideoUrl} type="video/mp4" />
                <source src={currentVideoUrl} type="video/webm" />
                <source src={currentVideoUrl} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </>
          )}
        </div>
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
            <p><strong>Debug Info:</strong></p>
            <p>Original Video URL: {videoUrl}</p>
            <p>Current Video URL: {currentVideoUrl}</p>
            <p>Course ID: {courseId}</p>
            <p>Video Error: {videoError ? 'Yes' : 'No'}</p>
            <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProtectedVideo;
