import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Shield, CheckCircle, Globe } from "lucide-react";
import { useRef, useState } from "react";

// Partner companies with multiple logo source fallbacks
const partners = [
  { name: "Emirates Logistics", domain: "emirateslogistics.com" },
  { name: "DP World", domain: "dpworld.com" },
  { name: "Al Futtaim", domain: "alfuttaim.com" },
  { name: "Majid Al Futtaim", domain: "majidalfuttaim.com" },
  { name: "Aramex", domain: "aramex.com" },
  { name: "DEWA", domain: "dewa.gov.ae" },
  { name: "Emaar", domain: "emaar.com" },
  { name: "Etisalat", domain: "etisalat.ae" },
];

// Component to handle individual partner logo with fallback
const PartnerLogo = ({ partner, size = "medium" }: { partner: typeof partners[0]; size?: "medium" | "large" }) => {
  const [imageError, setImageError] = useState(false);
  const [currentSource, setCurrentSource] = useState(0);
  
  const logoSources = [
    `https://logo.clearbit.com/${partner.domain}`,
    `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=256`,
    `https://icon.horse/icon/${partner.domain}`,
  ];

  const handleImageError = () => {
    if (currentSource < logoSources.length - 1) {
      setCurrentSource(currentSource + 1);
    } else {
      setImageError(true);
    }
  };

  const sizeClasses = size === "large" ? "w-20 h-20" : "w-16 h-16";
  const initialSize = size === "large" ? "text-3xl" : "text-2xl";

  if (imageError) {
    return (
      <div className={`${sizeClasses} bg-accent/10 rounded-full flex items-center justify-center`}>
        <span className={`${initialSize} font-bold text-accent`}>
          {partner.name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses} flex items-center justify-center`}>
      <img
        src={logoSources[currentSource]}
        alt={`${partner.name} logo`}
        className="max-w-full max-h-full object-contain"
        onError={handleImageError}
        loading="lazy"
      />
    </div>
  );
};

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="pt-8 pb-12 md:pt-8 md:pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Partners
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3 md:mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Across the UAE and Middle East, industry leaders trust West Freight for their logistics needs.
          </p>
        </motion.div>

        {/* Mobile: Grid view, Desktop: Animated horizontal scroll */}
        <div className="relative w-full">
          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden px-2">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-accent/30 hover:shadow-md flex flex-col items-center justify-center gap-4 min-h-[140px] transition-all duration-300"
              >
                <PartnerLogo partner={partner} size="medium" />
                <p className="text-sm font-semibold text-foreground text-center leading-tight">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal scroll with animation */}
          <div className="hidden md:block overflow-hidden">
            {/* Mask fading edges for better visual appeal */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div style={{ x }} className="flex gap-8 justify-center flex-nowrap min-w-max px-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-accent/30 hover:shadow-lg transition-all duration-300 w-[200px] flex flex-col items-center justify-center gap-4 grayscale hover:grayscale-0"
                >
                  <PartnerLogo partner={partner} size="large" />
                  <p className="text-sm font-semibold text-foreground text-center leading-tight">
                    {partner.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Partners;