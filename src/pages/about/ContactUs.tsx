import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Contact Us</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12 text-center">
            <p className="text-xl leading-relaxed">
              Get in touch with VIP Academy. We're here to help you advance your cybersecurity career.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                      <p className="text-muted-foreground">info@vipacademy.com</p>
                      <p className="text-muted-foreground">support@vipacademy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 987-6543 (International)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                      <p className="text-muted-foreground">
                        123 Cybersecurity Avenue<br />
                        Tech District, TD 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 4:00 PM EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Department Contacts</h3>
                
                <div className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded">
                    <h4 className="font-semibold text-foreground text-sm">Admissions</h4>
                    <p className="text-muted-foreground text-sm">admissions@vipacademy.com</p>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded">
                    <h4 className="font-semibold text-foreground text-sm">Technical Support</h4>
                    <p className="text-muted-foreground text-sm">techsupport@vipacademy.com</p>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded">
                    <h4 className="font-semibold text-foreground text-sm">Corporate Training</h4>
                    <p className="text-muted-foreground text-sm">corporate@vipacademy.com</p>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded">
                    <h4 className="font-semibold text-foreground text-sm">Partnership Inquiries</h4>
                    <p className="text-muted-foreground text-sm">partnerships@vipacademy.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-foreground">Send us a Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" type="text" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" type="text" required className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" required className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input id="subject" type="text" required className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    rows={6} 
                    required 
                    className="w-full"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="consent" required className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree to receive communications from VIP Academy and understand that I can unsubscribe at any time. *
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;