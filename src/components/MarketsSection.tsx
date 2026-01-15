import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, Briefcase, Gift, Calendar } from "lucide-react";

const MarketsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const markets = [
    {
      icon: Building2,
      title: "Grossistes",
      description: "Partenariats durables pour la distribution à grande échelle.",
    },
    {
      icon: Globe,
      title: "Export",
      description: "Présence internationale, qualité tunisienne reconnue.",
    },
    {
      icon: Briefcase,
      title: "Entreprises",
      description: "Solutions sur mesure pour la restauration et l'industrie.",
    },
    {
      icon: Gift,
      title: "Cadeaux d'Entreprise",
      description: "Coffrets prestige pour vos relations d'affaires.",
    },
    {
      icon: Calendar,
      title: "Événementiel",
      description: "Mariages, séminaires, réceptions haut de gamme.",
    },
  ];

  return (
    <section id="marches" className="py-24 lg:py-32 bg-sand-light relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            Nos Marchés
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-brown mb-6">
            Utilisations & Marchés
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            NOUR s'adresse à tous les professionnels exigeants 
            à la recherche de dattes d'exception.
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {markets.map((market, index) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-background rounded-2xl p-6 h-full border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-500 text-center">
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-sand flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <market.icon className="w-7 h-7 text-brown group-hover:text-gold transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif text-brown mb-2 group-hover:text-gold transition-colors">
                  {market.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm">
                  {market.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
