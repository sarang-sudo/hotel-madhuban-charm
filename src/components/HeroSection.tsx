import { motion } from "framer-motion";
import heroImg from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Authentic South Indian breakfast spread at Hotel Madhuban"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.55)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-cream/80 mb-4"
        >
          Since 1985 · Jalna, Maharashtra
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Authentic Taste.
          <br />
          <span className="italic font-normal">Timeless Hospitality.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10"
        >
          Serving Jalna for decades with pure vegetarian excellence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#specialties"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
          >
            View Menu
          </a>
          <a
            href="#rooms"
            className="border border-cream/40 text-cream px-8 py-3.5 rounded-lg font-body font-medium text-base hover:bg-cream/10 transition-colors"
          >
            Book a Room
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-cream/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
