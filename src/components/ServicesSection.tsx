import { motion } from "framer-motion";
import { Bot, Users, FileText, BarChart3, TrendingUp, FolderKanban, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Workflows",
    description: "Custom funnels that handle leads and decisions automatically",
    tools: "Make.com, GHL",
    benefit: "24/7 automated operations",
    color: "pastel-pink",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Multi-channel systems with intelligent lead nurturing",
    tools: "GHL, Zapier",
    benefit: "50% faster lead qualification",
    color: "pastel-blue",
  },
  {
    icon: FileText,
    title: "Content Automation",
    description: "Dynamic pipelines for blogs, emails, and social content",
    tools: "OpenAI, Make.com",
    benefit: "3x content output",
    color: "pastel-lavender",
  },
  {
    icon: BarChart3,
    title: "Marketing Automation",
    description: "Campaign workflows with real-time performance tracking",
    tools: "GHL, Zapier",
    benefit: "40% better ROI",
    color: "pastel-pink",
  },
  {
    icon: TrendingUp,
    title: "Sales Automation",
    description: "Funnel optimizations that close deals while you sleep",
    tools: "GHL, Make.com",
    benefit: "2x conversion rate",
    color: "pastel-blue",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description: "Coordinated onboarding, tasks, and team workflows",
    tools: "Make.com, Zapier",
    benefit: "60% time saved",
    color: "pastel-lavender",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 mb-6">
            <Bot className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              Automation Solutions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services That
            <span className="text-gradient"> Scale Your Business</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive automation solutions designed to streamline your
            operations and drive growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-card border border-border card-hover"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-${service.color} flex items-center justify-center mb-4`}
              >
                <service.icon className="h-7 w-7 text-foreground" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-primary/20 text-foreground">
                    🛠️ {service.tools}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-secondary/50 text-foreground">
                    ✨ {service.benefit}
                  </span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group-hover:gap-3">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
