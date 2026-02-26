import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import masalaDosa from "@/assets/masala-dosa.jpg";
import idliVada from "@/assets/idli-vada.jpg";
import vegThali from "@/assets/veg-thali.jpg";
import vegBiryani from "@/assets/veg-biryani.jpg";
import heroFood from "@/assets/hero-food.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";

const images = [
  { src: masalaDosa, alt: "Masala Dosa" },
  { src: idliVada, alt: "Idli & Medu Vada" },
  { src: vegThali, alt: "Veg Thali" },
  { src: vegBiryani, alt: "Veg Biryani" },
  { src: heroFood, alt: "South Indian Breakfast Spread" },
  { src: hotelRoom, alt: "Hotel Room" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            A Glimpse of <span className="italic font-normal text-primary">Madhuban</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream hover:opacity-80"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
