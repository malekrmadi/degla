import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const QuoteFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    clientType: "",
    dateType: "",
    quantity: "",
    deliveryLocation: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée avec succès ! Nous vous contacterons sous 24h.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      clientType: "",
      dateType: "",
      quantity: "",
      deliveryLocation: "",
      message: "",
    });
  };

  const inputClasses = "w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all";
  const labelClasses = "block text-sm font-sans font-medium text-brown mb-2";

  return (
    <section id="devis" className="py-24 lg:py-32 bg-gradient-desert relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-brown mb-6">
              Demandez Votre Devis
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Remplissez ce formulaire et recevez une proposition personnalisée 
              sous 24 heures.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-background rounded-3xl p-8 lg:p-12 shadow-card border border-border/50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className={labelClasses}>Prénom *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Votre prénom"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className={labelClasses}>Nom *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClasses}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="votre@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className={labelClasses}>Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="+216 XX XXX XXX"
                />
              </div>

              {/* Client Type */}
              <div>
                <label className={labelClasses}>Type de client *</label>
                <select
                  name="clientType"
                  value={formData.clientType}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">Sélectionnez</option>
                  <option value="professionnel">Professionnel</option>
                  <option value="particulier">Particulier</option>
                </select>
              </div>

              {/* Date Type */}
              <div>
                <label className={labelClasses}>Type de datte *</label>
                <select
                  name="dateType"
                  value={formData.dateType}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">Sélectionnez</option>
                  <option value="deglet-nour">Deglet Nour</option>
                  <option value="allig">Allig</option>
                  <option value="khouat-allig">Khouat Allig</option>
                  <option value="mixte">Assortiment Mixte</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className={labelClasses}>Quantité (kg) *</label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">Sélectionnez</option>
                  <option value="1-10">1 - 10 kg</option>
                  <option value="10-50">10 - 50 kg</option>
                  <option value="50-100">50 - 100 kg</option>
                  <option value="100-500">100 - 500 kg</option>
                  <option value="500+">Plus de 500 kg</option>
                </select>
              </div>

              {/* Delivery Location */}
              <div>
                <label className={labelClasses}>Lieu de livraison *</label>
                <select
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">Sélectionnez</option>
                  <option value="tunisie">Tunisie</option>
                  <option value="europe">Europe</option>
                  <option value="moyen-orient">Moyen-Orient</option>
                  <option value="amerique-nord">Amérique du Nord</option>
                  <option value="asie">Asie</option>
                  <option value="afrique">Afrique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className={labelClasses}>Message / Remarque (optionnel)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClasses}
                  placeholder="Précisez vos besoins spécifiques..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button type="submit" variant="gold" size="xl">
                Recevoir mon devis
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
