import { motion } from "framer-motion";
import { Search, FileSearch, PenTool, Wrench, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Assessment",
    description: "Analyze pain points, map ROI opportunities",
    details: ["Business audit", "Goal alignment", "Opportunity mapping"],
    timeline: "3-5 days",
    color: "pastel-pink",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Research & Strategy",
    description: "Select tools, plan custom funnels",
    details: ["Tool selection", "Funnel architecture", "Integration planning"],
    timeline: "3-5 days",
    color: "pastel-blue",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Funnel & Solution Design",
    description: "Craft blueprints, design integrations",
    details: ["Blueprint creation", "UI/UX design", "Workflow mapping"],
    timeline: "5-7 days",
    color: "pastel-lavender",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Development & Setup",
    description: "Build automations, configure systems",
    details: ["System setup", "Automation building", "Data migration"],
    timeline: "5-7 days",
    color: "pastel-pink",
  },
  {
    number: "05",
    icon: Settings,
    title: "Optimization & Testing",
    description: "Refine for peak performance",
    details: ["Quality testing", "Performance tuning", "Bug fixes"],
    timeline: "3-5 days",
    color: "pastel-blue",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch & Support",
    description: "Deploy with guides and 30-day support",
    details: ["Go-live support", "Team training", "30-day assistance"],
    timeline: "Ongoing",
    color: "pastel-lavender",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 mb-6">
            <Rocket className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              My Proven Process
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            From Idea to
            <span className="text-gradient"> Automation</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach that delivers results every time.
          </p>
        </motion.div>

        {/* ✅ 1 col mobile → 2 col sm → 3 col lg, with proper padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-5 md:p-6 rounded-2xl bg-gradient-card border border-border card-hover"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-${step.color} flex items-center justify-center shrink-0`}
                >
                  <step.icon className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-primary/50">
                  {step.number}
                </span>
              </div>

              <h3 className="font-semibold text-foreground text-sm md:text-base mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {step.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-xs text-foreground/70 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                ⏱️ {step.timeline}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProcessSection;
