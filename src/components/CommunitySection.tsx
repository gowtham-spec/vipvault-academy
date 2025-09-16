import { motion } from "framer-motion";
import { Users, MessageCircle, Trophy, Lightbulb, ArrowRight, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CommunitySection = () => {
  const communityStats = [
    { label: "Active Members", value: "25,000+", icon: Users },
    { label: "Daily Discussions", value: "500+", icon: MessageCircle },
    { label: "Success Stories", value: "1,200+", icon: Trophy },
    { label: "Shared Resources", value: "10,000+", icon: Lightbulb },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Security Analyst at TechCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      content: "The VIP Academy community helped me transition from web development to cybersecurity. The support and resources are incredible!",
    },
    {
      name: "Maria Garcia",
      role: "Penetration Tester",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      content: "I landed my dream job in cybersecurity thanks to the practical skills and networking opportunities here.",
    },
    {
      name: "David Kim",
      role: "CISO at StartupX",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      content: "The community discussions and expert insights have been invaluable for staying current with threats and trends.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Users className="w-4 h-4" />
            Join Our Community
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Connect, Learn, and{" "}
            <span className="text-primary">Grow Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of cybersecurity professionals in our vibrant community where knowledge sharing and career growth happen every day.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Community Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert-Led Discussions</h3>
                  <p className="text-muted-foreground">
                    Participate in daily discussions led by industry experts and share knowledge with peers from around the world.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Resource Sharing</h3>
                  <p className="text-muted-foreground">
                    Access thousands of shared resources including tools, scripts, research papers, and industry reports.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Career Opportunities</h3>
                  <p className="text-muted-foreground">
                    Get notified about job openings, participate in challenges, and showcase your skills to potential employers.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold group">
              Join Community
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right: Testimonials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="flex-shrink-0">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <Zap className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{testimonial.role}</p>
                        <p className="text-sm leading-relaxed">"{testimonial.content}"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;