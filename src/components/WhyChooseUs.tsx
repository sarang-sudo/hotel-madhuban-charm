import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Leaf, Users, IndianRupee, Car } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Prime City Location", desc: "Located in the heart of Jalna, easily accessible from all major landmarks." },
  { icon: Leaf, title: "Pure Vegetarian Kitchen", desc: "100% vegetarian menu crafted with fresh, locally sourced ingredients." },
  { icon: Users, title: "Family Friendly", desc: "Warm, welcoming atmosphere perfect for families and celebrations." },
  { icon: IndianRupee, title: "Budget Friendly", desc: "Premium quality food and rooms at honest, affordable prices." },
  { icon: Car, title: "Parking Available", desc: "Spacious free parking for guests — hassle-free visits every time." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Why Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Why Guests <span className="italic font-normal text-primary">Love</span> Madhuban
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
