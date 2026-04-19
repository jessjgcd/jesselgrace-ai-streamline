import { motion } from "framer-motion";
import { Eye, Heart, Brain, MousePointerClick, RefreshCw, Layers, ArrowRight } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Awareness",
    description: "Attract visitors through content marketing, social media, and paid ads.",
    icon: Eye,
    color: "pastel-pink",
  },
  {
    number: "02",
    title: "Interest",
    description: "Capture leads with irresistible opt-ins, lead magnets, and smart pop-ups.",
    icon: Heart,
    color: "pastel-blue",
  },
  {
    number: "03",
    title: "Decision",
    description: "Nurture with automated email sequences, case studies, and social proof.",
    icon: Brain,
    color: "pastel-lavender",
  },
  {
    number: "04",
    title: "Action",
    description: "Convert with optimized landing pages, booking funnels, and clear CTAs.",
    icon: MousePointerClick,
    color: "pastel-pink",
  },
  {
    number: "05",
    title: "Retention",
    description: "Delight with onboarding automation, follow-ups, and referral systems.",
    icon: RefreshCw,
    color: "pastel-blue",
  },
];

export const FunnelStagesSection = () => {
  return (
    <section className="py-14 px-4 bg-section-tint">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Funnel Design
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Your AI-Powered
            <span className="text-gradient"> Funnel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I design intelligent funnels tailored to your niche — turning cold traffic into loyal customers on autopilot.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-start justify-center gap-2 max-w-5xl mx-auto">
          {stages.map((stage, index) => (
            <div key={stage.number} className="flex items-start gap-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center w-36"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${stage.color} flex items-center justify-center mb-3`}>
                  <stage.icon className="h-6 w-6 text-foreground" />
                </div>
                <span className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-1">
                  Stage {stage.number}
                </span>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
              {index < stages.length - 1 && (
                <ArrowRight className="h-5 w-5 text-primary/40 mt-5 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: compact list */}
        <div className="flex md:hidden flex-col max-w-lg mx-auto space-y-4">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border"
            >
              <div className={`w-12 h-12 rounded-2xl bg-${stage.color} flex items-center justify-center shrink-0`}>
                <stage.icon className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <span className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                  Stage {stage.number}
                </span>
                <h3 className="text-sm font-semibold text-foreground">{stage.title}</h3>
                <p className="text-xs text-muted-foreground">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FunnelStagesSection;