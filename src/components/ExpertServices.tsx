"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExpertServices() {
  return (
    <section className="py-20 bg-[#F0F9FF] overflow-hidden"> {/* Matches Core Services background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-8">
              Affordable & Expert Digital Services
            </h2>

            {/* Service 1: Digital Marketing */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-brand-red mb-3">
                Digital Marketing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team specializes in SEO, Google Ads, social media marketing, content marketing, and more—designed to help you attract, engage, and retain customers.
              </p>
            </div>

            {/* Service 2: Web Development */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-brand-red mb-3">
                Web Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build high-performance websites using modern technologies tailored to your industry, audience, and budget.
              </p>
            </div>

            {/* Contact Button */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-brand-red hover:bg-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Circular Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Square container to maintain circular aspect ratio */}
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none lg:w-[500px] lg:h-[500px]">
              <Image
                src="/images/expert-team.png" // Ensure filename is correct
                alt="Expert Digital Services Team"
                fill
                className="rounded-full object-cover shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
              {/* Optional decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-brand-red/10 scale-[1.02] -z-10"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}