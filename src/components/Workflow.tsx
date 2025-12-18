"use client";

import { motion } from "framer-motion";

// Data extracted from your screenshot
const steps = [
  {
    id: "01",
    title: "Vision",
    description: "We begin by understanding your vision, business goals, and market needs to set the right direction.",
  },
  {
    id: "02",
    title: "Validate",
    description: "All ideas, inputs, and strategies are validated to ensure clarity and alignment before execution.",
  },
  {
    id: "03",
    title: "Visualize",
    description: "Our creative team visualizes the concept through appealing designs, UI layouts, and brand-focused graphics.",
  },
  {
    id: "04",
    title: "Verify",
    description: "Developers verify functionality by building a responsive, optimized, and user-friendly website or application.",
  },
  {
    id: "05",
    title: "Version Launch",
    description: "Your project is launched as the final version after testing, optimization, and technical setup.",
  },
  {
    id: "06",
    title: "Victory",
    description: "We deliver results that lead your brand toward victory—ensuring quality, impact, and long-term success.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Workflow() {
  return (
    <section className="py-24 bg-[#F0F9FF]"> {/* Light Blue Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">
            Our Workflow
          </h2>
        </div>

        {/* Workflow Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" // Increased gap-y for floating badges
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-brand-red/20 group"
            >
              {/* Floating Red Number Badge */}
              <div className="absolute -top-6 right-8 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                {step.id}
              </div>

              {/* Content */}
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-brand-red mb-4 group-hover:translate-x-1 transition-transform">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}