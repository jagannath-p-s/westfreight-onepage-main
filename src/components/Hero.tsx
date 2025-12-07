import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-shipping.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 md:pt-40"
    >
      {/* Background image with parallax effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8 md:mb-10 text-balance">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Reliable Trucking and
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-accent block"
              >
                Transportation
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block"
              >
                Services in Dubai.
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-10 md:mb-12 max-w-xl font-medium leading-relaxed"
            >
              Premier logistics solutions for your business success. We deliver your
              cargo safely and on time across UAE, Middle East, and worldwide destinations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <Button variant="hero" size="xl" className="group">
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="bg-primary-foreground/10 backdrop-blur-sm"
                asChild
              >
                <a href="tel:+971543703221">
                  <Phone className="w-5 h-5" />
                  +971 543703221
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12 flex items-center gap-6 text-primary-foreground/60 text-sm"
            >
              
            </motion.div>
          </motion.div>

          {/* Right - Quote form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-navy/90 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl border border-primary-foreground/10">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                  Get a Free Quote
                </h3>
               
              </div>
              <form className="space-y-4">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                />
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  placeholder="Describe your shipping requirements (cargo type, origin, destination, timeline...)"
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                />
                <Button variant="hero" size="lg" className="w-full group mt-2">
                  Request Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
