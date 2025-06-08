import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  is_featured: boolean;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Updated testimonials from the provided content
  const fallbackTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "alvian134",
      role: "Repeat Client",
      company: "Moldova",
      content: "I had multiple meetings with Ahmed for Power BI, and I couldn't be more satisfied with his expertise and professionalism. He is highly knowledgeable, patient, and able to break down complex data concepts into easy-to-understand insights. Ahmed's problem-solving skills and attention to detail made a huge difference in my projects. He was always prepared, efficient, and proactive in suggesting improvements that took my dashboards to the next level. If you need a Power BI expert who delivers quality work and great support, I highly recommend Ahmed! Would definitely work with him again.",
      rating: 5,
      is_featured: true
    },
    {
      id: "2",
      name: "asainternet",
      role: "Client",
      company: "United States",
      content: "Ahmed Sulaiman truly impressed with his exceptional professionalism and keen attention to detail in data visualization. His cooperative nature and quick responsiveness made working with him a seamless experience. I look forward to future collaborations as he consistently goes ABOVE AND BEYOND expectations! 🌟",
      rating: 5,
      is_featured: true
    },
    {
      id: "3",
      name: "aromeroremax",
      role: "Client",
      company: "Dominican Republic",
      content: "This time we brought Ahmed to a project of high complexity. Not only he quickly understood the challenges but, as usual, he delivered in a very professional and timely manner. Given that he proactively searched for the most favorable cost/benefit solution, we are saving around US$700 on a monthly basis from now on. If you as a person or as a company -which is our case- are looking for a BI/tech outsource who is able to understand your business model and provide the necessary outcome on time, look no further. Ahmed is the one.",
      rating: 5,
      is_featured: true
    }
  ];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching featured testimonials...');
      
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials(fallbackTestimonials);
        return;
      }

      console.log('Fetched testimonials:', data?.length || 0);
      // Use database testimonials if available, otherwise use fallback
      setTestimonials(data && data.length > 0 ? data : fallbackTestimonials);
    } catch (error) {
      console.error('Unexpected error fetching testimonials:', error);
      setTestimonials(fallbackTestimonials);
    } finally {
      setLoading(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground">
              Loading testimonials...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error || testimonials.length === 0) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Client Testimonials
              </h2>
              <p className="text-xl text-muted-foreground">
                What clients say about working with me
              </p>
            </div>

            <div className="text-center">
              <Card className="inline-block p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-semibold text-green-600">73 Five-Star Reviews</span> on Fiverr
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  5+ years delivering exceptional Power BI & data analytics solutions
                </p>
                <Button variant="outline" className="group" asChild>
                  <a href="https://www.fiverr.com/bi_with_ahmed" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View Fiverr Profile
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground">
              What clients say about working with me
            </p>
          </div>

          <div className="relative">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/30">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentIndex]?.rating || 5)}
                </div>
                
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex]?.content}"
                </blockquote>
                
                <div className="space-y-2">
                  <div className="font-semibold text-primary">
                    {testimonials[currentIndex]?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex]?.role}
                    {testimonials[currentIndex]?.company && (
                      <span> • {testimonials[currentIndex].company}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {testimonials.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Card className="inline-block p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                {renderStars(5)}
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                <span className="font-semibold text-green-600">73 Five-Star Reviews</span> on Fiverr
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                5+ years delivering exceptional Power BI & data analytics solutions
              </p>
              <Button variant="outline" className="group" asChild>
                <a href="https://www.fiverr.com/bi_with_ahmed" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  View Fiverr Profile
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
