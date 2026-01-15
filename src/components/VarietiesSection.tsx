import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import dateDeglet from "@/assets/date-deglet.jpg";
import dateMedjool from "@/assets/date-medjool.jpg";
import dateAllig from "@/assets/date-allig.jpg";

const VarietiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const varieties = [
    {
      name: "Deglet Nour",
      description: "La « Reine des Dattes ». Texture fondante, goût miellé et délicat. Parfaite en dégustation ou en pâtisserie.",
      image: dateDeglet,
      origin: "Tozeur & Kébili",
    },
    {
      name: "Allig",
      description: "Chair ferme et sucrée, notes caramélisées. Idéale pour les amateurs de saveurs intenses.",
      image: dateAllig,
      origin: "Djérid",
    },
    {
      name: "Khouat Allig",
      description: "La sœur de l'Allig, plus fondante. Un équilibre parfait entre douceur et caractère.",
      image: dateMedjool,
      origin: "Nefzaoua",
    },
  ];

  return (
    <section id="varietes" className="py-24 lg:py-32 bg-cream relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            Notre Sélection
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-brown mb-6">
            Nos Variétés de Dattes
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Découvrez notre gamme de dattes tunisiennes, 
            chacune avec sa personnalité unique et ses arômes distinctifs.
          </p>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {varieties.map((variety, index) => (
            <motion.div
              key={variety.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-gold transition-all duration-500 border border-border/50">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-sand-light">
                  <img
                    src={variety.image}
                    alt={`Datte ${variety.name} tunisienne`}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Origin Badge */}
                  <div className="absolute top-4 right-4 bg-brown/90 text-cream text-xs font-sans tracking-wider px-3 py-1 rounded-full">
                    {variety.origin}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-brown mb-3 group-hover:text-gold transition-colors">
                    {variety.name}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {variety.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VarietiesSection;
