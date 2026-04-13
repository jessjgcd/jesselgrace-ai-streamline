import { motion } from "framer-motion";
import { Calendar, Cog } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-hero pt-24 pb-16 px-4 flex items-center"
      style={{ minHeight: '100svh' }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-5 py-2.5 rounded-full bg-primary/30 text-foreground text-sm font-medium inline-flex items-center gap-1.5">
              <span>⭐</span>
              <span>Jessel Grace Diagbel — AI Automation Specialist</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#60A5FA] bg-clip-text text-transparent">
              Intelligent Automation.
            </span>
            <br />
            <span className="text-foreground">Real Results.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground/80 font-normal max-w-2xl mx-auto"
          >
            I build AI-powered workflows, funnels, and automation systems that
            streamline business operations, reduce manual tasks, and drive growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-button rounded-full text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              Book Free Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:bg-muted transition-all hover:scale-105"
            >
              <Cog className="h-5 w-5" />
              View Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
