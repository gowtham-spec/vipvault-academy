import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.55.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface CreateUserRequest {
  email: string;
  password: string;
  fullName: string;
  courseId: string;
  courseDuration: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get the authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('No authorization header')
    }

    // Create Supabase client for user verification
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
      global: { headers: { Authorization: authHeader } }
    })

    // Verify the user is authenticated and is the admin
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) {
      console.error('User verification failed:', userError)
      throw new Error('Authentication failed')
    }

    // Check if user is admin
    if (user.email !== 'gowthamj0055@gmail.com') {
      console.error('Non-admin user attempting to create user:', user.email)
      throw new Error('Unauthorized: Admin access required')
    }

    // Parse request body
    const { email, password, fullName, courseId, courseDuration }: CreateUserRequest = await req.json()

    console.log('Creating user with data:', { email, fullName, courseId, courseDuration })

    // Create Supabase admin client
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const adminSupabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false }
    })

    // First, get course details
    const { data: courseData, error: courseError } = await adminSupabase
      .from('courses')
      .select('title')
      .eq('id', courseId)
      .single()

    if (courseError || !courseData) {
      console.error('Course fetch error:', courseError)
      throw new Error('Course not found')
    }

    // Generate custom user ID
    const coursePrefix = courseData.title.toLowerCase().replace(/\s+/g, '_').substring(0, 10)
    const emailPrefix = email.split('@')[0].substring(0, 5)
    const randomSuffix = Math.random().toString(36).substring(2, 6)
    const customUserId = `${coursePrefix}_${emailPrefix}_${randomSuffix}`

    // Create user using admin client
    const { data: authData, error: authError } = await adminSupabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
        course_id: courseId,
        course_title: courseData.title,
        custom_user_id: customUserId,
      },
    })

    if (authError) {
      console.error('Auth error:', authError)
      throw authError
    }

    console.log('User created successfully:', authData.user?.id)

    // Create profile for the user
    if (authData.user) {
      const { error: profileError } = await adminSupabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          email: email,
          full_name: fullName,
        })

      if (profileError) {
        console.error('Error creating profile:', profileError)
        // Don't throw here as user creation was successful
      } else {
        console.log('Profile created successfully')
      }
    }

    // Create enrollment for the user
    if (authData.user) {
      // Calculate expiry date based on course duration
      const expiryDate = new Date()
      expiryDate.setMonth(expiryDate.getMonth() + parseInt(courseDuration))

      const { error: enrollmentError } = await adminSupabase
        .from('enrollments')
        .insert({
          user_id: authData.user.id,
          course_id: courseId,
          status: 'active',
          expires_at: expiryDate.toISOString(),
        })

      if (enrollmentError) {
        console.error('Error creating enrollment:', enrollmentError)
        // Don't throw here as user creation was successful
      } else {
        console.log('Enrollment created successfully')
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `User created successfully with ID: ${customUserId}`,
        customUserId 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error in create-user function:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to create user' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})