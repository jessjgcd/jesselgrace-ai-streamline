import { motion } from "framer-motion";
import { Star, Trophy, ArrowRight } from "lucide-react";

const stories = [
  {
    client: "Tech Service Provider",
    challenge: "Manual lead handling consuming 20+ hours weekly",
    solution: "Complete funnel overhaul with automated lead routing",
    results: "70% reduction in manual work",
    tools: "Make.com, GHL",
    icon: "🚀",
  },
  {
    client: "Content Creator",
    challenge: "Inconsistent podcast production pipeline",
    solution: "AI-powered content automation and scheduling",
    results: "200% increase in content output",
    tools: "OpenAI, Zapier",
    icon: "🎙️",
  },
  {
    client: "E-commerce Store",
    challenge: "Low qualified lead conversion rates",
    solution: "Multi-channel lead engine with smart nurturing",
    results: "50% more qualified leads",
    tools: "GHL, Make.com",
    icon: "🛒",
  },
  {
    client: "Marketing Agency",
    challenge: "Project delays spanning days",
    solution: "Automated project management and onboarding",
    results: "Delays reduced from days to hours",
    tools: "ChatGPT, Zapier",
    icon: "📈",
  },
];

export const SuccessStoriesSection = () => {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border card-hover"
            >
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

              <div className="space-y-3 text-sm">
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
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground">
                    {story.tools}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
