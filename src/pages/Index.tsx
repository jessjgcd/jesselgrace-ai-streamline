import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ConsultationSection } from "@/components/ConsultationSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ROICalculator } from "@/components/ROICalculator";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ToolsSection />
        <ConsultationSection />
        <ServicesSection />
        <ROICalculator />
        <SuccessStoriesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
