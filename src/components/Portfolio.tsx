"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Placeholder data - assumes you named images portfolio-1 to portfolio-6
const projects = [
  { id: 1, image: "/images/portfolio-1.png", title: "Medical Services" },
  { id: 2, image: "/images/portfolio-2.png", title: "Dental Care" },
  { id: 3, image: "/images/portfolio-3.png", title: "Healthcare App" },
  { id: 4, image: "/images/portfolio-4.png", title: "Educational Platform" },
  { id: 5, image: "/images/portfolio-5.png", title: "Diagnostic Center" },
  { id: 6, image: "/images/portfolio-6.png", title: "IT Consultancy" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-red mb-6">
            Our Portfolio
          </h2>
          <p className="text-brand-dark font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            We collaborate with brands to elevate their digital presence because we believe:
          </p>
          <p className="mt-4 text-xl md:text-2xl font-bold text-brand-red italic">
            “Great results are built together.”
          </p>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-gray-50"
            >
              {/* Image Container with Aspect Ratio */}
              {/* Aspect ratio allows images of different heights to look uniform, 
                  or remove 'aspect-[3/4]' to let them flow naturally like masonry */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay (Optional: Shows text on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <span className="text-white font-bold text-lg">{project.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More Button */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-bold text-white bg-brand-red rounded-lg shadow-md hover:bg-red-700 transition-all transform hover:-translate-y-1"
          >
            Explore More
          </Link>
        </div>

      </div>
    </section>
  );
}