
-- Add image field to courses table
ALTER TABLE public.courses 
ADD COLUMN image_url text;

-- Add category field to courses table to match the featured courses design
ALTER TABLE public.courses 
ADD COLUMN category text;
