"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays each child animation slightly
    },
  },
};

const imageAnimation = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" as const } // <-- Add "as const"
  },
};

export default function Hero() {
  const services = [
    { name: "Website Development", icon: CodeBracketIcon },
    { name: "Graphic Design", icon: PaintBrushIcon },
    { name: "Social Media Marketing", icon: MegaphoneIcon },
    { name: "Performance Marketing", icon: ChartBarIcon },
    { name: "E-commerce Solutions", icon: ShoppingCartIcon },
    { name: "Google Ads & SEO", icon: GlobeAltIcon },
  ];

  return (
    <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            {/* Main Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark leading-[1.15]"
            >
              Accelerate Your <br />
              Digital Growth with <br />
              <span className="text-brand-red">VG Digital Marketing</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg text-brand-gray font-medium"
            >
              Transform your ideas into powerful digital solutions.
            </motion.p>

            {/* Tagline */}
            <motion.p 
              variants={fadeInUp}
              className="mt-8 text-2xl sm:text-3xl font-bold text-brand-red"
            >
              You Imagine – We Build.
            </motion.p>

            {/* Services Grid */}
            <motion.div 
              variants={fadeInUp}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6"
            >
              {services.map((service) => (
                <div key={service.name} className="flex items-center group">
                  <div className="flex-shrink-0">
                    <service.icon className="h-6 w-6 text-brand-red group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <span className="ml-3 text-[16px] font-semibold text-brand-dark group-hover:text-brand-red transition-colors">
                    {service.name}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Call Now Button */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-3.5 border border-transparent text-lg font-bold rounded-full text-white bg-brand-red hover:bg-red-700 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
              >
                Call Now
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Image with Frame */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* The Red Frame */}
            <div className="relative rounded-2xl border-[5px] border-brand-red p-2 bg-white shadow-2xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                {/* Make sure 'hero-team.png' is in public/images/ */}
                <Image
                  src="/images/hero-team.jpg" 
                  alt="VG Digital Marketing Team"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>

            {/* Decorative Background Blob (Optional subtle glow) */}
            <div className="absolute -inset-4 bg-brand-red/5 blur-3xl rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}