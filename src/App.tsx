<<<<<<< HEAD

=======
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import DatabaseCourseDetail from "./pages/DatabaseCourseDetail";
import CategoryDetail from "./pages/CategoryDetail";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import UserManagement from "./pages/UserManagement";
import NotFound from "./pages/NotFound";

// Degrees page
import Degrees from "./pages/Degrees";

// About pages
import ExecutiveTeam from "./pages/about/ExecutiveTeam";
import GoverningCommittees from "./pages/about/GoverningCommittees";
import CodeOfEthics from "./pages/about/CodeOfEthics";
import CultureCollaboration from "./pages/about/CultureCollaboration";
import GlobalAwards from "./pages/about/GlobalAwards";
import Pressroom from "./pages/about/Pressroom";
import Accreditations from "./pages/about/Accreditations";
import ContactUs from "./pages/about/ContactUs";

// Partner pages
import BecomeTrainer from "./pages/partner/BecomeTrainer";
import TrainingPartner from "./pages/partner/TrainingPartner";
import AcademicPartner from "./pages/partner/AcademicPartner";
import Reseller from "./pages/partner/Reseller";

// Degree program pages
import MastersCyberSecurity from "./pages/degrees/MastersCyberSecurity";
import MastersComputerScience from "./pages/degrees/MastersComputerScience";
import MBACyberSecurity from "./pages/degrees/MBACyberSecurity";
import BachelorsCyberSecurity from "./pages/degrees/BachelorsCyberSecurity";
import GraduateCertificate from "./pages/degrees/GraduateCertificate";
import VeteransPrograms from "./pages/degrees/VeteransPrograms";

// Advisory pages
import SecurityAwareness from "./pages/advisory/SecurityAwareness";
import GlobalServices from "./pages/advisory/GlobalServices";

=======
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/db/:slug" element={<DatabaseCourseDetail />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
            <Route path="/category/:category" element={<CategoryDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<UserManagement />} />
            
            {/* Degrees Section */}
            <Route path="/degrees" element={<Degrees />} />
            <Route path="/degrees/masters-cyber-security" element={<MastersCyberSecurity />} />
            <Route path="/degrees/masters-computer-science" element={<MastersComputerScience />} />
            <Route path="/degrees/mba-cyber-security" element={<MBACyberSecurity />} />
            <Route path="/degrees/bachelors-cyber-security" element={<BachelorsCyberSecurity />} />
            <Route path="/degrees/graduate-certificate" element={<GraduateCertificate />} />
            <Route path="/degrees/veterans-programs" element={<VeteransPrograms />} />
            
            {/* About Section Routes */}
            <Route path="/about/executive-team" element={<ExecutiveTeam />} />
            <Route path="/about/governing-committees" element={<GoverningCommittees />} />
            <Route path="/about/code-of-ethics" element={<CodeOfEthics />} />
            <Route path="/about/culture-collaboration" element={<CultureCollaboration />} />
            <Route path="/about/global-awards" element={<GlobalAwards />} />
            <Route path="/about/pressroom" element={<Pressroom />} />
            <Route path="/about/accreditations" element={<Accreditations />} />
            <Route path="/about/contact-us" element={<ContactUs />} />
            
            {/* Partner Section Routes */}
            <Route path="/partner/become-trainer" element={<BecomeTrainer />} />
            <Route path="/partner/training-partner" element={<TrainingPartner />} />
            <Route path="/partner/academic-partner" element={<AcademicPartner />} />
            <Route path="/partner/reseller" element={<Reseller />} />
            
            {/* Advisory Section Routes */}
            <Route path="/advisory/security-awareness" element={<SecurityAwareness />} />
            <Route path="/advisory/global-services" element={<GlobalServices />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </ThemeProvider>
=======
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
  </QueryClientProvider>
);

export default App;
