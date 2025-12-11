import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Shield, CheckCircle, Globe } from "lucide-react";
import { useRef } from "react";

// Real company domains for fetching logos
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
                className="bg-white rounded-xl p-6 shadow-sm border border-border flex flex-col items-center justify-center gap-3 min-h-[140px]"
              >
                <div className="w-20 h-20 relative flex items-center justify-center">
                  <img
                    src={`https://logo.clearbit.com/${partner.domain}?size=256`}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale-0"
                    onError={(e) => {
                      // Fallback if logo fails to load - show company name instead
                      const parent = e.currentTarget.parentElement!;
                      e.currentTarget.style.display = 'none';
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-accent/10 rounded-lg"><span class="text-2xl font-bold text-accent">${partner.name.charAt(0)}</span></div>`;
                    }}
                  />
                </div>
                <p className="text-xs font-semibold text-foreground text-center leading-tight">
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
                  className="bg-white rounded-xl p-6 shadow-sm border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 w-[180px] flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-20 h-20 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <img
                      src={`https://logo.clearbit.com/${partner.domain}?size=128`}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        // Fallback if logo fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerText = partner.name[0];
                      }}
                    />
                  </div>
                  <p className="text-sm font-medium text-foreground/80 text-center leading-tight">
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