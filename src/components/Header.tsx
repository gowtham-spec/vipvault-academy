import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-gradient-to-r from-gold to-gold-light flex items-center justify-center">
              <span className="text-navy font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-navy">VIP Academy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-navy hover:text-gold transition-colors">Courses</a>
            <a href="#about" className="text-navy hover:text-gold transition-colors">About</a>
            <a href="#testimonials" className="text-navy hover:text-gold transition-colors">Success Stories</a>
            <a href="#contact" className="text-navy hover:text-gold transition-colors">Contact</a>
          </nav>
          
          <Button variant="default" className="bg-gradient-to-r from-gold to-gold-light text-navy hover:shadow-gold">
            Enroll Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;