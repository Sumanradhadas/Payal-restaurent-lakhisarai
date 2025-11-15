import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Phone, MapPin, Clock, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WelcomePopup from "@/components/WelcomePopup";
import PageHead from "@/components/PageHead";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4");
            entry.target.classList.add("duration-700");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const popularDishes = [
    {
      name: "Payal Special Thali",
      description: "Complete meal with dal, sabzi, rice, roti, and sweet",
      price: "₹300",
    },
    {
      name: "Chole Bhature with Rasgulla",
      description: "Fluffy bhature with spiced chole and sweet rasgulla",
      price: "₹130",
    },
    {
      name: "Mixed Chowmein & Manchurian",
      description: "Half plate chowmein with 4 pcs veg manchurian",
      price: "₹200",
    },
    {
      name: "Paneer Chilli",
      description: "Indo-Chinese favorite with crispy paneer",
      price: "₹150",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHead
        title="Payal Restaurant, Lakhisarai — Vegetarian Thalis & Local Favourites"
        description="Payal Restaurant in Purani Bazar, Lakhisarai — homely vegetarian thalis, North & South Indian favourites and sweets. Order via Zomato/Swiggy or call +91 63462 33115."
        path="/"
      />
      <WelcomePopup />

      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70 z-10"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.9) 0%, hsl(var(--primary) / 0.75) 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0aDJ2MmgtMnYtMnptMCA0aDJ2MmgtMnYtMnptMCA0aDJ2MmgtMnYtMnptMCA0aDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 z-0" />

        <div className="container mx-auto px-4 z-20 text-center">
          <h1
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
            data-testid="heading-hero"
          >
            Payal Restaurant
          </h1>
          <p
            className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
            data-testid="text-hero-tagline"
          >
            Classic vegetarian flavours of Lakhisarai, served fresh daily
          </p>
          <p className="text-base md:text-lg text-white/90 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Order fresh, eat local — Payal's homely thalis available daily. Call to reserve!
          </p>

          <div className="flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              variant="default"
              className="bg-secondary text-secondary-foreground border-secondary-border hover:bg-secondary"
              asChild
              data-testid="button-hero-call"
            >
              <a href="tel:+916346233115">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              asChild
              data-testid="button-hero-zomato"
            >
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on Zomato
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              asChild
              data-testid="button-hero-swiggy"
            >
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on Swiggy
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              asChild
              data-testid="button-hero-menu"
            >
              <Link href="/menu">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 fade-on-scroll">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground">
            About Payal Restaurant
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Located near Sahid Dwar in Purani Bazar, Payal Restaurant is a popular
            vegetarian-friendly casual dining spot in Lakhisarai offering North Indian,
            South Indian and Chinese favourites. We serve homely thalis, snacks and sweets
            at pocket-friendly prices — perfect for family meals and quick takeaways.
          </p>
        </div>
      </section>

      <section className="bg-muted/30 py-20 fade-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
            Popular Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-dish-${index}`}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg h-40 mb-4 flex items-center justify-center">
                    <Utensils className="h-16 w-16 text-secondary/40" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {dish.description}
                  </p>
                  <p className="text-lg font-bold text-secondary">{dish.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" variant="default" asChild data-testid="button-view-full-menu">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 fade-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 text-foreground">
              Visit Us
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    Nawada-Sikandara-Lakhisarai Rd, Near Sahid Dwar / Purani Bazar,
                    Lakhisarai, Bihar 811311
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                  <a
                    href="tel:+916346233115"
                    className="text-muted-foreground hover:text-primary transition-colors hover-elevate px-1 py-0.5 -ml-1 rounded inline-block"
                    data-testid="link-phone"
                  >
                    +91 63462 33115
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 7:00 AM - 10:00 PM</p>
                  <p className="text-muted-foreground text-sm mt-1">Sunday: Please call to confirm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.1234567890123!2d86.1681234!3d25.1681234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzA1LjIiTiA4NsKwMTAnMDUuMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Payal Restaurant Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
