import { motion } from "framer-motion";
import { Calendar, Cog, Star } from "lucide-react";
import headshot from "@/assets/headshot.png";
import headshotMobile from "@/assets/headshot-mobile.webp";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero pt-24 pb-16 px-4"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-5 py-2.5 my-2 rounded-full bg-primary/30 text-foreground text-sm font-medium inline-flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1 text-center">
                <span>Jessel Grace Diagbel</span>
                <span className="hidden sm:inline">|</span>
                <span className="text-xs sm:text-sm">⭐ AI Automation Specialist</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#60A5FA] bg-clip-text text-transparent leading-tight"
            >
              I Build AI Automation Systems That Save Businesses Hours of Work
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground/80 font-normal"
            >
              I design intelligent workflows, AI agents, and automation systems that streamline business operations, reduce manual tasks, and improve efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-button rounded-full text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Book Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:bg-muted transition-all hover:scale-105"
              >
                <Cog className="h-5 w-5" />
                View Services
              </a>
              <a
                href="#success"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:bg-muted transition-all hover:scale-105"
              >
                <Star className="h-5 w-5" />
                Success Stories
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Clean headshot image - no decorations */}
            <motion.img
              src={headshot}
              alt="Jessel Grace Diagbel"
              className="w-72 h-72 md:w-96 md:h-96 rounded-3xl object-cover border-2 border-white/10 shadow-[0_8px_30px_rgba(255,255,255,0.1)] dark:border-[#1E3A5F]/60 dark:shadow-[0_8px_30px_rgba(30,58,95,0.3)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
