import { motion } from "framer-motion";
import { Calendar, Cog, Star } from "lucide-react";
import headshot from "@/assets/headshot.png";

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
              <span className="px-4 py-2 rounded-full bg-primary/30 text-foreground text-sm font-medium">
                ✨ AI Automation Expert
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Jessel Grace
              <br />
              <span className="text-gradient">Diagbel</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground font-medium"
            >
              AI Automation & Funnel Expert | Streamlining Businesses with Smart
              Funnels & Workflows
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-foreground/80 text-base md:text-lg max-w-lg"
            >
              Transform tech stress into 24/7 efficiency with custom automations
              that attract and qualify clients effortlessly.
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
            <div className="relative">
              {/* Decorative background circles */}
              <div className="absolute -inset-4 bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blue rounded-full blur-3xl opacity-50" />
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full" />
              
              {/* Headshot image */}
              <motion.img
                src={headshot}
                alt="Jessel Grace Diagbel"
                className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xl">💖</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-6 w-10 h-10 bg-pastel-blue rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-lg">⚡</span>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-8 h-8 bg-pastel-lavender rounded-full flex items-center justify-center shadow-lg"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-sm">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
