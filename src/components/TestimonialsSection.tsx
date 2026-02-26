import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patil",
    rating: 5,
    text: "Best South Indian food in Jalna! The masala dosa here is unmatched. My family has been coming here for over 20 years.",
    date: "2 months ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Clean rooms, excellent food, and the staff is so welcoming. Perfect for a family stay. The veg thali is a must-try!",
    date: "1 month ago",
  },
  {
    name: "Amit Deshmukh",
    rating: 4,
    text: "Great value for money. The biryani on weekends is absolutely delicious. Parking is convenient too.",
    date: "3 weeks ago",
  },
  {
    name: "Sunita Kulkarni",
    rating: 5,
    text: "We had our anniversary dinner here. The ambience after renovation is beautiful. Highly recommended!",
    date: "1 week ago",
  },
  {
    name: "Vikram Joshi",
    rating: 4,
    text: "Authentic taste that reminds me of home-cooked food. The filter coffee is the best in town!",
    date: "4 days ago",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What Our <span className="italic font-normal text-primary">Guests</span> Say
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-xl p-8 shadow-card text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < testimonials[current].rating ? "text-gold fill-gold" : "text-border"}`}
                />
              ))}
            </div>
            <p className="font-body text-base md:text-lg text-foreground leading-relaxed mb-6 italic">
              "{testimonials[current].text}"
            </p>
            <p className="font-display text-lg font-semibold text-foreground">
              {testimonials[current].name}
            </p>
            <p className="font-body text-sm text-muted-foreground">{testimonials[current].date}</p>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
