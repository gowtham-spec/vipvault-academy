<<<<<<< HEAD

import Header from "@/components/Header";
import CybersecurityHeroNew from "@/components/CybersecurityHeroNew";
import TrustedTechnology from "@/components/TrustedTechnology";
import FeaturesSection from "@/components/FeaturesSection";
import UdemyStyleCourses from "@/components/UdemyStyleCourses";
import CommunitySection from "@/components/CommunitySection";
import CybersecurityStats from "@/components/CybersecurityStats";
import CybersecurityTestimonial from "@/components/CybersecurityTestimonial";
import CybersecurityCTA from "@/components/CybersecurityCTA";
import ExtraContent from "@/components/ExtraContent";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
=======
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40

const Index = () => {
  return (
    <div className="min-h-screen">
<<<<<<< HEAD
      <div className="w-4/5 mx-auto">
        <Header />
        <div className="w-full px-4 md:px-8 xl:px-16 lg:px-0">
          <CybersecurityHeroNew />
          <FeaturesSection />
          <UdemyStyleCourses />
          <CybersecurityStats />
          <ExtraContent />
          <CommunitySection />
          <CybersecurityTestimonial />
          <TrustedTechnology />
          <CybersecurityCTA />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
      <CallButton />
=======
      <Header />
      <Hero />
      <Courses />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
    </div>
  );
};

export default Index;
