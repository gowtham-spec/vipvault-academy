-- Allow the admin to view all profiles while keeping existing user-only policies

-- Helper function to detect admin by email from JWT
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  (auth.jwt() ->> 'email') = 'gowthamj0055@gmail.com'
$$;

-- Add permissive policy for admin to view all profiles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'profiles' AND policyname = 'Admin can view all profiles'
  ) THEN
    CREATE POLICY "Admin can view all profiles"
    ON public.profiles
    FOR SELECT
    USING (public.is_admin());
  END IF;
END $$;