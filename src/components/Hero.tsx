import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-academy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="inline-flex items-center px-4 py-2 bg-gold/20 rounded-full text-gold text-sm font-medium mb-8 backdrop-blur-sm">
            ✨ Elite Learning Experience
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master Your
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent block">
              Excellence
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Join the exclusive VIP Academy where industry leaders share their secrets. 
            Transform your career with personalized mentorship and cutting-edge curriculum.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-gradient-to-r from-gold to-gold-light text-navy hover:shadow-gold text-lg px-8 py-6">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-6">
              View Courses
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">500+</div>
              <div className="text-sm">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">95%</div>
              <div className="text-sm">Career Growth</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">24/7</div>
              <div className="text-sm">Mentorship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;