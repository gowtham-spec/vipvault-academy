-- Enable required extensions for cron jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Schedule the cleanup function to run daily at 2 AM UTC
SELECT cron.schedule(
  'cleanup-expired-users-daily',
  '0 2 * * *', -- every day at 2 AM UTC
  $$
  SELECT
    net.http_post(
        url:='https://pyzxgbuvekqunffrqbbt.supabase.co/functions/v1/cleanup-expired-users',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5enhnYnV2ZWtxdW5mZnJxYmJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NjYyNzQsImV4cCI6MjA2ODE0MjI3NH0.9chc_koGwdEdxVRuuIVpnv42WDaNMaYQJLaYA1dMb_4"}'::jsonb,
        body:='{"scheduled_cleanup": true}'::jsonb
    ) as request_id;
  $$
);