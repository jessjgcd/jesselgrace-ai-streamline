import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "[Company Name]",
    title: "[Job Title]",
    dates: "[Start Date] – [End Date]",
    bullets: ["Description line 1", "Description line 2"],
  },
  {
    company: "[Company Name]",
    title: "[Job Title]",
    dates: "[Start Date] – [End Date]",
    bullets: ["Description line 1", "Description line 2"],
  },
  {
    company: "[Company Name]",
    title: "[Job Title]",
    dates: "[Start Date] – [End Date]",
    bullets: ["Description line 1", "Description line 2"],
  },
  {
    company: "[Company Name]",
    title: "[Job Title]",
    dates: "[Start Date] – [End Date]",
    bullets: ["Description line 1", "Description line 2"],
  },
];

export const PreviousExperienceSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            Previous Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey before Glogicraft
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                <Card className="bg-gradient-card border-border/50 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-heading text-lg">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground text-xs mb-3">
                          {exp.dates}
                        </p>
                        <ul className="space-y-1">
                          {exp.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground text-sm flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5">•</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
