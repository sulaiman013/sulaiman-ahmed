
import { supabase } from "@/integrations/supabase/client";

export interface RateLimitResult {
  allowed: boolean;
  remainingAttempts: number;
  resetTime?: Date;
}

export const checkRateLimit = async (
  action: string,
  maxAttempts: number = 5,
  windowMinutes: number = 15
): Promise<RateLimitResult> => {
  try {
    // Get client IP (this is a simplified approach)
    const clientId = getClientIdentifier();
    const windowStart = new Date();
    windowStart.setMinutes(windowStart.getMinutes() - windowMinutes);

    // Check existing rate limit entries
    const { data: existing, error } = await supabase
      .from('rate_limits')
      .select('*')
      .eq('ip_address', clientId)
      .eq('action_type', action)
      .gte('window_start', windowStart.toISOString())
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) {
      console.error('Rate limit check error:', error);
      return { allowed: true, remainingAttempts: maxAttempts };
    }

    if (!existing || existing.length === 0) {
      // No recent attempts, create new rate limit entry
      await supabase
        .from('rate_limits')
        .insert({
          ip_address: clientId,
          action_type: action,
          attempt_count: 1,
          window_start: new Date().toISOString()
        });
      
      return { allowed: true, remainingAttempts: maxAttempts - 1 };
    }

    const currentCount = existing[0].attempt_count || 0;
    
    if (currentCount >= maxAttempts) {
      const resetTime = new Date(existing[0].window_start);
      resetTime.setMinutes(resetTime.getMinutes() + windowMinutes);
      
      return {
        allowed: false,
        remainingAttempts: 0,
        resetTime
      };
    }

    // Update attempt count
    await supabase
      .from('rate_limits')
      .update({ attempt_count: currentCount + 1 })
      .eq('id', existing[0].id);

    return {
      allowed: true,
      remainingAttempts: maxAttempts - currentCount - 1
    };
  } catch (error) {
    console.error('Rate limiting error:', error);
    return { allowed: true, remainingAttempts: maxAttempts };
  }
};

export const getClientIdentifier = (): string => {
  // Use a combination of factors to create a client identifier
  const userAgent = navigator.userAgent;
  const screen = `${window.screen.width}x${window.screen.height}`;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  return btoa(`${userAgent}-${screen}-${timezone}`).slice(0, 32);
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .slice(0, 2000); // Prevent extremely long inputs
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validateRequired = (value: string, minLength: number = 1): boolean => {
  return value.trim().length >= minLength;
};
