
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Footer content */}
      <div className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
