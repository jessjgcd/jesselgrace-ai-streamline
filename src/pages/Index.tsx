import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GradientDivider } from "@/components/GradientDivider";

const OldVsNewSection = lazy(() => import("@/components/OldVsNewSection"));
const FunnelStagesSection = lazy(() => import("@/components/FunnelStagesSection"));
const IntroVideoSection = lazy(() => import("@/components/IntroVideoSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const PreviousExperienceSection = lazy(() => import("@/components/PreviousExperienceSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ToolsSection = lazy(() => import("@/components/ToolsSection"));
const ConsultationSection = lazy(() => import("@/components/ConsultationSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ROICalculator = lazy(() => import("@/components/ROICalculator"));
const SuccessStoriesSection = lazy(() => import("@/components/SuccessStoriesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const CalendarBookingSection = lazy(() => import("@/components/CalendarBookingSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
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
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
