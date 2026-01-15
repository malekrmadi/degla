import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VarietiesSection from "@/components/VarietiesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import MarketsSection from "@/components/MarketsSection";
import ImmersiveSection from "@/components/ImmersiveSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VarietiesSection />
      <WhyChooseSection />
      <QuoteFormSection />
      <MarketsSection />
      <ImmersiveSection />
      <Footer />
    </main>
  );
};

export default Index;
