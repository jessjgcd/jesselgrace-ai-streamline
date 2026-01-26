import { Heart, Calendar, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Book Consultation CTA */}
      <div className="py-12 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book your free 30-minute consultation and discover how automation can save you time and boost your results.
          </p>
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-button rounded-2xl text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
          >
            <Calendar className="h-6 w-6" />
            Schedule on Google Calendar
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="py-8 px-4">
        <div className="container mx-auto">
          {/* Social icons row */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://facebook.com/jesselgracediagbel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/20 dark:bg-muted flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Facebook className="h-5 w-5 text-primary dark:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/jesselgracediagbel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/20 dark:bg-muted flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Linkedin className="h-5 w-5 text-primary dark:text-white" />
            </a>
            <a
              href="https://instagram.com/jesselgracediagbel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/20 dark:bg-muted flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Instagram className="h-5 w-5 text-primary dark:text-white" />
            </a>
            <a
              href="https://twitter.com/jesselgracediagbel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/20 dark:bg-muted flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Twitter className="h-5 w-5 text-primary dark:text-white" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Glogicraft Logo" className="h-8 w-8" />
              <span className="font-poppins text-sm text-muted-foreground">
                © 2026 Jessel Grace Diagbel
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span>using</span>
              <a
                href="https://lovable.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                Lovable.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
