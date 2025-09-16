-- Create videos table for course video management
CREATE TABLE public.videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  duration_seconds INTEGER,
  order_index INTEGER NOT NULL DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view videos for published courses" 
ON public.videos 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.courses 
  WHERE courses.id = videos.course_id 
  AND courses.status = 'published'
));

CREATE POLICY "Admins can manage all videos" 
ON public.videos 
FOR ALL 
USING (is_admin());

-- Create storage bucket for videos
INSERT INTO storage.buckets (id, name, public) VALUES ('course-videos', 'course-videos', false);

-- Create storage policies for course videos
CREATE POLICY "Admins can upload course videos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'course-videos' AND is_admin());

CREATE POLICY "Admins can view all course videos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'course-videos' AND is_admin());

CREATE POLICY "Users can view videos for enrolled courses" 
ON storage.objects 
FOR SELECT 
USING (
  bucket_id = 'course-videos' AND 
  EXISTS (
    SELECT 1 FROM public.enrollments e
    JOIN public.videos v ON v.course_id = e.course_id
    WHERE e.user_id = auth.uid() 
    AND e.status = 'active'
    AND storage.foldername(name)[1] = v.course_id::text
  )
);

CREATE POLICY "Admins can update course videos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'course-videos' AND is_admin());

CREATE POLICY "Admins can delete course videos" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'course-videos' AND is_admin());