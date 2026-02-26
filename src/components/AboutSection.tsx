import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8"
          >
            A Legacy of <span className="italic font-normal text-primary">Pure Vegetarian</span> Excellence
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed"
          >
            <p>
              For over three decades, Hotel Madhuban has been the heart of Jalna's culinary landscape. 
              What started as a humble eatery has grown into one of the city's most beloved vegetarian 
              establishments — a place where families gather, celebrations happen, and every meal tells a story.
            </p>
            <p>
              Recently renovated with modern comforts while preserving our traditional soul, we continue 
              to serve the same authentic South Indian flavors that made us a household name. From our 
              crispy dosas to our aromatic thalis, every dish is prepared with fresh ingredients, time-honored 
              recipes, and an unwavering commitment to quality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { number: "35+", label: "Years of Service" },
              { number: "100%", label: "Pure Vegetarian" },
              { number: "50+", label: "Menu Items" },
              { number: "10K+", label: "Happy Guests" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
