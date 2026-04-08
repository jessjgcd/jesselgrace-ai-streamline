import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Trophy, ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const stories = [
  {
    client: "Tech Service Provider",
    challenge: "Manual lead handling consuming 20+ hours weekly",
    solution: "Complete funnel overhaul with automated lead routing",
    results: "70% reduction in manual work",
    metric: "Saved ~$4,800/month in labor",
    metricNumber: "70%",
    metricLabel: "Less Manual Work",
    tools: "GHL, n8n",
    icon: "🚀",
  },
  {
    client: "Content Creator",
    challenge: "Inconsistent podcast production pipeline",
    solution: "AI-powered content automation and scheduling",
    results: "200% increase in content output",
    metric: "3x faster turnaround",
    metricNumber: "200%",
    metricLabel: "More Content",
    tools: "OpenAI, n8n",
    icon: "🎙️",
  },
  {
    client: "E-commerce Store",
    challenge: "Low qualified lead conversion rates",
    solution: "Multi-channel lead engine with intelligent GHL lead scoring",
    results: "50% more qualified leads",
    metric: "2x pipeline value",
    metricNumber: "50%",
    metricLabel: "More Leads",
    tools: "GHL, Make.com",
    icon: "🛒",
  },
  {
    client: "Marketing Agency",
    challenge: "Project delays spanning days",
    solution: "Automated project management and onboarding",
    results: "Delays reduced from days to hours",
    metric: "40% better campaign ROI",
    metricNumber: "40%",
    metricLabel: "Better ROI",
    tools: "GHL, n8n",
    icon: "📈",
  },
  {
    client: "Service Business",
    challenge: "Slow onboarding eating up team bandwidth",
    solution: "Automated membership delivery and welcome sequences via GHL",
    results: "60% faster onboarding",
    metric: "15+ hours/week saved",
    metricNumber: "60%",
    metricLabel: "Faster Onboarding",
    tools: "GHL, Make.com",
    icon: "⚡",
  },
  {
    client: "Agency Client",
    challenge: "No visibility into campaign performance",
    solution: "Real-time GHL tracking dashboards with automated alerts",
    results: "40% better campaign ROI",
    metric: "Data-driven decisions in minutes",
    metricNumber: "40%",
    metricLabel: "Better Campaign ROI",
    tools: "GHL, n8n",
    icon: "🎯",
  },
  {
    client: "SaaS Startup",
    challenge: "Manual data entry causing sync errors across tools",
    solution: "End-to-end n8n workflows connecting CRM, Sheets, and Slack",
    results: "Zero sync errors",
    metric: "10–18 hours/week eliminated",
    metricNumber: "0",
    metricLabel: "Sync Errors",
    tools: "n8n, Make.com",
    icon: "🔗",
  },
];

const highlightMetrics = [
  { number: "70%", label: "Reduction in Manual Tasks" },
  { number: "200%", label: "Content Output Increase" },
  { number: "$4.8K", label: "Monthly Labor Savings" },
  { number: "15+", label: "Hours Saved Per Week" },
  { number: "99%+", label: "Workflow Uptime" },
  { number: "2×", label: "Pipeline Value Growth" },
];

export const SuccessStoriesSection = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, stories.length - itemsPerView);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(maxIndex, c + 1)), [maxIndex]);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section id="success" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <Trophy className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              Success Stories
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Client
            <span className="text-gradient"> Transformations</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from businesses that trusted me with their automation
            journey.
          </p>
        </motion.div>

        {/* Highlight Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {highlightMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-4 rounded-2xl bg-card border border-border/50 hover:shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.3)] transition-shadow"
            >
              <p className="text-2xl md:text-3xl font-bold text-gradient">{m.number}</p>
              <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-current * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.35)] h-full flex flex-col relative overflow-hidden">
                    {/* Quote icon */}
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/15" />

                    {/* Big metric number */}
                    <p className="text-4xl font-bold text-gradient mb-1">{story.metricNumber}</p>
                    <p className="text-xs text-muted-foreground font-medium mb-4">{story.metricLabel}</p>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{story.icon}</span>
                      <h3 className="font-semibold text-foreground text-sm">
                        {story.client}
                      </h3>
                    </div>

                    <div className="space-y-2 text-sm flex-1">
                      <p className="text-muted-foreground italic text-xs leading-relaxed">
                        "{story.challenge} → {story.solution}"
                      </p>

                      <div className="p-3 rounded-xl bg-primary/10">
                        <p className="font-semibold text-foreground text-sm">
                          ✨ {story.results}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {story.metric}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground">
                          🛠️ {story.tools}
                        </span>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group-hover:gap-3"
                    >
                      Get Similar Results
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
