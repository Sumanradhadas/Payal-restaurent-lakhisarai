import { useState, useEffect, useRef } from "react";
import { Utensils, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHead from "@/components/PageHead";
import type { MenuItem } from "@shared/schema";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
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
            entry.target.classList.add("duration-500");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".menu-item-card").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [activeCategory]);

  const menuItems: MenuItem[] = [
    {
      id: "1",
      name: "Payal Special Thali",
      description: "Complete meal with dal, sabzi, rice, roti, raita and sweet",
      price: "₹300",
      category: "Thalis & Combos",
    },
    {
      id: "2",
      name: "Chole Bhature with Rasgulla",
      description: "Fluffy bhature with spiced chole and complimentary rasgulla",
      price: "₹130",
      category: "Starters",
    },
    {
      id: "3",
      name: "Mixed Chowmein (Half) + Veg Manchurian (4 pcs)",
      description: "Indo-Chinese combo perfect for sharing",
      price: "₹200",
      category: "Chinese",
    },
    {
      id: "4",
      name: "Paneer Chilli",
      description: "Crispy paneer tossed in spicy Indo-Chinese sauce",
      price: "₹150",
      category: "Chinese",
    },
    {
      id: "5",
      name: "Rajbhog (2 pcs)",
      description: "Premium saffron-flavored sweet with dry fruits",
      price: "₹80",
      category: "Desserts",
    },
    {
      id: "6",
      name: "Rasgulla (2 pcs)",
      description: "Soft, spongy cottage cheese balls in sugar syrup",
      price: "₹40",
      category: "Desserts",
    },
    {
      id: "7",
      name: "Rasmalai (2 pcs)",
      description: "Creamy cottage cheese patties in sweetened milk",
      price: "₹60",
      category: "Desserts",
    },
    {
      id: "8",
      name: "Masala Dosa",
      description: "Crispy rice crepe with spiced potato filling",
      price: "₹120",
      category: "South Indian",
    },
    {
      id: "9",
      name: "Idli Sambhar (3 pcs)",
      description: "Steamed rice cakes served with sambhar and chutney",
      price: "₹80",
      category: "South Indian",
    },
    {
      id: "10",
      name: "Vada Sambhar (2 pcs)",
      description: "Crispy lentil fritters with sambhar and chutney",
      price: "₹90",
      category: "South Indian",
    },
    {
      id: "11",
      name: "Dal Tadka",
      description: "Yellow lentils tempered with spices and ghee",
      price: "₹140",
      category: "Main Courses",
    },
    {
      id: "12",
      name: "Paneer Butter Masala",
      description: "Cottage cheese in rich tomato and cream gravy",
      price: "₹180",
      category: "Main Courses",
    },
    {
      id: "13",
      name: "Mix Veg Curry",
      description: "Seasonal vegetables cooked in aromatic spices",
      price: "₹130",
      category: "Main Courses",
    },
    {
      id: "14",
      name: "Jeera Rice",
      description: "Basmati rice tempered with cumin seeds",
      price: "₹100",
      category: "Main Courses",
    },
    {
      id: "15",
      name: "Butter Naan",
      description: "Soft leavened bread with butter",
      price: "₹40",
      category: "Breads",
    },
    {
      id: "16",
      name: "Garlic Naan",
      description: "Naan topped with fresh garlic and coriander",
      price: "₹50",
      category: "Breads",
    },
  ];

  const categories = [
    "All",
    "Thalis & Combos",
    "Starters",
    "Main Courses",
    "Chinese",
    "South Indian",
    "Breads",
    "Desserts",
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen py-12">
      <PageHead
        title="Menu — Payal Restaurant, Lakhisarai"
        description="Explore our vegetarian menu featuring North Indian thalis, South Indian dosas, Chinese favorites, and traditional sweets. Fresh homestyle cooking at pocket-friendly prices."
        path="/menu"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground" data-testid="heading-menu">
            Our Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our delicious selection of vegetarian North Indian, South Indian,
            and Chinese dishes
          </p>
        </div>

        <Card className="mb-8 border-2 border-secondary/30 bg-accent/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Menu Disclaimer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Menu items and prices shown here are compiled from public listings and
                  are for reference only. For the official menu and current prices please
                  contact the restaurant directly at{" "}
                  <a
                    href="tel:+916346233115"
                    className="text-primary hover:underline font-medium"
                    data-testid="link-disclaimer-phone"
                  >
                    +91 63462 33115
                  </a>
                  .
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
              data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="menu-item-card hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-menu-item-${index}`}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg h-40 mb-4 flex items-center justify-center">
                  <Utensils className="h-16 w-16 text-secondary/40" />
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                  <span className="text-lg font-bold text-secondary whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.description}
                </p>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No items found in this category</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to place an order? Call us or order online!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="default" asChild data-testid="button-call-to-order">
              <a href="tel:+916346233115">Call to Order</a>
            </Button>
            <Button variant="outline" asChild data-testid="button-order-zomato">
              <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">
                Order on Zomato
              </a>
            </Button>
            <Button variant="outline" asChild data-testid="button-order-swiggy">
              <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">
                Order on Swiggy
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
