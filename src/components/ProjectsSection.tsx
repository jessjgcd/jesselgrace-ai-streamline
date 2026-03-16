import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import projectBanner from "@/assets/project-banner.png";

const projects = [
  {
    title: "Project 1 Title",
    description: "Short description here",
    videoId: "PLACEHOLDER1",
    comingSoon: false,
  },
  ...Array.from({ length: 5 }, (_, i) => ({
    title: `Project ${i + 2} Title – Coming Soon`,
    description: "Detailed project description will be added here",
    videoId: `PLACEHOLDER${i + 2}`,
    comingSoon: true,
  })),
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from YouTube videos I created
          </p>
        </motion.div>

        {/* Banner image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-48 md:h-64 rounded-2xl mb-12 shadow-lg overflow-hidden"
        >
          <img
            src={projectBanner}
            alt="Featured Projects Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-hover bg-gradient-card border-border/50">
                {/* Video embed */}
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <CardContent className="p-5 pt-4">
                  <h3 className="font-semibold text-heading text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${project.videoId}`,
                        "_blank"
                      )
                    }
                  >
                    <Play className="h-4 w-4" />
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-xl">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
