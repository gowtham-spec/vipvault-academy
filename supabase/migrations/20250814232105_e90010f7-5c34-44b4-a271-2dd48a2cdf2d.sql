-- Add expires_at column to enrollments table
ALTER TABLE public.enrollments 
ADD COLUMN expires_at TIMESTAMP WITH TIME ZONE;