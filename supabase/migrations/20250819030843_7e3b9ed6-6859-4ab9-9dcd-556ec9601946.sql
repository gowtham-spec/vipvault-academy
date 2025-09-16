
-- Create storage bucket for course images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('course-images', 'course-images', true);

-- Create RLS policies for the course-images bucket
CREATE POLICY "Anyone can view course images" ON storage.objects
FOR SELECT USING (bucket_id = 'course-images');

CREATE POLICY "Authenticated users can upload course images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'course-images' AND 
  auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can update their course images" ON storage.objects
FOR UPDATE WITH CHECK (
  bucket_id = 'course-images' AND 
  auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can delete their course images" ON storage.objects
FOR DELETE USING (
  bucket_id = 'course-images' AND 
  auth.role() = 'authenticated'
);
