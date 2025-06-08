
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  name: string;
  email: string;
  service_needed?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log('Contact notification function called');
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service_needed, message }: ContactSubmission = await req.json();

    console.log('Processing contact notification for:', { name, email, service_needed });

    // Send notification email to you
    const notificationEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["sulaimanahmed013@gmail.com"], // Your email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${service_needed ? `<p><strong>Service Needed:</strong> ${service_needed}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              💡 <strong>Quick Actions:</strong> 
              <a href="mailto:${email}?subject=Re: Your inquiry" style="color: #2563eb; text-decoration: none;">Reply to ${name}</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmailResponse);

    // Send confirmation email to the person who contacted you
    const confirmationEmailResponse = await resend.emails.send({
      from: "Sulaiman Ahmed <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          
          <p style="color: #374151; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #374151; line-height: 1.6;">
            Thank you for contacting me through my website. I've received your message and will get back to you within 24 hours.
          </p>
          
          ${service_needed ? `
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #0369a1;">
              <strong>Service you're interested in:</strong> ${service_needed}
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
