import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Experience {
  emoji: string;
  title: string;
  dates: string;
  bullets: string[];
  modal: {
    problem: string;
    solution: string;
    impact: string[];
  };
}

const experiences: Experience[] = [
  {
    emoji: "⚙️",
    title: "AI Automation Specialist (Freelance / Self-Employed)",
    dates: "January 2025 – January 2026",
    bullets: [
      "Designed and deployed custom n8n workflows for intelligent lead capture, real-time notifications, and automated client data processing — significantly reducing manual tasks",
      "Integrated Make.com, Zapier, and GoHighLevel to sync CRMs, email platforms, Google Sheets, and other business tools, streamlining data flow and operations",
      "Built high-converting GoHighLevel sales funnels with automated SMS/email follow-up sequences and membership delivery systems",
      "Implemented advanced error handling, retry logic, logging, and comprehensive documentation to ensure reliable, production-ready automations",
      "Provided hands-on client training and detailed handover documentation, enabling clients to independently manage and scale their systems",
    ],
    modal: {
      problem: "Clients were spending 20+ hours/week on manual lead processing, data entry, and follow-ups across disconnected tools — leading to missed leads and frequent errors.",
      solution: "Built end-to-end n8n and Make workflows connecting CRMs, email, Google Sheets, and GoHighLevel. Added retry logic, error handling, and logging for production-grade reliability.",
      impact: [
        "Saved clients 15–25 hours/week on manual tasks",
        "Reduced data errors by 80%",
        "Achieved 99%+ workflow uptime",
        "Smooth handover with full documentation and training",
      ],
    },
  },
  {
    emoji: "🔍",
    title: "SEO & Content Optimization Specialist (Freelance)",
    dates: "August 2024 – December 2024",
    bullets: [
      "Performed keyword research, competitor analysis, and content audits that improved client search rankings and organic visibility",
    ],
    modal: {
      problem: "Client websites had low organic traffic and poor search rankings due to unoptimized content and missing SEO fundamentals.",
      solution: "Conducted thorough keyword research and competitor analysis, then optimized blog posts, landing pages, and product pages with on-page SEO improvements.",
      impact: [
        "Improved search rankings for target keywords",
        "Increased organic visibility across optimized pages",
        "Actionable reports and guides for ongoing optimization",
      ],
    },
  },
  {
    emoji: "🎨",
    title: "Canva Designer & Social Media Specialist (Freelance / Remote)",
    dates: "February 2024 – August 2024",
    bullets: [
      "Created professional social media graphics, advertisements, and branded templates using Canva Pro",
      "Managed content calendars and visual assets across Instagram, TikTok, and Facebook",
    ],
    modal: {
      problem: "Clients lacked consistent branding and were posting irregularly — social media engagement was flat and ad creatives underperformed.",
      solution: "Designed branded templates, ad creatives, and content calendars in Canva Pro. Delivered editable assets for Instagram, TikTok, and Facebook campaigns.",
      impact: [
        "Grew client engagement by 2–3x",
        "Consistent brand presence across platforms",
        "Editable templates for future independent use",
      ],
    },
  },
];

export const PreviousExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <section className="py-20 px-4 bg-section-tint">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
            Building reliable systems that save time, reduce costs, and drive growth
          </p>
        </motion.div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical timeline line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full bg-gradient-card border-border/50 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.35)] group relative"
                  onClick={() => setSelectedExp(exp)}
                >
                  {/* Timeline dot */}
                  <div className="absolute -top-3 left-6 w-6 h-6 rounded-full bg-gradient-button border-4 border-background shadow-md z-10" />

                  <CardContent className="p-6 pt-8">
                    <p className="text-xs text-muted-foreground font-medium mb-2 tracking-wide uppercase">
                      {exp.dates}
                    </p>
                    <h3 className="font-bold text-heading text-base mb-4 leading-snug group-hover:text-primary transition-colors">
                      {exp.emoji} {exp.title}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5 shrink-0 text-xs">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to see full case study →
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedExp} onOpenChange={() => setSelectedExp(null)}>
        <DialogContent className="sm:max-w-lg bg-gradient-card border-border/50">
          <DialogHeader>
            <DialogTitle className="text-heading text-lg leading-snug">
              {selectedExp?.emoji} {selectedExp?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-xs uppercase tracking-wide">
              {selectedExp?.dates}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 mt-2">
            <div>
              <h4 className="text-sm font-semibold text-heading mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive inline-block" />
                Problem
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedExp?.modal.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-heading mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                Solution
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedExp?.modal.solution}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-heading mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                Impact
              </h4>
              <ul className="space-y-1.5">
                {selectedExp?.modal.impact.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
