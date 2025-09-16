-- Create quiz questions table
CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  video_id UUID NOT NULL,
  question_text TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_answer CHAR(1) NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D')),
  order_index INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quiz attempts table
CREATE TABLE IF NOT EXISTS public.quiz_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  video_id UUID NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  passed BOOLEAN NOT NULL DEFAULT false,
  attempt_number INTEGER NOT NULL DEFAULT 1,
  answers JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create video progress tracking table
CREATE TABLE IF NOT EXISTS public.video_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  video_id UUID NOT NULL,
  watch_time_seconds INTEGER NOT NULL DEFAULT 0,
  total_duration_seconds INTEGER,
  completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  last_position_seconds INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, video_id)
);

-- Enable RLS on all tables
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.video_progress ENABLE ROW LEVEL SECURITY;

-- RLS policies for quiz_questions
CREATE POLICY "Anyone can view quiz questions for enrolled courses" 
ON public.quiz_questions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.videos v
    JOIN public.enrollments e ON e.course_id = v.course_id
    WHERE v.id = quiz_questions.video_id 
    AND e.user_id = auth.uid()
  )
);

CREATE POLICY "Admins can manage quiz questions" 
ON public.quiz_questions 
FOR ALL 
USING (is_admin())
WITH CHECK (is_admin());

-- RLS policies for quiz_attempts
CREATE POLICY "Users can view their own quiz attempts" 
ON public.quiz_attempts 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quiz attempts" 
ON public.quiz_attempts 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all quiz attempts" 
ON public.quiz_attempts 
FOR SELECT 
USING (is_admin());

-- RLS policies for video_progress
CREATE POLICY "Users can view their own video progress" 
ON public.video_progress 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own video progress" 
ON public.video_progress 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can modify their own video progress" 
ON public.video_progress 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all video progress" 
ON public.video_progress 
FOR SELECT 
USING (is_admin());

-- Add foreign key constraints
ALTER TABLE public.quiz_questions 
ADD CONSTRAINT fk_quiz_questions_video_id 
FOREIGN KEY (video_id) REFERENCES public.videos(id) ON DELETE CASCADE;

ALTER TABLE public.quiz_attempts 
ADD CONSTRAINT fk_quiz_attempts_video_id 
FOREIGN KEY (video_id) REFERENCES public.videos(id) ON DELETE CASCADE;

ALTER TABLE public.video_progress 
ADD CONSTRAINT fk_video_progress_video_id 
FOREIGN KEY (video_id) REFERENCES public.videos(id) ON DELETE CASCADE;