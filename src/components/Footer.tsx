import logo from "@/assets/logo.png";
import logoMobile from "@/assets/logo-mobile.webp";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export const Footer = () => {
  return (
    <footer className="border-t border-border pb-20 sm:pb-0" style={{ backgroundColor: "#fdf4ff" }}>
      <div className="py-4 px-4">
        <div className="container mx-auto">

          {/* ✅ Single compact row — stacks tightly on mobile */}
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">

            {/* Logo + copyright + tagline */}
            <div className="flex items-center gap-2">
              <ResponsiveImage
                src={logo}
                mobileSrc={logoMobile}
                alt="Glogicraft Logo"
                className="h-6 w-6"
                width={24}
                height={24}
              />
              <div className="text-center md:text-left">
                <span className="font-poppins text-xs text-muted-foreground">
                  © 2025 Glogicraft
                </span>
                <span className="block text-[10px] md:inline md:ml-2 font-poppins text-muted-foreground">
                  Let’s automate your business together
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Privacy Policy">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Terms of Service">
                Terms of Service
              </a>
            </div>

            {/* Rights */}
            <span className="text-xs text-muted-foreground">
              All rights reserved.
            </span>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;