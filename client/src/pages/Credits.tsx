import { Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHead from "@/components/PageHead";

export default function Credits() {
  return (
    <div className="min-h-screen py-12">
      <PageHead
        title="Website Credits — Built by WebGlow"
        description="This website was professionally designed and built by WebGlow. Learn about our web development services for restaurants and small businesses."
        path="/credits"
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground" data-testid="heading-credits">
            Website Credits
          </h1>
          <p className="text-lg text-muted-foreground">
            Professionally crafted by WebGlow
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-12 text-center">
            <img
              src="https://webglowx.onrender.com/logo.png"
              alt="WebGlow Logo"
              className="h-16 w-auto mx-auto mb-6"
            />
            <h2 className="font-display font-bold text-3xl mb-4 text-foreground">
              WebGlow
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              This website was designed and built by{" "}
              <span className="font-semibold text-foreground">WebGlow</span> — a
              professional web development service specializing in creating fast,
              SEO-friendly websites for restaurants and small businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild data-testid="button-email-webglow">
                <a href="mailto:webglow@zohomail.in">
                  <Mail className="mr-2 h-5 w-5" />
                  Email: webglow@zohomail.in
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-visit-webglow">
                <a
                  href="https://webglowx.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit WebGlow
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-xl mb-4 text-foreground">
                What We Offer
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Custom website design tailored to your brand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>SEO-optimized for better search engine visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Mobile-responsive design for all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Fast loading speeds and modern animations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Contact forms and online ordering integration</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-xl mb-4 text-foreground">
                Why Choose WebGlow?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Professional designs that convert visitors to customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Affordable pricing for small businesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Quick turnaround time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Ongoing support and maintenance available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Experience in restaurant and hospitality websites</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
              Need a Website Like This?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're running a restaurant, café, retail store, or any small
              business, we can create a stunning website that helps you grow. Get in
              touch with us today for a free consultation!
            </p>
            <Button size="lg" variant="default" asChild data-testid="button-get-started">
              <a href="mailto:webglow@zohomail.in">
                <Mail className="mr-2 h-5 w-5" />
                Get Started Today
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
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
    </div>
  );
}
