
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border pb-20 sm:pb-0" style={{ backgroundColor: "#fdf4ff" }}>
      <div className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-6 space-y-2">
            <p className="text-lg font-semibold text-heading font-poppins">
              Let's automate your business together ✨
            </p>
            <a
              href="#booking"
              className="text-sm text-muted-foreground hover:text-heading transition-colors font-poppins"
            >
              Ready to save hours? Book a free call ↓
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Glogicraft Logo" className="h-8 w-8" />
              <span className="font-poppins text-sm text-muted-foreground">
                © 2025 Jessel Grace Diagbel
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

            <span className="text-sm text-muted-foreground">
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
