
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t border-border py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* VIP Academy Brand */}
          <div>
            <h3 className="text-2xl font-raleway font-bold text-primary mb-4">VIP Academy</h3>
            <p className="font-cabin text-sm leading-relaxed mb-4">
              Welcome to VIP Academy, Virtual Internship Programs for Professional Growth. 
              We provide cutting-edge technology solutions and training programs.
            </p>
            <div className="space-y-1">
              <p className="font-cabin text-xs">🎓 Internship Training</p>
              <p className="font-cabin text-xs">🌍 Real-World Projects</p>
              <p className="font-cabin text-xs">👨‍💼 Career Guidance</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-raleway font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-cabin">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About us</a></li>
              <li><a href="/testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-raleway font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-2 font-cabin text-sm">
              <p>📍 No.7, College Road, Opp. St. Peter's Engineering College, Avadi Chennai-54</p>
              <p>📧 vipacademy026@gmail.com</p>
              <p>📞 +91 93604 57743</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-raleway font-bold text-lg mb-4">Join us on</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="font-cabin text-sm">
            © 2024 VIP Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
