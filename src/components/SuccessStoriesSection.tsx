import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Trophy, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    client: "Tech Service Provider",
    challenge: "Manual lead handling consuming 20+ hours weekly",
    solution: "Complete funnel overhaul with automated lead routing",
    results: "70% reduction in manual work",
    metric: "Saved ~$4,800/month in labor",
    tools: "GHL, n8n",
    icon: "🚀",
  },
  {
    client: "Content Creator",
    challenge: "Inconsistent podcast production pipeline",
    solution: "AI-powered content automation and scheduling",
    results: "200% increase in content output",
    metric: "3x faster turnaround",
    tools: "OpenAI, n8n",
    icon: "🎙️",
  },
  {
    client: "E-commerce Store",
    challenge: "Low qualified lead conversion rates",
    solution: "Multi-channel lead engine with intelligent GHL lead scoring",
    results: "50% more qualified leads",
    metric: "2x pipeline value",
    tools: "GHL, Make.com",
    icon: "🛒",
  },
  {
    client: "Marketing Agency",
    challenge: "Project delays spanning days",
    solution: "Automated project management and onboarding",
    results: "Delays reduced from days to hours",
    metric: "40% better campaign ROI",
    tools: "GHL, n8n",
    icon: "📈",
  },
  {
    client: "Service Business",
    challenge: "Slow onboarding eating up team bandwidth",
    solution: "Automated membership delivery and welcome sequences via GHL",
    results: "60% faster onboarding",
    metric: "15+ hours/week saved",
    tools: "GHL, Make.com",
    icon: "⚡",
  },
  {
    client: "Agency Client",
    challenge: "No visibility into campaign performance",
    solution: "Real-time GHL tracking dashboards with automated alerts",
    results: "40% better campaign ROI",
    metric: "Data-driven decisions in minutes",
    tools: "GHL, n8n",
    icon: "🎯",
  },
  {
    client: "SaaS Startup",
    challenge: "Manual data entry causing sync errors across tools",
    solution: "End-to-end n8n workflows connecting CRM, Sheets, and Slack",
    results: "Zero sync errors",
    metric: "10–18 hours/week eliminated",
    tools: "n8n, Make.com",
    icon: "🔗",
  },
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

        {/* Carousel */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
                  <div className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.35)] h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{story.icon}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-primary fill-primary"
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="font-semibold text-foreground mb-3">
                      {story.client}
                    </h3>

                    <div className="space-y-3 text-sm flex-1">
                      <div>
                        <p className="text-muted-foreground font-medium">Challenge:</p>
                        <p className="text-foreground/80">{story.challenge}</p>
                      </div>

                      <div>
                        <p className="text-muted-foreground font-medium">Solution:</p>
                        <p className="text-foreground/80">{story.solution}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-primary/10">
                        <p className="font-semibold text-foreground">
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
