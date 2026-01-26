import { motion } from "framer-motion";
import { Lightbulb, Clock, Video, Calendar } from "lucide-react";

const options = [
  {
    icon: Lightbulb,
    title: "Strategy Session",
    description: "Deep dive into your business needs",
    color: "pastel-pink",
  },
  {
    icon: Clock,
    title: "30-Minute Quick Chat",
    description: "Quick overview and next steps",
    color: "pastel-blue",
  },
  {
    icon: Video,
    title: "Video Call",
    description: "Face-to-face consultation",
    color: "pastel-lavender",
  },
];

export const ConsultationSection = () => {
  return (
    <section id="consultation" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <Calendar className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              Free Consultation
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Free 30-Minute
            <span className="text-gradient"> Discovery Call</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's audit your business, map out a custom funnel, and explore
            automation opportunities to save time and boost results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border card-hover text-center"
            >
              <div
                className={`w-14 h-14 rounded-full bg-${option.color} flex items-center justify-center mb-4 mx-auto`}
              >
                <option.icon className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-button rounded-full text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};
