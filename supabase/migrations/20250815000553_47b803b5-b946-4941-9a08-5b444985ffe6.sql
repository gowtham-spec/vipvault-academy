-- Simplify courses RLS policy to allow everyone to see published courses
DROP POLICY IF EXISTS "Public can view published courses, admin can view all" ON public.courses;

-- Create simple policy that allows anyone to view published courses
CREATE POLICY "Anyone can view published courses" 
ON public.courses 
FOR SELECT 
USING (status = 'published'::course_status);