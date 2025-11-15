import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import PageHead from "@/components/PageHead";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-12">
      <PageHead
        title="Contact Us — Payal Restaurant, Lakhisarai"
        description="Get in touch with Payal Restaurant. Send us a message, make a reservation, or find our location near Sahid Dwar in Purani Bazar, Lakhisarai."
        path="/contact"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground" data-testid="heading-contact">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to make a reservation? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="font-display font-bold text-2xl mb-6 text-foreground">
                  Get in Touch
                </h2>

                <Form {...form}>
                  <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Name <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your full name"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Email <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your.email@example.com"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Message <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell us how we can help you..."
                              rows={5}
                              className="resize-none"
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="font-semibold text-xl mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+916346233115"
                    className="flex items-center gap-3 hover-elevate px-3 py-2 -ml-3 rounded transition-colors"
                    data-testid="link-quick-phone"
                  >
                    <div className="bg-secondary/20 rounded-lg p-2">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Call us now</p>
                      <p className="font-semibold">+91 63462 33115</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@payalrestaurant.com"
                    className="flex items-center gap-3 hover-elevate px-3 py-2 -ml-3 rounded transition-colors"
                    data-testid="link-quick-email"
                  >
                    <div className="bg-secondary/20 rounded-lg p-2">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Email us</p>
                      <p className="font-semibold">info@payalrestaurant.com</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.916560581634!2d86.0956863!3d25.1722951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2233291c47b09%3A0xe16363f7d1965f4!2sPayal%20Restaurant!5e0!3m2!1sen!2sin!4v1762882826761!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Payal Restaurant Location"
              ></iframe>
            </div>

            <Card>
              <CardContent className="p-8 space-y-6">
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
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
