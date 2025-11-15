import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenWelcomePopup");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasSeenPopup) {
      setTimeout(
        () => {
          setIsVisible(true);
        },
        prefersReducedMotion ? 0 : 1500
      );
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenWelcomePopup", "true");
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleClose}
      data-testid="overlay-welcome-popup"
    >
      <div
        className="bg-card border border-card-border rounded-xl max-w-md w-full p-8 shadow-2xl relative animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-md hover-elevate active-elevate-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
          data-testid="button-close-popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://webglowx.onrender.com/logo.png"
            alt="WebGlow Logo"
            className="h-10 w-auto"
          />
          <h2
            id="popup-title"
            className="font-display font-bold text-2xl text-foreground"
          >
            Like this website?
          </h2>
        </div>

        <h3 className="text-lg font-semibold mb-3 text-foreground">
          Need one for your restaurant or any niche business?
        </h3>

        <p id="popup-description" className="text-muted-foreground mb-6 leading-relaxed">
          We design fast, SEO-friendly websites for restaurants and any niche business. 
          Whether you need a restaurant site, portfolio, e-commerce store, or any custom website, 
          contact WebGlow for a professional solution.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            className="flex-1"
            asChild
            data-testid="button-contact-webglow"
          >
            <a href="mailto:webglow@zohomail.in">Contact WebGlow</a>
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleClose}
            data-testid="button-explore-site"
          >
            Close & Explore Site
          </Button>
        </div>

        <p className="text-xs text-center mt-6 text-muted-foreground">
          Built with ❤️ by{" "}
          <a
            href="https://webglowx.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            WebGlow
          </a>
        </p>
      </div>
    </div>
  );
}
