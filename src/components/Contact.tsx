import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">Ready to Begin?</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your
              <span className="block bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Elite Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the exclusive ranks of VIP Academy. Limited seats available for our next cohort.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Application Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-navy font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Submit Application</h4>
                    <p className="text-gray-300 text-sm">Tell us about your goals and experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-navy font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Interview Process</h4>
                    <p className="text-gray-300 text-sm">1:1 consultation with our admissions team</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-navy font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Welcome to VIP</h4>
                    <p className="text-gray-300 text-sm">Begin your transformation journey</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gold/10 rounded-xl border border-gold/20">
                <h4 className="font-semibold text-gold mb-2">Exclusive Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Lifetime access to alumni network</li>
                  <li>• Quarterly masterclasses with industry leaders</li>
                  <li>• Priority access to VIP events and conferences</li>
                  <li>• Ongoing career coaching and support</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input 
                  placeholder="Current Position/Title" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Textarea 
                  placeholder="Tell us about your leadership goals and what you hope to achieve..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                />
                <Button className="w-full bg-gradient-to-r from-gold to-gold-light text-navy hover:shadow-gold text-lg py-6">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;