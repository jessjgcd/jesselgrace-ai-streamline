import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const tools = [
  { name: "n8n", logo: "/images/n8n.webp" },
  { name: "Grok", logo: "/images/grok.webp" },
  { name: "Claude", logo: "/images/claude.webp" },
  { name: "OpenAI", logo: "/images/openai.webp" },
  { name: "Zapier", logo: "/images/zapier.webp" },
  { name: "Make", logo: "/images/make.webp" },
  { name: "Go High Level", logo: "/images/ghl.webp" },
];

export const ToolsSection = () => {
  // Triple duplicate for a fully seamless infinite loop
  const duplicatedTools = [...tools, ...tools, ...tools];

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

        {/* ✅ Marquee wrapper */}
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-10 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* ✅ CSS keyframe animation — perfectly seamless, no jump */}
          <div
            className="flex gap-4 md:gap-6"
            style={{
              width: "fit-content",
              animation: "marqueeScroll 40s linear infinite",
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                style={{ minWidth: "70px" }}
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="object-contain grayscale hover:grayscale-0 dark:grayscale-0 transition-all duration-300"
                  style={{ width: "36px", height: "36px" }}
                />
                <p className="text-center text-[10px] md:text-xs font-medium text-muted-foreground mt-2 whitespace-nowrap">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Keyframe — moves exactly 1/3 of the tripled list = seamless loop */}
        <style>{`
          @keyframes marqueeScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}</style>
      </div>
    </section>
  );
};
export default ToolsSection;
