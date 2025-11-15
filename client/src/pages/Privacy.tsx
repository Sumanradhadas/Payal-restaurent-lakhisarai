import { Card, CardContent } from "@/components/ui/card";
import PageHead from "@/components/PageHead";

export default function Privacy() {
  return (
    <div className="min-h-screen py-12">
      <PageHead
        title="Privacy Policy — Payal Restaurant"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information when you use our website."
        path="/privacy"
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground" data-testid="heading-privacy">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you use our contact form, we collect only the information you
                  voluntarily provide: your name, email address, phone number (optional),
                  and message content. This information is used solely to respond to your
                  inquiry and is not shared with third parties.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The information you provide through our contact form is used to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Respond to your inquiries and questions</li>
                  <li>Process reservation requests</li>
                  <li>Improve our customer service</li>
                  <li>Send follow-up communications if necessary</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Cookies and Analytics
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website may use basic analytics to understand how visitors use our
                  site. We do not track personally identifiable information through
                  analytics. You can disable cookies in your browser settings if you
                  prefer not to be tracked.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal
                  information. However, please note that no method of transmission over
                  the internet is 100% secure. While we strive to protect your data, we
                  cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website contains links to third-party services like Zomato and
                  Swiggy for online ordering. We are not responsible for the privacy
                  practices of these external sites. We encourage you to read their
                  privacy policies when you visit their websites.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of any inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Contact Form Processing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Contact form submissions are processed securely. Your information is
                  stored only as long as necessary to respond to your inquiry and is
                  deleted afterward unless you request otherwise.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. Any changes will
                  be posted on this page with an updated revision date. We encourage you
                  to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy or how we handle
                  your data, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-foreground font-semibold">Payal Restaurant</p>
                  <p className="text-muted-foreground">
                    Nawada-Sikandara-Lakhisarai Rd, Near Sahid Dwar<br />
                    Purani Bazar, Lakhisarai, Bihar 811311
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Phone:{" "}
                    <a
                      href="tel:+916346233115"
                      className="text-primary hover:underline"
                      data-testid="link-privacy-phone"
                    >
                      +91 63462 33115
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
