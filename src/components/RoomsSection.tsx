import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Wifi, Car, Wind, Bath, ChevronLeft, ChevronRight } from "lucide-react";
import hotelRoom from "@/assets/hotel-room.jpg";

const rooms = [
  {
    name: "Standard Non-AC Room",
    price: "₹800",
    period: "per night",
    features: ["Comfortable Double Bed", "Attached Bathroom", "Free WiFi", "Room Service"],
    type: "non-ac",
  },
  {
    name: "Deluxe AC Room",
    price: "₹1,500",
    period: "per night",
    features: ["Queen Size Bed", "Air Conditioning", "LCD TV", "Free WiFi", "Complimentary Breakfast"],
    type: "ac",
    popular: true,
  },
  {
    name: "Family Suite",
    price: "₹2,200",
    period: "per night",
    features: ["Two Double Beds", "Air Conditioning", "Living Area", "Free WiFi", "Complimentary Breakfast", "Free Parking"],
    type: "suite",
  },
];

const RoomsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Stay With Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Clean & <span className="italic font-normal text-primary">Comfortable</span> Rooms
          </h2>
        </motion.div>

        {/* Image slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16 rounded-xl overflow-hidden max-w-4xl mx-auto aspect-video"
        >
          <img
            src={hotelRoom}
            alt="Clean and comfortable hotel room at Hotel Madhuban"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          <div className="absolute bottom-6 left-6 flex gap-3">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-card transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(2, currentSlide + 1))}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-card transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Room cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className={`relative rounded-xl p-6 border transition-shadow duration-300 ${
                room.popular
                  ? "bg-primary text-primary-foreground border-primary shadow-elevated"
                  : "bg-card text-card-foreground border-border shadow-soft hover:shadow-card"
              }`}
            >
              {room.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-body font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold mb-2">{room.name}</h3>
              <div className="mb-4">
                <span className="font-display text-3xl font-bold">{room.price}</span>
                <span className={`font-body text-sm ml-1 ${room.popular ? "opacity-80" : "text-muted-foreground"}`}>
                  {room.period}
                </span>
              </div>
              <ul className="space-y-2 mb-6">
                {room.features.map((f) => (
                  <li key={f} className={`font-body text-sm flex items-center gap-2 ${room.popular ? "opacity-90" : "text-muted-foreground"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center font-body font-medium text-sm py-3 rounded-lg transition-colors ${
                  room.popular
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
