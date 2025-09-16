-- Fix the can_access_video function to allow access to the first video (order_index = 0)
-- Drop and recreate to ensure it updates properly
DROP FUNCTION IF EXISTS public.can_access_video(UUID, UUID, INTEGER);

CREATE OR REPLACE FUNCTION public.can_access_video(
  p_user_id UUID,
  p_course_id UUID,
  p_video_order_index INTEGER
) RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  prev_video_completed BOOLEAN := false;
  prev_quiz_passed BOOLEAN := false;
BEGIN
  -- First video (order_index = 0) is always accessible
  IF p_video_order_index = 0 THEN
    RETURN true;
  END IF;
  
  -- Check if previous video is completed
  SELECT EXISTS (
    SELECT 1 FROM public.video_progress vp
    JOIN public.videos v ON v.id = vp.video_id
    WHERE vp.user_id = p_user_id
    AND v.course_id = p_course_id
    AND v.order_index = p_video_order_index - 1
    AND vp.completed = true
  ) INTO prev_video_completed;
  
  -- Check if previous video's quiz is passed (if quiz exists)
  SELECT COALESCE(
    (SELECT qa.passed FROM public.quiz_attempts qa
     JOIN public.videos v ON v.id = qa.video_id
     WHERE qa.user_id = p_user_id
     AND v.course_id = p_course_id
     AND v.order_index = p_video_order_index - 1
     AND qa.passed = true
     LIMIT 1), 
    -- If no quiz exists for previous video, consider it passed
    NOT EXISTS (
      SELECT 1 FROM public.quiz_questions qq
      JOIN public.videos v ON v.id = qq.video_id
      WHERE v.course_id = p_course_id
      AND v.order_index = p_video_order_index - 1
    )
  ) INTO prev_quiz_passed;
  
  RETURN prev_video_completed AND prev_quiz_passed;
END;
$$;