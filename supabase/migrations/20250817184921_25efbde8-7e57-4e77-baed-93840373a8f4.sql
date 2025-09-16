-- Add admin policy to allow admins to view all enrollments
CREATE POLICY "Admins can view all enrollments" 
ON public.enrollments 
FOR SELECT 
USING (is_admin());