import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const tools = [
  {
    name: "Make.com",
    logo: "https://images.ctfassets.net/un655fb9wln6/7HvRcEszYsu56K8WjQR5Lc/ab15a4c59a3a3f3b4f9a0bf24e2f7eb8/Make_logo.svg",
    color: "pastel-pink",
  },
  {
    name: "GoHighLevel",
    logo: "https://assets.cdn.filesafe.space/46hdVqPlBK8OsXPLtLAu/media/65beb413dfeb92b81c27f23d.png",
    color: "pastel-blue",
  },
  {
    name: "Zapier",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
    color: "pastel-lavender",
  },
  {
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    color: "pastel-pink",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    color: "pastel-blue",
  },
];

export const ToolsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
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

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tools I <span className="text-gradient">Trust</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            I use top tools to deliver efficient, scalable automations and funnels
            that grow with your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className={`p-4 md:p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300`}>
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-8 md:h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="h-4 w-4 text-primary fill-primary" />
              </div>
              <p className="text-center text-xs font-medium text-muted-foreground mt-2">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
