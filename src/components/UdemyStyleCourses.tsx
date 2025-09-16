import { motion } from "framer-motion";
import { Star, Clock, Users, Play, BookOpen, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const UdemyStyleCourses = () => {
  const courses = [{
    id: 1,
    title: "Complete Ethical Hacking Bootcamp 2024",
    instructor: "John Security",
    rating: 4.8,
    reviews: 2453,
    students: 15230,
    price: 89.99,
    originalPrice: 199.99,
    duration: "40 hours",
    lectures: 156,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bestseller: true,
    tags: ["Ethical Hacking", "Penetration Testing", "Cybersecurity"],
    lastUpdated: "January 2024"
  }, {
    id: 2,
    title: "Cybersecurity Incident Response Mastery",
    instructor: "Sarah Thompson",
    rating: 4.9,
    reviews: 1876,
    students: 8945,
    price: 79.99,
    originalPrice: 179.99,
    duration: "28 hours",
    lectures: 98,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    hot: true,
    tags: ["Incident Response", "Forensics", "SIEM"],
    lastUpdated: "February 2024"
  }, {
    id: 3,
    title: "Network Security & Firewall Configuration",
    instructor: "Mike Rodriguez",
    rating: 4.7,
    reviews: 3201,
    students: 12560,
    price: 94.99,
    originalPrice: 219.99,
    duration: "35 hours",
    lectures: 127,
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Network Security", "Firewalls", "VPN"],
    lastUpdated: "December 2023"
  }, {
    id: 4,
    title: "Cloud Security Fundamentals (AWS/Azure)",
    instructor: "Emma Chen",
    rating: 4.6,
    reviews: 1542,
    students: 7823,
    price: 69.99,
    originalPrice: 159.99,
    duration: "25 hours",
    lectures: 89,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    new: true,
    tags: ["Cloud Security", "AWS", "Azure"],
    lastUpdated: "March 2024"
  }];
  return <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <motion.div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4" initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            <BookOpen className="w-4 h-4" />
            Featured Courses
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Learn from{" "}
            <span className="text-primary">Industry Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master cybersecurity with our comprehensive courses designed by professionals for real-world application.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => <motion.div key={course.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <motion.div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" whileHover={{
                    scale: 1.1
                  }} whileTap={{
                    scale: 0.95
                  }}>
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Course badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {course.bestseller && <Badge className="bg-orange-500 text-white font-semibold">
                        Bestseller
                      </Badge>}
                    {course.hot && <Badge className="bg-red-500 text-white font-semibold">
                        Hot
                      </Badge>}
                    {course.new && <Badge className="bg-green-500 text-white font-semibold">
                        New
                      </Badge>}
                  </div>

                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-black/50 text-white border-0">
                      {course.level}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        By {course.instructor}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map(tag => <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>)}
                    </div>

                    {/* Rating and students */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-primary">{course.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`} />)}
                        </div>
                        <span className="text-muted-foreground">({course.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>

                    {/* Course details */}
                    <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lectures} lectures</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{course.lastUpdated}</span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      
                      <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>

        <motion.div className="text-center mt-12" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }}>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
            View All Courses
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default UdemyStyleCourses;