
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Shield, ChevronRight } from "lucide-react";
import { cybersecuritySubcourses } from "@/data/coursesData";

const CybersecuritySubcourses = () => {
  const [selectedSubcourse, setSelectedSubcourse] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h3 className="text-2xl font-raleway font-bold text-foreground mb-4">
          Choose Your <span className="text-primary">Specialization</span>
        </h3>
        <p className="text-muted-foreground font-cabin max-w-3xl mx-auto">
          Select from our comprehensive cybersecurity subcourses to build expertise in your preferred area of specialization.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cybersecuritySubcourses.map((subcourse, index) => (
          <motion.div
            key={subcourse.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
              selectedSubcourse === subcourse.id 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/50'
            }`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{subcourse.duration}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                    selectedSubcourse === subcourse.id ? 'rotate-90 text-primary' : 'group-hover:translate-x-1'
                  }`} />
                </div>
                <CardTitle className="text-lg font-raleway leading-tight group-hover:text-primary transition-colors">
                  {subcourse.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm font-cabin leading-relaxed mb-4">
                  {subcourse.description}
                </CardDescription>
                <Button
                  variant={selectedSubcourse === subcourse.id ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={() => setSelectedSubcourse(
                    selectedSubcourse === subcourse.id ? null : subcourse.id
                  )}
                >
                  {selectedSubcourse === subcourse.id ? "Selected" : "Select Course"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedSubcourse && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center"
        >
          <h4 className="text-xl font-raleway font-bold text-foreground mb-2">
            Great Choice!
          </h4>
          <p className="text-muted-foreground font-cabin mb-4">
            You've selected{" "}
            <span className="font-semibold text-primary">
              {cybersecuritySubcourses.find(c => c.id === selectedSubcourse)?.title}
            </span>
            . Ready to start your cybersecurity journey?
          </p>
          <Button className="px-8">
            Enroll Now
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default CybersecuritySubcourses;
