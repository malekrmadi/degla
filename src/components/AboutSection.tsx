import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import oasisImage from "@/assets/oasis-background.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { title: "Qualité", description: "Sélection rigoureuse de chaque datte" },
    { title: "Traçabilité", description: "De la palmeraie à votre table" },
    { title: "Naturel", description: "Sans additifs ni conservateurs" },
    { title: "Excellence", description: "Un savoir-faire ancestral" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-sand relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={oasisImage}
                alt="Palmeraie tunisienne traditionnelle"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-gold text-primary-foreground px-8 py-4 rounded-xl shadow-gold"
            >
              <span className="text-4xl font-serif font-bold">100%</span>
              <span className="block text-sm font-sans">Tunisien</span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
              Notre Histoire
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-brown mb-6 leading-tight">
              À propos de <span className="text-gradient-gold">NOUR</span>
            </h2>
            <p className="text-brown-light font-sans text-lg leading-relaxed mb-6">
              Née au cœur des palmeraies tunisiennes, NOUR perpétue une tradition 
              millénaire de culture des dattes. Notre engagement : vous offrir 
              des fruits d'exception, cueillis à la main et conditionnés avec le 
              plus grand soin.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Du soleil généreux du sud tunisien aux tables du monde entier, 
              chaque datte NOUR porte en elle l'essence d'un terroir unique et 
              d'un savoir-faire transmis de génération en génération.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 group-hover:scale-150 transition-transform" />
                    <div>
                      <h4 className="font-serif text-lg text-brown font-semibold">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-sans">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
