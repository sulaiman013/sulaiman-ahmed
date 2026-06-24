
-- Drop broken admin policies (USING false blocks everything; service_role bypasses RLS for admin ops via edge functions)
DROP POLICY IF EXISTS "Admins can manage all blogs" ON public.blogs;
DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admins can manage all testimonials" ON public.testimonials;

-- Replace permissive INSERT policy on contact_submissions with a validated one
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact forms"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 200
  AND length(trim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(message)) BETWEEN 1 AND 5000
);

-- Fix mutable search_path on increment_blog_view
CREATE OR REPLACE FUNCTION public.increment_blog_view(blog_slug text)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
DECLARE
  new_count INTEGER;
BEGIN
  INSERT INTO public.blog_views (slug, view_count, updated_at)
  VALUES (blog_slug, 1, now())
  ON CONFLICT (slug)
  DO UPDATE SET view_count = blog_views.view_count + 1, updated_at = now()
  RETURNING view_count INTO new_count;
  RETURN new_count;
END;
$function$;
