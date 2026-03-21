import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "AI Automation Specialist (n8n, Make, GoHighLevel)",
    dates: "July 2025 – January 2026",
    bullets: [
      "Built custom n8n workflows to automate lead capture, notifications, and client data processing.",
      "Integrated multiple platforms via Make, syncing CRMs, email, and Google Sheets.",
      "Implemented GoHighLevel CRM automations for pipeline management, SMS/email campaigns, and membership delivery.",
      "Established retry logic, error handling, and logging for reliable workflows.",
      "Delivered process documentation and guided clients through system handover.",
    ],
  },
  {
    title: "Project-Based Funnel & CRM Automation Specialist",
    dates: "April 2025 – May 2025",
    bullets: [
      "Designed high-converting GoHighLevel funnels with automated SMS/email sequences.",
      "Implemented n8n workflows to handle lead routing, notifications, and follow-ups.",
      "Tested workflows with error-handling and provided client training for smooth operations.",
    ],
  },
  {
    title: "GoHighLevel Automation Specialist | Project-Based Funnel & CRM",
    dates: "January 2025 – August 2025",
    bullets: [
      "Set up GoHighLevel funnels and automated pipelines for client lead capture.",
      "Designed CRM workflows to track and nurture leads automatically.",
      "Delivered documentation and walkthroughs for client adoption.",
    ],
  },
  {
    title: "Project-Based AI Workflow Automation | Remote",
    dates: "January 2025 – March 2025",
    bullets: [
      "Built custom n8n workflows to automate lead capture, notifications, and CRM updates.",
      "Integrated Make to sync Google Sheets, Slack, and client CRM systems.",
      "Delivered step-by-step walkthroughs and documentation for client team use.",
    ],
  },
  {
    title: "Full-Time SEO & Content Optimization Specialist",
    dates: "August 2024 – December 2024",
    bullets: [
      "Conducted keyword research, competitor analysis, and content audits for client websites.",
      "Optimized blog posts, landing pages, and product pages with on-page SEO improvements.",
      "Generated SEO reports and guided clients on best practices for future content updates.",
    ],
  },
  {
    title: "Full-Time Canva Designer & Social Media Specialist",
    dates: "February 2024 – August 2024",
    bullets: [
      "Designed social media graphics, ad creatives, and branded templates using Canva Pro.",
      "Created content calendars, posts, and visual assets for Instagram, TikTok, and Facebook campaigns.",
      "Assisted with basic marketing tasks and provided clients with editable templates for future use.",
    ],
  },
];

export const PreviousExperienceSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 mb-6">
            <Briefcase className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              Career Timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            Previous Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in automation, funnels, and digital operations
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-card border-border/50 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                    <p className="text-xs text-muted-foreground font-medium">
                      {exp.dates}
                    </p>
                  </div>
                  <h3 className="font-semibold text-heading text-base mb-4 leading-snug">
                    {exp.title}
                  </h3>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
