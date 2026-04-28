import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, DollarSign, Sparkles, TrendingUp, Lock, Bot, Users, Brain, Shield, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import sora2Workflow from "@/assets/sora2-workflow.png";
import sora2WorkflowMobile from "@/assets/sora2-workflow-mobile.webp";
import nexacoreOnboarding from "@/assets/nexacore-onboarding.png";
import nexacoreLogin from "@/assets/nexacore-login.png";
import aiAgentWorkflow from "@/assets/nexacore-ai-agent.png";
import aiAgentHuman from "@/assets/nexacore-human-active.png";
import knowledgeBaseWorkflow from "@/assets/knowledge-base-workflow.png";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const comingSoonProjects = [
  {
    title: "Smart Lead Funnel Builder",
    description: "AI-powered funnel that qualifies and nurtures leads automatically.",
    tags: ["n8n", "GPT-4", "CRM"],
  },
  {
    title: "Auto Social Scheduler",
    description: "Content repurposing pipeline - one video becomes 10 posts.",
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

// Lightbox component
const Lightbox = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="h-6 w-6 text-white" />
      </button>
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="absolute bottom-4 text-white/50 text-sm">Click anywhere to close</p>
    </motion.div>
  </AnimatePresence>
);

// Zoomable image component
const ZoomableImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative group/zoom cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
        <img src={src} alt={alt} className={className} />
        <div className="absolute inset-0 bg-black/0 group-hover/zoom:bg-black/20 transition-all duration-200 rounded-xl flex items-center justify-center">
          <div className="opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2 shadow-lg">
            <ZoomIn className="h-5 w-5 text-gray-700" />
          </div>
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox src={src} alt={alt} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
};

