import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import floatingDatesImage from "@/assets/floating-dates.jpg";

const ImmersiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={floatingDatesImage}
          alt="Dattes NOUR en lévitation artistique"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown/80 via-brown/50 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-gold/60 animate-float" />
      <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-gold-light/50 animate-float-delayed" />
      <div className="absolute bottom-1/3 left-1/5 w-5 h-5 rounded-full bg-gold/40 animate-float-slow" />

      {/* Content */}
      <div className="relative h-full flex items-center" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <span className="text-gold-light font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
              L'Excellence Tunisienne
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif text-cream mb-6 leading-tight">
              Un Trésor
              <span className="block text-gold-light">du Désert</span>
            </h2>
            <p className="text-sand-light/90 font-sans text-lg leading-relaxed">
              Là où le soleil embrasse les dunes, 
              où le vent chante dans les palmeraies, 
              naissent les dattes NOUR. 
              Un fruit précieux, témoin d'une terre d'exception.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default ImmersiveSection;
