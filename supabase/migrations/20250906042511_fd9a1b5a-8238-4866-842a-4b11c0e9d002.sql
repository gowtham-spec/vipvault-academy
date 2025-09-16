-- Create trigger to update video_progress updated_at
CREATE OR REPLACE FUNCTION public.update_video_progress_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER update_video_progress_updated_at
BEFORE UPDATE ON public.video_progress
FOR EACH ROW
EXECUTE FUNCTION public.update_video_progress_updated_at();

-- Create function to check if user can access next video
CREATE OR REPLACE FUNCTION public.can_access_video(
  p_user_id UUID,
  p_course_id UUID,
  p_video_order_index INTEGER
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  prev_video_completed BOOLEAN := false;
  prev_quiz_passed BOOLEAN := false;
BEGIN
  -- First video is always accessible
  IF p_video_order_index = 1 THEN
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