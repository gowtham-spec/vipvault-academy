-- Add background_image_url column to courses table
ALTER TABLE public.courses 
ADD COLUMN background_image_url TEXT;