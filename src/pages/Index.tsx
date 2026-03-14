import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroVideoSection } from "@/components/IntroVideoSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PreviousExperienceSection } from "@/components/PreviousExperienceSection";
import { AboutSection } from "@/components/AboutSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ConsultationSection } from "@/components/ConsultationSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ROICalculator } from "@/components/ROICalculator";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { CalendarBookingSection } from "@/components/CalendarBookingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IntroVideoSection />
        <ProjectsSection />
        <PreviousExperienceSection />
        <AboutSection />
        <ToolsSection />
        <ConsultationSection />
        <ServicesSection />
        <ROICalculator />
        <SuccessStoriesSection />
        <ProcessSection />
        <ContactSection />
        <CalendarBookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
