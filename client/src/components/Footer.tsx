import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://webglowx.onrender.com/logo.png"
                alt="WebGlow Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <h3 className="font-display font-bold text-lg">
                Payal Restaurant
              </h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Serving classic vegetarian flavours of Lakhisarai with homely thalis,
              snacks and sweets at pocket-friendly prices.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover-elevate inline-block px-2 py-1 -ml-2 rounded"
                  data-testid="link-footer-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover-elevate inline-block px-2 py-1 -ml-2 rounded"
                  data-testid="link-footer-menu"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover-elevate inline-block px-2 py-1 -ml-2 rounded"
                  data-testid="link-footer-about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover-elevate inline-block px-2 py-1 -ml-2 rounded"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover-elevate inline-block px-2 py-1 -ml-2 rounded"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">
                  Nawada-Sikandara-Lakhisarai Rd, Near Sahid Dwar, Purani Bazar, Lakhisarai, Bihar 811311
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-secondary" />
                <a
                  href="tel:+916346233115"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover-elevate px-1 py-0.5 rounded"
                  data-testid="link-footer-phone"
                >
                  +91 63462 33115
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">
                  Mon-Sat: 7:00 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Order Online</h4>
            <div className="space-y-2">
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2 text-center"
                data-testid="link-footer-zomato"
              >
                Order on Zomato
              </a>
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2 text-center"
                data-testid="link-footer-swiggy"
              >
                Order on Swiggy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Payal Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover-elevate px-2 py-1 rounded"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/credits"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover-elevate px-2 py-1 rounded flex items-center gap-1"
              data-testid="link-footer-credits"
            >
              <span>Website by</span>
              <img
                src="https://webglowx.onrender.com/logo.png"
                alt="WebGlow"
                className="h-4 w-auto brightness-0 invert opacity-70"
              />
              <span className="font-semibold">WebGlow</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
