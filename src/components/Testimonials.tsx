import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision Inc.",
    content: "VIP Academy transformed my leadership approach completely. The personalized mentorship and elite network opened doors I never thought possible.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Strategy, Global Corp",
    content: "The executive coaching here is unmatched. Within 6 months, I secured a promotion and tripled my team's performance metrics.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Founder, InnovateX",
    content: "From startup founder to industry leader - VIP Academy gave me the strategic framework and confidence to scale my business to $10M ARR.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">Success Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Transforming Leaders Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our distinguished alumni who have achieved extraordinary success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-navy group-hover:text-gold transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;