"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

// Placeholder Data
const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Director, Advanced Hair Transplant",
    quote: "VG Digital transformed our online presence. Our patient inquiries increased by 200% within just 3 months of launching the new website.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder, Apex Dentistry",
    quote: "The team is incredibly professional and skilled. They understood our brand voice perfectly and delivered a site that truly represents us.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CEO, TechFlow Solutions",
    quote: "From SEO to social media management, they handle everything with precision. Highly recommended for any business looking to scale.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-red mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full opacity-20"></div>
        </div>

        {/* Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="bg-[#F3F4F6] p-8 rounded-2xl relative" // Gray background matching screenshot
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="h-10 w-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {t.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}