import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GradientDivider } from "@/components/GradientDivider";

const OldVsNewSection = lazy(() => import("@/components/OldVsNewSection").then(m => ({ default: m.OldVsNewSection })));
const FunnelStagesSection = lazy(() => import("@/components/FunnelStagesSection").then(m => ({ default: m.FunnelStagesSection })));
const IntroVideoSection = lazy(() => import("@/components/IntroVideoSection").then(m => ({ default: m.IntroVideoSection })));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const PreviousExperienceSection = lazy(() => import("@/components/PreviousExperienceSection").then(m => ({ default: m.PreviousExperienceSection })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const ToolsSection = lazy(() => import("@/components/ToolsSection").then(m => ({ default: m.ToolsSection })));
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const ROICalculator = lazy(() => import("@/components/ROICalculator").then(m => ({ default: m.ROICalculator })));
const SuccessStoriesSection = lazy(() => import("@/components/SuccessStoriesSection").then(m => ({ default: m.SuccessStoriesSection })));
const ProcessSection = lazy(() => import("@/components/ProcessSection").then(m => ({ default: m.ProcessSection })));
const ConsultationSection = lazy(() => import("@/components/ConsultationSection").then(m => ({ default: m.ConsultationSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));
const CalendarBookingSection = lazy(() => import("@/components/CalendarBookingSection").then(m => ({ default: m.CalendarBookingSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

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