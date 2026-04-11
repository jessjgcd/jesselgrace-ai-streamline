import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "My services are for business owners, agencies, and teams who want to save time, reduce manual work, and scale with AI-powered automation and high-converting funnels.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most projects take 2–4 weeks depending on scope. Simple automations can be delivered in under a week, while full funnel + automation builds take 3–4 weeks.",
  },
  {
    question: "What tools do you use?",
    answer:
      "I primarily work with n8n, Make.com, GoHighLevel, OpenAI (GPT-4), Zapier, and other best-in-class tools — always choosing the right stack for your specific needs.",
  },
  {
    question: "Do I own the automations?",
    answer:
      "Yes, 100%. Everything I build is yours. You'll receive full access, documentation, and training so you can manage and scale independently.",
  },
  {
    question: "What's included in the 30-day support?",
    answer:
      "After launch, I provide 30 days of hands-on support including bug fixes, performance tuning, minor adjustments, and priority Slack/email access for any questions.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "Projects typically require 50% upfront and 50% on completion. For larger engagements, milestone-based payment plans are available.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">FAQ</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-background"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
