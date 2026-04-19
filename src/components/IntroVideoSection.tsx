import { motion } from "framer-motion";

export const IntroVideoSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <span className="text-sm font-medium text-foreground">👋 Meet your AI Automation Specialist</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            A Quick Hello From Me
          </h2>
          <p className="text-muted-foreground mb-8 text-base max-w-xl mx-auto">
            Watch my 2-minute introduction to learn how I help businesses grow with AI automation.
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
        </motion.div>
      </div>
    </section>
  );
};
export default IntroVideoSection;