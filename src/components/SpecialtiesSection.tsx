import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import masalaDosa from "@/assets/masala-dosa.jpg";
import idliVada from "@/assets/idli-vada.jpg";
import vegThali from "@/assets/veg-thali.jpg";
import vegBiryani from "@/assets/veg-biryani.jpg";

const specialties = [
  {
    title: "Masala Dosa",
    description: "Golden, crispy crepe filled with spiced potato masala, served with coconut chutney and sambar.",
    image: masalaDosa,
    tag: "Bestseller",
  },
  {
    title: "Idli & Medu Vada",
    description: "Fluffy steamed rice cakes and crispy lentil fritters — the perfect South Indian breakfast.",
    image: idliVada,
    tag: "Classic",
  },
  {
    title: "Veg Thali",
    description: "A complete meal with rice, rotis, dals, curries, raita, papad, and dessert.",
    image: vegThali,
    tag: "Popular",
  },
  {
    title: "Special Veg Biryani",
    description: "Fragrant basmati rice layered with seasonal vegetables, saffron, and aromatic spices.",
    image: vegBiryani,
    tag: "Weekends Only",
  },
];

const SpecialtiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="specialties" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Our Specialties
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Crafted with <span className="italic font-normal text-primary">Love & Tradition</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-body font-medium px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
