import { motion } from "framer-motion";
import { Calendar, Clock, Globe, Video } from "lucide-react";

const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3P0hCGlXPor4k92B39vKIQF-z9Aku27W-0W4H6D1cQ_kU0g6KKF0MFtDP9LbMKrJN_9PP-TPci?gv=true";

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
            <div className="bg-gradient-button p-5 text-center">
              <h3 className="text-lg md:text-xl font-bold text-primary-foreground flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                Select Date & Time
              </h3>
            </div>

            <div className="p-4 md:p-8">
              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 md:p-4 bg-secondary/30 rounded-xl">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Duration</p>
                    <p className="text-xs text-muted-foreground">30 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 md:p-4 bg-secondary/30 rounded-xl">
                  <Video className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Format</p>
                    <p className="text-xs text-muted-foreground">Video Call</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 md:p-4 bg-secondary/30 rounded-xl">
                  <Globe className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Timezone</p>
                    <p className="text-xs text-muted-foreground">Asia/Manila</p>
                  </div>
                </div>
              </div>

              {/* Calendar iframe */}
              <div className="w-full rounded-2xl overflow-hidden border border-border/50">
                {/* Mobile: button only */}
                <div className="block sm:hidden">
                  <div className="p-6 text-center space-y-4 bg-secondary/20">
                    <Calendar className="h-10 w-10 text-primary mx-auto" />
                    <p className="font-semibold text-foreground">
                      Book your free 30-minute call
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tap below to open the calendar and pick a time that works for you.
                    </p>
                    <a
                      href={GOOGLE_CALENDAR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-button rounded-full text-primary-foreground font-semibold shadow-md hover:scale-105 transition-all"
                    >
                      <Calendar className="h-4 w-4" />
                      Open Calendar to Book
                    </a>
                  </div>
                </div>

                {/* Desktop: iframe */}
                <div className="hidden sm:block">
                  <iframe
                    src={GOOGLE_CALENDAR_URL}
                    width="100%"
                    height="600"
                    style={{ border: 0, display: "block" }}
                    title="Google Calendar - Book a call"
                  />
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-6 p-4 md:p-6 bg-accent/20 rounded-2xl">
                <h4 className="font-semibold text-foreground mb-3 text-sm md:text-base">
                  What to expect in this call:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Quick audit of your current business processes",
                    "Identify automation opportunities & bottlenecks",
                    "Custom funnel strategy recommendations",
                    "ROI projection for your specific needs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-primary shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Book button */}
      <a
        href={GOOGLE_CALENDAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:right-6 z-50 inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-gradient-button text-primary-foreground font-semibold rounded-full shadow-lg hover:scale-105 transition-all text-sm"
        style={{
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(236, 72, 153, 0.3)",
          animation: "ctaGlow 2.5s ease-in-out infinite",
        }}
      >
        <Calendar className="h-4 w-4" />
        Book Free Call
      </a>
    </section>
  );
};

export default CalendarBookingSection;