export const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [nexacoreModalOpen, setNexacoreModalOpen] = useState(false);
  const [aiAgentModalOpen, setAiAgentModalOpen] = useState(false);
  const [knowledgeBaseModalOpen, setKnowledgeBaseModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? comingSoonProjects : comingSoonProjects.slice(0, 1);

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
          <p className="text-muted-foreground text-base md:text-lg">
            Real results from AI automation workflows I built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* === FEATURED: Sora 2 Card === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="overflow-hidden group border-border/50 bg-gradient-to-br from-card to-accent/30 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 h-full">
              <div className="aspect-video w-full overflow-hidden relative">
                <ResponsiveImage
                  src={sora2Workflow}
                  mobileSrc={sora2WorkflowMobile}
                  alt="Sora 2 AI Video Automation Workflow in n8n"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={640}
                  height={360}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4 md:p-5 pt-4">
                <h3 className="font-semibold text-heading text-base md:text-lg mb-1">
                  AI Video Magic Automation - Create Anything with Sora 2
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Built a smart automation that turns text into stunning AI videos using Sora 2. Fully hands-free - great for fast content creation.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["n8n", "Sora 2", "AI Video", "Automation", "Kie.ai"].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-foreground/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button size="sm" className="gap-2 bg-primary hover:bg-primary/80 text-primary-foreground w-full sm:w-auto" onClick={() => setModalOpen(true)}>
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* === FEATURED: Zero-Touch Client Onboarding Pipeline Card === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="overflow-hidden group border-border/50 bg-gradient-to-br from-card to-accent/30 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 h-full">
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={nexacoreOnboarding}
                  alt="Zero-Touch Client Onboarding Pipeline Workflow"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4 md:p-5 pt-4">
                <h3 className="font-semibold text-heading text-base md:text-lg mb-1">
                  Zero-Touch Client Onboarding Pipeline
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Built for a client - automates the entire onboarding journey from signup to follow-up with AI-written emails, login tracking, and instant team alerts.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["n8n", "Groq AI", "Airtable", "Google Sheets", "Telegram"].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-foreground/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button size="sm" className="gap-2 bg-primary hover:bg-primary/80 text-primary-foreground w-full sm:w-auto" onClick={() => setNexacoreModalOpen(true)}>
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* === FEATURED: AI Support Agent Card === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="overflow-hidden group border-border/50 bg-gradient-to-br from-card to-accent/30 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 h-full">
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={aiAgentWorkflow}
                  alt="AI Support Agent with Human Handover Workflow"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4 md:p-5 pt-4">
                <h3 className="font-semibold text-heading text-base md:text-lg mb-1">
                  AI Support Agent with Smart Human Handover
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  A 24/7 AI support agent that answers customer questions from a knowledge base — and hands off to a human agent automatically when needed.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["n8n", "OpenAI", "Supabase", "PostgreSQL", "Telegram"].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-foreground/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button size="sm" className="gap-2 bg-primary hover:bg-primary/80 text-primary-foreground w-full sm:w-auto" onClick={() => setAiAgentModalOpen(true)}>
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* === FEATURED: Knowledge Base Ingestion Card === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="overflow-hidden group border-border/50 bg-gradient-to-br from-card to-accent/30 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 h-full">
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={knowledgeBaseWorkflow}
                  alt="Knowledge Base Ingestion Update and Deletion Workflow"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4 md:p-5 pt-4">
                <h3 className="font-semibold text-heading text-base md:text-lg mb-1">
                  Knowledge Base Ingestion, Update & Deletion
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Auto-syncs Google Drive files into a Supabase vector store. Handles new uploads, updates, and deletions — keeping the AI knowledge base always accurate.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["n8n", "Google Drive", "Supabase", "OpenAI", "pgvector"].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-foreground/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button size="sm" className="gap-2 bg-primary hover:bg-primary/80 text-primary-foreground w-full sm:w-auto" onClick={() => setKnowledgeBaseModalOpen(true)}>
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* === Coming Soon Cards === */}
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
                  <CardContent className="p-4 md:p-5 pt-4">
                    <h3 className="font-semibold text-heading text-base md:text-lg mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl w-full sm:w-auto"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </div>
      </div>

      {/* === Knowledge Base Modal === */}
      <Dialog open={knowledgeBaseModalOpen} onOpenChange={setKnowledgeBaseModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 mx-3 sm:mx-auto w-[calc(100%-1.5rem)] sm:w-full">
          <div className="p-5 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-xl md:text-3xl font-bold text-heading">
                Knowledge Base Ingestion, Update & Deletion
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                A smart automation that keeps an AI knowledge base perfectly in sync with Google Drive — handling uploads, edits, and deletions automatically.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ZoomIn className="h-3 w-3" /> Click image to zoom
                </p>
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <ZoomableImage
                    src={knowledgeBaseWorkflow}
                    alt="Knowledge Base Ingestion Workflow"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-5">
                <div className="space-y-3">
                  {[
                    { icon: Zap, label: "Auto-Sync", desc: "Detects new files, updates, and deletions in Google Drive instantly" },
                    { icon: Brain, label: "Vector Embeddings", desc: "Converts documents into OpenAI embeddings stored in Supabase pgvector" },
                    { icon: Shield, label: "Always Accurate", desc: "Deleted files are removed from the vector store automatically — no stale data" },
                    { icon: Bot, label: "AI-Ready", desc: "Knowledge base stays perfectly in sync so your AI agent always has the latest info" },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-accent/40 border border-border/30">
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
                    When a file is uploaded to Google Drive, the workflow downloads it, splits it into chunks, generates OpenAI embeddings, and stores them in Supabase Vector Store. When a file is updated or deleted, it finds the matching rows and removes or replaces them — keeping the AI's knowledge always clean and current.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tools & Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["n8n", "Google Drive", "Supabase", "OpenAI", "pgvector", "Default Data Loader"].map((tool) => (
                      <span key={tool} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-heading font-medium">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* === AI Support Agent Modal === */}
      <Dialog open={aiAgentModalOpen} onOpenChange={setAiAgentModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 mx-3 sm:mx-auto w-[calc(100%-1.5rem)] sm:w-full">
          <div className="p-5 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-xl md:text-3xl font-bold text-heading">
                AI Support Agent with Smart Human Handover
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                A case study — a 24/7 AI support agent built with n8n that answers customer questions automatically and hands off to a human agent when needed.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ZoomIn className="h-3 w-3" /> Click images to zoom
                </p>
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <ZoomableImage src={aiAgentWorkflow} alt="AI Support Agent Workflow" className="w-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <ZoomableImage src={aiAgentHuman} alt="Human Handover Workflow" className="w-full object-cover" />
                </div>
              </div>
              <div className="space-y-5">
                <div className="space-y-3">
                  {[
                    { icon: Bot, label: "24/7 AI Support", desc: "Answers customer questions automatically using a verified knowledge base" },
                    { icon: Brain, label: "Self-Learning", desc: "Saves every good answer and gets smarter with every conversation" },
                    { icon: Users, label: "Smart Human Handover", desc: "Staff types 'on it' to pause AI and 'done' to bring it back automatically" },
                    { icon: Shield, label: "No Overlap", desc: "AI stays silent when a human is active — no double replies, no confusion" },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-accent/40 border border-border/30">
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
                    When a customer sends a message, the AI checks if a human is already handling the conversation. If yes — it stays silent. If no — it searches the knowledge base and replies instantly. When it can't answer, it alerts the support team via Telegram and sends a warm message to the customer. Once the human is done, one command brings the AI back online.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tools & Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["n8n", "OpenAI", "Supabase", "PostgreSQL", "Telegram", "pgvector"].map((tool) => (
                      <span key={tool} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-heading font-medium">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* === Zero-Touch Pipeline Modal === */}
      <Dialog open={nexacoreModalOpen} onOpenChange={setNexacoreModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 mx-3 sm:mx-auto w-[calc(100%-1.5rem)] sm:w-full">
          <div className="p-5 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-xl md:text-3xl font-bold text-heading">
                Zero-Touch Client Onboarding Pipeline
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                A case study - full automation system built with n8n that handles everything from signup to follow-up, completely hands-free for a client.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ZoomIn className="h-3 w-3" /> Click images to zoom
                </p>
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <ZoomableImage src={nexacoreOnboarding} alt="Client Onboarding Workflow" className="w-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <ZoomableImage src={nexacoreLogin} alt="Login Tracker Workflow" className="w-full object-cover" />
                </div>
              </div>
              <div className="space-y-5">
                <div className="space-y-3">
                  {[
                    { icon: Zap, label: "100% Automated", desc: "From signup to follow-up, zero manual work needed" },
                    { icon: Sparkles, label: "AI-Written Emails", desc: "Personalized welcome emails generated by Groq AI" },
                    { icon: TrendingUp, label: "Smart Follow-ups", desc: "Only follows up if client has not logged in after 3 days" },
                    { icon: DollarSign, label: "Instant Team Alerts", desc: "Telegram notifications keep the team informed in real time" },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-accent/40 border border-border/30">
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
                    When a new client signs up, the system catches their details, saves them to Airtable and Google Sheets, generates a personalized AI welcome email and sends it via Gmail, then alerts the team on Telegram. After 3 days, it checks if they have logged in - if not, it sends a follow-up automatically.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tools & Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["n8n", "Groq AI", "Airtable", "Google Sheets", "Gmail", "Telegram"].map((tool) => (
                      <span key={tool} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-heading font-medium">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* === Sora 2 Case Study Modal === */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 mx-3 sm:mx-auto w-[calc(100%-1.5rem)] sm:w-full">
          <div className="p-5 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-xl md:text-3xl font-bold text-heading">
                AI-Powered Video Creation Automation with Sora 2
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                A complete AI video generation workflow - from text prompt to finished video, fully automated.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ZoomIn className="h-3 w-3" /> Click image to zoom
                </p>
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <ZoomableImage src={sora2Workflow} alt="Sora 2 AI Video Automation Workflow" className="w-full object-cover" />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <iframe
                    src="https://www.youtube.com/embed/QowqBcNNi48"
                    title="AI Video Automation Demo - Baby Dragon"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center italic">See the baby dragon video made automatically! 🐉</p>
              </div>
              <div className="space-y-5">
                <div className="space-y-3">
                  {[
                    { icon: Zap, label: "100% Automated", desc: "Text to video in one go" },
                    { icon: DollarSign, label: "6x Cheaper", desc: "Smart tools save big money" },
                    { icon: Sparkles, label: "Endless Ideas", desc: "Fantasy, demos, stories fast" },
                    { icon: TrendingUp, label: "Scale Content", desc: "Create more without extra work" },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-accent/40 border border-border/30">
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
                    Replaced slow manual video work with easy AI automation. Turn ideas into pro-looking videos quickly using Sora 2 - perfect for creators and businesses looking to scale content without extra effort.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tools & Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["n8n", "Kie.ai", "Sora 2", "OpenAI / GPT"].map((tool) => (
                      <span key={tool} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-heading font-medium">{tool}</span>
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

export default ProjectsSection;
