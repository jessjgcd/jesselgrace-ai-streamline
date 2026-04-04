import { motion } from "framer-motion";
import { Heart, Sparkles, Target, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">About Me</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8">
            Empowering Businesses with
            <span className="text-gradient"> Intelligent Automation</span>
          </h2>

          <div className="text-lg text-muted-foreground leading-relaxed mb-12 space-y-4 text-left sm:text-center">
            <p>I help business owners and teams break free from repetitive manual work by building smart, reliable AI-powered systems.</p>
            <p>Using <span className="text-primary font-semibold">n8n</span>, <span className="text-primary font-semibold">Make.com</span>, <span className="text-primary font-semibold">GoHighLevel</span>, and <span className="text-primary font-semibold">OpenAI</span>, I design custom automations for lead generation, CRM synchronization, content creation, email management, and sales pipelines.</p>
            <p>My goal is simple: deliver powerful yet easy-to-manage solutions that save you time and drive real growth.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-pastel-pink flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Automate repetitive tasks and reclaim your time
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-pastel-blue flex items-center justify-center mb-4 mx-auto">
                <Target className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Conversion</h3>
              <p className="text-sm text-muted-foreground">
                High-converting funnels that attract quality leads
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-pastel-lavender flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Growth</h3>
              <p className="text-sm text-muted-foreground">
                Scale your business with smart technology
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
