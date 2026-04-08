import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Zap, DollarSign, Sparkles, TrendingUp, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import projectBanner from "@/assets/project-banner.png";
import projectBannerMobile from "@/assets/project-banner-mobile.webp";
import sora2Workflow from "@/assets/sora2-workflow.png";
import sora2WorkflowMobile from "@/assets/sora2-workflow-mobile.webp";

const comingSoonProjects = [
  {
    title: "Smart Lead Funnel Builder",
    description: "AI-powered funnel that qualifies and nurtures leads automatically.",
    tags: ["n8n", "GPT-4", "CRM"],
  },
  {
    title: "Auto Social Scheduler",
    description: "Content repurposing pipeline — one video becomes 10 posts.",
    tags: ["Make", "Buffer", "AI"],
  },
  {
    title: "Client Onboarding Bot",
    description: "Automated welcome flows with smart document collection.",
    tags: ["Zapier", "Notion", "AI"],
  },
  {
    title: "AI Email Responder",
    description: "Intelligent email triage and drafting with context awareness.",
    tags: ["n8n", "OpenAI", "Gmail"],
  },
  {
    title: "Data Dashboard Generator",
    description: "Auto-generate visual reports from raw spreadsheet data.",
    tags: ["Python", "GPT", "Charts"],
  },
];

export const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
            Real results from AI automation workflows I built
          </p>
        </motion.div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-48 md:h-64 rounded-2xl mb-12 shadow-lg overflow-hidden"
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={projectBannerMobile} type="image/webp" />
            <source media="(min-width: 768px)" srcSet={projectBanner} />
            <img
              src={projectBanner}
              alt="Featured Projects Banner"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* === FEATURED: Sora 2 Card === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="overflow-hidden group border-border/50 bg-gradient-to-br from-card to-accent/30 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 h-full">
              <div className="aspect-video w-full overflow-hidden relative">
                <picture>
                  <source media="(max-width: 767px)" srcSet={sora2WorkflowMobile} type="image/webp" />
                  <source media="(min-width: 768px)" srcSet={sora2Workflow} />
                  <img
                    src={sora2Workflow}
                    alt="Sora 2 AI Video Automation Workflow in n8n"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-5 pt-4">
                <h3 className="font-semibold text-heading text-lg mb-1">
                  AI Video Magic Automation – Create Anything with Sora 2
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Built a smart automation that turns text into stunning AI videos using Sora 2. Fully hands-free — great for fast content creation.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["n8n", "Sora 2", "AI Video", "Automation", "Kie.ai"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-foreground/80 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  size="sm"
                  className="gap-2 bg-primary hover:bg-primary/80 text-primary-foreground"
                  onClick={() => setModalOpen(true)}
                >
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* === Coming Soon Cards === */}
          {comingSoonProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
            >
              <Card className="overflow-hidden group border-border/50 bg-gradient-to-br from-card to-accent/20 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 h-full relative">
                <div className="aspect-video w-full bg-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/10" />
                  <Lock className="h-8 w-8 text-muted-foreground/40 relative z-10" />
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                    Coming Soon
                  </span>
                </div>
                <CardContent className="p-5 pt-4">
                  <h3 className="font-semibold text-heading text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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

      {/* === Case Study Modal === */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 mx-2 sm:mx-auto">
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-heading">
                AI-Powered Video Creation Automation with Sora 2
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                A complete AI video generation workflow — from text prompt to finished video, fully automated.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Media */}
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <img
                    src={sora2Workflow}
                    alt="Sora 2 AI Video Automation Workflow"
                    className="w-full object-cover"
                  />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <iframe
                    src="https://www.youtube.com/embed/QowqBcNNi48"
                    title="AI Video Automation Demo – Baby Dragon"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center italic">
                  See the baby dragon video made automatically! 🐉
                </p>
              </div>

              {/* Right: Results */}
              <div className="space-y-5">
                <div className="space-y-3">
                  {[
                    { icon: Zap, label: "100% Automated", desc: "Text to video in one go" },
                    { icon: DollarSign, label: "6x Cheaper", desc: "Smart tools save big money" },
                    { icon: Sparkles, label: "Endless Ideas", desc: "Fantasy, demos, stories fast" },
                    { icon: TrendingUp, label: "Scale Content", desc: "Create more without extra work" },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 p-3 rounded-xl bg-accent/40 border border-border/30"
                    >
                      <div className="p-2 rounded-lg bg-primary/20 shrink-0">
                        <Icon className="h-5 w-5 text-heading" />
                      </div>
                      <div>
                        <p className="font-semibold text-heading text-sm">{label}</p>
                        <p className="text-muted-foreground text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-muted/50 border border-border/30">
                  <p className="text-sm text-foreground leading-relaxed">
                    Replaced slow manual video work with easy AI automation. Turn ideas into pro-looking videos quickly using Sora 2 — perfect for creators and businesses looking to scale content without extra effort.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Tools & Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["n8n", "Kie.ai", "Sora 2", "OpenAI / GPT"].map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 rounded-full bg-primary/15 text-heading font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
