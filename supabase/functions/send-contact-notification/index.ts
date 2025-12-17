
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const ContactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address').max(254, 'Email must be less than 254 characters'),
  service_needed: z.string().max(100, 'Service must be less than 100 characters').optional().nullable(),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters')
});

// HTML escape function to prevent injection
const escapeHtml = (text: string): string => {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, char => htmlEntities[char] || char);
};

// Rate limiting configuration
const RATE_LIMIT_MAX_ATTEMPTS = 3;
const RATE_LIMIT_WINDOW_MINUTES = 15;

const handler = async (req: Request): Promise<Response> => {
  console.log('Contact notification function called');
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    console.log('Processing request from IP:', clientIp);

    // Initialize Supabase admin client for rate limiting
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    // Check rate limit using service role
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
    
    const { data: rateLimit, error: rateLimitError } = await supabaseAdmin
      .from('rate_limits')
      .select('*')
      .eq('ip_address', clientIp)
      .eq('action_type', 'contact_form')
      .gte('window_start', windowStart)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
    }

    // Check if rate limit exceeded
    if (rateLimit && rateLimit.attempt_count >= RATE_LIMIT_MAX_ATTEMPTS) {
      console.log('Rate limit exceeded for IP:', clientIp);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Parse and validate input
    let rawData;
    try {
      rawData = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON payload' }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const validationResult = ContactSchema.safeParse(rawData);
    
    if (!validationResult.success) {
      console.log('Validation failed:', validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid input', 
          details: validationResult.error.errors.map(e => e.message)
        }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, service_needed, message } = validationResult.data;

    // Update rate limit counter
    if (rateLimit) {
      await supabaseAdmin
        .from('rate_limits')
        .update({ attempt_count: rateLimit.attempt_count + 1 })
        .eq('id', rateLimit.id);
    } else {
      await supabaseAdmin
        .from('rate_limits')
        .insert({
          ip_address: clientIp,
          action_type: 'contact_form',
          attempt_count: 1,
          window_start: new Date().toISOString()
        });
    }

    // Escape HTML to prevent injection in email templates
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeServiceNeeded = service_needed ? escapeHtml(service_needed) : '';
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    console.log('Processing contact notification for:', { name: safeName, email: safeEmail, service_needed: safeServiceNeeded });

    // Send notification email to you
    const notificationEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["sulaimanahmed013@gmail.com"],
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Details</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            ${safeServiceNeeded ? `<p><strong>Service Needed:</strong> ${safeServiceNeeded}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="line-height: 1.6; color: #4b5563;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              💡 <strong>Quick Actions:</strong> 
              <a href="mailto:${safeEmail}?subject=Re: Your inquiry" style="color: #2563eb; text-decoration: none;">Reply to ${safeName}</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmailResponse);

    // Send confirmation email to the person who contacted you
    const confirmationEmailResponse = await resend.emails.send({
      from: "Sulaiman Ahmed <onboarding@resend.dev>",
      to: [email], // Use original validated email
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          
          <p style="color: #374151; line-height: 1.6;">Hi ${safeName},</p>
          
          <p style="color: #374151; line-height: 1.6;">
            Thank you for contacting me through my website. I've received your message and will get back to you within 24 hours.
          </p>
          
          ${safeServiceNeeded ? `
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #0369a1;">
              <strong>Service you're interested in:</strong> ${safeServiceNeeded}
            </p>
          </div>
          ` : ''}
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">What happens next?</h3>
            <ul style="color: #4b5563; line-height: 1.6;">
              <li>I'll review your requirements carefully</li>
              <li>I'll respond with any clarifying questions</li>
              <li>We can schedule a call to discuss your project in detail</li>
              <li>I'll provide you with a customized proposal</li>
            </ul>
          </div>
          
          <p style="color: #374151; line-height: 1.6;">
            In the meantime, feel free to check out my 
            <a href="https://www.linkedin.com/in/sulaimanahmed/" style="color: #2563eb;">LinkedIn profile</a> 
            or browse my 
            <a href="https://www.fiverr.com/bi_with_ahmed" style="color: #2563eb;">Fiverr portfolio</a> 
            to see examples of my work.
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #065f46; color: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-weight: bold;">Sulaiman Ahmed</p>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Power BI Consultant & Data Analytics Expert</p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        notificationSent: !!notificationEmailResponse.data,
        confirmationSent: !!confirmationEmailResponse.data
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }), // Generic error message
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
