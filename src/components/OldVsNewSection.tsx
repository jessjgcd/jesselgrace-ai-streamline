import { motion } from "framer-motion";
import { XCircle, CheckCircle, AlertTriangle, Zap } from "lucide-react";

const oldWayItems = [
  "Manual lead follow-ups eating 10+ hours/week",
  "Data entry across disconnected spreadsheets",
  "Scheduling and content posted by hand",
  "Missed leads and slow response times",
];

const newWayItems = [
  "AI agents qualifying and following up 24/7",
  "CRM data synced automatically in real-time",
  "Content scheduled, posted, and tracked on autopilot",
  "Instant lead capture and automated nurture flows",
];

export const OldVsNewSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Why Automate?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Most Businesses Are Still
            <span className="text-gradient"> Doing Everything Manually</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stop wasting hours on tasks that AI can handle in seconds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border border-destructive/30 bg-destructive/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h3 className="text-xl font-bold text-foreground">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              {oldWayItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* The New Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border border-primary/30 bg-primary/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">The New Way</h3>
            </div>
            <ul className="space-y-4">
              {newWayItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
