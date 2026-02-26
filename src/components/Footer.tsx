import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-background mb-3">
              Hotel Madhuban
            </h3>
            <p className="font-body text-sm leading-relaxed text-background/60">
              Jalna's beloved pure vegetarian hotel & restaurant, serving authentic flavors since 1985.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Specialties", "Rooms", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-3">Contact</h4>
            <div className="space-y-3 font-body text-sm text-background/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Station Road, Jalna 431203
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@hotelmadhuban.com
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} Hotel Madhuban, Jalna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
