-- Drop the overly permissive RLS policy on rate_limits
DROP POLICY IF EXISTS "Rate limiting access" ON rate_limits;

-- Create restrictive policies - only the service role can access rate_limits
-- No public access needed since rate limiting will be done server-side in edge functions
CREATE POLICY "Service role only for rate limits"
ON rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);