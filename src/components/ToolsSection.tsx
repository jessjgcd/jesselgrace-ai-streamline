import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const tools = [
  {
    name: "n8n",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/N8n-logo-new.svg/1280px-N8n-logo-new.svg.png",
  },
  {
    name: "Grok",
    logo: "https://images.seeklogo.com/logo-png/61/1/grok-logo-png_seeklogo-613403.png",
  },
  {
    name: "Claude",
    logo: "https://images.seeklogo.com/logo-png/55/2/claude-logo-png_seeklogo-554540.png",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/3840px-OpenAI_Logo.svg.png",
  },
  {
    name: "Zapier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/1280px-Zapier_logo.svg.png",
  },
  {
    name: "Make",
    logo: "https://images.seeklogo.com/logo-png/46/2/make-logo-png_seeklogo-464017.png",
  },
  {
    name: "Go High Level",
    logo: "https://assets.cdn.filesafe.space/7bj9GLcAHEyZKIzRsdI1/media/66dcec8d84ef295b39eb6ee9.png",
  },
];

export const ToolsSection = () => {
  // Duplicate tools array for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools];

  return (
    <section className="py-20 px-4 bg-background overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 mb-6">
            <Sparkles className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              Powered by Industry-Leading Tools
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Tools I <span className="text-gradient">Trust</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            I use top tools to deliver efficient, scalable automations and funnels
            that grow with your business.
          </p>
        </motion.div>

        {/* Infinite Marquee Container */}
        <div className="relative group">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <motion.div
            className="flex gap-8 group-hover:[animation-play-state:paused]"
            animate={{
              x: [0, -50 * tools.length * 2],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              width: "fit-content",
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 p-4 md:p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width="65"
                  height="65"
                  loading="lazy"
                  className="object-contain grayscale hover:grayscale-0 dark:grayscale-0 transition-all duration-300"
                />
                <p className="text-center text-xs font-medium text-muted-foreground mt-2">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
