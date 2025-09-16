-- Policies to allow admin to create/edit course details content

-- Syllabus Sections: allow admins to manage
CREATE POLICY "Admins can manage syllabus sections"
ON public.syllabus_sections
FOR ALL
USING (is_admin())
WITH CHECK (is_admin());

-- Syllabus Topics: allow admins to manage  
CREATE POLICY "Admins can manage syllabus topics"
ON public.syllabus_topics
FOR ALL
USING (is_admin())
WITH CHECK (is_admin());

-- Testimonials: allow admins to manage (insert/update/delete)
CREATE POLICY "Admins can manage testimonials"
ON public.testimonials
FOR ALL
USING (is_admin())
WITH CHECK (is_admin());