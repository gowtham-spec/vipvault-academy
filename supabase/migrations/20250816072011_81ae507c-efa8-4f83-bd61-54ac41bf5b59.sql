
-- Allow admins to insert new courses
CREATE POLICY "Admins can create courses" 
  ON public.courses 
  FOR INSERT 
  WITH CHECK (is_admin());

-- Allow admins to update courses (for editing and publish/unpublish)
CREATE POLICY "Admins can update courses" 
  ON public.courses 
  FOR UPDATE 
  USING (is_admin());

-- Allow admins to delete courses if needed
CREATE POLICY "Admins can delete courses" 
  ON public.courses 
  FOR DELETE 
  USING (is_admin());

-- Allow admins to view all courses (including drafts)
CREATE POLICY "Admins can view all courses" 
  ON public.courses 
  FOR SELECT 
  USING (is_admin());
