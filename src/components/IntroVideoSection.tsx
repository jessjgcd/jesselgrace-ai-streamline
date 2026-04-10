import { motion } from "framer-motion";

export const IntroVideoSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            Meet Jessel Grace
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Watch my 2-minute introduction
          </p>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-border/50">
            <iframe
              src="https://www.youtube.com/embed/w1gBYUPAG1o"
              title="Meet Jessel Grace"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Hi, I'm Jessel Grace, AI Automation & Funnel Expert. Let me show you how I help
            businesses streamline and scale with AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
