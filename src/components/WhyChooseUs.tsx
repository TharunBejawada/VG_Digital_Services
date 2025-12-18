"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Premium Quality Designs",
    content: "We don't use templates. Our design team creates unique, high-end visuals tailored specifically to your brand identity to ensure you stand out from competitors.",
  },
  {
    title: "24/7 Support",
    content: "Your business never stops, and neither do we. Our dedicated support team is available around the clock to address urgent updates or technical queries.",
  },
  {
    title: "Result-Driven Strategies",
    content: "We focus on metrics that matter—leads, sales, and conversions. Every campaign is backed by data analysis to maximize your growth.",
  },
  {
    title: "Best ROI Methods",
    content: "We optimize your budget to ensure every dollar spent brings the highest possible return, cutting wasteful ad spend and focusing on high-intent audiences.",
  },
  {
    title: "Skilled & Experienced Professionals",
    content: "Our team consists of certified Google Ads experts, senior SEO strategists, and award-winning developers with over 5+ years of industry experience.",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text & Accordion */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-red mb-2">
              Why Choose
            </h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-10">
              VG Digital Marketing?
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const isOpen = openIndex === index;

                return (
                  <div 
                    key={index} 
                    className="border-b border-gray-100 last:border-0"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-all duration-300 rounded-lg ${
                        isOpen ? "bg-brand-red text-white" : "bg-gray-50 text-brand-dark hover:bg-gray-100"
                      }`}
                    >
                      <span className="font-bold text-lg">{feature.title}</span>
                      {isOpen ? (
                        <MinusIcon className="h-6 w-6 flex-shrink-0" />
                      ) : (
                        <PlusIcon className="h-6 w-6 flex-shrink-0" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 text-gray-600 leading-relaxed bg-white">
                            {feature.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace with your actual image */}
              <Image
                src="/images/why-choose-team.png"
                alt="Why Choose VG Digital Team"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 50vw, 600px"
              />
              {/* Overlay Gradient for professionalism */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}