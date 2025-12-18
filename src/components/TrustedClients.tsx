"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder logos - replace these with your actual client logo files in public/images/
// e.g., "/images/client-1.png"
const clients = [
  "Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"
];

// Duplicate the list to create the seamless infinite scroll effect
const marqueeVariants = {
  animate: {
    x: [0, -1035], // Adjust based on total width of logos
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Speed of the scroll (higher = slower)
        ease: "linear",
      },
    },
  },
};

export default function TrustedClients() {
  return (
    <section className="py-20 bg-[#F0F9FF] overflow-hidden"> {/* Light Blue Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Text Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-red mb-6">
            Trusted by 50+ Clients
          </h2>
          <p className="text-brand-dark text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Brands across industries rely on us for impactful digital marketing and branding results.
          </p>
        </motion.div>

        {/* Infinite Scroll Logo Marquee */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
          {/* Gradient Masks for fade effect on edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#F0F9FF] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#F0F9FF] to-transparent z-10"></div>

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center flex-shrink-0 pr-16"
              variants={marqueeVariants}
              animate="animate"
            >
              {/* We render the list twice to ensure seamless looping */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  {/* Replace this div with an <Image /> tag when you have logo files */}
                  <div className="h-12 w-32 bg-brand-dark/10 rounded-md flex items-center justify-center text-brand-dark font-bold text-sm">
                    {client} Logo
                  </div>
                  
                  {/* Example for real image:
                  <Image 
                    src={`/images/logos/logo-${(index % 6) + 1}.png`} 
                    alt="Client Logo" 
                    width={120} 
                    height={50} 
                    className="object-contain h-12 w-auto"
                  /> 
                  */}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}