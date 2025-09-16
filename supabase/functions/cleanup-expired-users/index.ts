import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    console.log('Starting cleanup of expired users...')

    // Find expired enrollments
    const { data: expiredEnrollments, error: enrollmentError } = await supabaseClient
      .from('enrollments')
      .select('user_id, expires_at')
      .lt('expires_at', new Date().toISOString())
      .eq('status', 'active')

    if (enrollmentError) {
      console.error('Error fetching expired enrollments:', enrollmentError)
      throw enrollmentError
    }

    console.log(`Found ${expiredEnrollments?.length || 0} expired enrollments`)

    if (!expiredEnrollments || expiredEnrollments.length === 0) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'No expired users found',
          processed: 0 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    let processedCount = 0
    const errors: string[] = []

    // Process each expired enrollment
    for (const enrollment of expiredEnrollments) {
      try {
        console.log(`Processing expired user: ${enrollment.user_id}`)

        // First, update the enrollment status to expired
        const { error: updateError } = await supabaseClient
          .from('enrollments')
          .update({ status: 'expired' })
          .eq('user_id', enrollment.user_id)

        if (updateError) {
          console.error(`Error updating enrollment for user ${enrollment.user_id}:`, updateError)
          errors.push(`Failed to update enrollment for user ${enrollment.user_id}`)
          continue
        }

        // Delete the user from auth (this will cascade to profiles via trigger)
        const { error: deleteError } = await supabaseClient.auth.admin.deleteUser(
          enrollment.user_id
        )

        if (deleteError) {
          console.error(`Error deleting user ${enrollment.user_id}:`, deleteError)
          errors.push(`Failed to delete user ${enrollment.user_id}: ${deleteError.message}`)
          continue
        }

        processedCount++
        console.log(`Successfully processed user: ${enrollment.user_id}`)

      } catch (error) {
        console.error(`Unexpected error processing user ${enrollment.user_id}:`, error)
        errors.push(`Unexpected error for user ${enrollment.user_id}`)
      }
    }

    console.log(`Cleanup completed. Processed: ${processedCount}, Errors: ${errors.length}`)

    return new Response(
      JSON.stringify({
        success: true,
        message: `Cleanup completed successfully`,
        processed: processedCount,
        totalExpired: expiredEnrollments.length,
        errors: errors.length > 0 ? errors : undefined
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Fatal error in cleanup function:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})