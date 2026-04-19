import { motion } from "framer-motion";
import { Heart, Sparkles, Target, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-14 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Empowering Businesses with
            <span className="text-gradient"> Intelligent Automation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-muted-foreground text-base leading-relaxed"
          >
            <p>I help business owners and teams break free from repetitive manual work by building smart, reliable AI-powered systems.</p>
            <p>Using <span className="text-primary font-semibold">n8n</span>, <span className="text-primary font-semibold">Make.com</span>, <span className="text-primary font-semibold">GoHighLevel</span>, and <span className="text-primary font-semibold">OpenAI</span>, I design custom automations for lead generation, CRM sync, content creation, and sales pipelines.</p>
            <p>My goal: deliver powerful yet easy-to-manage solutions that save you time and drive real growth.</p>
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4"
          >
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-card border border-border card-hover">
              <div className="w-12 h-12 rounded-full bg-pastel-pink flex items-center justify-center shrink-0">
                <Zap className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Efficiency</h3>
                <p className="text-sm text-muted-foreground">Automate repetitive tasks and reclaim your time</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-card border border-border card-hover">
              <div className="w-12 h-12 rounded-full bg-pastel-blue flex items-center justify-center shrink-0">
                <Target className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Conversion</h3>
                <p className="text-sm text-muted-foreground">High-converting funnels that attract quality leads</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-card border border-border card-hover">
              <div className="w-12 h-12 rounded-full bg-pastel-lavender flex items-center justify-center shrink-0">
                <Sparkles className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Growth</h3>
                <p className="text-sm text-muted-foreground">Scale your business with smart technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;