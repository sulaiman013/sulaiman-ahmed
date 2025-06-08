import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { LinkedinIcon, FileText, Github, MapPin, Clock, Mail, MessageCircle, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { checkRateLimit, sanitizeInput, validateEmail, validateRequired } from "@/utils/security";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service_needed: '',
    message: '',
    honeypot: '' // Hidden field for spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);
  const { toast } = useToast();

  const services = [
    "Power BI Consulting",
    "Data Engineering",
    "Microsoft Fabric Implementation",
    "Training & Mentoring",
    "Custom Analytics Solutions",
    "Other"
  ];

  useEffect(() => {
    // Check initial rate limit status
    checkRateLimit('contact_form', 3, 15).then(result => {
      setRemainingAttempts(result.remainingAttempts);
    });
  }, []);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Sanitize inputs
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedMessage = sanitizeInput(formData.message);

    // Validate required fields
    if (!validateRequired(sanitizedName, 2)) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (sanitizedName.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!validateEmail(sanitizedEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateRequired(sanitizedMessage, 10)) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (sanitizedMessage.length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters';
    }

    // Check for suspicious patterns (basic spam detection)
    const suspiciousPatterns = [
      /https?:\/\/[^\s]+/gi, // URLs
      /\b(buy|sell|discount|offer|free|click|visit)\b/gi, // Spam keywords
    ];

    const combinedText = `${sanitizedName} ${sanitizedMessage}`.toLowerCase();
    const urlMatches = combinedText.match(suspiciousPatterns[0]) || [];
    const spamKeywords = combinedText.match(suspiciousPatterns[1]) || [];

    if (urlMatches.length > 2) {
      newErrors.general = 'Message contains too many links and appears to be spam';
    } else if (spamKeywords.length > 3) {
      newErrors.general = 'Message appears to be spam';
    }

    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot field for spam protection
    if (formData.honeypot) {
      console.log('Spam detected via honeypot');
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form
      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        setIsSubmitting(false);
        return;
      }

      // Check rate limiting
      const rateLimitResult = await checkRateLimit('contact_form', 3, 15);
      setRemainingAttempts(rateLimitResult.remainingAttempts);

      if (!rateLimitResult.allowed) {
        const resetTime = rateLimitResult.resetTime;
        const resetMessage = resetTime 
          ? `Please try again after ${resetTime.toLocaleTimeString()}`
          : 'Please try again later';
        
        toast({
          title: "Too many attempts",
          description: resetMessage,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Sanitize data before submission
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        service_needed: formData.service_needed || null,
        message: sanitizeInput(formData.message)
      };

      console.log('Submitting contact form:', { 
        ...sanitizedData, 
        remainingAttempts: rateLimitResult.remainingAttempts 
      });

      const { error } = await supabase
        .from('contact_submissions')
        .insert([sanitizedData]);

      if (error) {
        console.error('Contact form submission error:', error);
        
        // Handle specific database constraint violations
        if (error.message.includes('contact_name_length')) {
          setErrors({ name: 'Name length is invalid' });
        } else if (error.message.includes('contact_email_format')) {
          setErrors({ email: 'Email format is invalid' });
        } else if (error.message.includes('contact_message_length')) {
          setErrors({ message: 'Message length is invalid' });
        } else {
          setErrors({ general: 'Failed to send message. Please try again.' });
        }
        return;
      }

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        service_needed: '',
        message: '',
        honeypot: ''
      });
      setRemainingAttempts(prev => prev ? prev - 1 : null);
    } catch (error) {
      console.error('Unexpected error:', error);
      setErrors({ general: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const isBusinessHours = () => {
    const now = new Date();
    const dhakaNow = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Dhaka"}));
    const hour = dhakaNow.getHours();
    return hour >= 9 && hour < 18; // 9 AM to 6 PM Dhaka time
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your data into strategic insights?
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                  Send a Message
                  {remainingAttempts !== null && remainingAttempts <= 2 && (
                    <Badge variant="outline" className="ml-2 text-xs">
                      <Shield className="h-3 w-3 mr-1" />
                      {remainingAttempts} attempts left
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for spam protection */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errors.general && (
                    <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                      {errors.general}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                        maxLength={100}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        maxLength={254}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service_needed">Service Needed</Label>
                    <select
                      id="service_needed"
                      name="service_needed"
                      value={formData.service_needed}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project requirements..."
                      rows={4}
                      maxLength={2000}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message}</p>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {formData.message.length}/2000
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                    disabled={isSubmitting || (remainingAttempts !== null && remainingAttempts <= 0)}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Protected by spam detection and rate limiting
                  </p>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Availability */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Dhaka, Bangladesh</span>
                    </div>
                    <Badge variant={isBusinessHours() ? "default" : "secondary"}>
                      {isBusinessHours() ? "Available" : "Away"}
                    </Badge>
                  </div>
                  
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-semibold">{getCurrentTime()}</div>
                    <div className="text-xs text-muted-foreground">Current Local Time (GMT+6)</div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Business Hours: 9:00 AM - 6:00 PM (Bangladesh Time)
                  </p>
                </CardContent>
              </Card>

              {/* Connect */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Prefer a direct approach? Connect with me on your favorite platform.
                  </p>
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://www.linkedin.com/in/sulaimanahmed/" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="mr-2 h-5 w-5 text-blue-600" />
                        LinkedIn Profile
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://github.com/sulaimanahmed" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub Profile
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://www.fiverr.com/bi_with_ahmed" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                        Fiverr Profile
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-5 w-5" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Response */}
              <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">Quick Response Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to all inquiries within <strong>24 hours</strong>. 
                    For urgent projects, LinkedIn is the fastest way to reach me.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
