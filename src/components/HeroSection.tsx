import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dates.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("devis");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dattes tunisiennes premium NOUR sur fond de désert"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-brown/40 to-brown/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/20 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-gold/15 blur-3xl animate-pulse-soft" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Brand Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-gold-light font-sans text-sm tracking-[0.4em] uppercase border border-gold-light/40 px-6 py-2 rounded-full">
              Depuis les palmeraies de Tunisie
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-cream mb-6 leading-tight"
          >
            <span className="block">NOUR</span>
            <span className="text-3xl md:text-4xl lg:text-5xl font-light text-gold-light">
              L'Excellence des Dattes
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-sand-light/90 font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Un savoir-faire ancestral, un terroir d'exception. 
            Découvrez des dattes tunisiennes d'une qualité premium, 
            récoltées avec passion et expertise.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToForm}
              className="group"
            >
              Demander un devis
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-sand-light/70"
        >
          <span className="text-xs font-sans tracking-widest uppercase">Découvrir</span>
          <div className="w-px h-10 bg-gradient-to-b from-sand-light/70 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
