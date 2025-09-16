import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Gavin Fletcher",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      text: "I loved having the growth with my computer science, Academia course. The mentorship and environment were very encouraging and supportive. I gain my first paid job here also, that is extremely happy.",
      rating: 5
    },
    {
      name: "Olivia Singh",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      text: "I was able to progress with my technical hands-on experience and have successfully completed the development and provision about latest subjects.",
      rating: 5
    },
    {
      name: "Pearl Stewart",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      text: "I expected to be trained with practical coursework that prepared me for real-world scenarios. The level of learning and practical hands-on training was excellent, and I got the best knowledge and preparation while here practicing.",
      rating: 5
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      text: "The instructors at Academia are incredibly knowledgeable and passionate. They made complex concepts easy to understand and provided real-world examples that helped me land my dream job.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      text: "Academia's curriculum is perfectly aligned with industry needs. The hands-on projects and portfolio development helped me stand out during job interviews.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      text: "The career support at Academia is outstanding. From resume building to interview preparation, they guided me every step of the way to secure a position at a top tech company.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-raleway font-bold mb-6">
            Student <span className="text-secondary">Testimonials</span>
          </h1>
          <p className="text-xl font-cabin max-w-3xl mx-auto">
            Hear from Our Students About Their Experience with Us
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-background border shadow-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-raleway font-bold text-foreground">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-cabin text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;