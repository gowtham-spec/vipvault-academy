-- Fix security issue: Add search_path to the is_admin function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
SELECT COALESCE((auth.jwt() ->> 'email')::text = 'gowthamj0055@gmail.com', false);
$$;