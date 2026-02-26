import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Contact <span className="italic font-normal text-primary">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-medium py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Inquiry
            </button>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Address", value: "Station Road, Near Bus Stand, Jalna 431203, Maharashtra" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "info@hotelmadhuban.com" },
                { icon: Clock, label: "Restaurant Hours", value: "6:30 AM – 10:30 PM (All days)" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">{item.label}</p>
                    <p className="font-body text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60064.47072748282!2d75.84!3d19.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9e1e10!2sJalna%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Madhuban Location - Jalna"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
