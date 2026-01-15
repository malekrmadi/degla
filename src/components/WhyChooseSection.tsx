import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, MapPin, Star, Package, Truck } from "lucide-react";

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Star,
      title: "Dattes Sélectionnées",
      description: "Chaque datte est triée à la main pour garantir une qualité irréprochable.",
    },
    {
      icon: MapPin,
      title: "Origine Tunisienne",
      description: "Cultivées dans les oasis du sud tunisien, berceau des meilleures dattes au monde.",
    },
    {
      icon: Award,
      title: "Qualité Premium",
      description: "Respect des normes internationales les plus strictes pour un produit d'excellence.",
    },
    {
      icon: Package,
      title: "Conditionnement Soigné",
      description: "Emballages élégants et protecteurs pour préserver fraîcheur et saveurs.",
    },
    {
      icon: Truck,
      title: "Livraison Maîtrisée",
      description: "Expédition rapide et sécurisée vers toutes destinations.",
    },
  ];

  return (
    <section id="avantages" className="py-24 lg:py-32 bg-brown relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-palm/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-light font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            Nos Engagements
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-cream mb-6">
            Pourquoi Choisir <span className="text-gold-light">NOUR</span>
          </h2>
          <p className="text-sand-dark font-sans max-w-2xl mx-auto">
            Une exigence de qualité à chaque étape, de la récolte à la livraison.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-brown-light/30 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 h-full hover:bg-brown-light/50 hover:border-gold/30 transition-all duration-500 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300">
                  <advantage.icon className="w-8 h-8 text-gold-light" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif text-cream mb-3">
                  {advantage.title}
                </h3>
                <p className="text-sand-dark/80 font-sans text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
