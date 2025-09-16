import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Python Institute Certification Journal",
      subtitle: "Is There a Demand for PCAD: Certified Associate Data Analyst with Python?",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      excerpt: "Explore the growing demand for Python certification in data analysis and how PCAD certification can boost your career prospects in the competitive tech industry."
    },
    {
      id: 2,
      title: "Emerging Technology Trends and Market Needs",
      subtitle: "Is Business Analysis in Demand?",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Prof. Michael Chen",
      date: "March 12, 2024",
      excerpt: "Discover the latest trends in business analysis and understand why this field continues to grow in importance across all industries."
    },
    {
      id: 3,
      title: "Frontend Development Best Practices",
      subtitle: "Modern React Patterns for 2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Emma Thompson",
      date: "March 10, 2024",
      excerpt: "Learn about the latest React patterns and best practices that are shaping modern frontend development in 2024."
    },
    {
      id: 4,
      title: "Software Testing Revolution",
      subtitle: "AI-Powered Testing Tools and Methodologies",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "James Wilson",
      date: "March 8, 2024",
      excerpt: "Explore how artificial intelligence is revolutionizing software testing and what it means for QA professionals."
    },
    {
      id: 5,
      title: "Career Transition Success Stories",
      subtitle: "From Zero to Hero: Breaking into Tech",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Lisa Garcia",
      date: "March 5, 2024",
      excerpt: "Read inspiring stories of students who successfully transitioned into tech careers with the help of Academia's comprehensive training programs."
    },
    {
      id: 6,
      title: "Industry Insights",
      subtitle: "The Future of Digital Learning",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Dr. Robert Kim",
      date: "March 3, 2024",
      excerpt: "Discover how digital learning platforms are evolving and what the future holds for online education and skill development."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-raleway font-bold mb-6">
            Latest <span className="text-secondary">Insights</span>
          </h1>
          <p className="text-xl font-cabin max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of technology and education
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <div className="bg-muted rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-cabin mb-4">
                  Featured Post
                </span>
                <h2 className="text-3xl lg:text-4xl font-raleway font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg font-cabin text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={16} />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    {blogPosts[0].date}
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Read More
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
              <div>
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-raleway font-bold text-center mb-12">
            Recent <span className="text-primary">Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-raleway font-bold text-foreground mb-2">
                    {post.title}
                  </h3>
                  <h4 className="text-md font-cabin text-primary mb-3">
                    {post.subtitle}
                  </h4>
                  <p className="text-sm font-cabin text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;