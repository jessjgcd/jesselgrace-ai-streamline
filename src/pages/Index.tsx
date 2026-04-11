import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OldVsNewSection } from "@/components/OldVsNewSection";
import { FunnelStagesSection } from "@/components/FunnelStagesSection";
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
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { CalendarBookingSection } from "@/components/CalendarBookingSection";
import { Footer } from "@/components/Footer";
import { GradientDivider } from "@/components/GradientDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GradientDivider />
        <OldVsNewSection />
        <GradientDivider />
        <FunnelStagesSection />
        <GradientDivider />
        <IntroVideoSection />
        <GradientDivider />
        <ProjectsSection />
        <GradientDivider />
        <PreviousExperienceSection />
        <GradientDivider />
        <AboutSection />
        <GradientDivider />
        <ToolsSection />
        <GradientDivider />
        <ServicesSection />
        <GradientDivider />
        <ROICalculator />
        <GradientDivider />
        <SuccessStoriesSection />
        <GradientDivider />
        <ProcessSection />
        <GradientDivider />
        <ConsultationSection />
        <GradientDivider />
        <FAQSection />
        <GradientDivider />
        <ContactSection />
        <GradientDivider />
        <CalendarBookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
