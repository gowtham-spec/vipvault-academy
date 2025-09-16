import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">About VIP Academy</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Excellence
              <span className="block bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Meets Opportunity
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Founded by industry pioneers, VIP Academy represents the pinnacle of executive education. 
              We don't just teach—we transform leaders through immersive, personalized learning experiences.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-gold-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-navy font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
                  <p className="text-gray-300">Learn from C-suite executives and industry titans who share their real-world strategies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-gold-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-navy font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Journey</h3>
                  <p className="text-gray-300">Every program is tailored to your specific goals and career aspirations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-gold-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-navy font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Elite Network</h3>
                  <p className="text-gray-300">Join a community of high-achievers and build connections that last a lifetime.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gold/20 to-transparent p-8 rounded-2xl border border-gold/20">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">500+</div>
                  <div className="text-gray-300">Alumni Network</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">95%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">50+</div>
                  <div className="text-gray-300">Industry Experts</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">24/7</div>
                  <div className="text-gray-300">Mentorship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;