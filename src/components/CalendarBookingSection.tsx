import { motion } from "framer-motion";
import { Calendar, Clock, Globe, Video } from "lucide-react";
import { useState } from "react";

const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/embed?height=550&wkst=1&ctz=Asia%2FManila&showPrint=0&src=amRpYWdiZWw4QGdtYWlsLmNvbQ&color=%23039be5";

export const CalendarBookingSection = () => {
  return (
    <section id="booking" className="py-20 px-4 bg-gradient-hero">
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
              Free Strategy Session
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Book Your Free{" "}
            <span className="text-gradient">30-Minute Strategy Call</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            This 30-minute discovery call will help uncover bottlenecks in your
            current workflow and determine if you're the right fit for custom
            funnels + automations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl border-2 border-primary/20 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-button p-6 text-center">
              <h3 className="text-xl font-bold text-primary-foreground flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                Select Date & Time
              </h3>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Duration</p>
                    <p className="text-sm text-muted-foreground">30 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl">
                  <Video className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Format</p>
                    <p className="text-sm text-muted-foreground">Video Call</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Timezone</p>
                    <p className="text-sm text-muted-foreground">Asia/Manila</p>
                  </div>
                </div>
              </div>

              {/* Google Calendar Embed */}
              <div className="w-full rounded-2xl overflow-hidden border border-border/50">
                <iframe
                  src={GOOGLE_CALENDAR_URL}
                  className="w-full"
                  style={{ border: 0, minHeight: 450 }}
                  height="550"
                  scrolling="no"
                  title="Google Calendar - Book a call"
                />
              </div>

              {/* What to Expect */}
              <div className="mt-8 p-6 bg-accent/20 rounded-2xl">
                <h4 className="font-semibold text-foreground mb-3">
                  What to expect in this call:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Quick audit of your current business processes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Identify automation opportunities & bottlenecks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Custom funnel strategy recommendations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    ROI projection for your specific needs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating "Book Free Call" Button */}
      <a
        href={GOOGLE_CALENDAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Calendar className="h-5 w-5" />
        Book Free Call
      </a>
    </section>
  );
};
