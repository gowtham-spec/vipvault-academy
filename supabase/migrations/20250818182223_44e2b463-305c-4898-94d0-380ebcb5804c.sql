-- Add new columns to courses table for detailed information
ALTER TABLE public.courses 
ADD COLUMN IF NOT EXISTS short_description TEXT,
ADD COLUMN IF NOT EXISTS total_duration_months INTEGER,
ADD COLUMN IF NOT EXISTS session_count INTEGER,
ADD COLUMN IF NOT EXISTS instructor_image_url TEXT,
ADD COLUMN IF NOT EXISTS instructor_bio TEXT;

-- Create learning outcomes table
CREATE TABLE IF NOT EXISTS public.learning_outcomes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT,
  order_index INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for learning outcomes
ALTER TABLE public.learning_outcomes ENABLE ROW LEVEL SECURITY;

-- Create policies for learning outcomes
CREATE POLICY "Anyone can view learning outcomes for published courses" 
ON public.learning_outcomes 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM courses 
    WHERE courses.id = learning_outcomes.course_id 
    AND courses.status = 'published'::course_status
  )
);

CREATE POLICY "Admins can manage learning outcomes" 
ON public.learning_outcomes 
FOR ALL 
USING (is_admin())
WITH CHECK (is_admin());

-- Create course projects table for student work showcase
CREATE TABLE IF NOT EXISTS public.course_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  project_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for course projects
ALTER TABLE public.course_projects ENABLE ROW LEVEL SECURITY;

-- Create policies for course projects
CREATE POLICY "Anyone can view projects for published courses" 
ON public.course_projects 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM courses 
    WHERE courses.id = course_projects.course_id 
    AND courses.status = 'published'::course_status
  )
);

CREATE POLICY "Admins can manage course projects" 
ON public.course_projects 
FOR ALL 
USING (is_admin())
WITH CHECK (is_admin());