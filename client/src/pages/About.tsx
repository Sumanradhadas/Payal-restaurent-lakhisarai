import { useEffect, useRef } from "react";
import { MapPin, Clock, Heart, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageHead from "@/components/PageHead";

export default function About() {
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

  return (
    <div className="min-h-screen py-12">
      <PageHead
        title="About Us — Payal Restaurant, Lakhisarai"
        description="Learn about Payal Restaurant, a popular vegetarian casual dining spot in Lakhisarai near Sahid Dwar. Serving homely thalis and sweets since years."
        path="/about"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground" data-testid="heading-about">
            About Payal Restaurant
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serving Lakhisarai with love since years
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 fade-on-scroll">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Located near Sahid Dwar in Purani Bazar, <span className="font-semibold text-foreground">Payal Restaurant</span> is a popular
                  vegetarian-friendly casual dining spot in Lakhisarai offering North Indian,
                  South Indian and Chinese favourites.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We serve homely thalis, snacks and sweets at pocket-friendly prices —
                  perfect for family meals and quick takeaways. Our commitment is to provide
                  authentic, delicious vegetarian food that reminds you of home-cooked meals.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're craving a hearty North Indian thali, crispy South Indian dosa,
                  or flavorful Indo-Chinese dishes, Payal Restaurant has something special
                  waiting for you. We take pride in using fresh ingredients and traditional
                  recipes to deliver the best dining experience to our valued customers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 fade-on-scroll">
          <Card className="text-center hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">Made with Love</h3>
              <p className="text-muted-foreground">
                Every dish is prepared with care and authentic homestyle cooking
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">Family Friendly</h3>
              <p className="text-muted-foreground">
                Perfect for family gatherings and celebrations of all sizes
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate transition-all duration-300">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">Quality Food</h3>
              <p className="text-muted-foreground">
                Fresh ingredients and time-tested recipes for the best taste
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-on-scroll">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-6 text-foreground">
                Location & Hours
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      Nawada-Sikandara-Lakhisarai Rd<br />
                      Near Sahid Dwar / Purani Bazar<br />
                      Lakhisarai, Bihar 811311
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Opening Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Saturday: 7:00 AM - 10:00 PM</p>
                      <p className="text-sm">Sunday: Please call to confirm</p>
                      <p className="text-sm italic mt-2">
                        Hours may vary. Please call ahead to confirm: +91 63462 33115
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl fade-on-scroll">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="https://webglowx.onrender.com/logo.png"
              alt="WebGlow Logo"
              className="h-12 w-auto mx-auto mb-4"
            />
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 text-foreground">
              Website Created by WebGlow
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This website was designed and built by WebGlow — a professional web
              development service specializing in creating fast, SEO-friendly websites
              for restaurants and small businesses.
            </p>
            <p className="text-muted-foreground mb-8">
              Need a website like this for your business? We'd love to help!
            </p>
            <a
              href="mailto:webglow@zohomail.in"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover-elevate active-elevate-2 transition-all"
              data-testid="button-contact-webglow"
            >
              Contact WebGlow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
