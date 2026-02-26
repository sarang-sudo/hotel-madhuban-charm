import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20make%20a%20booking%20at%20Hotel%20Madhuban."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[hsl(142,70%,45%)] text-background rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform duration-200"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
