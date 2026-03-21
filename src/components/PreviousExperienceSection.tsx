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
    title: "AI Automation Specialist (n8n, Make, GoHighLevel) | Freelance / Self-Employed",
    dates: "July 2025 – January 2026",
    bullets: [
      "Built custom n8n workflows → automated lead capture, notifications, data processing",
      "Integrated Make to sync CRMs, email, Google Sheets in real-time",
      "Set up GoHighLevel automations for pipelines, SMS/email, membership delivery",
      "Added retry logic, error handling, logging → 99%+ uptime",
      "Delivered documentation + handover training",
      "Results: Saved clients 15–25 hours/week, reduced errors by 80%",
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
    emoji: "🔄",
    title: "Project-Based Funnel & CRM Automation Specialist | Freelance",
    dates: "April 2025 – May 2025",
    bullets: [
      "Designed high-converting GoHighLevel funnels with SMS/email sequences",
      "Built n8n workflows for lead routing, follow-ups, notifications",
      "Added error-handling + client training",
      "Results: Increased lead-to-sale conversion by 40%, saved ~12 hours/week on manual follow-up",
    ],
    modal: {
      problem: "Client's sales funnel had no automation — leads went cold due to slow manual follow-up, and the team spent hours each week on repetitive outreach.",
      solution: "Designed GoHighLevel funnels with automated SMS/email sequences and n8n workflows for intelligent lead routing and instant follow-ups.",
      impact: [
        "Increased lead-to-sale conversion by 40%",
        "Saved ~12 hours/week on manual follow-up",
        "Zero leads lost due to delayed response",
      ],
    },
  },
  {
    emoji: "📈",
    title: "GoHighLevel Automation Specialist | Project-Based",
    dates: "January 2025 – August 2025",
    bullets: [
      "Built automated lead capture + nurturing pipelines in GoHighLevel",
      "Created CRM workflows to track and score leads",
      "Delivered walkthroughs + documentation",
      "Results: 60% faster lead response time, 35% more qualified opportunities",
    ],
    modal: {
      problem: "Leads were slipping through the cracks with no structured pipeline or scoring — the team couldn't tell which leads were hot and response times were too slow.",
      solution: "Set up GoHighLevel funnels with automated pipelines for lead capture, scoring, and nurturing. Built CRM workflows for tracking and prioritization.",
      impact: [
        "60% faster lead response time",
        "35% more qualified opportunities in pipeline",
        "Full documentation for client self-service",
      ],
    },
  },
  {
    emoji: "🤖",
    title: "Project-Based AI Workflow Automation | Remote",
    dates: "January 2025 – March 2025",
    bullets: [
      "Developed n8n workflows for lead capture, notifications, CRM sync",
      "Integrated Make to connect Google Sheets, Slack, client tools",
      "Provided step-by-step guides + documentation",
      "Results: Eliminated 10–18 hours/week of manual data entry, zero sync errors",
    ],
    modal: {
      problem: "Client's team was manually copying data between Google Sheets, Slack, and their CRM — wasting over 10 hours/week and introducing constant sync errors.",
      solution: "Developed n8n workflows and Make integrations to automate data flow between all platforms with real-time sync and error alerts.",
      impact: [
        "Eliminated 10–18 hours/week of manual data entry",
        "Zero sync errors after deployment",
        "Step-by-step documentation for team adoption",
      ],
    },
  },
  {
    emoji: "🔍",
    title: "SEO & Content Optimization Specialist | Freelance",
    dates: "August 2024 – December 2024",
    bullets: [
      "Performed keyword research, competitor audits, content optimization",
      "Improved on-page SEO for blogs, landing pages, product pages",
      "Delivered reports + best-practice guides",
      "Results: Average 45% increase in organic traffic for optimized pages",
    ],
    modal: {
      problem: "Client websites had low organic traffic and poor search rankings due to unoptimized content and missing SEO fundamentals.",
      solution: "Conducted thorough keyword research and competitor analysis, then optimized blog posts, landing pages, and product pages with on-page SEO improvements.",
      impact: [
        "Average 45% increase in organic traffic",
        "Improved search rankings for target keywords",
        "Actionable reports and guides for ongoing optimization",
      ],
    },
  },
  {
    emoji: "🎨",
    title: "Canva Designer & Social Media Specialist | Freelance / Remote",
    dates: "February 2024 – August 2024",
    bullets: [
      "Created branded graphics, ads, templates in Canva Pro",
      "Built content calendars + posts for Instagram, TikTok, Facebook",
      "Supplied editable assets + basic marketing support",
      "Results: Helped clients grow engagement by 2–3x with consistent visuals",
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
    <section className="py-20 px-4 bg-gradient-hero">
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
