<<<<<<< HEAD

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
=======
const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-r from-gold to-gold-light flex items-center justify-center">
                <span className="text-navy font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold">VIP Academy</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Elevating leaders to unprecedented heights through exclusive education and personalized mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors">Executive Leadership</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Digital Innovation</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sales Mastery</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Strategic Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li>admissions@vipacademy.com</li>
              <li>+1 (555) 123-4567</li>
              <li>1 Elite Plaza, Suite 1000<br />New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300">
          <p>&copy; 2024 VIP Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
