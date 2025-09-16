-- Update courses RLS policy to allow admin access
DROP POLICY IF EXISTS "Anyone can view published courses" ON public.courses;

-- Create new policy that allows published courses for everyone and all courses for admin
CREATE POLICY "Public can view published courses, admin can view all" 
ON public.courses 
FOR SELECT 
USING (
  status = 'published'::course_status 
  OR 
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'gowthamj0055@gmail.com'
  )
);