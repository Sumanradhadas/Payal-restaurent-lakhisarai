import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHead from "@/components/PageHead";
import type { GalleryImage } from "@shared/schema";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
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
            entry.target.classList.add("animate-in", "fade-in", "zoom-in-95");
            entry.target.classList.add("duration-500");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".gallery-item").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [activeFilter]);

  const galleryImages: GalleryImage[] = [
    {
      id: "1",
      src: "/images/Restaurant_exterior_building_032993bb.webp",
      alt: "Payal Restaurant exterior — Nawada-Sikandara-Lakhisarai Rd",
      category: "Exterior",
    },
    {
      id: "2",
      src: "/images/Restaurant_interior_dining_area_6d2a38c8.webp",
      alt: "Payal Restaurant interior dining area with comfortable seating",
      category: "Interior",
    },
    {
      id: "3",
      src: "/images/Vegetarian_thali_plate_a66e0407.webp",
      alt: "Payal Special Thali — complete vegetarian meal with dal, sabzi, rice, and roti",
      category: "Dishes",
    },
    {
      id: "4",
      src: "/images/Popular_Indian_dishes_0f6ab7c9.webp",
      alt: "Popular North Indian dishes — Paneer, Samosas, Dosa, Manchurian",
      category: "Dishes",
    },
    {
      id: "5",
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23fef3c7' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%23a16207'%3EPaneer Chilli%3C/text%3E%3C/svg%3E",
      alt: "Paneer Chilli — crispy paneer in Indo-Chinese spicy sauce",
      category: "Dishes",
    },
    {
      id: "6",
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23fef3c7' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%23a16207'%3ESweets Counter%3C/text%3E%3C/svg%3E",
      alt: "Payal Restaurant sweets counter displaying Rajbhog, Rasgulla, and Rasmalai",
      category: "Sweets",
    },
    {
      id: "7",
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23fef3c7' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%23a16207'%3ERasgulla%3C/text%3E%3C/svg%3E",
      alt: "Fresh Rasgulla — soft cottage cheese balls in sugar syrup",
      category: "Sweets",
    },
    {
      id: "8",
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23f0f0f0' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%239ca3af'%3EMain Hall%3C/text%3E%3C/svg%3E",
      alt: "Main dining hall at Payal Restaurant",
      category: "Interior",
    },
    {
      id: "9",
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23fef3c7' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%23a16207'%3EMasala Dosa%3C/text%3E%3C/svg%3E",
      alt: "Crispy Masala Dosa with sambhar and chutney",
      category: "Dishes",
    },
    {
      id: "10",
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23fef3c7' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%23a16207'%3ERajbhog%3C/text%3E%3C/svg%3E",
      alt: "Rajbhog — premium saffron sweet with dry fruits",
      category: "Sweets",
    },
    {
      id: "11",
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23f0f0f0' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%239ca3af'%3EFront View%3C/text%3E%3C/svg%3E",
      alt: "Payal Restaurant front entrance near Sahid Dwar",
      category: "Exterior",
    },
    {
      id: "12",
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23fef3c7' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%23a16207'%3EChowmein%3C/text%3E%3C/svg%3E",
      alt: "Mixed Chowmein with vegetables",
      category: "Dishes",
    },
  ];

  const categories = ["All", "Exterior", "Interior", "Dishes", "Sweets"];

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen py-12">
      <PageHead
        title="Gallery — Payal Restaurant, Lakhisarai"
        description="View photos of our restaurant, signature dishes, and sweets. Browse our collection of exterior, interior, and food images."
        path="/gallery"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground" data-testid="heading-gallery">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our restaurant, dishes, and sweets
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="rounded-full"
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item aspect-square rounded-xl overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all duration-300 border border-border bg-card"
              onClick={() => setSelectedImage(image)}
              data-testid={`image-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No images found in this category</p>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            data-testid="lightbox-overlay"
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
              data-testid="button-close-lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {currentIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                aria-label="Previous image"
                data-testid="button-previous-image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next image"
                data-testid="button-next-image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            <div
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 px-4">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
