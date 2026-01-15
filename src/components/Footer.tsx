import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brown text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-gold-light mb-4"
            >
              NOUR
            </motion.h3>
            <p className="text-sand-dark text-sm font-sans leading-relaxed mb-6">
              Dattes tunisiennes de qualité premium. 
              L'excellence du terroir tunisien, 
              du palmier à votre table.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full border border-sand-dark/30 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all text-sand-dark hover:text-gold-light text-xs font-sans"
                >
                  {link.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-serif text-cream mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "À propos", id: "about" },
                { label: "Nos variétés", id: "varietes" },
                { label: "Nos avantages", id: "avantages" },
                { label: "Nos marchés", id: "marches" },
                { label: "Demander un devis", id: "devis" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sand-dark font-sans text-sm hover:text-gold-light transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif text-cream mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5" />
                <span className="text-sand-dark font-sans text-sm">
                  contact@nour-dattes.tn
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5" />
                <span className="text-sand-dark font-sans text-sm">
                  +216 XX XXX XXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <span className="text-sand-dark font-sans text-sm">
                  Tunisie - Région de Tozeur
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brown-light/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sand-dark/70 font-sans text-xs">
              © {currentYear} NOUR. Tous droits réservés.
            </p>
            <p className="text-gold/80 font-sans text-xs tracking-wider">
              Dattes Tunisiennes — Qualité Premium
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
