-- Allow the admin to view all profiles while keeping existing user-only policies

-- Helper function to detect admin by email from JWT
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT COALESCE((auth.jwt() ->> 'email')::text = 'gowthamj0055@gmail.com', false);
$$;

-- Add permissive policy for admin to view all profiles
CREATE POLICY "Admin can view all profiles"
ON public.profiles
FOR SELECT
USING (public.is_admin());